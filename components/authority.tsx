import Image from "next/image";
import { ASSETS } from "@/lib/assets";

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
            <p className="text-xs uppercase tracking-widest text-rose-600 font-semibold">Live Coaching</p>
            <p className="font-display text-base mt-1">Weekly check-ins · direct access</p>
          </div>
        </div>

        <div className="lg:col-span-6">
          <p className="eyebrow">Why Women Trust Vero</p>
          <h2 className="mt-3 text-4xl md:text-5xl">A coach who actually <span className="italic gradient-text">shows up.</span></h2>
          <p className="mt-5 text-ink/70 leading-relaxed max-w-xl">
            Vero isn't a brand on a screen. She's the woman pulling up to events,
            running classes, answering DMs at 9pm, and personally reviewing every
            client check-in. That's why this works.
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <Trust v="500+" l="Women coached" />
            <Trust v="12+" l="Events hosted" />
            <Trust v="180k+" l="Community" />
          </div>

          <div className="mt-8 flex gap-3 flex-wrap text-sm">
            <span className="px-4 py-2 rounded-full bg-rose-50 border border-rose-200 text-rose-700 font-medium">Certified Coach</span>
            <span className="px-4 py-2 rounded-full bg-rose-50 border border-rose-200 text-rose-700 font-medium">Houston-based</span>
            <span className="px-4 py-2 rounded-full bg-rose-50 border border-rose-200 text-rose-700 font-medium">Remote Worldwide</span>
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
