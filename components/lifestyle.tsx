import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/lib/assets";

export default function Lifestyle() {
  return (
    <section className="container-x py-24">
      <div className="grid lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-7 relative rounded-[36px] overflow-hidden min-h-[420px] md:min-h-[520px]">
          <Image
            src={ASSETS.lifestyle.a}
            alt="Vero Holland — premium lifestyle"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 text-white">
            <p className="eyebrow text-rose-200">The Brand</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl text-white max-w-lg">
              Feminine. Strong. <span className="italic gradient-text">Effortless.</span>
            </h2>
          </div>
        </div>

        <div className="lg:col-span-5 grid grid-rows-[1fr_auto] gap-6">
          <div className="relative rounded-[28px] overflow-hidden min-h-[260px]">
            <Image
              src={ASSETS.lifestyle.b}
              alt="Vero Holland lifestyle"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="bg-rose-50 border border-rose-100 rounded-[28px] p-7">
            <p className="text-ink/75 leading-relaxed">
              The Vero brand is more than fitness — it's a way of moving through the
              world. Confident. Connected. Always with the bubbly nearby.
            </p>
            <Link href="/about" className="btn-ghost mt-5 text-sm">Read the Story →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
