export default function StubPage({ title }: { title: string }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
      <p className="font-display text-sm font-semibold uppercase tracking-wide text-[var(--color-azul)]">
        Próximo bloque
      </p>
      <h1 className="mt-3 font-display text-2xl font-bold text-[var(--color-tinta)]">{title}</h1>
      <p className="mt-2 text-[var(--color-tinta-suave)]">Esta página se construye en el siguiente paso.</p>
    </div>
  );
}
