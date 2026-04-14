"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV, SITE } from "@/lib/site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[color:var(--color-cream)]/85 backdrop-blur-md border-b border-rose-100" : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-rose-500 shadow-[0_0_18px_rgba(244,63,127,0.7)] group-hover:scale-110 transition" />
          <span className="font-display text-xl tracking-tight">
            VERO <span className="text-rose-600">HOLLAND</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-ink/80 hover:text-rose-600 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-rose-500 after:transition-all hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/coaching#apply" className="hidden md:inline-flex btn-rose text-sm">
          Apply for Coaching
        </Link>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="w-6 h-0.5 bg-ink mb-1.5" />
          <div className="w-6 h-0.5 bg-ink mb-1.5" />
          <div className="w-4 h-0.5 bg-rose-600 ml-auto" />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-cream border-t border-rose-100 animate-[reveal_.3s_ease]">
          <div className="container-x py-6 flex flex-col gap-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg font-display py-1 hover:text-rose-600"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/coaching#apply"
              onClick={() => setOpen(false)}
              className="btn-rose mt-2 self-start"
            >
              Apply for Coaching
            </Link>
            <p className="text-xs text-ink/50 mt-2">{SITE.studio}</p>
          </div>
        </div>
      )}
    </header>
  );
}
