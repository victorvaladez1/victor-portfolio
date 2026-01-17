import { useEffect, useMemo, useState } from "react";

export default function WakaTimeStats() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open || data || loading) return;

    (async () => {
      try {
        setLoading(true);
        const r = await fetch("/api/wakatime");
        const j = await r.json();
        if (!r.ok) throw new Error(j?.error || "Failed to load WakaTime");
        setData(j);
      } catch (e) {
        setErr(e?.message || "Failed to load WakaTime");
      } finally {
        setLoading(false);
      }
    })();
  }, [open, data, loading]);

  const summary = useMemo(() => {
    if (!data?.data) return null;

    let totalSeconds = 0;
    const langSeconds = new Map();

    for (const day of data.data) {
      totalSeconds += day?.grand_total?.total_seconds || 0;
      for (const l of day?.languages || []) {
        langSeconds.set(l.name, (langSeconds.get(l.name) || 0) + (l.total_seconds || 0));
      }
    }

    const topLangs = [...langSeconds.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, sec]) => ({ name, sec }));

    const fmt = (sec) => {
      const h = Math.floor(sec / 3600);
      const m = Math.round((sec % 3600) / 60);
      return `${h}h ${m}m`;
    };

    return {
      total: fmt(totalSeconds),
      topLangs: topLangs.map((x) => ({ name: x.name, time: fmt(x.sec) })),
    };
  }, [data]);

  return (
    <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-6 text-left">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between"
        aria-expanded={open}
      >
        <div>
          <h3 className="text-lg font-semibold tracking-tight">Coding Activity (WakaTime)</h3>
          <p className="text-sm text-black/60 dark:text-white/60">
            Last 7 days — personal tracking.
          </p>
        </div>
        <span className="text-sm opacity-70">{open ? "Hide" : "Show"}</span>
      </button>

      {open && (
        <div className="mt-5">
          {err && <p className="text-sm text-red-500">{err}</p>}

          {!err && loading && (
            <p className="text-sm text-black/60 dark:text-white/60">Loading…</p>
          )}

          {!err && summary && (
            <>
              <div className="flex items-baseline justify-between">
                <p className="text-sm text-black/60 dark:text-white/60">Total (7 days)</p>
                <p className="text-xl font-semibold">{summary.total}</p>
              </div>

              <div className="mt-4">
                <p className="text-sm text-black/60 dark:text-white/60 mb-2">Top languages</p>
                <div className="space-y-2">
                  {summary.topLangs.map((l) => (
                    <div key={l.name} className="flex justify-between text-sm">
                      <span className="opacity-90">{l.name}</span>
                      <span className="opacity-70">{l.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-4 text-xs text-black/50 dark:text-white/50">
                WakaTime depends on editor plugins; time can be imperfect.
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
