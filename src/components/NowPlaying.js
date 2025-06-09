import { useEffect, useState } from "react";

export default function NowPlaying() {
  const [track, setTrack] = useState(null);

  useEffect(() => {
    fetch("/api/now-playing")
      .then(res => res.json())
      .then(data => setTrack(data));
  }, []);

  if (!track?.isPlaying) return null;

  return (
    <div className="mt-4 flex items-center gap-4 bg-gray-800 p-4 rounded-lg">
      <img src={track.albumImageUrl} alt="Album cover" className="w-12 h-12 rounded" />
      <div className="text-sm text-gray-300">
        <p className="font-semibold text-white">{track.title}</p>
        <p>{track.artist}</p>
        <a href={track.songUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
          Listen on Spotify
        </a>
      </div>
    </div>
  );
}
