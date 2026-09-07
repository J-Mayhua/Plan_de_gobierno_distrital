# Cómo agregar tus imágenes

Coloca tus archivos con estos nombres exactos y aparecerán automáticamente en
la web. Si un archivo no existe, la interfaz conserva un espacio reservado.

## Portada de Inicio

`public/imagenes/hero/portada.jpg`

Se recomienda una foto panorámica de Paucará, de al menos 1600x900 px.

## Banner de cada eje

Puedes reemplazar las imágenes temáticas remotas configuradas en `src/data/ejes.ts`
por fotografías propias guardadas como `public/imagenes/ejes/{id-del-eje}.jpg`.
Las fotos remotas son referencias visuales por tema, no afirmaciones de que la
imagen corresponda físicamente a Paucará.

IDs válidos:

- `produccion-economia.jpg`
- `vias-conectividad.jpg`
- `agua-saneamiento.jpg`
- `educacion-salud-juventud.jpg`
- `seguridad-convivencia.jpg`
- `municipalidad-digital.jpg`

## Imágenes de los programas

Los programas heredan automáticamente la imagen del eje al que pertenecen.
No necesitas agregar una foto por cada programa: basta con configurar o
reemplazar las seis imágenes de los ejes indicadas arriba.

## Portada y PDF del plan

- `public/imagenes/documentos/portada-plan.jpg`
- `public/documentos/plan-gobierno-paucara-2027-2030.pdf`
