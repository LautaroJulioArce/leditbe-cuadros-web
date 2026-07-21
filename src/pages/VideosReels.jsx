import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

const videos = import.meta.glob('/src/videos/*.{mp4,MP4,webm,WEBM}', {
  eager: true,
  import: 'default',
});

export default function VideosReels() {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const videoList = Object.values(videos);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(() => {
        // Autoplay with sound may be blocked by the browser.
      });
    }
  }, [videoList]);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-6">
          <button
            onClick={() => navigate('/')}
            className="text-white/60 hover:text-white transition text-sm flex items-center gap-2"
          >
            ← Volver
          </button>
          <span className="text-white/20">|</span>
          <span className="text-white/80 text-sm tracking-wide">Videos / Reels</span>
        </div>
      </header>

      <main className="pt-28 px-6 pb-20 max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="text-5xl font-light mb-4">Videos / Reels</h1>
        </div>

        {videoList.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-14 text-center text-white/60">
            <p className="text-2xl font-light mb-4">No hay reels cargados todavía</p>
            <p>Subí tus reels a <span className="text-cyan-300">src/videos</span> para que aparezcan en esta sección.</p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {videoList.map((video, index) => (
              <div key={index} className="rounded-3xl overflow-hidden border border-white/10 bg-black/40 shadow-[0_0_40px_rgba(255,255,255,0.06)]">
                <div className="w-full aspect-[9/16] bg-black">
                  <video
                    ref={index === 0 ? videoRef : null}
                    autoPlay
                    controls
                    playsInline
                    preload="metadata"
                    muted={false}
                    src={video}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

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
