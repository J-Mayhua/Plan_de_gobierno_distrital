import { useState } from 'react';
import { ImageIcon } from 'lucide-react';

/**
 * Muestra una imagen si existe; si falta, presenta un espacio reservado sin
 * dejar una imagen rota en la interfaz.
 */
export function PlanImage({
  src,
  alt,
  aspect = 'aspect-[16/10]',
  className = '',
}: {
  src: string;
  alt: string;
  aspect?: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex ${aspect} w-full flex-col items-center justify-center gap-2 rounded-[var(--radius-card)] border border-dashed border-[var(--color-linea)] bg-[var(--color-fondo)] px-4 text-center text-[var(--color-tinta-suave)] ${className}`}
      >
        <ImageIcon size={22} strokeWidth={1.5} />
        <span className="text-xs">Espacio reservado para imagen</span>
        <code className="rounded bg-white px-1.5 py-0.5 text-[10px] text-[var(--color-tinta-suave)]">
          {src.replace(/^\//, '')}
        </code>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={`${aspect} w-full rounded-[var(--radius-card)] object-cover ${className}`}
      loading="lazy"
    />
  );
}
