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
      <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg text-sm text-gray-400 border border-gray-700">
        <FaSpotify className="text-green-400 text-lg" />
        <span className="italic">Not playing anything on Spotify.</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-lg border border-gray-700">
      <img
        src={data.albumImageUrl}
        alt={data.title}
        className="w-14 h-14 rounded ring-2 ring-green-500 ring-offset-2 shadow"
      />
      <div className="text-sm flex flex-col">
        <p className="text-white font-semibold">{data.title}</p>
        <p className="text-gray-400">{data.artist}</p>
        <a
          href={data.songUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:underline text-xs mt-1 transition-all hover:scale-105"
        >
          Listen on Spotify
        </a>
      </div>
    </div>
  );
};

export default NowPlayingComponent;
