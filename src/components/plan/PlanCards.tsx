import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Eje, Programa } from '../../types';
import { getEjeById } from '../../data/ejes';
import { getEjeIcon } from './ejeIcons';

export function EjeCard({ eje }: { eje: Eje }) {
  const Icon = getEjeIcon(eje.icono);
  return (
    <Link
      to={`/ejes/${eje.id}`}
      className="group overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-linea)] bg-white transition-colors hover:border-[var(--color-azul)]"
    >
      <div
        className="relative flex h-32 items-end bg-[var(--color-azul)] bg-cover bg-center p-4"
        style={{
          backgroundImage: `linear-gradient(rgba(10,58,115,0.18), rgba(10,58,115,0.82)), url('${eje.imagen}')`,
        }}
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-white/15 text-white backdrop-blur-sm">
          <Icon size={21} />
        </span>
        <span className="ml-3 font-display text-xs font-bold text-white/85">Eje {eje.numero}</span>
      </div>
      <div className="flex flex-col p-6">
        <h3 className="font-display text-lg font-bold text-[var(--color-tinta)]">{eje.titulo}</h3>
        <p className="mt-2 flex-1 text-sm text-[var(--color-tinta-suave)]">{eje.objetivoEstrategico}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-azul)] group-hover:underline">
          Ver programas
          <ArrowRight size={15} />
        </span>
      </div>
    </Link>
  );
}

export function ProgramaCard({ programa }: { programa: Programa }) {
  const eje = getEjeById(programa.ejeId);

  return (
    <Link
      to={`/propuestas/${programa.id}`}
      className="group flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-linea)] bg-white transition-colors hover:border-[var(--color-azul)] sm:flex-row sm:items-stretch sm:justify-between"
    >
      <div className="flex min-w-0 flex-1">
        <div
          className="hidden w-32 shrink-0 bg-[var(--color-azul)] bg-cover bg-center sm:block"
          style={{
            backgroundImage: eje
              ? `linear-gradient(rgba(10,58,115,0.2), rgba(10,58,115,0.65)), url('${eje.imagen}')`
              : undefined,
          }}
          aria-hidden="true"
        />
        <div className="p-5">
          <p className="text-xs font-semibold text-[var(--color-tinta-suave)]">Programa {programa.numero}</p>
          <h3 className="mt-0.5 font-display text-base font-bold text-[var(--color-tinta)]">{programa.titulo}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-[var(--color-tinta-suave)]">{programa.objetivo}</p>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-3 px-5 pb-5 sm:py-5">
        <ArrowRight size={16} className="hidden text-[var(--color-tinta-suave)] sm:block" />
      </div>
    </Link>
  );
}
