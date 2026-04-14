export default function PageHero({
  eyebrow,
  title,
  highlight,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute -top-40 -left-32 w-[500px] h-[500px] rounded-full bg-rose-200/60 blur-3xl" />
      <div aria-hidden className="absolute top-20 -right-40 w-[480px] h-[480px] rounded-full bg-rose-300/40 blur-3xl" />
      <div className="container-x relative pt-20 pb-12 md:pt-28 md:pb-16">
        <p className="eyebrow reveal">{eyebrow}</p>
        <h1 className="reveal reveal-delay-1 mt-3 text-5xl md:text-7xl max-w-4xl leading-[1]">
          {title}{" "}
          {highlight && <span className="italic gradient-text">{highlight}</span>}
        </h1>
        {subtitle && (
          <p className="reveal reveal-delay-2 mt-5 max-w-2xl text-lg text-ink/70 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
