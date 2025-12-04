export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient simpel */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900 opacity-50" />
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              The Next Etherthink
            </span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-gray-300 font-light">
            Autonomous Intelligence on Blockchain
          </p>
        </div>

        {/* Scroll indicator kecil */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-600 rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-16">
            The Next Etherthink Content
          </h2>

          <div className="text-lg md:text-xl text-gray-400 space-y-8 leading-relaxed">
            <p>
              Kami sedang membangun infrastruktur AI yang benar-benar terdesentralisasi.
            </p>
            <p>
              Bukan lagi model di server pusat, tapi ribuan agen otonom yang hidup, 
              belajar, dan berkolaborasi langsung di blockchain.
            </p>
            <p>
              No middleman. No single point of failure. Pure on-chain intelligence.
            </p>
          </div>

          <div className="mt-20">
            <button className="px-10 py-5 text-lg font-semibold bg-cyan-500 text-black rounded-full hover:bg-cyan-400 transition-colors duration-200">
              Join Waitlist
            </button>
          </div>

          <p className="mt-8 text-gray-500 text-sm">
            Early access opening Q1 2026
          </p>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="py-12 text-center text-gray-600 border-t border-gray-900">
        <p className="text-sm">© 2025 Etherthink. Built with Next.js + Tailwind</p>
      </footer>
    </main>
  );
}