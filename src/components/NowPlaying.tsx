"use client";

import useSWR from "swr";
import { Music, Headphones } from "lucide-react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function NowPlaying() {
  const { data, error } = useSWR("/api/spotify", fetcher, {
    refreshInterval: 5000, // update tiap 5 detik
  });

  if (error || !data?.isPlaying) {
    return (
      <div className="flex items-center gap-2 text-gray-500">
        <Headphones className="w-4 h-4" />
        <span className="text-xs">Not playing • Spotify</span>
      </div>
    );
  }

  return (
    <a
      href={data.songUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:text-green-400 transition"
    >
      <Music className="w-4 h-4 text-green-500" />
      <span className="text-xs truncate max-w-48 text-gray-700 dark:text-gray-300">
        {data.title} — {data.artist}
      </span>
    </a>
  );
}