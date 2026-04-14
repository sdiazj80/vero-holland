import Link from "next/link";
import { ASSETS } from "@/lib/assets";

export default function VideoSection() {
  return (
    <section className="relative w-full overflow-hidden bg-ink" style={{ height: "min(85vh, 820px)" }}>
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={ASSETS.events.bbb4Main}
        aria-hidden
      >
        <source src={ASSETS.video} type="video/mp4" />
      </video>

      {/* Soft dark overlay for legibility */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

      <div className="relative h-full container-x flex items-center">
        <div className="max-w-3xl text-white">
          <p className="eyebrow text-rose-300">Booty Brunch & Bubbly™</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-7xl text-white leading-[1] uppercase">
            THIS ISN'T A WORKOUT.<br />
            THIS IS A <span className="italic gradient-text">MOVEMENT.</span>
          </h2>
          <p className="mt-6 text-white/85 max-w-xl text-lg">
            High-energy classes. Real results. A community that pushes you.
          </p>
          <div className="mt-8 flex gap-3 flex-wrap">
            <Link href="/events" className="btn-rose">JOIN THE NEXT SESSION →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
