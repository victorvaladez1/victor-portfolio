import React from 'react';

const GitHubStats = () => (
  <div className="text-white text-center px-4">
    <h2 className="text-2xl font-bold mb-4">GitHub Stats</h2>

    <div className="bg-[#111827] p-4 rounded-2xl border border-gray-700 shadow-lg shadow-green-500/10 hover:shadow-green-500/30 transition duration-300 w-full max-w-2xl mx-auto space-y-4">
      <img
        src="https://github-readme-stats.vercel.app/api?username=victorvaladez1&show_icons=true&theme=github_dark&hide_border=true&hide_rank=true"
        alt="GitHub Stats"
        className="w-full max-w-sm mx-auto"
      />
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=victorvaladez1&layout=compact&theme=github_dark&hide_border=true"
        alt="Top Languages"
        className="w-full max-w-sm mx-auto"
      />
    </div>
  </div>
);

export default GitHubStats;