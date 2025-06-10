import useSWR from 'swr';
import { FaSpotify } from 'react-icons/fa';

const fetcher = (url) => fetch(url).then((res) => res.json());

const NowPlayingComponent = () => {
  const { data, error } = useSWR('/api/now-playing', fetcher, {
    refreshInterval: 60000,
  });

  if (error || !data) return null;

  if (!data.isPlaying) {
    return (
      <div className="flex items-center gap-4 p-4 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400 rounded-lg text-sm border border-gray-300 dark:border-gray-700 transition-colors duration-300">
        <FaSpotify className="text-green-500 dark:text-green-400 text-lg" />
        <span className="italic">Not playing anything on Spotify.</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 p-4 bg-white text-black dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900 dark:text-white rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 transition-colors duration-300">
      <img
        src={data.albumImageUrl}
        alt={data.title}
        className="w-14 h-14 rounded ring-2 ring-green-500 ring-offset-2 shadow"
      />
      <div className="text-sm flex flex-col">
        <p className="font-semibold">{data.title}</p>
        <p className="text-gray-600 dark:text-gray-400">{data.artist}</p>
        <a
          href={data.songUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 dark:text-green-400 hover:underline text-xs mt-1 transition-all hover:scale-105"
        >
          Listen on Spotify
        </a>
      </div>
    </div>
  );
};

export default NowPlayingComponent;
