import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import Futbol from "./pages/Futbol";
import Anime from "./pages/Anime";
import Musica from "./pages/Musica";
import Zen from "./pages/Zen";
import Empresas from "./pages/Empresas";
import Decoinfantil from "./pages/Decoinfantil";
import VideosReels from "./pages/VideosReels";
import futbolCover from "./images/futbol/1.jpg";
import decoCover from "./images/decoinfantil/1.jpg";
import animeCover from "./images/anime/portada.jpg";
import musicaCover from "./images/musica/portada.jpg";
import zenCover from "./images/zen/portada.jpg";
import empresasCover from "./images/empresas/portada.jpg";
 
// MobileNav component (top-level) to avoid declaring inside JSX
function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden p-2 rounded-md text-white/80 hover:text-white"
        aria-label="Abrir menú"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="block">
          <path d="M3 6h18M3 12h18M3 18h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className={`${open ? 'flex' : 'hidden'} md:hidden absolute top-[72px] right-4 left-4 bg-black/90 border border-white/5 rounded-2xl p-6 z-50 flex-col items-start gap-4`}>
        <a href="#inicio" onClick={() => setOpen(false)} className="w-full text-white/80 hover:text-white">Inicio</a>
        <a href="#categorias" onClick={() => setOpen(false)} className="w-full text-white/80 hover:text-white">Categorías</a>
        <a href="#contacto" onClick={() => setOpen(false)} className="w-full text-white/80 hover:text-white">Redes sociales</a>
        <a href="/videos-reels" onClick={() => setOpen(false)} className="w-full text-white/80 hover:text-white">Videos / Reels</a>
        <a href="https://wa.me/5491170601082" target="_blank" rel="noreferrer" className="w-full inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" className="text-white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.1-.472-.149-.672.15-.198.297-.768.966-.942 1.165-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.298.298-.497.1-.198.05-.372-.025-.521-.075-.149-.672-1.612-.921-2.206-.242-.579-.487-.5-.672-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.075-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.075-.124-.273-.198-.57-.347z"/>
          </svg>
          Cotizar ahora
        </a>
      </div>
    </>
  );
}
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LeditbeLandingPage />} />
      <Route path="/categoria/futbol" element={<Futbol />} />
      <Route path="/categoria/decoinfantil" element={<Decoinfantil />} />
      <Route path="/categoria/anime" element={<Anime />} />
      <Route path="/categoria/musica" element={<Musica />} />
      <Route path="/categoria/zen" element={<Zen />} />
      <Route path="/categoria/empresas" element={<Empresas />} />
      <Route path="/videos-reels" element={<VideosReels />} />
    </Routes>
  );
}

