import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/page-hero";
import { ASSETS } from "@/lib/assets";

export const metadata: Metadata = {
  title: "About Vero",
  description: "The story, the mission, and the brand behind Vero Holland and Vero Fitness.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The Founder"
        title="Vero Holland."
        highlight="The brand behind it all."
        subtitle="Coach. Founder. Community-builder. Houston-based, globally connected."
      />

      <section className="container-x py-12 grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="relative aspect-[4/5] rounded-[36px] overflow-hidden ring-1 ring-rose-200 shadow-2xl shadow-rose-300/40">
            <Image
              src={ASSETS.about}
              alt="Vero Holland portrait"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-7 space-y-10">
          <div>
            <p className="eyebrow">Story</p>
            <h2 className="mt-3 text-3xl md:text-4xl">From personal journey to a movement.</h2>
            <p className="mt-4 text-ink/75 leading-relaxed">
              Vero didn't start with a business plan. She started with a barbell, a
              notebook, and a belief that women deserve coaching that actually
              listens. What began as helping friends in Houston turned into 1:1 clients
              across the country, and eventually — Booty Brunch & Bubbly™, the
              signature event series that put a community to the work.
            </p>
          </div>

          <div>
            <p className="eyebrow">Mission</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Build strong women. <span className="italic gradient-text">Then build them up.</span></h2>
            <p className="mt-4 text-ink/75 leading-relaxed">
              Every program, event, and post is built around one thing — making
              women feel powerful in their own bodies. Strong, soft, sculpted, and
              undeniably themselves. No shrinking. No shame. Ever.
            </p>
          </div>

          <div>
            <p className="eyebrow">Brand Identity</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Premium, pink, present.</h2>
            <p className="mt-4 text-ink/75 leading-relaxed">
              Pink isn't soft here — it's confident. The brand is feminine without
              being fragile, premium without being pretentious. Whether it's a
              workout, an event, or a piece of merch — if it carries the Vero name,
              it carries the standard.
            </p>
          </div>

          <div>
            <p className="eyebrow">What Makes It Different</p>
            <ul className="mt-4 grid sm:grid-cols-2 gap-4">
              {[
                { t: "Personal", d: "Vero coaches every client herself. No assistants. No bots." },
                { t: "Community", d: "You join more than a program — you join a network of women." },
                { t: "Real", d: "Real food, real lifts, real results. No wellness theater." },
                { t: "Premium", d: "Built to a standard. Designed by Alamo 48 Studio." },
              ].map((p) => (
                <li key={p.t} className="bg-rose-50 border border-rose-100 rounded-2xl p-5">
                  <p className="font-display text-xl">{p.t}</p>
                  <p className="mt-1 text-sm text-ink/70">{p.d}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 flex gap-3 flex-wrap">
            <Link href="/coaching#apply" className="btn-rose">Apply for Coaching</Link>
            <Link href="/events" className="btn-ghost">See Upcoming Events</Link>
          </div>
        </div>
      </section>
    </>
  );
}
