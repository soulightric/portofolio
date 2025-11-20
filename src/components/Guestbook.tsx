"use client";

import { useState, useEffect, useOptimistic, useRef } from "react";
import { submitGuestbook } from "@/app/actions";
import { motion } from "framer-motion";

type Message = {
  id: string;
  name: string;
  message: string;
  createdAt: string;
};

export default function Guestbook() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(messages);
  const formRef = useRef<HTMLFormElement>(null);

  // Load messages pertama kali
  useEffect(() => {
    fetch("/api/guestbook")
      .then(r => r.json())
      .then(data => setMessages(data));
  }, []);

  async function handleSubmit(formData: FormData) {
    const name = formData.get("name") as string;
    const message = formData.get("message") as string;

    if (!name.trim() || !message.trim()) return;

    // Optimistic update (langsung muncul)
    addOptimisticMessage([
      ...messages,
      {
        id: "temp-" + Date.now(),
        name,
        message,
        createdAt: new Date().toISOString(),
      },
    ]);

    formRef.current?.reset();

    // Kirim ke server
    const result = await submitGuestbook(formData);
    if (result.success) {
      setMessages(prev => [...prev, result.data]);
    }
  }

  return (
    <div className="space-y-8">
      {/* Form */}
      <form
        ref={formRef}
        action={handleSubmit}
        className="bg-black/60 border-2 border-emerald-600 rounded-xl p-6 backdrop-blur"
      >
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <input
            name="name"
            placeholder="Nama kamu (atau nickname)"
            required
            maxLength={32}
            className="px-4 py-3 bg-black/40 border border-emerald-600 rounded-lg text-white placeholder-emerald-700 focus:outline-none focus:border-emerald-400"
          />
          <input
            name="message"
            placeholder="Pesan buat Fikri Sujud..."
            required
            maxLength={200}
            className="px-4 py-3 bg-black/40 border border-emerald-600 rounded-lg text-white placeholder-emerald-700 focus:outline-none focus:border-emerald-400"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-black font-bold rounded-lg hover:from-emerald-500 hover:to-emerald-400 transition shadow-lg"
        >
          TINGGALKAN JEJAK
        </button>
      </form>

      {/* Messages List */}
      <div className="space-y-4">
        {optimisticMessages.length === 0 ? (
          <p className="text-center text-emerald-600 py-12">Belum ada yang ninggalin jejak... jadilah yang pertama!</p>
        ) : (
          optimisticMessages.slice().reverse().map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-black/50 border border-emerald-800/50 rounded-xl p-5 backdrop-blur"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="font-bold text-emerald-400">{msg.name}</span>
                <span className="text-xs text-emerald-600">
                {new Date(msg.created_at || msg.createdAt).toLocaleDateString("id-ID", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
              </div>
              <p className="text-white">{msg.message}</p>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}