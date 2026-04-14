import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import ApplicationForm from "@/components/application-form";
import Transformations from "@/components/transformations";
import Link from "next/link";

export const metadata: Metadata = {
  title: "1:1 Coaching",
  description: "Premium 1:1 coaching with Vero Holland. Custom training, nutrition, accountability, and confidence building. Apply for the next cohort.",
};

const forWho = [
  "You're done with random workouts and gimmick diets.",
  "You want a body you're proud of and a mindset that backs it up.",
  "You'll commit fully — and want a coach who matches that energy.",
  "You're a busy woman who needs a plan that fits your real life.",
];
const outcomes = [
  { t: "Visible Strength", d: "Sculpt, tone, build — without the bulk myth." },
  { t: "Sustainable Fat Loss", d: "Real food. Real macros. Zero punishment." },
  { t: "Mental Discipline", d: "The kind of confidence that doesn't need a filter." },
  { t: "Lifetime Habits", d: "We're not building 12 weeks. We're building forever." },
];
const included = [
  "Custom training program (gym or home)",
  "Personalized nutrition strategy + macros",
  "Weekly check-ins + form review",
  "Direct messaging access with Vero",
  "Adjustments every 2 weeks",
  "Mindset + accountability framework",
  "Private community access",
  "Booty Brunch & Bubbly™ first-access",
];
const process = [
  { n: "01", t: "Apply", d: "Tell me about you. The honest version." },
  { n: "02", t: "Discovery Call", d: "We meet, we map, we make sure it's a fit." },
  { n: "03", t: "Build", d: "Custom plan delivered within 72 hours of onboarding." },
  { n: "04", t: "Execute", d: "Weekly check-ins. Direct access. Real adjustments." },
  { n: "05", t: "Transform", d: "12 weeks in, you don't recognize who you were." },
];

export default function CoachingPage() {
  return (
    <>
      <PageHero
        eyebrow="1:1 Premium Coaching"
        title="Built for women who"
        highlight="don't quit."
        subtitle="This is real coaching. Personal. Direct. Adaptive. Not a downloadable PDF, not a template, not a chatbot. You and me — for the next 12 weeks (or longer)."
      />

      <section className="container-x py-16 grid lg:grid-cols-2 gap-12">
        <div>
          <p className="eyebrow">Who It's For</p>
          <h2 className="mt-3 text-3xl md:text-4xl">If this is you, we should talk.</h2>
          <ul className="mt-6 space-y-3">
            {forWho.map((line, i) => (
              <li key={i} className="flex gap-3 text-ink/80">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">What You'll Walk Away With</p>
          <h2 className="mt-3 text-3xl md:text-4xl">The real outcomes.</h2>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {outcomes.map((o) => (
              <div key={o.t} className="rounded-2xl bg-white border border-rose-100 p-5">
                <p className="font-display text-xl">{o.t}</p>
                <p className="mt-1 text-sm text-ink/65">{o.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-rose-50/60 border-y border-rose-100">
        <div className="container-x py-20 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="eyebrow">What's Included</p>
            <h2 className="mt-3 text-4xl md:text-5xl">A full system. <span className="italic gradient-text">Not a workout PDF.</span></h2>
            <p className="mt-4 text-ink/70 max-w-md">
              You're investing in a structure that thinks for you, adapts with you,
              and pushes you when you'd rather quit.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {included.map((i, idx) => (
              <li key={idx} className="flex gap-3 items-start bg-white border border-rose-100 rounded-xl p-4">
                <span className="text-rose-500 font-bold">✓</span>
                <span className="text-sm">{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">The Process</p>
          <h2 className="mt-3 text-4xl md:text-5xl">From <span className="italic gradient-text">apply</span> to transform.</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-5 gap-4">
          {process.map((p) => (
            <div key={p.n} className="rounded-2xl border border-rose-100 bg-white p-5">
              <p className="text-rose-600 text-xs font-semibold tracking-widest">{p.n}</p>
              <p className="mt-2 font-display text-xl">{p.t}</p>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <Transformations />

      <section className="container-x py-20">
        <div className="grid lg:grid-cols-3 gap-6">
          {[
            { q: "Vero genuinely cares. She made me feel seen from week one and pushed me harder than I've ever pushed myself.", a: "— A. M., 16 weeks" },
            { q: "I've done 'programs' before. This is different. The accountability and the customization made it actually click.", a: "— J. R., 12 weeks" },
            { q: "Down 18 lbs, up 3 plates on every lift, and I finally like what I see in the mirror. Worth every dollar.", a: "— S. T., 24 weeks" },
          ].map((t, i) => (
            <blockquote key={i} className="bg-cream border border-rose-100 rounded-3xl p-7">
              <p className="text-rose-500 text-2xl">"</p>
              <p className="mt-1 text-ink/85 leading-relaxed">{t.q}</p>
              <footer className="mt-4 text-sm text-ink/60">{t.a}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section id="apply" className="container-x py-20 grid lg:grid-cols-12 gap-10 scroll-mt-24">
        <div className="lg:col-span-5">
          <p className="eyebrow">Apply Now</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Spots are <span className="italic gradient-text">limited.</span></h2>
          <p className="mt-4 text-ink/70 max-w-md">
            I personally take on a small number of clients per cohort. If you're
            ready, send your application. I'll respond within 48 hours.
          </p>
          <div className="mt-6 space-y-2 text-sm text-ink/70">
            <p>📍 Houston, TX · Remote worldwide</p>
            <p>⏱ 12-week minimum</p>
            <p>💌 Personal review by Vero</p>
          </div>
          <Link href="/contact" className="btn-ghost mt-8 text-sm">Have questions first? →</Link>
        </div>
        <div className="lg:col-span-7">
          <ApplicationForm />
        </div>
      </section>
    </>
  );
}
