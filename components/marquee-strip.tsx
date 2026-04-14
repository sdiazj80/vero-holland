export default function MarqueeStrip() {
  const items = [
    "Featured in Houston Fitness",
    "★★★★★ 500+ Transformations",
    "Booty Brunch & Bubbly™",
    "180k+ Community",
    "1:1 Coaching",
    "Strong. Soft. Sculpted.",
    "Vero Fitness × Alamo 48",
  ];
  const doubled = [...items, ...items];

  return (
    <div className="border-y border-rose-100 bg-rose-50/40 py-4 overflow-hidden">
      <div className="marquee whitespace-nowrap text-sm font-medium text-ink/70">
        {doubled.map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            <span>{t}</span>
            <span className="text-rose-400">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
