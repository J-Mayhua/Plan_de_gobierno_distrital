import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import {
  diagnostico,
  modeloGestion,
  principios,
} from '../data/plan-meta';
import { SectionHeading, Card } from '../components/ui/Card';

export default function ElPlan() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <section className="relative overflow-hidden rounded-[var(--radius-card)] bg-[var(--color-azul)] px-6 py-10 text-center sm:px-10 sm:py-14">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-[var(--color-dorado)]" aria-hidden="true" />
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">Plan de Gobierno Distrital</p>
        <h1 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-wide text-white sm:text-5xl">Ing. Larico</h1>
        <p className="mt-3 font-display text-lg font-bold uppercase tracking-[0.18em] text-[var(--color-dorado)] sm:text-xl">Alcalde por Paucará</p>
        <p className="mx-auto mt-4 max-w-xl text-sm text-white/75">Una propuesta de gestión para el desarrollo de Paucará.</p>
      </section>

      {/* Problemas / diagnóstico */}
      <div className="mt-20">
        <SectionHeading
          eyebrow="Qué problemas se buscan resolver"
          title="Diagnóstico territorial"
          description={diagnostico.caracteristicasGenerales}
        />
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <Card>
            <h3 className="font-display text-base font-bold text-[var(--color-tinta)]">
              Potencialidades identificadas
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-[var(--color-tinta-suave)]">
              {diagnostico.potencialidades.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-dorado)]" />
                  {p}
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="font-display text-base font-bold text-[var(--color-tinta)]">
              Se construirá línea base para
            </h3>
            <p className="mt-2 text-sm text-[var(--color-tinta-suave)]">{diagnostico.reglaLineaBase}</p>
            <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-[var(--color-tinta-suave)] sm:grid-cols-2">
              {diagnostico.lineaBaseCategorias.map((c) => (
                <li key={c} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-azul)]" />
                  {c}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>

      {/* Metodología */}
      <div className="mt-20">
        <SectionHeading
          eyebrow="Metodología"
          title={modeloGestion.titulo}
          description={modeloGestion.texto}
        />
        <div className="mt-8 flex flex-wrap items-center gap-2 rounded-[var(--radius-card)] border border-[var(--color-linea)] bg-white p-6">
          {modeloGestion.cadena.map((paso, i) => (
            <div key={paso} className="flex items-center gap-2">
              <span className="rounded-sm bg-[var(--color-azul)]/10 px-3 py-1.5 text-sm font-semibold text-[var(--color-azul)]">
                {paso}
              </span>
              {i < modeloGestion.cadena.length - 1 && (
                <ArrowRight size={16} className="shrink-0 text-[var(--color-tinta-suave)]" />
              )}
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-[var(--color-tinta-suave)]">{modeloGestion.notaInversiones}</p>
      </div>

      {/* Principios */}
      <div className="mt-20">
        <SectionHeading eyebrow="Principios de gobierno" title="Reglas que guían cada propuesta" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principios.map((p) => (
            <Card key={p.titulo}>
              <h3 className="font-display text-sm font-bold text-[var(--color-tinta)]">{p.titulo}</h3>
              <p className="mt-2 text-sm text-[var(--color-tinta-suave)]">{p.texto}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <Link
          to="/ejes"
          className="inline-flex items-center gap-2 rounded-sm bg-[var(--color-azul)] px-6 py-3 font-semibold text-white hover:bg-[var(--color-azul-oscuro)]"
        >
          Ver los 6 ejes del plan
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
