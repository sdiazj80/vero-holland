import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/page-hero";
import { ASSETS } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Results & Transformations",
  description: "Real client transformations and testimonials from women who trusted Vero Holland with their fitness journey.",
};

const grid = [
  { name: "Ashley M.", weeks: "16 weeks", stat: "-22 lbs · -8% BF", quote: "I trust my body again.", img: ASSETS.events.bbb1 },
  { name: "Mia R.", weeks: "12 weeks", stat: "-18 lbs", quote: "Strongest I've ever been.", img: ASSETS.events.bbb2 },
  { name: "Jess T.", weeks: "20 weeks", stat: "Recomp", quote: "Vero gave me my confidence back.", img: ASSETS.events.bbb3 },
  { name: "Daniela P.", weeks: "24 weeks", stat: "-26 lbs", quote: "First time I love the gym.", img: ASSETS.events.bbb4Main },
  { name: "Brittany K.", weeks: "12 weeks", stat: "+12 lbs muscle", quote: "Built the body I wanted.", img: ASSETS.events.bullride },
  { name: "Alyssa G.", weeks: "16 weeks", stat: "-15 lbs", quote: "I show up for myself now.", img: ASSETS.events.bounce },
];

const testimonials = [
  { q: "I've spent thousands on coaches and trainers. Vero is the only one who actually got me results that lasted.", a: "Ashley M." },
  { q: "It's not just the workouts — it's the way she talks to me. Like she genuinely believes I can do it. So I did.", a: "Daniela P." },
  { q: "I was skeptical of online coaching. After 6 weeks, I was a believer. After 12, I was unrecognizable.", a: "Jess T." },
];

export default function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Real Women · Real Results"
        title="The proof is the"
        highlight="transformation."
        subtitle="No filters. No before-and-after trickery. Just women who trusted the process and showed up — week after week."
      />

      <section className="container-x py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {grid.map((p) => (
            <article key={p.name} className="group relative rounded-3xl overflow-hidden bg-white border border-rose-100 hover:shadow-xl hover:shadow-rose-200/50 hover:-translate-y-1 transition-all">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src={p.img}
                  alt={`${p.name} transformation`}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent" />
                <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                  <span className="bg-white/95 backdrop-blur rounded-full px-3 py-1 text-xs font-semibold">{p.weeks}</span>
                  <span className="bg-rose-600 text-white rounded-full px-3 py-1 text-xs font-semibold">{p.stat}</span>
                </div>
                <div className="absolute bottom-0 p-6 text-white">
                  <p className="font-display text-2xl">{p.name}</p>
                  <p className="mt-1 text-sm text-white/90">"{p.quote}"</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-ink/55">
          New transformations published every month. Photos shown represent the brand
          community — individual client photos shared with permission on
          <a className="text-rose-600 ml-1" href="https://instagram.com/verofitness.coaching" target="_blank" rel="noopener">@verofitness.coaching</a>.
        </p>
      </section>

      <section className="bg-rose-50/60 border-y border-rose-100">
        <div className="container-x py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow">In Their Words</p>
            <h2 className="mt-3 text-4xl md:text-5xl">What clients <span className="italic gradient-text">say.</span></h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="bg-white rounded-3xl p-7 border border-rose-100">
                <p className="font-display text-rose-500 text-3xl leading-none">"</p>
                <p className="mt-2 leading-relaxed">{t.q}</p>
                <footer className="mt-5 text-sm font-semibold">— {t.a}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="rounded-[40px] bg-gradient-to-br from-rose-500 via-rose-600 to-rose-700 text-white p-10 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl text-white">You could be the <span className="italic">next one.</span></h2>
          <p className="mt-4 text-white/85 max-w-xl mx-auto">
            Every transformation here started with one application. Yours is one click away.
          </p>
          <Link href="/coaching#apply" className="inline-flex mt-8 px-7 py-4 rounded-full bg-white text-ink font-semibold">
            Apply for Coaching →
          </Link>
        </div>
      </section>
    </>
  );
}
