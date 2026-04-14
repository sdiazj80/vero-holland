import Link from "next/link";
import Image from "next/image";
import { ASSETS } from "@/lib/assets";

const cards = [
  {
    tag: "01 / Coaching",
    title: "Vero Fitness Coaching",
    body: "1:1 programs built for real life. Custom training, nutrition, and accountability — designed to make you unrecognizable in the best way.",
    href: "/coaching",
    cta: "Start Your Transformation",
    img: ASSETS.coaching,
  },
  {
    tag: "02 / Events",
    title: "Booty Brunch & Bubbly",
    body: "Signature women-only events. Move together. Eat together. Pour the bubbly. The community you didn't know you were missing.",
    href: "/events",
    cta: "See the Next Event",
    img: ASSETS.events.bbb4Main,
  },
  {
    tag: "03 / Brand",
    title: "Lifestyle & Shop",
    body: "Wear it. Use it. Live it. Merch, programs, and digital drops from the Vero Holland universe.",
    href: "/shop",
    cta: "Browse the Shop",
    img: ASSETS.lifestyle.b,
  },
];

export default function Ecosystem() {
  return (
    <section className="container-x py-24">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
        <div className="max-w-xl">
          <p className="eyebrow">The Ecosystem</p>
          <h2 className="mt-3 text-4xl md:text-5xl">One brand. <span className="gradient-text italic">Three movements.</span></h2>
        </div>
        <p className="text-ink/60 max-w-sm">
          Coaching is the engine. Events are the energy. Shop is the lifestyle.
          All connected. All built around you.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="group relative rounded-3xl overflow-hidden bg-white border border-rose-100 hover:border-rose-300 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-rose-200/60"
          >
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src={c.img}
                alt={c.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-transparent" />
              <div className="absolute top-4 left-4 text-xs uppercase tracking-widest text-white/90 font-semibold">
                {c.tag}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-display text-2xl">{c.title}</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-ink/70 text-sm leading-relaxed">{c.body}</p>
              <p className="mt-4 text-rose-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                {c.cta} →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
