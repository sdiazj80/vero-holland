import Link from "next/link";
import Image from "next/image";
import { ASSETS } from "@/lib/assets";

export default function Hero() {
  return (
    <section className="relative overflow-hidden grain">
      <div aria-hidden className="absolute -top-32 -left-20 w-[560px] h-[560px] rounded-full bg-rose-200/60 blur-3xl" />
      <div aria-hidden className="absolute top-40 -right-32 w-[520px] h-[520px] rounded-full bg-rose-400/30 blur-3xl" />

      <div className="container-x relative pt-12 pb-20 md:pt-20 md:pb-28 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <p className="eyebrow reveal">Vero Fitness · est. Houston</p>
          <h1 className="reveal reveal-delay-1 mt-4 text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95]">
            Build the body. <br />
            Own the <span className="gradient-text italic">confidence.</span>
          </h1>
          <p className="reveal reveal-delay-2 mt-6 max-w-xl text-lg text-ink/70 leading-relaxed">
            Premium 1:1 coaching for women who are done playing small. Strength,
            sculpt, and a community that actually shows up — led by Vero Holland.
          </p>
          <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-3">
            <Link href="/coaching#apply" className="btn-rose">
              Apply for Coaching →
            </Link>
            <Link href="/results" className="btn-ghost">See Results</Link>
          </div>

          <div className="reveal reveal-delay-4 mt-12 flex flex-wrap items-center gap-8 text-sm text-ink/60">
            <Stat label="Women Coached" value="500+" />
            <span className="hidden sm:block w-px h-8 bg-ink/15" />
            <Stat label="Avg. Transformation" value="12 wks" />
            <span className="hidden sm:block w-px h-8 bg-ink/15" />
            <Stat label="Community" value="180k+" />
          </div>
        </div>

        <div className="lg:col-span-5 relative reveal reveal-delay-2">
          <div className="relative aspect-[4/5] rounded-[36px] overflow-hidden shadow-2xl shadow-rose-300/50 ring-1 ring-rose-200">
            <Image
              src={ASSETS.heroMain}
              alt="Vero Holland — fitness coach and founder"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/15 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 glass rounded-2xl p-4">
              <p className="text-xs text-ink/60 uppercase tracking-widest">Now booking</p>
              <p className="font-display text-xl mt-1">Spring Coaching Cohort</p>
            </div>
          </div>

          <div className="absolute -top-6 -left-6 hidden md:block bg-white rounded-2xl shadow-xl shadow-rose-200 p-4 w-44 rotate-[-6deg]">
            <p className="text-xs text-ink/50">Featured</p>
            <p className="font-display text-sm">Booty Brunch & Bubbly</p>
            <p className="text-xs mt-1 text-rose-600">Next event soon →</p>
          </div>

          <div className="absolute -bottom-6 -right-2 hidden md:flex glass rounded-2xl px-4 py-3 items-center gap-3 shadow-xl">
            <div className="flex -space-x-2">
              {[1,2,3].map(i => (
                <div key={i} className="w-7 h-7 rounded-full bg-gradient-to-br from-rose-300 to-rose-500 border-2 border-white" />
              ))}
            </div>
            <p className="text-xs leading-tight">
              <span className="font-semibold">+12 women</span><br />
              <span className="text-ink/60">started this week</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-display text-2xl text-ink">{value}</p>
      <p className="text-xs uppercase tracking-widest text-ink/50">{label}</p>
    </div>
  );
}
