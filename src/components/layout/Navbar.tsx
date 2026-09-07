import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/el-plan', label: 'El plan' },
  { to: '/ejes', label: 'Ejes' },
  { to: '/metas', label: 'Metas 2030' },
  { to: '/prioridades', label: 'Prioridades' },
  { to: '/transparencia', label: 'Transparencia' },
  { to: '/documentos', label: 'Documentos' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-linea)] bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <NavLink to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-[var(--color-azul)]">
            <img
              src="../../../imagenes/logo.jpg"
              alt="Logo"
              className="h-6 w-6 object-contain"
            />
          </span>
          <span className="font-display text-sm font-bold leading-tight text-[var(--color-tinta)] sm:text-base">
            Plan de Gobierno
            <br className="hidden sm:block" /> Paucará 2027-2030
          </span>
        </NavLink>

        {/* Navegación desktop */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `rounded-sm px-3 py-2 text-sm font-medium transition-colors ${isActive
                    ? 'bg-[var(--color-azul)] text-white'
                    : 'text-[var(--color-tinta)] hover:bg-[var(--color-fondo)]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Botón menú móvil */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-sm text-[var(--color-tinta)] lg:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Panel móvil */}
      {open && (
        <ul className="flex flex-col gap-1 border-t border-[var(--color-linea)] px-4 py-3 lg:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-sm px-3 py-2.5 text-sm font-medium ${isActive
                    ? 'bg-[var(--color-azul)] text-white'
                    : 'text-[var(--color-tinta)] hover:bg-[var(--color-fondo)]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
