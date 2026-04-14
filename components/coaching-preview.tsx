import Link from "next/link";
import Image from "next/image";
import { ASSETS } from "@/lib/assets";

const pillars = [
  { n: "01", t: "Custom Training", d: "Built around your body, your goals, your gym (or living room)." },
  { n: "02", t: "Nutrition That Works", d: "No crash diets. No restriction culture. Real food, real results." },
  { n: "03", t: "Weekly Accountability", d: "Direct access. Check-ins. Adjustments. You don't go through it alone." },
  { n: "04", t: "Mindset & Confidence", d: "We're not just changing your body. We're changing how you walk into rooms." },
];

export default function CoachingPreview() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-cream to-rose-100/50" />
      <div className="container-x relative py-24 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <p className="eyebrow">1:1 Coaching</p>
          <h2 className="mt-3 text-4xl md:text-5xl">A program built like<br /><span className="italic gradient-text">it's only yours.</span></h2>
          <p className="mt-5 text-ink/70 leading-relaxed max-w-md">
            This isn't a templated PDF. This is a relationship — with a coach who
            actually answers, a plan that actually evolves, and a community that
            actually moves with you.
          </p>
          <div className="mt-8 flex gap-3 flex-wrap">
            <Link href="/coaching" className="btn-primary">What's Included</Link>
            <Link href="/coaching#apply" className="btn-rose">Apply Now</Link>
          </div>

          <div className="mt-10 relative aspect-[5/4] rounded-3xl overflow-hidden ring-1 ring-rose-200 shadow-xl shadow-rose-200/50">
            <Image
              src={ASSETS.coaching}
              alt="Confidence in action — Vero Holland"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="font-display text-xl">Confidence is the result.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          {pillars.map((p) => (
            <div key={p.n} className="bg-white rounded-2xl p-6 border border-rose-100 hover:border-rose-300 transition group">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-widest text-rose-600">{p.n}</span>
                <span className="w-8 h-8 rounded-full bg-rose-100 group-hover:bg-rose-300 transition" />
              </div>
              <h3 className="mt-4 font-display text-2xl">{p.t}</h3>
              <p className="mt-2 text-sm text-ink/70 leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
