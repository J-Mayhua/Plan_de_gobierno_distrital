import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { getProgramaById } from '../data/propuestas';
import { getEjeById } from '../data/ejes';
import { fuentes } from '../data/fuentes';
import { Card, SectionHeading } from '../components/ui/Card';
import { PlanImage } from '../components/ui/PlanImage';

export default function PropuestaDetalle() {
    const { propuestaId } = useParams<{ propuestaId: string }>();
    const programa = propuestaId ? getProgramaById(propuestaId) : undefined;

    if (!programa) return <Navigate to="/ejes" replace />;

    const eje = getEjeById(programa.ejeId);

    const referencias = (programa.referencias ?? [])
        .map((id) => fuentes.find((fuente) => fuente.id === id))
        .filter((fuente) => fuente !== undefined);

    return (
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <Link
                to={`/ejes/${programa.ejeId}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-tinta-suave)] hover:text-[var(--color-azul)]"
            >
                <ArrowLeft size={16} />
                Volver al eje
            </Link>

            <header className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-start">
                <div>
                    <p className="text-sm font-semibold text-[var(--color-azul)]">Programa {programa.numero}</p>
                    <h1 className="mt-2 max-w-3xl font-display text-3xl font-bold text-[var(--color-tinta)] sm:text-4xl">
                        {programa.titulo}
                    </h1>
                </div>
                <PlanImage
                    src={eje?.imagen ?? '/imagenes/hero/portada.jpg'}
                    alt={`Imagen de ${programa.titulo}`}
                    className="lg:mt-1"
                />
            </header>

            <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="space-y-6">
                    <Card>
                        <SectionHeading eyebrow="Objetivo" title="Cambio esperado" />
                        <p className="mt-4 text-[var(--color-tinta-suave)]">{programa.objetivo}</p>
                    </Card>
                    <Card>
                        <SectionHeading eyebrow="Implementación" title="Cómo se implementaría" />
                        {programa.acciones.length > 0 ? (
                            <ol className="mt-4 space-y-3 text-sm text-[var(--color-tinta-suave)]">
                                {programa.acciones.map((accion, index) => (
                                    <li key={accion} className="flex gap-3">
                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-azul)]/10 text-xs font-bold text-[var(--color-azul)]">
                                            {index + 1}
                                        </span>
                                        <span>{accion}</span>
                                    </li>
                                ))}
                            </ol>
                        ) : (
                            <p className="mt-4 text-sm text-[var(--color-tinta-suave)]">La propuesta requiere completar su formulación mediante diagnóstico y priorización.</p>
                        )}
                    </Card>
                </div>

                <aside className="space-y-6">
                    <Card>
                        <h2 className="font-display text-lg font-bold text-[var(--color-tinta)]">Indicadores</h2>
                        {programa.indicadores.length > 0 ? (
                            <ul className="mt-4 space-y-2 text-sm text-[var(--color-tinta-suave)]">
                                {programa.indicadores.map((indicador) => (
                                    <li key={indicador} className="flex gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--color-azul)]" />{indicador}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="mt-3 text-sm text-[var(--color-tinta-suave)]">Se definirán con la línea base y el diagnóstico correspondiente.</p>
                        )}
                    </Card>

                    {programa.metas.length > 0 && (
                        <Card>
                            <h2 className="font-display text-lg font-bold text-[var(--color-tinta)]">Metas por periodo</h2>
                            <div className="mt-4 space-y-4">
                                {programa.metas.map((meta) => (
                                    <div key={meta.periodo} className="border-l-2 border-[var(--color-dorado)] pl-3">
                                        <p className="text-sm font-bold text-[var(--color-tinta)]">{meta.periodo}</p>
                                        <p className="mt-1 text-sm text-[var(--color-tinta-suave)]">{meta.descripcion}</p>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    )}
                </aside>
            </div>

            {referencias.length > 0 && (
                <Card className="mt-6">
                    <h2 className="font-display text-lg font-bold text-[var(--color-tinta)]">Referencias técnicas</h2>
                    <ul className="mt-3 space-y-2 text-sm text-[var(--color-tinta-suave)]">
                        {referencias.map((fuente) => (
                            <li key={fuente.id}>
                                <a href={fuente.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[var(--color-azul)] hover:underline">
                                    {fuente.autor}: {fuente.titulo}<ExternalLink size={14} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </Card>
            )}

            <Link to="/ejes" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-azul)] hover:underline">
                Explorar todos los ejes <ArrowRight size={16} />
            </Link>
        </div>
    );
}
