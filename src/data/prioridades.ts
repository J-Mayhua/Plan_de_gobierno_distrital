import type { Prioridad } from '../types';

// Cartera preliminar de intervenciones prioritarias.
// El documento aclara: "no constituye una relación de obras garantizadas".
export const prioridades: Prioridad[] = [
  {
    intervencion: 'Fortalecimiento agropecuario',
    problema: 'Baja productividad/capacidades',
    primerPaso: 'Línea base y padrón',
    resultadoEsperado: 'Productores atendidos y capacidades fortalecidas',
    programaId: 'fortalecimiento-agropecuario',
  },
  {
    intervencion: 'Riego y gestión hídrica',
    problema: 'Limitaciones productivas de agua',
    primerPaso: 'Inventario y priorización',
    resultadoEsperado: 'Proyectos de riego viables priorizados',
    programaId: 'riego-gestion-agua',
  },
  {
    intervencion: 'Semilla de papa',
    problema: 'Disponibilidad y calidad de semilla',
    primerPaso: 'Diagnóstico de oferta/demanda',
    resultadoEsperado: 'Programa de semilla de calidad',
    programaId: 'semilla-papa-calidad',
  },
  {
    intervencion: 'Cadena de papa nativa',
    problema: 'Bajo valor agregado',
    primerPaso: 'Diagnóstico de mercado',
    resultadoEsperado: 'Mayor articulación comercial',
    programaId: 'cadena-valor-papa-nativa',
  },
  {
    intervencion: 'Vías productivas',
    problema: 'Acceso limitado a chacras',
    primerPaso: 'Inventario vial',
    resultadoEsperado: 'Tramos priorizados y financiados',
    programaId: 'accesos-productivos-vias-vecinales',
  },
  {
    intervencion: 'Agua potable',
    problema: 'Continuidad y gestión',
    primerPaso: 'Diagnóstico integral',
    resultadoEsperado: 'Mejora progresiva del servicio',
    programaId: 'agua-potable',
  },
  {
    intervencion: 'Ordenamiento territorial',
    problema: 'Crecimiento sin planificación',
    primerPaso: 'Diagnóstico y catastro',
    resultadoEsperado: 'Instrumentos territoriales fortalecidos',
    programaId: 'ordenamiento-territorial',
  },
  {
    intervencion: 'Municipalidad digital',
    problema: 'Trámites lentos',
    primerPaso: 'Mapeo de procesos',
    resultadoEsperado: 'Menores tiempos de atención',
    programaId: 'municipalidad-digital',
  },
  {
    intervencion: 'Seguridad',
    problema: 'Puntos críticos e iluminación',
    primerPaso: 'Mapa de riesgos/puntos críticos',
    resultadoEsperado: 'Prevención y espacios más seguros',
    programaId: 'seguridad-preventiva',
  },
];

export interface FilaFinanciamiento {
  intervencion: string;
  tipo: string;
  fuenteMunicipal: string;
  fuenteExterna: string;
  costo: 'Por determinar'; // El documento no fija montos; se conserva literal.
}

// Matriz de financiamiento. Nota del documento: no se establece un monto
// global ficticio para el periodo 2027-2030; cada intervención requiere
// una ficha financiera propia antes de comprometerse.
export const matrizFinanciamiento: FilaFinanciamiento[] = [
  {
    intervencion: 'Agro y asistencia técnica',
    tipo: 'Actividad/programa',
    fuenteMunicipal: 'Presupuesto municipal según disponibilidad',
    fuenteExterna: 'Programas sectoriales y convenios',
    costo: 'Por determinar',
  },
  {
    intervencion: 'Riego',
    tipo: 'Inversión',
    fuenteMunicipal: 'Según programación',
    fuenteExterna: 'Gobierno Regional/sector competente',
    costo: 'Por determinar',
  },
  {
    intervencion: 'Vías productivas',
    tipo: 'Inversión',
    fuenteMunicipal: 'Según programación',
    fuenteExterna: 'Gobierno Regional/entidades competentes',
    costo: 'Por determinar',
  },
  {
    intervencion: 'Agua potable',
    tipo: 'Servicio/inversión',
    fuenteMunicipal: 'Según competencia y programación',
    fuenteExterna: 'Gobierno Regional/sector competente',
    costo: 'Por determinar',
  },
  {
    intervencion: 'Feria',
    tipo: 'Servicio/inversión',
    fuenteMunicipal: 'Recursos municipales',
    fuenteExterna: 'Cofinanciamiento si corresponde',
    costo: 'Por determinar',
  },
  {
    intervencion: 'Turismo',
    tipo: 'Inversión/actividad',
    fuenteMunicipal: 'Según viabilidad',
    fuenteExterna: 'Sector competente/cofinanciamiento',
    costo: 'Por determinar',
  },
  {
    intervencion: 'Digitalización',
    tipo: 'Actividad/inversión',
    fuenteMunicipal: 'Presupuesto institucional',
    fuenteExterna: 'Cooperación/convenios si corresponde',
    costo: 'Por determinar',
  },
];
