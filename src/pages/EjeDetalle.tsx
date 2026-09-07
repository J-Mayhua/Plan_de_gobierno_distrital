import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getEjeById } from '../data/ejes';
import { getProgramasPorEje } from '../data/propuestas';
import { getEjeIcon } from '../components/plan/ejeIcons';
import { ProgramaCard } from '../components/plan/PlanCards';

export default function EjeDetalle() {
  const { ejeId } = useParams<{ ejeId: string }>();
  const eje = ejeId ? getEjeById(ejeId) : undefined;

  if (!eje) return <Navigate to="/ejes" replace />;

  const Icon = getEjeIcon(eje.icono);
  const programas = getProgramasPorEje(eje.id);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <Link
        to="/ejes"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-tinta-suave)] hover:text-[var(--color-azul)]"
      >
        <ArrowLeft size={16} />
        Volver a los ejes
      </Link>

      <div
        className="mt-6 flex items-end gap-4 rounded-[var(--radius-card)] bg-[var(--color-azul)] bg-cover bg-center p-6 sm:p-8"
        style={{
          backgroundImage: `linear-gradient(rgba(10,58,115,0.82), rgba(10,58,115,0.9)), url('${eje.imagen}')`,
        }}
      >
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-white/15 text-white">
          <Icon size={28} />
        </span>
        <div>
          <p className="font-display text-sm font-bold text-white/70">Eje {eje.numero}</p>
          <h1 className="font-display text-2xl font-bold text-white sm:text-3xl">{eje.titulo}</h1>
        </div>
      </div>

      <p className="mt-6 max-w-3xl text-[var(--color-tinta-suave)]">{eje.objetivoEstrategico}</p>

      <div className="mt-10">
        <h2 className="font-display text-lg font-bold text-[var(--color-tinta)]">
          Programas de este eje ({programas.length})
        </h2>
        <div className="mt-5 grid gap-4">
          {programas.map((programa) => (
            <ProgramaCard key={programa.id} programa={programa} />
          ))}
        </div>
      </div>
    </div>
  );
}
