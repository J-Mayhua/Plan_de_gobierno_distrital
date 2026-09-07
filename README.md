# Plan de Gobierno Distrital de Paucará

Sitio web del **Plan de Gobierno Distrital de Paucará 2027-2030**. Presenta los ejes de trabajo, programas, metas, prioridades, seguimiento, fuentes y documentos del plan de forma clara y navegable.

Es una aplicación estática: el contenido vive en archivos TypeScript dentro de `src/data`, sin base de datos ni servidor backend.

## Tecnologías

- React 19 y TypeScript
- Vite
- Tailwind CSS 4
- React Router
- Lucide React para iconos
- Oxlint para revisión estática

## Instalación y desarrollo

Desde la carpeta del proyecto:

```bash
npm install
npm run dev
```

La aplicación estará disponible normalmente en `http://localhost:5173`.

## Comandos

```bash
npm run dev       # Servidor de desarrollo
npm run build     # Comprueba TypeScript y genera producción
npm run preview   # Sirve el build localmente
npx oxlint src    # Revisa únicamente el código fuente
```

## Secciones del sitio

| Ruta | Contenido |
| --- | --- |
| `/` | Inicio, presentación y visión |
| `/el-plan` | Diagnóstico, metodología y principios |
| `/ejes` | Los seis ejes de trabajo |
| `/ejes/:ejeId` | Programas agrupados por eje |
| `/propuestas/:propuestaId` | Ficha detallada de cada programa |
| `/metas` | Cronograma 2027-2030 e indicadores |
| `/prioridades` | Nueve intervenciones prioritarias |
| `/transparencia` | Seguimiento, riesgos y primeros 100 días |
| `/documentos` | PDF del plan y fuentes bibliográficas |

## Estructura principal

```text
src/
├── components/          # Layout, tarjetas, estados e imágenes
├── data/                # Contenido estructurado del plan
├── pages/               # Vistas de la aplicación
├── types/               # Tipos TypeScript
├── App.tsx              # Rutas principales
└── main.tsx              # Entrada de React

public/
├── imagenes/            # Imágenes locales opcionales
└── documentos/          # PDF y anexos descargables
```

## Datos del plan

- `src/data/ejes.ts`: seis ejes, objetivos e imágenes temáticas.
- `src/data/propuestas.ts`: programas, acciones, indicadores y metas.
- `src/data/plan-meta.ts`: presentación, visión, misión y diagnóstico.
- `src/data/indicadores.ts`: cronograma, indicadores y riesgos.
- `src/data/prioridades.ts`: cartera preliminar y financiamiento.
- `src/data/fuentes.ts`: referencias bibliográficas.

Los programas reutilizan automáticamente la imagen de su eje. Solo se necesitan seis imágenes, no una por programa.

## Imágenes

Las imágenes actuales están configuradas en `src/data/ejes.ts`. Para usar fotografías propias de Paucará, reemplaza esas URLs por archivos locales como:

```text
public/imagenes/ejes/produccion-economia.jpg
public/imagenes/ejes/vias-conectividad.jpg
public/imagenes/ejes/agua-saneamiento.jpg
public/imagenes/ejes/educacion-salud-juventud.jpg
public/imagenes/ejes/seguridad-convivencia.jpg
public/imagenes/ejes/municipalidad-digital.jpg
```

Consulta [public/imagenes/README.md](public/imagenes/README.md) para conocer las rutas disponibles.

## PDF del plan

Para activar el botón **Descargar plan completo**, coloca el archivo en:

```text
public/documentos/plan-gobierno-paucara-2027-2030.pdf
```

## Criterios de contenido

La web organiza el documento técnico en fichas y secciones independientes para facilitar su consulta. Antes de cambiar una propuesta, cifra o fuente, verifica que el cambio coincida con el documento técnico original.

## Build de producción

```bash
npm run build
```

El resultado se genera en `dist/` y puede desplegarse en un servicio de hosting estático como Netlify, Vercel o GitHub Pages.
