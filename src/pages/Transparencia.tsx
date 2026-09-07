import { CheckCircle2, CircleDashed, Clock3, FileCheck2 } from 'lucide-react';
import { Card, SectionHeading } from '../components/ui/Card';
import { matrizRiesgos } from '../data/indicadores';
import { primeros100Dias, compromisoFinal } from '../data/plan-meta';

const estados = [
  { icon: CircleDashed, label: 'Propuesta', text: 'Idea incluida en el plan, todavía sin ficha definitiva.' },
  { icon: Clock3, label: 'En preparación', text: 'Cuenta con diagnóstico, priorización o formulación en curso.' },
  { icon: FileCheck2, label: 'En ejecución', text: 'Tiene financiamiento y ejecución formalmente iniciada.' },
  { icon: CheckCircle2, label: 'Ejecutado', text: 'La intervención culminó y se verifica que el servicio funciona.' },
];

export default function Transparencia() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <SectionHeading eyebrow="Transparencia y seguimiento" title="Rendir cuentas antes de declarar un resultado" description="El plan propone un tablero público con información física, financiera y administrativa de las principales intervenciones." />
      <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{estados.map(({ icon: Icon, label, text }) => <Card key={label}><Icon size={24} className="text-[var(--color-azul)]" /><h2 className="mt-4 font-display text-base font-bold text-[var(--color-tinta)]">{label}</h2><p className="mt-2 text-sm text-[var(--color-tinta-suave)]">{text}</p></Card>)}</section>

      <section className="mt-16 grid gap-8 lg:grid-cols-[1fr_1fr]"><div><SectionHeading eyebrow="Tablero público" title="Qué se debe publicar" /><Card className="mt-6"><ul className="grid gap-3 text-sm text-[var(--color-tinta-suave)] sm:grid-cols-2">{['Objetivo', 'Responsable', 'Presupuesto programado', 'Presupuesto ejecutado', 'Avance físico', 'Avance financiero', 'Estado', 'Problemas identificados', 'Medida correctiva'].map((dato) => <li key={dato} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-dorado)]" />{dato}</li>)}</ul><p className="mt-5 border-t border-[var(--color-linea)] pt-4 text-sm text-[var(--color-tinta-suave)]">La publicación deberá realizarse usando los mecanismos oficiales de transparencia disponibles.</p></Card></div><div><SectionHeading eyebrow="Seguimiento" title="Informes semestrales y evaluación anual" /><Card className="mt-6"><p className="text-sm text-[var(--color-tinta-suave)]">Cada seis meses se reportarán metas programadas y alcanzadas, presupuesto, avance físico, dificultades y medidas correctivas.</p><p className="mt-4 text-sm text-[var(--color-tinta-suave)]">Al finalizar cada año se evaluará también el estado de las inversiones y la sostenibilidad de los servicios.</p><blockquote className="mt-6 border-l-4 border-[var(--color-dorado)] pl-4 font-display font-bold text-[var(--color-tinta)]">{compromisoFinal.frase}</blockquote></Card></div></section>

      <section className="mt-16"><SectionHeading eyebrow="Primeros 100 días" title="Ordenar la gestión antes de anunciar obras" /><div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{primeros100Dias.map((item, index) => <div key={item} className="flex gap-3 rounded-[var(--radius-card)] border border-[var(--color-linea)] bg-white p-4"><span className="font-display text-lg font-bold text-[var(--color-dorado)]">{index + 1}</span><p className="text-sm text-[var(--color-tinta-suave)]">{item}</p></div>)}</div></section>

      <section className="mt-16"><SectionHeading eyebrow="Matriz de riesgos" title="Qué puede retrasar los resultados" /><div className="mt-5 overflow-x-auto rounded-[var(--radius-card)] border border-[var(--color-linea)] bg-white"><table className="w-full min-w-[720px] text-left text-sm"><thead className="bg-[var(--color-azul)] text-white"><tr><th className="px-4 py-3">Riesgo</th><th className="px-4 py-3">Efecto</th><th className="px-4 py-3">Medida preventiva</th><th className="px-4 py-3">Indicador de control</th></tr></thead><tbody>{matrizRiesgos.map((fila) => <tr key={fila.riesgo} className="border-t border-[var(--color-linea)]"><th className="px-4 py-3 font-semibold text-[var(--color-tinta)]">{fila.riesgo}</th><td className="px-4 py-3 text-[var(--color-tinta-suave)]">{fila.efecto}</td><td className="px-4 py-3 text-[var(--color-tinta-suave)]">{fila.medidaPreventiva}</td><td className="px-4 py-3 text-[var(--color-tinta-suave)]">{fila.indicadorControl}</td></tr>)}</tbody></table></div></section>
    </div>
  );
}
