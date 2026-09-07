import { Link } from 'react-router-dom';
import { planInfo } from '../../data/plan-meta';

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-linea)] bg-[var(--color-azul-tinta)] text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="font-display text-lg font-bold">{planInfo.titulo}</p>
            <p className="mt-1 text-sm text-white/70">
              {planInfo.distrito}, provincia de {planInfo.provincia}, departamento de{' '}
              {planInfo.departamento}. Periodo de gobierno {planInfo.periodo}.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white/90">Navegación</p>
            <ul className="mt-2 space-y-1.5 text-sm text-white/70">
              <li><Link to="/el-plan" className="hover:text-white">El plan</Link></li>
              <li><Link to="/ejes" className="hover:text-white">Ejes del plan</Link></li>
              <li><Link to="/prioridades" className="hover:text-white">Prioridades</Link></li>
              <li><Link to="/transparencia" className="hover:text-white">Transparencia y seguimiento</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white/90">Documentos</p>
            <ul className="mt-2 space-y-1.5 text-sm text-white/70">
              <li><Link to="/documentos" className="hover:text-white">Plan de gobierno completo</Link></li>
            </ul>
          </div>
        </div>
        <p className="mt-8 border-t border-white/10 pt-6 text-xs text-white/50">
          Documento elaborado sobre la base del Plan de Gobierno {planInfo.periodo} proporcionado,
          complementado con revisión normativa y técnica de fuentes oficiales.
        </p>
      </div>
    </footer>
  );
}
