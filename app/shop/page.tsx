import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/page-hero";
import { ASSETS } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Shop",
  description: "Vero Holland merch, programs, and digital drops. Wear the brand.",
};

const collections = [
  { title: "Apparel", desc: "Soft-touch fabrics. Pink-forward palette. Built to move in.", count: "12 pieces" },
  { title: "Digital Programs", desc: "Self-paced training and nutrition guides. Direct from Vero.", count: "4 drops" },
  { title: "Accessories", desc: "Bottles, bands, totes — the lifestyle essentials.", count: "8 items" },
];

const products = [
  { name: "Vero Sculpt Set", price: "$78", tag: "Bestseller", img: ASSETS.lifestyle.b },
  { name: "Bubbly Crop Tee", price: "$42", tag: "New", img: ASSETS.events.bbb1 },
  { name: "12-Week Glow Up Guide", price: "$49", tag: "Digital", img: ASSETS.heroAlt },
  { name: "Confidence Hoodie", price: "$72", tag: "Limited", img: ASSETS.events.bbb3 },
  { name: "BBB Tote", price: "$28", tag: "Event", img: ASSETS.events.bbb2 },
  { name: "Bullride Tank", price: "$38", tag: "Drop", img: ASSETS.events.bullride },
  { name: "Bounce Shorts", price: "$54", tag: "New", img: ASSETS.events.bounce },
  { name: "Sip & Sweat Bottle", price: "$24", tag: "Restock", img: ASSETS.authority },
];

export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="Shop the Brand"
        title="Wear the"
        highlight="movement."
        subtitle="Apparel, accessories, and digital programs from the Vero Holland universe. Built around the same energy you get in our events and coaching."
      />

      <section className="container-x py-12 grid md:grid-cols-3 gap-4">
        {collections.map((c) => (
          <div key={c.title} className="rounded-3xl bg-rose-50 border border-rose-100 p-7">
            <p className="text-xs uppercase tracking-widest text-rose-600 font-semibold">{c.count}</p>
            <p className="mt-3 font-display text-2xl">{c.title}</p>
            <p className="mt-2 text-ink/70 text-sm leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </section>

      <section className="container-x py-8">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl">Featured drops</h2>
          <p className="text-sm text-ink/60">Storefront launching soon — get notified.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((p) => (
            <article key={p.name} className="group">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-rose-50 border border-rose-100">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition duration-700"
                />
                <span className="absolute top-3 left-3 bg-white/95 backdrop-blur rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest">
                  {p.tag}
                </span>
              </div>
              <div className="mt-3 flex justify-between items-center">
                <p className="font-medium text-sm">{p.name}</p>
                <p className="text-rose-600 font-semibold text-sm">{p.price}</p>
              </div>
              <button className="mt-2 w-full text-xs py-2 rounded-full border border-rose-200 hover:bg-ink hover:text-white hover:border-ink transition">
                Notify Me
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="container-x py-20">
        <div className="rounded-[40px] bg-ink text-white p-10 md:p-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="eyebrow text-rose-300">Drop List</p>
            <h2 className="mt-3 text-4xl md:text-5xl text-white">First in line for <span className="italic gradient-text">every drop.</span></h2>
            <p className="mt-3 text-white/70 max-w-md">Get the launch dates, restocks, and members-only drops before anyone else.</p>
          </div>
          <Link href="/contact?subject=shop" className="btn-rose justify-self-start md:justify-self-end">Join the Drop List →</Link>
        </div>
      </section>
    </>
  );
}
