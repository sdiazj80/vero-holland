import Link from "next/link";
import Image from "next/image";
import { ASSETS } from "@/lib/assets";

const items = [
  { name: "Ashley", weeks: "16 weeks", quote: "I finally trust my body again.", img: ASSETS.events.bbb1 },
  { name: "Mia", weeks: "12 weeks", quote: "Down 22 lbs and stronger than ever.", img: ASSETS.events.bbb2 },
  { name: "Jess", weeks: "20 weeks", quote: "Vero gave me my confidence back.", img: ASSETS.events.bbb3 },
];

export default function Transformations({ heading = true }: { heading?: boolean }) {
  return (
    <section className="container-x py-24">
      {heading && (
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <p className="eyebrow">Real Results</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Proof, not <span className="italic gradient-text">promises.</span></h2>
          </div>
          <Link href="/results" className="btn-ghost text-sm">See All Transformations →</Link>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((p, i) => (
          <article key={i} className="group relative rounded-3xl overflow-hidden bg-white border border-rose-100">
            <div className="aspect-[3/4] relative overflow-hidden">
              <Image
                src={p.img}
                alt={`${p.name} — client transformation`}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent" />
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur rounded-full px-3 py-1 text-xs font-semibold">
                {p.weeks}
              </div>
              <div className="absolute bottom-0 p-6 text-white">
                <p className="font-display text-2xl">{p.name}</p>
                <p className="mt-1 text-sm text-white/90">"{p.quote}"</p>
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-6 text-xs text-ink/50 text-center">Client transformation photos roll in weekly — follow @verofitness.coaching for the latest.</p>
    </section>
  );
}
