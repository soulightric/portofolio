// src/components/StatusDashboard.tsx
"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

export default function StatusDashboard() {
  const [uptime, setUptime] = useState(0);
  const [currentSong, setCurrentSong] = useState("Not playing");
  const [mood, setMood] = useState("Focused");

  // Uptime counter (dari 1 Jan 2025)
  useEffect(() => {
    const start = new Date("2024-01-01").getTime();
    const update = () => {
      const now = Date.now();
      const days = Math.floor((now - start) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((now - start) / (1000 * 60 * 60)) % 24;
      setUptime(`${days}d ${hours}h`);
    };
    update();
    const interval = setInterval(update, 3600000); // update tiap jam
    return () => clearInterval(interval);
  }, []);

  // Fake Spotify (ganti pake Lanyard nanti kalau mau real)
  const moods = ["Focused", "Grinding", "In the zone", "Unstoppable", "Night owl mode"];
  useEffect(() => {
    const interval = setInterval(() => {
      setMood(moods[Math.floor(Math.random() * moods.length)]);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const statusItems = [
    { label: "Portfolio", status: "operational", color: "bg-emerald-500" },
    { label: "Guestbook", status: "operational", color: "bg-emerald-500" },
    { label: "Matrix Rain", status: "operational", color: "bg-emerald-500" },
    { label: "Power F Core", status: "critical", color: "bg-red-500" },
    { label: "Coffee Level", status: "low", color: "bg-yellow-500" },
  ];

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Uptime */}
      <div className="bg-background/50 border border-emerald-800/50 rounded-2xl p-8 backdrop-blur">
        <h3 className="text-xl font-bold text-emerald-400 mb-4">Uptime</h3>
        <p className="text-5xl font-black text-white">{uptime}</p>
        <p className="text-sm text-gray-400 mt-2">Since Jan 1, 2025</p>
      </div>

      {/* Current Mood */}
      <div className="bg-background/50 border border-emerald-800/50 rounded-2xl p-8 backdrop-blur">
        <h3 className="text-xl font-bold text-emerald-400 mb-4">Current State</h3>
        <p className="text-3xl font-black text-white">{mood}</p>
        <Badge variant="outline" className="mt-4 border-emerald-600 text-emerald-400">
          Live
        </Badge>
      </div>

      {/* System Status */}
      <div className="bg-background/50 border border-emerald-800/50 rounded-2xl p-8 backdrop-blur md:col-span-2 lg:col-span-1">
        <h3 className="text-xl font-bold text-emerald-400 mb-6">System Status</h3>
        <div className="space-y-4">
          {statusItems.map((item) => (
            <div key={item.label} className="flex items-center justify-between">
              <span className="text-gray-300">{item.label}</span>
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${item.color} animate-pulse`} />
                <span className="text-sm font-medium capitalize text-gray-400">
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Spotify (fake dulu) */}
      <div className="bg-background/50 border border-emerald-800/50 rounded-2xl p-8 backdrop-blur md:col-span-2 lg:col-span-3">
        <h3 className="text-xl font-bold text-emerald-400 mb-4">Now Playing</h3>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-lg animate-pulse" />
          <div>
            <p className="text-xl font-bold text-white">Idol</p>
            <p className="text-gray-400">YOASOBI</p>
          </div>
        </div>
      </div>
    </div>
  );
}