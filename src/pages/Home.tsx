import { Link } from 'react-router-dom';
import { ArrowRight, Sprout, Route as RouteIcon, Droplets, ShieldCheck } from 'lucide-react';
import { planInfo, presentacion, vision } from '../data/plan-meta';
import { SectionHeading } from '../components/ui/Card';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden bg-[var(--color-azul)] bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,58,115,0.88), rgba(10,58,115,0.94)), url('/imagenes/hero/portada.jpg')",
        }}
      >
        {/* Franja diagonal tipo bandera, acento sutil de marca */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            background:
              'repeating-linear-gradient(115deg, transparent, transparent 90px, var(--color-dorado) 90px, var(--color-dorado) 94px)',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-dorado)]">
            {planInfo.distrito} · {planInfo.provincia} · {planInfo.departamento}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            {planInfo.titulo}
          </h1>
          <p className="mt-2 font-display text-2xl font-bold text-[var(--color-dorado)] sm:text-3xl">
            {planInfo.periodo}
          </p>
          <p className="mt-6 max-w-xl text-lg text-white/85">
            Una gestión municipal orientada al cierre de brechas, el desarrollo económico local,
            los servicios públicos y la transparencia de resultados.
          </p>
          <Link
            to="/el-plan"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-[var(--color-dorado)] px-6 py-3 font-semibold text-[var(--color-azul-tinta)] transition-transform hover:translate-x-0.5"
          >
            Conocer el plan
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* PRESENTACIÓN */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Presentación"
              title="Un plan construido sobre evidencia, no sobre promesas sueltas"
            />
            <div className="mt-8 flex justify-center lg:justify-start">
              <img
                src="../../../imagenes/plan.jpg"
                alt="Imagen de presentación del plan de gobierno"
                className="h-auto w-full max-w-sm"
              />
            </div>
          </div>
          <div className="space-y-4 text-[var(--color-tinta-suave)]">
            {presentacion.texto.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* VISIÓN */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <SectionHeading eyebrow="Visión 2030" title={vision.titulo} />
              <div className="mt-8 flex justify-center lg:justify-start">
                <img
                  src="../../../imagenes/image.png"
                  alt="Isotipo del partido, visión 2030"
                  className="h-auto w-full max-w-sm"
                />
              </div>
            </div>
            <div className="space-y-4 text-[var(--color-tinta-suave)]">
              {vision.texto.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VISTAZO A LOS EJES */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="Seis ejes de trabajo"
          title="El plan organiza sus propuestas en seis ejes"
          description="Cada eje agrupa programas concretos, con problema, objetivo, indicadores y condiciones antes de ejecutar."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Sprout, label: 'Producción y economía local' },
            { icon: RouteIcon, label: 'Vías y conectividad' },
            { icon: Droplets, label: 'Agua y saneamiento' },
            { icon: ShieldCheck, label: 'Seguridad ciudadana' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="rounded-[var(--radius-card)] border border-[var(--color-linea)] p-5">
              <Icon size={24} className="text-[var(--color-azul)]" />
              <p className="mt-3 text-sm font-semibold text-[var(--color-tinta)]">{label}</p>
            </div>
          ))}
        </div>
        <Link
          to="/ejes"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-azul)] hover:underline"
        >
          Ver los 6 ejes y sus programas
          <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}
