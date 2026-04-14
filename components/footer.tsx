import Link from "next/link";
import { NAV, SITE, SOCIALS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-rose-100 bg-gradient-to-b from-[color:var(--color-cream)] to-rose-50">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-md">
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <span className="font-display text-2xl">
              VERO <span className="text-rose-600">HOLLAND</span>
            </span>
          </Link>
          <p className="mt-4 text-ink/70 leading-relaxed">
            Premium coaching, signature events, and a community built around
            confidence. Your transformation starts here.
          </p>
          <Link href="/coaching#apply" className="btn-rose mt-6 text-sm">
            Apply for Coaching
          </Link>
        </div>

        <div>
          <p className="eyebrow mb-4">Explore</p>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-ink/80 hover:text-rose-600 transition">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Stay Connected</p>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-rose-600" href={SOCIALS.instagram_personal.url} target="_blank" rel="noopener">Instagram · {SOCIALS.instagram_personal.handle}</a></li>
            <li><a className="hover:text-rose-600" href={SOCIALS.instagram_coaching.url} target="_blank" rel="noopener">Coaching · {SOCIALS.instagram_coaching.handle}</a></li>
            <li><a className="hover:text-rose-600" href={SOCIALS.instagram_events.url} target="_blank" rel="noopener">Events · {SOCIALS.instagram_events.handle}</a></li>
            <li><a className="hover:text-rose-600" href={SOCIALS.tiktok.url} target="_blank" rel="noopener">TikTok · {SOCIALS.tiktok.handle}</a></li>
            <li><a className="hover:text-rose-600" href={SOCIALS.facebook.url} target="_blank" rel="noopener">Facebook · {SOCIALS.facebook.handle}</a></li>
          </ul>
          <p className="mt-6 text-xs text-ink/50">{SITE.email}</p>
        </div>
      </div>

      <div className="border-t border-rose-100">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-ink/60">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>
            Designed & engineered by <span className="text-rose-600 font-semibold">{SITE.studio}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
