# 🎨 LED IT BE - Landing Page

Cuadros artesanales de madera con iluminación LED. Diseños personalizados de fútbol, anime, música, zen, infantil y más.

**Live:** https://dpinkajnni387.cloudfront.net

---

## 🚀 Inicio Rápido

### Instalación
```bash
npm install
```

### Desarrollo local
```bash
npm run dev
```
Abre http://localhost:5173 en tu navegador.

### Build para producción
```bash
npm run build
```

### Deploy a S3 + CloudFront
```bash
npm run deploy
```
Sube automáticamente a AWS, invalida caché y publica los cambios en ~60 segundos.

---

## 📁 Estructura del Proyecto

```
src/
├── App.jsx                 # Rutas principales y layout
├── pages/
│   ├── GalleryPage.jsx    # Página genérica de galería
│   ├── Category.jsx        # Visor de categoría (importa imágenes dinámicamente)
│   ├── Futbol.jsx
│   ├── Anime.jsx
│   ├── Musica.jsx
│   ├── Zen.jsx
│   ├── Empresas.jsx
│   ├── Decoinfantil.jsx
│   └── VideosReels.jsx    # Galería de reels/videos
├── assets/                 # Archivos estáticos
│   ├── images/            # Imágenes por categoría
│   │   ├── futbol/
│   │   ├── anime/
│   │   ├── musica/
│   │   ├── zen/
│   │   ├── empresas/
│   │   └── decoinfantil/
│   └── index.css
├── videos/                 # Videos/reels (MP4, WebM)
│   └── reel-caballeros-1.MP4
└── main.jsx               # Entry point
```

---

## 🛠️ Tecnologías

- **React 19** — UI dinámica
- **Vite 8** — Build tool rápido
- **Tailwind CSS 4** — Estilos
- **React Router 6** — Navegación SPA
- **AWS S3 + CloudFront** — Hosting y CDN

---

## 📝 Características

- ✅ Galería de categorías con imágenes dinámicas
- ✅ Sección de videos/reels
- ✅ Menú móvil responsivo
- ✅ CTA de WhatsApp flotante
- ✅ Rutas SPA (React Router)
- ✅ Deploy automático a AWS

---

## 🔧 Configuración AWS

- **Bucket S3:** `landing-page-cuadros-led-lautaro`
- **CloudFront Distribution:** `E1BDZM9BEE3CKV`
- **Región:** us-east-1
- **Seguridad:** Bucket privado, acceso solo a través de CloudFront via Origin Access Control

### Requisitos para deploy:
```bash
# AWS CLI configurado con credenciales
aws configure
```

---

## 📸 Agregar Imágenes

1. Coloca las imágenes en `src/images/<categoría>/`
2. El sistema las carga automáticamente via `import.meta.glob()`
3. Haz deploy con `npm run deploy`

### Agregar Videos/Reels

1. Coloca archivos MP4 o WebM en `src/videos/`
2. El script `VideosReels.jsx` los detecta automáticamente
3. Haz deploy

---

## 📱 Cambios Recientes

- ✨ Añadido menú móvil desplegable
- 🎬 Nueva sección de Videos/Reels
- 🔐 Configuración SPA en CloudFront (rutas 403/404 → index.html)
- 🚀 Script de deploy automatizado (`npm run deploy`)
- 🔒 Bucket S3 privado + CloudFront con OAC

---

## 📄 Licencia

Proyecto privado. Solo uso interno.

