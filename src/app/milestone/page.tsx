// src/app/milestone/page.tsx → OTOMATIS SSR!
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Milestone & Achievement — Fikly $ujud",
  description: "Daftar pencapaian, proyek selesai, dan target masa depan",
};

export default function MilestonePage() {
  // BISA LANGSUNG FETCH DATA DI SINI → SSR!
  // const achievements = await fetch("https://api.github.com/users/soulightric").then(r => r.json())

  return (
    <main className="min-h-screen py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-display mb-8 text-center">
          Milestone
        </h1>
        
        <div className="space-y-12">
          <div className="border-l-4 border-primary pl-8">
            <h2 className="text-3xl font-bold">November 2025</h2>
            <p className="text-muted-foreground">Portfolio v2 dengan SSR, OG Image, dan Power F launched!</p>
          </div>
          
          <div className="border-l-4 border-primary/50 pl-8">
            <h2 className="text-3xl font-bold">Desember 2025</h2>
            <p className="text-muted-foreground">Target: 10k GitHub stars + 3 client freelance</p>
          </div>
        </div>
      </div>
    </main>
  );
}