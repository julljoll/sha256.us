# sha256.us — Portal y Laboratorio de Informática Forense Digital

> **Portal Oficial de Informática Forense Digital & Peritajes Judiciales**  
> Dirección Técnica y Especialista Líder: **Jull ([jull.sha256.us](https://jull.sha256.us))**  
> Evidencia digital con validez judicial garantizada bajo **ISO/IEC 27037**, **ISO/IEC 27042**, **NIST SP 800** y **MUCC-2017**.  
> Construido con **Astro 7**, **USWDS (U.S. Web Design System)** y **Tailwind CSS v4**.

---

## 🏛️ Identidad Corporativa y Respaldo Profesional

- **Firma / Laboratorio:** `sha256.us` (Empresa de informática forense, diagnóstico de dispositivos por consignación y dictámenes periciales).
- **Perito Líder y Fundador:** Jull — [https://jull.sha256.us](https://jull.sha256.us)
- **Perfil de Servicios Compartidos:** Tanto `sha256.us` como `jull.sha256.us` convergen en los mismos servicios de alta especialización:
  1. Informática Forense y Dictámenes Periciales Judiciales con defensa en audiencias.
  2. Extracción y Certificación de Dispositivos Móviles (WhatsApp, Telegram, audios, metadatos).
  3. Diagnóstico por Consignación y Recuperación en Unidades de Almacenamiento (HDD, SSD, NVMe, RAID).
  4. Peritaje de Contratos Digitales, Firmas Electrónicas y Cabeceras de Correo.
  5. Cadena de Custodia Criptográfica Inviolable con cálculo de resúmenes hash SHA-256.

---

## 📁 Estructura Optimizada del Proyecto

```text
sha256.us-1/
├── public/                     ← Archivos estáticos servidos en la raíz del hosting
│   ├── .htaccess               ← Configuración Apache/cPanel (HTTPS, compresión, caché, cabeceras)
│   ├── robots.txt              ← Indexación para buscadores
│   ├── favicon.ico / .png / .svg
│   ├── logo-head.svg / .png
│   └── logo-footer.png
│
├── src/
│   ├── assets/                 ← Imágenes optimizadas automáticamente por Astro
│   │   └── blog-placeholder-*.jpg
│   │
│   ├── components/             ← Componentes reutilizables
│   │   ├── BaseHead.astro      ← SEO corporativo + Schema.org JSON-LD (Org + Person)
│   │   ├── Header.astro        ← Cabecera institucional + Banner oficial
│   │   ├── Footer.astro        ← Pie de página con normas y enlaces a jull.sha256.us
│   │   ├── HeroCarousel.astro  ← Carrusel con jerarquía semántica H1 única
│   │   ├── BlogCard.astro      ← Tarjeta centralizada para artículos del blog
│   │   ├── HeaderLink.astro    ← Enlace de navegación con estado activo
│   │   └── FormattedDate.astro ← Formateador de fechas en español (es-VE)
│   │
│   ├── content/
│   │   └── blog/               ← Artículos técnicos en Markdown (.md / .mdx)
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro    ← Layout maestro HTML5 para todas las páginas
│   │   └── BlogPost.astro      ← Layout especializado para artículos del blog
│   │
│   ├── pages/
│   │   ├── index.astro         ← Inicio (Hero + Servicios + Respaldo jull.sha256.us + Blog)
│   │   ├── servicios.astro     ← Servicios Forenses Especializados
│   │   ├── about.astro         ← Sobre la empresa y el perito fundador
│   │   ├── contacto.astro      ← Formulario funcional directo a WhatsApp y Email
│   │   ├── 404.astro           ← Página de error 404 personalizada
│   │   ├── rss.xml.js          ← Feed RSS institucional
│   │   └── blog/
│   │       ├── index.astro     ← Listado completo de artículos
│   │       └── [...slug].astro ← Ruta dinámica de artículos
│   │
│   ├── styles/
│   │   └── global.css          ← Estilos globales (USWDS + Tailwind v4)
│   │
│   └── consts.ts               ← Constantes corporativas (sha256.us & jull.sha256.us)
│
├── .github/workflows/
│   └── checks.yml              ← Verificación automática de compilación (CI)
├── astro.config.mjs            ← Configuración de Astro
├── package.json                ← Dependencias mínimas esenciales
└── README.md
```

---

## 🧞 Comandos de Desarrollo

| Comando | Acción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo local en `http://localhost:4321` |
| `npm run build` | Compila el sitio estático optimizado para producción en `./dist/` |
| `npm run preview` | Previsualiza localmente el build compilado |

---

## 🚀 Despliegue en cPanel (`sha256.us`)

El sitio genera archivos estáticos puros (SSG), lo que permite un rendimiento ultra rápido en servidores compartidos o dedicados con cPanel / Apache:

1. Ejecuta la compilación de producción:
   ```bash
   npm run build
   ```
2. Accede al **Administrador de Archivos de cPanel** de `sha256.us`.
3. Navega al directorio público:
   ```text
   public_html/
   ```
4. Sube y extrae la totalidad del contenido generado dentro de la carpeta `dist/` (incluyendo `index.html`, las carpetas de secciones, la carpeta `_astro/`, `robots.txt` y el archivo `.htaccess`).
5. El archivo `.htaccess` configurará de inmediato:
   - Redirección obligatoria a `https://`.
   - Página de error `404.html`.
   - Caché inmutable por 1 año para archivos estáticos en `_astro/`.
   - Compresión GZIP / Deflate para carga instantánea.
   - Cabeceras de seguridad HTTP (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`).

---

## 📞 Canales de Contacto

- **Web Corporativa:** [https://sha256.us](https://sha256.us)
- **Perfil Perito Principal:** [https://jull.sha256.us](https://jull.sha256.us)
- **Email:** [soporte@sha256.us](mailto:soporte@sha256.us)
- **WhatsApp:** [+57 316 3931945](https://wa.me/573163931945)
- **Sede:** Av. 6 con Calle 7, Edif. Mercantil La Ceiba, 1er Piso, Ofic. N° 8, Quíbor, Lara, Venezuela.
