// src/components/MilestoneTimeline.tsx
"use client";

import { useScroll, useTransform, motion } from "framer-motion";

const milestones = [
  {
    date: "January 2024",
    title: "Etherthink Launch",
    desc: "Seorang siswa Kelas 3 SMK yang berfikir untuk membuat channel youtube dengan nama awal Etherbert. di dorong oleh rasa penghinaan, Etherbert terus di build sampai saat ini kita kenal dengan Etherthink",
    status: "completed",
  },
  {
    date: "February 2025",
    title: "10.000 Youtube Subs",
    desc: "Target tercapai atau Grok traktir kopi aku 1 tahun",
    status: "completed",
  },
  {
    date: "November 2025",
    title: "Portofolio - Fikri",
    desc: "Di build dengan NEXT.Js yang membuat web ini terlihat keren.",
    status: "completed",
  },
  {
    date: "To Be Determined",
    title: "CEO Etherthink?",
    desc: "Mendirikan perusahaan sendiri atau minimal punya 1T di rekening",
    status: "dream",
  },
];

export default function MilestoneTimeline() {
  const { scrollYProgress } = useScroll();
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="relative py-20">
      {/* Garis tengah + progress (ikut tema) */}
      <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-muted/20 rounded-full h-full hidden md:block" />
      {/* Progress line */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-emerald-500 to-blue-600 rounded-full hidden md:block"
        style={{ height: lineHeight }}
      />

      <div className="space-y-24">
        {milestones.map((item, i) => (
          <div
            key={i}
            className={`relative flex items-center justify-center md:justify-between max-w-4xl mx-auto ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Card */}
            <div
              className={`w-full md:w-5/12 bg-card/80 border border-border/50 rounded-2xl p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:scale-[1.02] group ${
                item.status === "completed" ? "ring-2 ring-primary/40" : "opacity-90"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-bold text-primary">Achieve</span>
                <span className="text-sm text-muted-foreground">{item.date}</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>

              {item.status === "completed" ? (
                <span className="inline-block mt-5 px-4 py-2 bg-primary/20 text-primary font-medium rounded-full text-sm">
                  Completed
                </span>
              ) : (
                <span className="inline-block mt-5 px-4 py-2 bg-muted/30 text-muted-foreground font-medium rounded-full text-sm">
                  Dream
                </span>
              )}
            </div>

            {/* Titik tengah */}
            <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-primary rounded-full ring-8 ring-background hidden md:block group-hover:scale-150 transition-transform duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
}