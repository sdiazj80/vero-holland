import Link from "next/link";
import Image from "next/image";
import { ASSETS } from "@/lib/assets";

export default function EventHighlight() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div aria-hidden className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-rose-600/40 blur-3xl" />
      <div aria-hidden className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-rose-400/30 blur-3xl" />

      <div className="container-x relative py-24 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <p className="eyebrow text-rose-300">Signature Event</p>
          <h2 className="mt-3 text-4xl md:text-6xl text-white">
            Booty Brunch <br />& <span className="italic gradient-text">Bubbly™</span>
          </h2>
          <p className="mt-5 max-w-md text-white/70 leading-relaxed">
            The workout. The brunch. The bubbly. The women. A signature event series
            built for the girls who like to move hard and celebrate harder.
          </p>
          <div className="mt-8 flex gap-3 flex-wrap">
            <Link href="/events" className="btn-rose">See Upcoming Events</Link>
            <a
              href="https://instagram.com/booty.brunch.bubbly"
              target="_blank" rel="noopener"
              className="btn-ghost border-white/40 text-white hover:bg-white hover:text-ink"
            >
              @booty.brunch.bubbly
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {[
              { v: "12+", l: "Events Hosted" },
              { v: "Sold", l: "Out Every Time" },
              { v: "4.9★", l: "Avg. Rating" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-2xl text-white">{s.v}</p>
                <p className="text-xs uppercase tracking-widest text-white/50">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2">
          <div className="grid grid-cols-6 grid-rows-6 gap-3 h-[560px] md:h-[640px]">
            <Tile src={ASSETS.events.bbb4Main} alt="Booty Brunch & Bubbly main" className="col-span-4 row-span-4" />
            <Tile src={ASSETS.events.bbb1} alt="BBB community" className="col-span-2 row-span-3" />
            <Tile src={ASSETS.events.bounce} alt="Group bounce class" className="col-span-2 row-span-3" />
            <Tile src={ASSETS.events.bbb2} alt="BBB vibe" className="col-span-2 row-span-2" />
            <Tile src={ASSETS.events.bbb3} alt="BBB candid" className="col-span-2 row-span-2" />
            <Tile src={ASSETS.events.bullride} alt="Bullride moment" className="col-span-2 row-span-2" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Tile({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative rounded-2xl overflow-hidden group ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 40vw"
        className="object-cover group-hover:scale-105 transition duration-700"
      />
      <div className="absolute inset-0 ring-1 ring-white/10 rounded-2xl" />
    </div>
  );
}
