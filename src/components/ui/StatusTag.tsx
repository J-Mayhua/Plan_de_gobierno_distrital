import type { EstadoDato } from '../../types';

const ESTADO_CONFIG: Record<EstadoDato, { label: string; className: string }> = {
  definido: {
    label: 'Propuesta definida',
    className: 'bg-[#E7F0E4] text-[#2F5233] border-[#C3D9BD]',
  },
  en_diagnostico: {
    label: 'Requiere diagnóstico o línea base',
    className: 'bg-[#FDF3DC] text-[#8A5A00] border-[#F3DFA6]',
  },
  por_determinar: {
    label: 'Por determinar',
    className: 'bg-[#F3E7EA] text-[#8A1030] border-[#E7C4CE]',
  },
  coordinacion_intergubernamental: {
    label: 'Gestión intergubernamental',
    className: 'bg-[#E5EBF4] text-[#0E4E98] border-[#C6D5EA]',
  },
};

export function StatusTag({ estado }: { estado: EstadoDato }) {
  const config = ESTADO_CONFIG[estado];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-sm border px-2.5 py-1 text-xs font-medium ${config.className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
      {config.label}
    </span>
  );
}

export function estadoDescripcionLarga(estado: EstadoDato): string {
  switch (estado) {
    case 'definido':
      return 'El plan presenta esta propuesta como una línea de acción concreta a ejecutar.';
    case 'en_diagnostico':
      return 'Antes de fijar una meta o cifra final, se requiere un diagnóstico, inventario o línea base.';
    case 'por_determinar':
      return 'El costo, la cantidad o la infraestructura exacta aún no están definidos en el plan.';
    case 'coordinacion_intergubernamental':
      return 'Depende de la coordinación con otra entidad o nivel de gobierno; no es ejecución municipal directa.';
  }
}
