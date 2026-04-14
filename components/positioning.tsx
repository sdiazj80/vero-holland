import Link from "next/link";

const nos = [
  { t: "No boring workouts", d: "Every class is built to feel like an event. Music, movement, momentum." },
  { t: "No judgment", d: "All bodies. All levels. Everyone scales, everyone belongs." },
  { t: "No showing up alone", d: "You walk in and there's already a room ready to cheer you on." },
  { t: "No guessing what to do", d: "Vero leads every move. You just show up and follow." },
];

export default function Positioning() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div aria-hidden className="absolute -top-32 -right-20 w-[520px] h-[520px] rounded-full bg-rose-500/30 blur-3xl" />
      <div aria-hidden className="absolute -bottom-20 -left-20 w-[420px] h-[420px] rounded-full bg-rose-400/20 blur-3xl" />

      <div className="container-x relative py-24">
        <div className="max-w-3xl">
          <p className="eyebrow text-rose-300">The Difference</p>
          <h2 className="mt-3 text-5xl md:text-7xl uppercase text-white leading-[0.95]">
            This is <span className="italic gradient-text normal-case">not</span> a gym.
          </h2>
          <p className="mt-5 text-white/70 max-w-xl text-lg">
            It's the antidote to everything that made fitness feel like a chore.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          {nos.map((n) => (
            <div key={n.t} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <p className="font-display text-2xl text-white">{n.t}</p>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">{n.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/events" className="btn-rose">Join the Next Session →</Link>
        </div>
      </div>
    </section>
  );
}
