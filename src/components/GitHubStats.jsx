import { useEffect, useMemo, useState } from "react";

const USERNAME = "victorvaladez1";
// const chartUrl = `https://ghchart.rshah.org/${USERNAME}`;

export default function GitHubStats() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]); // recently updated (top)
  const [allRepos, setAllRepos] = useState([]); // all repos for stats
  const [status, setStatus] = useState("loading"); // loading | success | error

  const profileUrl = useMemo(
    () => `https://api.github.com/users/${USERNAME}`,
    []
  );

  const reposUrl = useMemo(
    () => `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`,
    []
  );

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      try {
        setStatus("loading");

        const [pRes, rRes] = await Promise.all([
          fetch(profileUrl),
          fetch(reposUrl),
        ]);

        if (!pRes.ok) throw new Error("Failed to load GitHub profile");
        if (!rRes.ok) throw new Error("Failed to load GitHub repos");

        const p = await pRes.json();
        const r = await rRes.json();

        if (cancelled) return;

        const arr = Array.isArray(r) ? r : [];

        // Recently updated repos (top 3, not forks)
        const top = arr.filter((repo) => !repo.fork).slice(0, 3);

        setProfile(p);
        setAllRepos(arr);
        setRepos(top);
        setStatus("success");
      } catch (e) {
        if (cancelled) return;
        console.error(e);
        setStatus("error");
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [profileUrl, reposUrl]);

  const stats = useMemo(() => buildRepoStats(allRepos), [allRepos]);

  if (status === "loading") {
    return (
      <div className="max-w-3xl mx-auto text-center">
        <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur p-6">
          <p className="text-sm opacity-70">Loading GitHub…</p>
        </div>
      </div>
    );
  }

  if (status === "error" || !profile) {
    return (
      <div className="max-w-3xl mx-auto text-center">
        <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur p-6">
          <p className="text-sm opacity-70">Couldn’t load GitHub data right now.</p>
          <div className="pt-4">
            <a
              href={`https://github.com/${USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-medium
                         bg-black text-white hover:opacity-90
                         dark:bg-white dark:text-black dark:hover:opacity-90
                         transition hover:-translate-y-0.5"
            >
              Open GitHub →
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto text-black dark:text-white">
      <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">
        GitHub
      </h2>

      <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur p-6 transition">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <img
            src={profile.avatar_url}
            alt={`${USERNAME} avatar`}
            className="w-16 h-16 rounded-full border border-black/10 dark:border-white/10"
          />

          <div className="flex-1 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <p className="text-lg font-semibold leading-tight">
                  {profile.name || USERNAME}
                </p>
                <p className="text-sm opacity-70">@{USERNAME}</p>
              </div>

              <a
                href={profile.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-medium
                           bg-black text-white hover:opacity-90
                           dark:bg-white dark:text-black dark:hover:opacity-90
                           transition hover:-translate-y-0.5"
              >
                Explore GitHub →
              </a>
            </div>

            {profile.bio && (
              <p className="text-sm mt-3 opacity-80 leading-relaxed">
                {profile.bio}
              </p>
            )}

            {/* Primary stats */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              <Stat label="Followers" value={profile.followers} />
              <Stat label="Repos" value={profile.public_repos} />
              <Stat label="Following" value={profile.following} />
            </div>

            {/* NEW: repo-derived stats */}
            <div className="mt-3 grid grid-cols-3 gap-3">
              <Stat label="Stars" value={stats.totalStars} />
              <Stat label="Forks" value={stats.totalForks} />
              <Stat label="Top Language" value={stats.topLanguage || "—"} />
            </div>

            {/* NEW: highlight most-starred repo */}
            {stats.mostStarred && (
              <div className="mt-4 rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-4">
                <p className="text-xs opacity-70">Most starred repo</p>
                <a
                  href={stats.mostStarred.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-2 font-semibold text-sm hover:underline underline-offset-4"
                >
                  {stats.mostStarred.name}
                  <span className="text-xs opacity-70">
                    ★ {stats.mostStarred.stargazers_count}
                  </span>
                </a>
                {stats.mostStarred.description && (
                  <p className="text-xs opacity-70 mt-1">
                    {stats.mostStarred.description}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Contributions */}
          <div className="mt-4 rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-medium opacity-80">Contributions</p>
              <a
                href={`https://github.com/${USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs opacity-70 hover:opacity-100 hover:underline underline-offset-4"
              >
                View on GitHub →
              </a>
            </div>

            <div className="mt-3 overflow-x-auto">
              <img
                src={`https://ghchart.rshah.org/${USERNAME}`}
                alt={`${USERNAME} GitHub contributions chart`}
                loading="lazy"
                className="h-[120px] w-auto"
              />
            </div>

            <p className="mt-2 text-xs opacity-60">
              Tip: scroll horizontally on mobile.
            </p>
          </div>

        {/* Divider */}
        <div className="my-6 h-px w-full bg-black/10 dark:bg-white/10" />

        {/* Recent repos */}
        <div>
          <p className="text-sm font-medium opacity-80 mb-3">Recently updated</p>

          <div className="grid gap-3">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-black/10 dark:border-white/10
                           bg-white/60 dark:bg-white/5 px-4 py-3 text-left
                           hover:border-black/20 dark:hover:border-white/20 transition"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-sm group-hover:underline underline-offset-4">
                      {repo.name}
                    </p>
                    <p className="text-xs opacity-70 mt-1">
                      {repo.description || "No description yet."}
                    </p>
                  </div>

                  {repo.language && (
                    <span
                      className="shrink-0 text-xs rounded-full px-2.5 py-1
                                 border border-black/10 dark:border-white/10
                                 opacity-80"
                    >
                      {repo.language}
                    </span>
                  )}
                </div>

                <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs opacity-60">
                  <span>Updated {formatRelative(repo.updated_at)}</span>
                  <span>★ {repo.stargazers_count}</span>
                  <span>⑂ {repo.forks_count}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const Stat = ({ label, value }) => (
  <div className="rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-3 text-center">
    <p className="text-base font-semibold">{value ?? "—"}</p>
    <p className="text-xs opacity-70 mt-0.5">{label}</p>
  </div>
);

function buildRepoStats(repos) {
  const arr = Array.isArray(repos) ? repos : [];
  const nonForks = arr.filter((r) => !r.fork);

  let totalStars = 0;
  let totalForks = 0;

  const langCount = new Map();
  let mostStarred = null;

  for (const r of nonForks) {
    totalStars += r.stargazers_count || 0;
    totalForks += r.forks_count || 0;

    if (r.language) {
      langCount.set(r.language, (langCount.get(r.language) || 0) + 1);
    }

    if (!mostStarred || (r.stargazers_count || 0) > (mostStarred.stargazers_count || 0)) {
      mostStarred = r;
    }
  }

  let topLanguage = null;
  let best = 0;
  for (const [lang, count] of langCount.entries()) {
    if (count > best) {
      best = count;
      topLanguage = lang;
    }
  }

  return {
    totalStars,
    totalForks,
    topLanguage,
    mostStarred: mostStarred && (mostStarred.stargazers_count || 0) > 0 ? mostStarred : null,
  };
}

function formatRelative(iso) {
  try {
    const d = new Date(iso);
    const diff = Date.now() - d.getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 60) return `${mins}m ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs}h ago`;
    const days = Math.floor(hrs / 24);
    if (days < 30) return `${days}d ago`;
    const months = Math.floor(days / 30);
    if (months < 12) return `${months}mo ago`;
    const years = Math.floor(months / 12);
    return `${years}y ago`;
  } catch {
    return "recently";
  }
}
