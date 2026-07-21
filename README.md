# 🎨 LED IT BE — Landing Page

Landing page desarrollada para **LED IT BE**, un emprendimiento dedicado a la creación de cuadros artesanales de madera con iluminación LED.

El sitio presenta galerías de productos organizadas por categorías, videos, diseño responsive y contacto directo mediante WhatsApp.

## 🌐 Sitio publicado

[Ver sitio en producción](https://dpinkajnni387.cloudfront.net)

## ✨ Funcionalidades

- Galerías de imágenes organizadas por categoría
- Navegación SPA con React Router
- Carga dinámica de imágenes con `import.meta.glob()`
- Sección de videos y reels
- Diseño adaptable a computadoras y dispositivos móviles
- Menú móvil desplegable
- Contacto directo mediante WhatsApp
- Despliegue automatizado mediante un script local

## 🛠️ Tecnologías

- React
- Vite
- JavaScript y JSX
- Tailwind CSS
- React Router
- Amazon S3
- Amazon CloudFront
- AWS CLI
- Git y GitHub

## 📁 Estructura principal

```text
src/
├── images/          # Imágenes organizadas por categoría
├── pages/           # Páginas y galerías
├── videos/          # Videos y reels
├── App.jsx          # Rutas y página principal
├── App.css
├── index.css
└── main.jsx
```

## 🚀 Ejecutar localmente

Clonar el repositorio:

```bash
git clone https://github.com/LautaroJulioArce/leditbe-cuadros-web.git
```

Entrar en la carpeta del proyecto:

```bash
cd leditbe-cuadros-web
```

Instalar las dependencias:

```bash
npm install
```

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en:

```text
http://localhost:5173
```

## 📦 Build de producción

```bash
npm run build
```

Vite genera la versión optimizada del sitio dentro de la carpeta `dist`.

## ☁️ Despliegue en AWS

El proyecto incluye un script de PowerShell que:

1. Genera el build de producción.
2. Sincroniza la carpeta `dist` con Amazon S3.
3. Invalida la caché de Amazon CloudFront.

Para ejecutarlo:

```bash
npm run deploy
```

Es necesario tener AWS CLI instalado y configurado localmente.

## 🏗️ Infraestructura

La infraestructura está administrada con Terraform en un repositorio separado:

[Ver repositorio de infraestructura](https://github.com/LautaroJulioArce/leditbe-static-site-terraform)

La arquitectura utiliza:

```text
Usuario
   ↓
Amazon CloudFront
   ↓
Origin Access Control
   ↓
Bucket privado de Amazon S3
```

## 👤 Autor

**Lautaro Arce**

Proyecto desarrollado como parte de mi portfolio de desarrollo web y cloud.
