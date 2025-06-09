import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const NowPlayingComponent = () => {
  const { data, error } = useSWR('/api/now-playing', fetcher, {
    refreshInterval: 60000,
  });

  if (error) return null;
  if (!data) return null;
  if (!data.isPlaying) {
    return (
      <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg text-sm text-gray-400">
        <span className="italic">Not playing anything on Spotify right now.</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg shadow shadow-blue-500/20">
      <img src={data.albumImageUrl} alt={data.title} className="w-12 h-12 rounded" />
      <div className="text-sm">
        <p className="text-white font-medium">{data.title}</p>
        <p className="text-gray-400">{data.artist}</p>
        <a
          href={data.songUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline text-xs"
        >
          Listen on Spotify
        </a>
      </div>
    </div>
  );
};

export default NowPlayingComponent;