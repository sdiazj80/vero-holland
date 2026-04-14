import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/lib/assets";

const quotes = [
  { q: "Best workout I've done in San Antonio. Hands down.", a: "— Sarah L." },
  { q: "Vero's energy is contagious. I'm hooked after one class.", a: "— Priya M." },
  { q: "I walked in nervous. I left with new friends and a new habit.", a: "— Camila R." },
];

export default function Authority() {
  return (
    <section className="container-x py-24">
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[4/5] rounded-[36px] overflow-hidden ring-1 ring-rose-200 shadow-2xl shadow-rose-300/40">
            <Image
              src={ASSETS.authority}
              alt="Vero Holland coaching session"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden md:block bg-white rounded-2xl shadow-xl shadow-rose-200 px-5 py-4 max-w-[220px]">
            <p className="text-xs uppercase tracking-widest text-rose-600 font-semibold">Live Classes</p>
            <p className="font-display text-base mt-1">Weekly in San Antonio</p>
          </div>
        </div>

        <div className="lg:col-span-6">
          <p className="eyebrow">Why Women Choose Vero</p>
          <h2 className="mt-3 text-4xl md:text-5xl uppercase">Proof in <span className="italic gradient-text normal-case">every rep.</span></h2>
          <p className="mt-5 text-ink/70 leading-relaxed max-w-xl">
            This isn't a studio you try once. It's the place women keep coming
            back to — because it works, and because it feels like home.
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <Trust v="500+" l="Women coached" />
            <Trust v="12 wks" l="Transformations" />
            <Trust v="Growing" l="Community" />
          </div>

          <div className="mt-8 grid gap-3">
            {quotes.map((t, i) => (
              <blockquote key={i} className="bg-rose-50 border border-rose-100 rounded-2xl px-5 py-4">
                <p className="text-sm text-ink/85">"{t.q}"</p>
                <footer className="mt-1 text-xs text-ink/55">{t.a}</footer>
              </blockquote>
            ))}
          </div>

          <div className="mt-8 flex gap-3 flex-wrap">
            <Link href="/events" className="btn-rose">Join the Next Session →</Link>
            <Link href="/coaching#apply" className="btn-ghost">Apply for Coaching</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust({ v, l }: { v: string; l: string }) {
  return (
    <div className="bg-white rounded-2xl border border-rose-100 px-5 py-4">
      <p className="font-display text-3xl">{v}</p>
      <p className="text-xs uppercase tracking-widest text-ink/50 mt-1">{l}</p>
    </div>
  );
}
