import { useEffect, useMemo, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

export default function WakaTimeStats() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        setLoading(true);
        const r = await fetch("/api/wakatime");
        const j = await r.json();
        if (!r.ok) throw new Error(j?.error || "Failed to load WakaTime");
        if (!cancelled) setData(j);
      } catch (e) {
        if (!cancelled) setErr(e?.message || "Failed to load WakaTime");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const summary = useMemo(() => {
    if (!data?.data) return null;

    let totalSeconds = 0;
    const langSeconds = new Map();

    for (const day of data.data) {
      totalSeconds += day?.grand_total?.total_seconds || 0;
      for (const l of day?.languages || []) {
        langSeconds.set(
          l.name,
          (langSeconds.get(l.name) || 0) + (l.total_seconds || 0)
        );
      }
    }

    const topLangs = [...langSeconds.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([name, seconds]) => ({ name, seconds }));

    const fmt = (sec) => {
      const h = Math.floor(sec / 3600);
      const m = Math.round((sec % 3600) / 60);
      if (h <= 0) return `${m}m`;
      return `${h}h ${m}m`;
    };

    return {
      total: fmt(totalSeconds),
      topLangs,
      fmt,
    };
  }, [data]);

  const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload?.length || !summary) return null;
    const seconds = payload[0].value;

    return (
      <div className="rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-black px-3 py-2 text-sm shadow-lg">
        <p className="font-semibold">{label}</p>
        <p className="opacity-80">{summary.fmt(seconds)}</p>
      </div>
    );
  };

  return (
    <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-6 text-left">
      <div className="mb-5">
        <h3 className="text-lg font-semibold tracking-tight">
          Coding Activity (WakaTime)
        </h3>
        <p className="text-sm text-black/60 dark:text-white/60">
          Last 7 days — personal tracking.
        </p>
      </div>

      {err && <p className="text-sm text-red-500">{err}</p>}

      {!err && loading && (
        <p className="text-sm text-black/60 dark:text-white/60">Loading…</p>
      )}

      {!err && summary && (
        <>
          <div className="flex items-baseline justify-between mb-4">
            <p className="text-sm text-black/60 dark:text-white/60">
              Total (7 days)
            </p>
            <p className="text-2xl font-semibold">{summary.total}</p>
          </div>

          <p className="text-sm text-black/60 dark:text-white/60 mb-2">
            Top languages
          </p>

          {/* Chart */}
          <div className="h-52 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={summary.topLangs}
                layout="vertical"
                margin={{ top: 4, right: 16, left: 8, bottom: 4 }}
              >
                <XAxis type="number" hide />
                <YAxis
                  type="category"
                  dataKey="name"
                  width={90}
                  tick={{ fontSize: 12 }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="seconds" fill="#d1d5db" radius={[8, 8, 8, 8]}>
                  {summary.topLangs.map((_, idx) => (
                    <Cell key={`cell-${idx}`} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Text list (nice for quick skim + accessibility) */}
          <div className="mt-4 space-y-2">
            {summary.topLangs.map((l) => (
              <div key={l.name} className="flex justify-between text-sm">
                <span className="opacity-90">{l.name}</span>
                <span className="opacity-70">{summary.fmt(l.seconds)}</span>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs text-black/50 dark:text-white/50">
            WakaTime depends on editor plugins; time can be imperfect.
          </p>
        </>
      )}
    </div>
  );
}
