export default function GalleryPage({ title, imageList, onBack }) {
  return (
    <div className="min-h-screen bg-[#050505] text-white">

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-6">
          <button
            onClick={onBack}
            className="text-white/60 hover:text-white transition text-sm flex items-center gap-2"
          >
            ← Volver
          </button>
          <span className="text-white/20">|</span>
          <span className="text-white/80 text-sm tracking-wide">{title}</span>
        </div>
      </header>

      {/* CONTENIDO */}
      <div className="pt-28 px-6 pb-20 max-w-7xl mx-auto">
        <h1 className="text-5xl font-light mb-4">{title}</h1>
        <p className="text-white/40 mb-12 text-sm">
          {imageList.length} trabajo{imageList.length !== 1 ? "s" : ""}
        </p>

        {imageList.length === 0 ? (
          <div className="text-center py-32 text-white/30">
            <p className="text-2xl mb-4">Próximamente</p>
            <p className="text-sm">Estamos cargando los trabajos de esta categoría.</p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {imageList.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${title} ${index + 1}`}
                className="w-full rounded-2xl border border-white/10 shadow-[0_0_25px_rgba(255,255,255,0.05)] hover:scale-[1.02] hover:border-white/20 transition-all duration-300"
              />
            ))}
          </div>
        )}
      </div>

      {/* WHATSAPP FLOTANTE */}
      <a
        href="https://wa.me/5491170601082"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-50 w-15 h-15 rounded-full bg-[#111] border border-green-400/30 flex items-center justify-center shadow-[0_0_25px_rgba(34,197,94,0.35)] hover:scale-110 hover:shadow-[0_0_35px_rgba(34,197,94,0.6)] transition-all duration-300 backdrop-blur-md"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </a>
    </div>
  );
}