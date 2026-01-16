import useSWR from 'swr';
import { FaSpotify } from 'react-icons/fa';

const fetcher = (url) => fetch(url).then((res) => res.json());

const NowPlayingComponent = () => {
  const { data } = useSWR('/api/now-playing', fetcher, {
    refreshInterval: 60000,
  });

  if (!data) return null;
  
  if (!data.isPlaying) {
    return (
      <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur text-sm text-gray-600 dark:text-gray-400">
        <FaSpotify className="text-green-500" />
        <span className="italic tracking-wide">Not playing anything</span>
      </div>
    );
  }

  return (
    <div className="group flex items-center gap-4 px-4 py-3 rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur shadow-sm hover:shadow-md transition-all duration-300">
      
      {/* Album Art */}
      <img
        src={data.albumImageUrl}
        alt={data.title}
        className="w-14 h-14 rounded-lg object-cover grayscale group-hover:grayscale-0 transition duration-300"
      />

      {/* Song Info */}
      <div className="flex flex-col text-sm leading-tight">
        <span className="font-medium tracking-tight">
          {data.title}
        </span>
        <span className="text-gray-600 dark:text-gray-400 text-xs">
          {data.artist}
        </span>

        <a
          href={data.songUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 hover:text-green-500 transition"
        >
          <FaSpotify className="text-green-500" />
          Open in Spotify
        </a>
      </div>
    </div>
  );
};

export default NowPlayingComponent;