function LeditbeLandingPage() {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Escudos Fútbol",
      slug: "futbol",
      glow: "hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]",
      textGlow: "group-hover:text-blue-400",
      cover: futbolCover,
    },
    {
      title: "Deco infantil",
      slug: "decoinfantil",
      glow: "hover:shadow-[0_0_40px_rgba(34,211,238,0.6)]",
      textGlow: "group-hover:text-cyan-300",
      cover: decoCover,
    },
    {
      title: "Anime",
      slug: "anime",
      glow: "hover:shadow-[0_0_40px_rgba(236,72,153,0.6)]",
      textGlow: "group-hover:text-pink-400",
      cover: animeCover,
    },
    {
      title: "Música",
      slug: "musica",
      glow: "hover:shadow-[0_0_40px_rgba(245,158,11,0.6)]",
      textGlow: "group-hover:text-amber-400",
      cover: musicaCover,
    },
    {
      title: "Zen",
      slug: "zen",
      glow: "hover:shadow-[0_0_40px_rgba(34,197,94,0.6)]",
      textGlow: "group-hover:text-green-400",
      cover: zenCover,
    },
    {
      title: "Comercios",
      slug: "empresas",
      glow: "hover:shadow-[0_0_40px_rgba(34,211,238,0.6)]",
      textGlow: "group-hover:text-cyan-300",
      cover: empresasCover,
    },
  ];

  const openWhatsApp = () => {
    const size = document.getElementById("size")?.value || "";
    const message = document.getElementById("message")?.value || "";
    const text = `Hola! Quiero consultar por un cartel LED personalizado para mi negocio.%0A%0A📏 Medida aproximada del cartel: ${size}%0A%0A📝 Mensaje: ${message}`;
    window.open(`https://wa.me/5491170601082?text=${text}`, "_blank");
  };

  const sendEmail = () => {
    const size = document.getElementById("size")?.value || "";
    const message = document.getElementById("message")?.value || "";
    const subject = encodeURIComponent("Consulta cartel LED personalizado");
    const body = encodeURIComponent(`Hola! Quiero consultar por un cartel LED personalizado para mi negocio.\n\nMedida aproximada del cartel: ${size}\n\nMensaje:\n${message}`);
    window.location.href = `mailto:leditbecuadros@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans scroll-smooth">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-6">
          <a href="#inicio" className="flex items-center gap-4">
            <img src="/logo/logo.png" alt="LEDITBE" className="h-20 md:h-28 object-contain" />
          </a>
          {/* mobile menu toggle */}
          <MobileNav />
          <nav className="hidden md:flex items-center gap-6 text-sm tracking-wide text-white/80">
            <a href="#inicio" className="hover:text-white transition">Inicio</a>
            <a href="#categorias" className="hover:text-white transition">Categorías</a>
            <a href="#contacto" className="hover:text-white transition">Redes sociales</a>
            <a href="/videos-reels" className="hover:text-white transition">Videos / Reels</a>
            <a href="https://wa.me/5491170601082" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white transition hover:bg-white/10">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" className="text-white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.1-.472-.149-.672.15-.198.297-.768.966-.942 1.165-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.298.298-.497.1-.198.05-.372-.025-.521-.075-.149-.672-1.612-.921-2.206-.242-.579-.487-.5-.672-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.075-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.075-.124-.273-.198-.57-.347z"/>
                <path d="M12.004 2.001C6.48 2.001 2 6.48 2 12.002c0 2.094.627 4.04 1.708 5.673L2 22l4.477-1.662A9.941 9.941 0 0012.004 22C17.528 22 22 17.522 22 12c0-5.523-4.472-9.999-9.996-9.999zm0 18.001c-1.71 0-3.302-.5-4.667-1.357l-.334-.199-2.659.99.895-2.593-.217-.336A7.967 7.967 0 014.004 12.003c0-4.411 3.588-8 8-8 4.412 0 8 3.589 8 7.999 0 4.411-3.588 8-8 8z"/>
              </svg>
              Cotizar ahora
            </a>
          </nav>
        </div>
      </header>

 

      {/* HERO */}
      <section id="inicio" className="relative min-h-[85vh] pt-28 pb-16 flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="max-w-4xl text-center relative z-10">
          <p className="uppercase tracking-[0.5em] text-sm text-white/40 mb-6">conoce nuestro arte</p>
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8">
            <span className="text-white/20">Cuadros <span className="led-glow text-[#fff8eb]">LED</span></span>
            <br />
            <span className="text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.45)]">que encienden tu espacio</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Cuadros artesanales de madera con iluminación LED y estética moderna. Diseños de futbol, animé, música, deco zen e infantil y personalizados para negocios
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-left">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50 mb-3">Deportes</p>
              <p className="text-white/80 text-sm">Escudos de fútbol, siluetas de Messi y Maradona, diseños con nombre personalizado, escudos NBA y más.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-left">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50 mb-3">Música</p>
              <p className="text-white/80 text-sm">Logos de bandas y cuadros que laten con ritmo y estilo propio. Figuras iluminadas de guitarra y notas musicales.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-left">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50 mb-3">Anime</p>
              <p className="text-white/80 text-sm">Dragon Ball, One Piece, Naruto, Saint Seiya y las sagas que amás.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-left">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50 mb-3">Zen</p>
              <p className="text-white/80 text-sm">Ambientes serenos con iluminación suave y minimalista.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-left">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50 mb-3">Deco infantil</p>
              <p className="text-white/80 text-sm">Diseños tiernos y coloridos para crear espacios de impacto visual en chicos.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-left">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50 mb-3">Comercios</p>
              <p className="text-white/80 text-sm">Carteles personalizados para elevar el impacto visual de tu marca.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section id="categorias" className="max-w-7xl mx-auto px-6 py-28">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-4">Galería por categorías</h2>
          <p className="text-white/50 max-w-2xl mx-auto">Explorá distintas temáticas y descubrí estilos únicos de cuadros LED.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => navigate(`/categoria/${category.slug}`)}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition duration-500 cursor-pointer ${category.glow}`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />
              <img src={category.cover} alt={category.title} className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700" />
              <div className="absolute bottom-0 left-0 z-20 p-8 w-full">
                <h3 className={`text-3xl font-light tracking-wide text-white/20 transition duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] ${category.textGlow}`}>
                  {category.title}
                </h3>
                <p className="text-white/60 mt-3 text-sm leading-relaxed">Ver colección</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DECO INFANTIL */}
      <section id="deco-infantil" className="py-28 px-6 border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="uppercase tracking-[0.4em] text-xs text-cyan-300 mb-5">Empresas & Comercios</p>
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
              Impacto visual<br />
              <span className="text-cyan-300 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]">para tu marca</span>
            </h2>
            <p className="text-white/60 leading-relaxed text-lg mb-8">
              Diseños a medida para todas las actividades. Podés enviar tu logo y las medidas deseadas para recibir un presupuesto sin cargo.
            </p>
            <div className="space-y-4 text-white/70">
              <p>📩 Correo: <span className="text-white">leditbecuadros@gmail.com</span></p>
              <p>📱 WhatsApp: <span className="text-white">11 7060-1082</span></p>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md p-8 shadow-[0_0_50px_rgba(34,211,238,0.08)]">
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-white/60 mb-2">Subir logo (JPG / PNG)</label>
                <label htmlFor="logoUpload" className="flex items-center justify-between w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70 cursor-pointer hover:border-cyan-300 transition">
                  Seleccionar archivo
                </label>
                <input id="logoUpload" type="file" className="hidden" />
              </div>
              <div>
                <label className="block text-sm text-white/60 mb-2">Medida aproximada del cartel</label>
                <input id="size" type="text" placeholder="Medida aproximada del cartel" className="w-full rounded-xl border border-white/10 bg-white/5 p-3 outline-none focus:border-cyan-300" />
              </div>
              <div>
                <label className="block text-sm text-white/60 mb-2">Mensaje</label>
                <textarea id="message" rows="5" placeholder="Contame cómo te gustaría que sea tu cartel" className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none focus:border-cyan-300" />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={openWhatsApp} className="flex-1 rounded-xl bg-green-500/10 border border-green-500/30 py-4 hover:bg-green-500/20 transition hover:shadow-[0_0_25px_rgba(34,197,94,0.35)]">
                  Enviar por WhatsApp
                </button>
                <button onClick={sendEmail} className="flex-1 rounded-xl bg-cyan-500/10 border border-cyan-500/30 py-4 hover:bg-cyan-500/20 transition hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]">
                  Enviar por Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="max-w-6xl mx-auto px-6 py-28 text-center">
        <p className="uppercase tracking-[0.5em] text-xs text-white/40 mb-5">Redes sociales & contacto</p>
        <h2 className="text-4xl md:text-5xl font-light mb-10">Hablemos de tu próximo cuadro LED</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="https://instagram.com/leditbe_cuadros" target="_blank" className="px-6 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-pink-500/10 hover:border-pink-500/30 transition">Instagram</a>
          <a href="https://ar.pinterest.com/leditbecuadros/" target="_blank" className="px-6 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-red-500/10 hover:border-red-500/30 transition">Pinterest</a>
          <a href="mailto:leditbecuadros@gmail.com" className="px-6 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-cyan-500/10 hover:border-cyan-500/30 transition">Email</a>
          <a href="https://wa.me/5491170601082" target="_blank" className="px-6 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-green-500/10 hover:border-green-500/30 transition">WhatsApp</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 px-6 text-center text-white/40 text-sm">
        <p>© 2026 LEDITBE Cuadros LED · Ramos Mejía, Buenos Aires · Todos los derechos reservados.</p>
      </footer>

      {/* WHATSAPP FLOTANTE */}
      <a href="https://wa.me/5491170601082" target="_blank" rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-50 w-15 h-15 rounded-full bg-[#111] border border-green-400/30 flex items-center justify-center shadow-[0_0_25px_rgba(34,197,94,0.35)] hover:scale-110 hover:shadow-[0_0_35px_rgba(34,197,94,0.6)] transition-all duration-300 backdrop-blur-md">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-8 h-8" />
      </a>
    </div>
  );
}