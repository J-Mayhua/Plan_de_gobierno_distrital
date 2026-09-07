import { Card, SectionHeading } from '../components/ui/Card';
import { StatusTag } from '../components/ui/StatusTag';
import { cronograma, sistemaIndicadores } from '../data/indicadores';
import { prioridades2027 } from '../data/plan-meta';

export default function Metas2030() {
    return (
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <SectionHeading eyebrow="Metas 2030" title="Una hoja de ruta con metas verificables" description="El plan evita fijar porcentajes o cantidades sin línea base. Primero se ordena la información; luego se mide el resultado." />

            <section className="mt-10">
                <SectionHeading eyebrow="Cronograma general" title="2027 a 2030" />
                <div className="mt-5 overflow-x-auto rounded-[var(--radius-card)] border border-[var(--color-linea)] bg-white">
                    <table className="w-full min-w-[720px] text-left text-sm">
                        <thead className="bg-[var(--color-azul)] text-white"><tr><th className="px-4 py-3">Línea de acción</th><th className="px-4 py-3">2027</th><th className="px-4 py-3">2028</th><th className="px-4 py-3">2029</th><th className="px-4 py-3">2030</th></tr></thead>
                        <tbody>{cronograma.map((fila) => <tr key={fila.lineaAccion} className="border-t border-[var(--color-linea)]"><th className="px-4 py-3 font-semibold text-[var(--color-tinta)]">{fila.lineaAccion}</th><td className="px-4 py-3 text-[var(--color-tinta-suave)]">{fila['2027']}</td><td className="px-4 py-3 text-[var(--color-tinta-suave)]">{fila['2028']}</td><td className="px-4 py-3 text-[var(--color-tinta-suave)]">{fila['2029']}</td><td className="px-4 py-3 text-[var(--color-tinta-suave)]">{fila['2030']}</td></tr>)}</tbody>
                    </table>
                </div>
            </section>

            <section className="mt-16"><SectionHeading eyebrow="Sistema de indicadores" title="Medir actividad, entrega y resultado" /><div className="mt-6 grid gap-4 md:grid-cols-3">{sistemaIndicadores.map((nivel) => <Card key={nivel.nivel}><StatusTag estado={nivel.nivel === 'resultado' ? 'en_diagnostico' : 'definido'} /><h3 className="mt-4 font-display text-lg font-bold text-[var(--color-tinta)]">{nivel.titulo}</h3><p className="mt-2 text-sm text-[var(--color-tinta-suave)]">{nivel.descripcion}</p><ul className="mt-4 space-y-2 text-sm text-[var(--color-tinta-suave)]">{nivel.ejemplos.map((ejemplo) => <li key={ejemplo} className="border-l-2 border-[var(--color-dorado)] pl-3">{ejemplo}</li>)}</ul></Card>)}</div></section>

            <section className="mt-16"><SectionHeading eyebrow="Primer año" title="Prioridades 2027" /><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{prioridades2027.map((prioridad) => <Card key={prioridad.titulo}><p className="text-sm font-semibold text-[var(--color-azul)]">Prioridad</p><h3 className="mt-1 font-display text-lg font-bold text-[var(--color-tinta)]">{prioridad.titulo}</h3><p className="mt-2 text-sm text-[var(--color-tinta-suave)]">{prioridad.texto}</p></Card>)}</div></section>

        </div>
    );
}
