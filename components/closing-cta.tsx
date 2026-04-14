import Link from "next/link";
import Image from "next/image";
import { ASSETS } from "@/lib/assets";

export default function ClosingCTA() {
  return (
    <section className="container-x pb-24">
      <div className="relative overflow-hidden rounded-[40px] grain min-h-[460px] flex items-end">
        <Image
          src={ASSETS.finalCta}
          alt="Take the next step"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-rose-700/85 via-rose-600/70 to-rose-500/50" />
        <div aria-hidden className="absolute -top-32 -right-20 w-96 h-96 rounded-full bg-white/15 blur-3xl" />

        <div className="relative w-full p-10 md:p-16 text-white">
          <p className="eyebrow text-rose-100">Final Step</p>
          <h2 className="mt-3 text-4xl md:text-6xl text-white max-w-3xl">
            Stop waiting on <span className="italic">someday.</span>
          </h2>
          <p className="mt-4 text-white/90 max-w-xl">
            Coaching applications open. Limited spots. If you're serious about the
            change, this is where you start.
          </p>
          <div className="mt-8 flex gap-3 flex-wrap">
            <Link href="/coaching#apply" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-ink font-semibold hover:bg-cream transition shadow-xl">
              Apply for Coaching →
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-white/60 text-white font-semibold hover:bg-white/10 transition">
              Ask a Question
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
