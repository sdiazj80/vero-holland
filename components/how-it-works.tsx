import Link from "next/link";

const steps = [
  { n: "01", t: "Pick your class", d: "Browse upcoming sessions and grab the one that fits your schedule." },
  { n: "02", t: "Show up ready to move", d: "Bring water, bring energy. We handle the rest — playlist, pace, and vibe." },
  { n: "03", t: "Leave feeling unstoppable", d: "Endorphins. New friends. A body that remembers what it's capable of." },
];

export default function HowItWorks() {
  return (
    <section className="container-x py-24">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="eyebrow">How It Works</p>
        <h2 className="mt-3 text-4xl md:text-5xl uppercase">Three steps. <span className="italic gradient-text normal-case">One session.</span></h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((s) => (
          <div key={s.n} className="relative rounded-3xl bg-white border border-rose-100 p-8 hover:border-rose-300 hover:shadow-xl hover:shadow-rose-200/50 transition-all">
            <span className="font-display text-5xl text-rose-500">{s.n}</span>
            <h3 className="mt-4 font-display text-2xl">{s.t}</h3>
            <p className="mt-2 text-ink/70 leading-relaxed">{s.d}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link href="/events" className="btn-rose">Book Your First Class →</Link>
      </div>
    </section>
  );
}
