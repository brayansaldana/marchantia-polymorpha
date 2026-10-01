# Sitio web — Marchantia polymorpha

Página estática preparada para publicar gratis con GitHub Pages.

## Estructura
- `index.html`: contenido.
- `styles.css`: diseño responsive.
- `script.js`: galería, tarjetas y modelos 3D.
- `assets/images/`: fotografías.
- `assets/models/`: modelos `.glb`/`.gltf`.

## Cómo cargar las fotos
Copia las fotografías con estos nombres dentro de `assets/images/`:

`A.jpg B.jpg C.jpg D.jpg E.jpg F.jpg G.jpg H.jpg I.jpg J.jpg`

Además:
- `esporofito-inmaduro.jpg`
- `esporofito-maduro.jpg`
- `esporas.jpg`
- `hero.jpg` (opcional)

## Cómo cargar modelos 3D
Copia los modelos con estos nombres dentro de `assets/models/`:

- `talo.glb`
- `anteridióforo.glb`
- `arquegonióforo.glb`
- `esporofito.glb`

Si usas otro formato o nombre, modifica `script.js`.

## Publicación gratis con GitHub Pages
1. Crea una cuenta en GitHub.
2. Crea un repositorio público, por ejemplo `marchantia-polymorpha`.
3. Sube todo el contenido de esta carpeta al repositorio.
4. En GitHub: Settings → Pages → Deploy from a branch → `main` → `/root`.
5. GitHub te entregará una dirección similar a `https://TUUSUARIO.github.io/marchantia-polymorpha/`.
6. Usa esa dirección para generar el QR del póster.

## Nota
El visor 3D utiliza `<model-viewer>` desde un CDN público. El sitio funciona como página estática; no requiere base de datos ni servidor propio.
