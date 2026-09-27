# Free Youth

Sitio estático en Astro. El contenido editable se guarda en GitHub: Pages CMS lee `.pages.yml` y cada guardado crea un commit. El workflow `.github/workflows/deploy.yml` reconstruye y despliega la web en GitHub Pages al recibir cambios en la rama predeterminada.

## Desarrollo

```bash
pnpm install
pnpm dev
pnpm build
pnpm check
```

## Contenidos

- `src/content/blog`: artículos Markdown. Solo se muestran si `published: true`.
- `src/content/agenda`: actividades Markdown. Solo se muestran si `published: true`.
- `src/content/pages`: páginas informativas editables.
- `src/data/site.json`: datos globales, portada, lugar, horario y redes.
- `public/uploads`: imágenes subidas desde Pages CMS.

Blog y agenda empiezan vacíos deliberadamente. No se han inventado publicaciones, actividades ni testimonios.

## Pages CMS y permisos

1. En [Pages CMS](https://app.pagescms.org/), iniciar sesión con GitHub.
2. Instalar su GitHub App **solo** en `eydermoises94-pixel/Free-Youth` y abrir el repositorio. La configuración se cargará desde `.pages.yml`.
3. Dar permisos de escritura en GitHub únicamente a las cuentas editoras autorizadas. No invitar colaboradores de Pages CMS por correo si se quiere exigir una cuenta GitHub.
4. Mantener el panel fuera de la navegación pública. La web no incluye ruta de administración ni credenciales.
5. En Settings → Pages del repositorio, seleccionar **GitHub Actions** como origen. El workflow se activa con cada commit de la rama predeterminada. Confirmar en Actions que el primer despliegue termina correctamente.

La autorización real de cuentas y la instalación de la GitHub App se administran en GitHub/Pages CMS, no se pueden imponer únicamente con un archivo del sitio. La configuración local prepara los contenidos y los commits, pero hay que comprobar el guardado y el despliegue en vivo tras instalar la app.

**Imágenes de jóvenes:** publicar solo después de confirmar autorización de las personas retratadas. La imagen abstracta de la portada no representa a Free Youth.

Para una URL de proyecto de GitHub Pages, el workflow establece `BASE_PATH` con el nombre del repositorio. Si se conecta un dominio propio, habrá que cambiar ese valor a `/` y configurar `SITE_URL` y DNS.
