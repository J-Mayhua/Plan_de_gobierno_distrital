import { Download, FileText, ExternalLink } from 'lucide-react';
import { Card, SectionHeading } from '../components/ui/Card';
import { fuentes } from '../data/fuentes';

const pdfPath = '/documentos/plan-gobierno-paucara-2027-2030.pdf';

export default function Documentos() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <SectionHeading eyebrow="Documentos" title="Fuentes y materiales del plan" description="El documento completo puede incorporarse en formato PDF cuando esté disponible en la carpeta pública del proyecto." />
      <Card className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-start gap-4"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-[var(--color-rojo)]/10 text-[var(--color-rojo)]"><FileText size={24} /></span><div><h2 className="font-display text-lg font-bold text-[var(--color-tinta)]">Plan de Gobierno Distrital 2027-2030</h2><p className="mt-1 text-sm text-[var(--color-tinta-suave)]">Versión técnica y programática completa en PDF.</p></div></div><a href={pdfPath} download className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-[var(--color-azul)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--color-azul-oscuro)]"><Download size={17} />Descargar plan completo</a></Card>
      <section className="mt-16"><SectionHeading eyebrow="Referencias" title="Fuentes consultadas" /><div className="mt-6 space-y-3">{fuentes.map((fuente) => <Card key={fuente.id} className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-xs font-semibold text-[var(--color-tinta-suave)]">{fuente.autor}</p><h2 className="mt-1 font-display font-bold text-[var(--color-tinta)]">{fuente.titulo}</h2></div>{fuente.url && <a href={fuente.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-azul)] hover:underline">Consultar fuente <ExternalLink size={15} /></a>}</Card>)}</div></section>
      <section className="mt-16"><SectionHeading eyebrow="Anexos" title="Información que debe verificarse" description="Los anexos A, B y C establecen fichas estándar, datos pendientes y reglas para no inventar metas. Su contenido se refleja en las fichas, prioridades y vistas de seguimiento de esta web." /></section>
    </div>
  );
}
