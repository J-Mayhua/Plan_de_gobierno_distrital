import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { prioridades, matrizFinanciamiento } from '../data/prioridades';
import { Card, SectionHeading } from '../components/ui/Card';

export default function Prioridades() {
    return (
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <SectionHeading eyebrow="Cartera preliminar" title="Nueve prioridades para ordenar la acción" description="Esta cartera no constituye una relación de obras garantizadas. Cada intervención requiere diagnóstico, competencia, formulación y financiamiento." />
            <div className="mt-10 grid gap-4 lg:grid-cols-3">{prioridades.map((prioridad, index) => <Card key={prioridad.intervencion} className="flex flex-col"><span className="font-display text-2xl font-bold text-[var(--color-dorado)]">{String(index + 1).padStart(2, '0')}</span><h2 className="mt-4 font-display text-lg font-bold text-[var(--color-tinta)]">{prioridad.intervencion}</h2><p className="mt-3 text-sm text-[var(--color-tinta-suave)]"><strong>Problema:</strong> {prioridad.problema}</p><p className="mt-2 text-sm text-[var(--color-tinta-suave)]"><strong>Primer paso:</strong> {prioridad.primerPaso}</p><p className="mt-2 flex-1 text-sm text-[var(--color-tinta-suave)]"><strong>Resultado esperado:</strong> {prioridad.resultadoEsperado}</p>{prioridad.programaId && <Link to={`/propuestas/${prioridad.programaId}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-azul)] hover:underline">Ver ficha <ArrowRight size={15} /></Link>}</Card>)}</div>

            <section className="mt-16"><SectionHeading eyebrow="Matriz de financiamiento" title="Fuentes de financiamiento" /><div className="mt-5 overflow-x-auto rounded-[var(--radius-card)] border border-[var(--color-linea)] bg-white"><table className="w-full min-w-[720px] text-left text-sm"><thead className="bg-[var(--color-azul)] text-white"><tr><th className="px-4 py-3">Intervención</th><th className="px-4 py-3">Tipo</th><th className="px-4 py-3">Fuente municipal</th><th className="px-4 py-3">Fuente externa</th></tr></thead><tbody>{matrizFinanciamiento.map((fila) => <tr key={fila.intervencion} className="border-t border-[var(--color-linea)]"><th className="px-4 py-3 font-semibold text-[var(--color-tinta)]">{fila.intervencion}</th><td className="px-4 py-3 text-[var(--color-tinta-suave)]">{fila.tipo}</td><td className="px-4 py-3 text-[var(--color-tinta-suave)]">{fila.fuenteMunicipal}</td><td className="px-4 py-3 text-[var(--color-tinta-suave)]">{fila.fuenteExterna}</td></tr>)}</tbody></table></div></section>
        </div>
    );
}
