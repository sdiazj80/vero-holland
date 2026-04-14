import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/page-hero";
import { ASSETS } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Events · Booty Brunch & Bubbly™",
  description: "Signature women-only fitness events by Vero Holland. Workout, brunch, and bubbly. Join the community.",
};

const past = [
  { title: "Bubbly Vol. VIII — Houston", date: "Feb 2026", img: ASSETS.events.bbb4Main },
  { title: "Bounce Class Pop-Up", date: "Nov 2025", img: ASSETS.events.bounce },
  { title: "Pink Pump", date: "Sep 2025", img: ASSETS.events.bbb1 },
  { title: "Bubbly Vol. VII", date: "Jul 2025", img: ASSETS.events.bbb2 },
  { title: "Booty Brunch Vol. V", date: "May 2025", img: ASSETS.events.bbb3 },
  { title: "Bullride Night", date: "Mar 2025", img: ASSETS.events.bullride },
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Booty Brunch & Bubbly™"
        title="The signature event for"
        highlight="strong, soft, sparkling women."
        subtitle="A workout that earns it. A brunch that celebrates it. A community that keeps showing up."
      />

      {/* Featured event */}
      <section className="container-x">
        <div className="relative overflow-hidden rounded-[40px] bg-ink text-white grain">
          <div aria-hidden className="absolute -top-32 -right-20 w-[500px] h-[500px] rounded-full bg-rose-500/40 blur-3xl" />
          <div className="grid lg:grid-cols-2 relative">
            <div className="p-10 md:p-16">
              <p className="eyebrow text-rose-300">Next Event</p>
              <h2 className="mt-3 text-4xl md:text-6xl text-white">Bubbly Vol. IX</h2>
              <p className="mt-3 text-white/70 max-w-md">
                A morning workout led by Vero. Then brunch, bubbly, and the kind of
                photos you'll actually post. Hosted in Houston.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4 max-w-md">
                <Detail label="Date" value="Coming Soon" />
                <Detail label="City" value="Houston, TX" />
                <Detail label="Spots" value="40 only" />
              </div>
              <div className="mt-8 flex gap-3 flex-wrap">
                <Link href="/contact?subject=event" className="btn-rose">RSVP / Get Notified</Link>
                <a href="https://instagram.com/booty.brunch.bubbly" target="_blank" rel="noopener" className="btn-ghost border-white/40 text-white hover:bg-white hover:text-ink">
                  Follow @booty.brunch.bubbly
                </a>
              </div>
            </div>
            <div className="relative min-h-[360px] lg:min-h-[480px]">
              <Image
                src={ASSETS.events.bbb4Main}
                alt="Booty Brunch & Bubbly featured event"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink to-transparent lg:from-ink/60" />
            </div>
          </div>
        </div>
      </section>

      {/* Vibe */}
      <section className="container-x py-20 grid lg:grid-cols-3 gap-8">
        {[
          { t: "The Movement", d: "45 min of sculpt + sweat. Designed to make you feel powerful — not punished." },
          { t: "The Brunch", d: "Real food. Curated menus. Mimosas (or mocktails) that match the vibe." },
          { t: "The Community", d: "You walk in alone. You leave with friends. That's the rule." },
        ].map((c) => (
          <div key={c.t} className="rounded-3xl bg-white border border-rose-100 p-7">
            <p className="font-display text-2xl">{c.t}</p>
            <p className="mt-3 text-ink/70 leading-relaxed">{c.d}</p>
          </div>
        ))}
      </section>

      {/* Past events / archive */}
      <section className="container-x py-12">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <p className="eyebrow">The Archive</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Past <span className="italic gradient-text">events.</span></h2>
          </div>
          <p className="text-ink/60 max-w-sm text-sm">
            Every event has sold out. Every event has produced friendships, transformations, and energy you can feel.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {past.map((e) => (
            <div key={e.title} className="group relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src={e.img}
                alt={e.title}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white">
                <p className="text-xs uppercase tracking-widest text-rose-200">{e.date}</p>
                <p className="font-display text-2xl mt-1">{e.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-20">
        <div className="rounded-[40px] bg-gradient-to-br from-rose-400 via-rose-500 to-rose-700 text-white p-10 md:p-16 text-center">
          <p className="eyebrow text-rose-100">Don't miss the next one</p>
          <h2 className="mt-3 text-4xl md:text-5xl text-white">Get on the <span className="italic">list.</span></h2>
          <p className="mt-3 text-white/85 max-w-md mx-auto">Coaching clients always get first dibs. Apply now to lock your spot.</p>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <Link href="/coaching#apply" className="inline-flex px-7 py-4 rounded-full bg-white text-ink font-semibold">Apply for Coaching</Link>
            <Link href="/contact?subject=event" className="inline-flex px-7 py-4 rounded-full border border-white/60 text-white font-semibold">Notify Me</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-white/50">{label}</p>
      <p className="mt-1 font-display text-lg text-white">{value}</p>
    </div>
  );
}
