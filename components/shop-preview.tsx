import Link from "next/link";
import Image from "next/image";
import { ASSETS } from "@/lib/assets";

const products = [
  { name: "Vero Sculpt Set", price: "$78", tag: "Bestseller", img: ASSETS.lifestyle.b },
  { name: "Bubbly Crop Tee", price: "$42", tag: "New", img: ASSETS.events.bbb1 },
  { name: "12-Week Glow Up Guide", price: "$49", tag: "Digital", img: ASSETS.heroAlt },
  { name: "Confidence Hoodie", price: "$72", tag: "Limited", img: ASSETS.events.bbb3 },
];

export default function ShopPreview() {
  return (
    <section className="container-x py-24">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
        <div>
          <p className="eyebrow">Shop the Brand</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Wear the <span className="italic gradient-text">movement.</span></h2>
        </div>
        <Link href="/shop" className="btn-ghost text-sm">Browse the Shop →</Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((p) => (
          <Link key={p.name} href="/shop" className="group">
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
          </Link>
        ))}
      </div>
    </section>
  );
}
