import type { ReactNode } from 'react';

export function Card({
  children,
  className = '',
  as: Tag = 'div',
}: {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'article';
}) {
  return (
    <Tag
      className={`rounded-[var(--radius-card)] border border-[var(--color-linea)] bg-white p-6 ${className}`}
    >
      {children}
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}) {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold text-[var(--color-azul)]">{eyebrow}</p>
      )}
      <h2 className="font-display text-2xl font-bold text-[var(--color-tinta)] sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className={`mt-3 max-w-2xl text-[var(--color-tinta-suave)] ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
}
