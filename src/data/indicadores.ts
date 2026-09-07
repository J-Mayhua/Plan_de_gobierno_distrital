import type { IndicadorNivel, EtapaCronograma } from '../types';

export const sistemaIndicadores: IndicadorNivel[] = [
  {
    nivel: 'gestion',
    titulo: 'Indicadores de gestión',
    descripcion: 'Miden si se realizó una actividad.',
    ejemplos: [
      'Número de capacitaciones',
      'Convenios vigentes',
      'Expedientes elaborados',
      'Diagnósticos culminados',
    ],
  },
  {
    nivel: 'producto',
    titulo: 'Indicadores de producto',
    descripcion: 'Miden bienes o servicios entregados.',
    ejemplos: [
      'Kilómetros mejorados',
      'Cámaras operativas',
      'Fuentes protegidas',
      'Trámites digitalizados',
      'Productores atendidos',
    ],
  },
  {
    nivel: 'producto',
    titulo: 'Indicadores de resultado',
    descripcion: 'Miden cambios derivados de la intervención. Sus metas se fijarán únicamente cuando exista línea base suficiente.',
    ejemplos: [
      'Mejora de continuidad del agua',
      'Reducción de tiempos de atención',
      'Aumento de volumen comercializado',
      'Mejora de productividad en grupos intervenidos',
      'Mejora de transitabilidad',
      'Satisfacción ciudadana',
    ],
  },
];

// Cronograma general 2027-2030 (transcrito literalmente de la tabla del documento)
export const cronograma: EtapaCronograma[] = [
  { lineaAccion: 'Agro', '2027': 'Línea base', '2028': 'Programa ampliado', '2029': 'Seguimiento', '2030': 'Evaluación' },
  { lineaAccion: 'Riego', '2027': 'Inventario', '2028': 'Formulación/priorización', '2029': 'Ejecución según cartera', '2030': 'Funcionamiento' },
  { lineaAccion: 'Papa nativa', '2027': 'Mercado/organización', '2028': 'Marca y articulación', '2029': 'Infraestructura viable', '2030': 'Consolidación comercial' },
  { lineaAccion: 'Vías', '2027': 'Inventario', '2028': 'Expedientes/priorización', '2029': 'Ejecución según financiamiento', '2030': 'Continuidad' },
  { lineaAccion: 'Agua', '2027': 'Diagnóstico', '2028': 'Fortalecimiento', '2029': 'Inversiones priorizadas', '2030': 'Evaluación' },
  { lineaAccion: 'Ordenamiento', '2027': 'Diagnóstico', '2028': 'Catastro', '2029': 'Instrumentos', '2030': 'Consolidación' },
  { lineaAccion: 'Juventud', '2027': 'Convenios', '2028': 'Programas', '2029': 'Ampliación', '2030': 'Evaluación' },
  { lineaAccion: 'Seguridad', '2027': 'Mapa de puntos críticos', '2028': 'Iluminación/cámaras', '2029': 'Coordinación', '2030': 'Evaluación' },
  { lineaAccion: 'Digitalización', '2027': 'Mapeo de trámites', '2028': 'Mesa virtual', '2029': 'Ampliación', '2030': 'Evaluación' },
];

export interface RiesgoPlan {
  riesgo: string;
  efecto: string;
  medidaPreventiva: string;
  indicadorControl: string;
}

export const matrizRiesgos: RiesgoPlan[] = [
  { riesgo: 'Insuficiente presupuesto', efecto: 'Retraso de proyectos', medidaPreventiva: 'Priorización y cofinanciamiento', indicadorControl: 'Ejecución presupuestal' },
  { riesgo: 'Falta de estudios', efecto: 'Proyectos inviables', medidaPreventiva: 'Diagnóstico previo', indicadorControl: 'Estudios culminados' },
  { riesgo: 'Dependencia de otras entidades', efecto: 'Retrasos', medidaPreventiva: 'Convenios y seguimiento', indicadorControl: 'Compromisos formalizados' },
  { riesgo: 'Falta de operación/mantenimiento', efecto: 'Infraestructura sin servicio', medidaPreventiva: 'Modelo operativo previo', indicadorControl: 'Activos operativos' },
  { riesgo: 'Baja organización productiva', efecto: 'Bajo uso de infraestructura', medidaPreventiva: 'Fortalecimiento organizacional', indicadorControl: 'Organizaciones activas' },
  { riesgo: 'Cambio climático', efecto: 'Pérdidas productivas', medidaPreventiva: 'Gestión de riesgos y agua', indicadorControl: 'Intervenciones preventivas' },
  { riesgo: 'Problemas de datos', efecto: 'Metas incorrectas', medidaPreventiva: 'Línea base', indicadorControl: 'Indicadores validados' },
];
