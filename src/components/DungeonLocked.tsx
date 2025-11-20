"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function DungeonLocked() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6">
      {/* Background gradient merah gelap + hitam */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-black to-purple-950" />
      <div className="absolute inset-0 bg-black/80" />

      {/* Red glow overlay */}
      <div className="absolute inset-0 bg-red-900/20" />

      {/* Konten */}
      <div
        className="relative z-10 text-center max-w-4xl mx-auto"
      >

        {/* Text */}
        <h1 className="text-4xl md:text-6xl font-black text-red-500 tracking-tighter mb-6 drop-shadow-2xl">
          UNDER CONTRUCTION
        </h1>

        <p className="text-2xl md:text-4xl text-red-400 mb-4 font-medium">
          Gate will open soon...
        </p>

        <p className="text-sm md:text-base text-gray-500 mb-10">
          Estimated opening: <span className="text-red-400 font-bold">Soon™</span>
        </p>

        {/* Back button */}
        <Link
          href="/"
          className="inline-block px-5 py-2 bg-red-600/90 hover:bg-red-500 text-white text-xl font-medium rounded-full transition-all duration-300 shadow-2xl hover:shadow-red-500/50 border-2 border-red-400"
        >
          ← Return to Safe Zone
        </Link>
      </div>
    </div>
  );
}