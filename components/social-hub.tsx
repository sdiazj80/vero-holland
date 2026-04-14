import { SOCIALS } from "@/lib/site";

const tiles = [
  { label: "Personal", handle: SOCIALS.instagram_personal.handle, url: SOCIALS.instagram_personal.url, sub: "Daily life, real talk, behind the brand." },
  { label: "Coaching", handle: SOCIALS.instagram_coaching.handle, url: SOCIALS.instagram_coaching.url, sub: "Training tips, transformations, applications." },
  { label: "Events", handle: SOCIALS.instagram_events.handle, url: SOCIALS.instagram_events.url, sub: "Booty Brunch & Bubbly™ — next event drops here." },
  { label: "TikTok", handle: SOCIALS.tiktok.handle, url: SOCIALS.tiktok.url, sub: "Workouts, energy, the unfiltered version." },
];

export default function SocialHub() {
  return (
    <section className="container-x py-24">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="eyebrow">Stay Connected</p>
        <h2 className="mt-3 text-4xl md:text-5xl">The whole <span className="italic gradient-text">Vero universe.</span></h2>
        <p className="mt-4 text-ink/70">
          Follow the brand across every platform. Pick your favorite — they're all
          part of the same movement.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {tiles.map((t) => (
          <a
            key={t.handle}
            href={t.url}
            target="_blank" rel="noopener"
            className="group relative rounded-2xl p-6 border border-rose-100 bg-white hover:bg-gradient-to-br hover:from-rose-500 hover:to-rose-700 hover:text-white transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-rose-300/40"
          >
            <p className="text-xs uppercase tracking-widest font-semibold text-rose-600 group-hover:text-white/80">{t.label}</p>
            <p className="mt-3 font-display text-xl">{t.handle}</p>
            <p className="mt-2 text-sm text-ink/60 group-hover:text-white/80">{t.sub}</p>
            <p className="mt-6 text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Follow →
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
