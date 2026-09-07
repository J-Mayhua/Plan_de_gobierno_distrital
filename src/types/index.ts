/**
 * Tipos del contenido del Plan de Gobierno Distrital de Paucará 2027-2030.
 * Estos tipos reflejan fielmente la estructura del documento fuente (LaTeX).
 * No se agregan campos que impliquen inventar datos: si el documento no
 * define un valor (costo, cifra, plazo exacto), el campo debe quedar
 * como `undefined` o dentro de `pendientes`, nunca con un valor inventado.
 */

/** Nivel de certeza/validación de un dato, tal como lo trata el documento fuente. */
export type EstadoDato =
  | 'definido' // El documento presenta el dato como propuesta concreta y accionable.
  | 'en_diagnostico' // Requiere línea base, inventario o diagnóstico previo.
  | 'por_determinar' // El documento usa expresamente "\pendiente".
  | 'coordinacion_intergubernamental'; // El documento usa expresamente "\gestion".

export interface MetaPeriodo {
  periodo: string; // Ej: "2027", "2028", "2029-2030"
  descripcion: string;
}

export interface Programa {
  id: string; // slug único, ej. "fortalecimiento-agropecuario"
  ejeId: string;
  numero: number; // Número de "Programa N" en el documento
  titulo: string;
  problema?: string;
  objetivo: string;
  acciones: string[]; // "¿Cómo se implementaría?"
  indicadores: string[];
  metas: MetaPeriodo[];
  financiamiento?: string; // Solo si el documento lo define explícitamente
  pendientes: string[]; // Condiciones/datos antes de ejecutar
  notaCorreccion?: string; // Ej. "se elimina como compromiso automático..."
  estado: EstadoDato;
  referencias?: string[]; // ids de fuentes citadas (bibliografía)
}

export interface Eje {
  id: string;
  numero: number;
  titulo: string;
  objetivoEstrategico: string;
  icono: string; // nombre de ícono (lucide-react)
  imagen: string; // imagen temática remota, reemplazable por una foto local de Paucará
  colorAcento?: string;
}

export interface Prioridad {
  intervencion: string;
  problema: string;
  primerPaso: string;
  resultadoEsperado: string;
  programaId?: string; // enlaza a Programa si existe ficha detallada
}

export interface IndicadorNivel {
  nivel: 'gestion' | 'producto' | 'resultado';
  titulo: string;
  descripcion: string;
  ejemplos: string[];
}

export interface FuenteBibliografica {
  id: string;
  autor: string;
  titulo: string;
  url?: string;
}

export interface EtapaCronograma {
  lineaAccion: string;
  '2027': string;
  '2028': string;
  '2029': string;
  '2030': string;
}
