import React from 'react';

const GitHubStats = () => {
  const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const statsTheme = isDark ? 'github_dark' : 'default';

  return (
    <div className="bg-white text-black dark:bg-[#111827] dark:text-white p-6 rounded-lg transition-colors duration-300">
      <h2 className="text-2xl font-bold mb-4 text-center">GitHub Stats</h2>

      <div className="bg-gray-100 text-black dark:bg-[#0d1117] dark:text-white p-4 rounded-2xl border border-gray-300 dark:border-gray-700 shadow-lg shadow-green-500/10 hover:shadow-green-500/30 transition duration-300 w-full max-w-2xl mx-auto space-y-4">
        <img
          src={`https://github-readme-stats.vercel.app/api?username=victorvaladez1&show_icons=true&theme=${statsTheme}&hide_border=true&hide_rank=true`}
          alt="GitHub Stats"
          className="w-full max-w-sm mx-auto"
        />
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=victorvaladez1&layout=compact&theme=${statsTheme}&hide_border=true`}
          alt="Top Languages"
          className="w-full max-w-sm mx-auto"
        />
      </div>
    </div>
  );
};

export default GitHubStats;
