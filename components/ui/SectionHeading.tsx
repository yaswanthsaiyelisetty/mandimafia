"use client";

export default function SectionHeading({
  title,
  subtitle
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10">
      <p className="text-gold uppercase tracking-[0.3em] text-xs">Mandi Mafia</p>
      <h2 className="font-display text-3xl sm:text-4xl mt-3">{title}</h2>
      {subtitle && <p className="text-smoke/70 mt-3 max-w-2xl">{subtitle}</p>}
    </div>
  );
}
