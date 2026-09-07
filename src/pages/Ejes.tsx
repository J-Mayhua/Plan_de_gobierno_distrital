import { ejes } from '../data/ejes';
import { SectionHeading } from '../components/ui/Card';
import { EjeCard } from '../components/plan/PlanCards';

export default function Ejes() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="Ejes del plan"
        title="Seis ejes de trabajo para 2027-2030"
        description="Cada eje agrupa los programas del plan. Selecciona uno para ver sus propuestas, indicadores y condiciones antes de ejecutar."
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ejes.map((eje) => (
          <EjeCard key={eje.id} eje={eje} />
        ))}
      </div>
    </div>
  );
}
