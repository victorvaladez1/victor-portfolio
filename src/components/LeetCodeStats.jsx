import { useEffect, useState } from "react";

export default function LeetCodeStats({ username }) {
  const [data, setData] = useState(null);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const r = await fetch(`/api/leetcode?username=${encodeURIComponent(username)}`);
        const j = await r.json();
        if (!r.ok) throw new Error(j?.error || "Failed to load LeetCode stats");
        setData(j);
      } catch (e) {
        setErr(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [username]);

  if (loading) return <p className="text-sm opacity-70">Loading…</p>;
  if (err) return <p className="text-sm text-red-500">{err}</p>;

  const user = data?.data?.matchedUser;
  const nums = user?.submitStatsGlobal?.acSubmissionNum || [];
  const get = (d) => nums.find((x) => x.difficulty === d)?.count ?? 0;

  return (
    <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-6 text-left">
      <h3 className="text-lg font-semibold tracking-tight">LeetCode</h3>
      <p className="text-sm text-black/60 dark:text-white/60 mb-4">@{user?.username}</p>

      <div className="grid grid-cols-3 gap-3 text-sm">
        <div className="rounded-xl border border-black/10 dark:border-white/10 p-3">
          <p className="opacity-60">Easy</p>
          <p className="text-xl font-semibold">{get("Easy")}</p>
        </div>
        <div className="rounded-xl border border-black/10 dark:border-white/10 p-3">
          <p className="opacity-60">Medium</p>
          <p className="text-xl font-semibold">{get("Medium")}</p>
        </div>
        <div className="rounded-xl border border-black/10 dark:border-white/10 p-3">
          <p className="opacity-60">Hard</p>
          <p className="text-xl font-semibold">{get("Hard")}</p>
        </div>
      </div>

      <p className="mt-4 text-xs opacity-60">
        Data pulled from LeetCode profile. Cached for performance.
      </p>
    </div>
  );
}
