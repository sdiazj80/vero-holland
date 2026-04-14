import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import ContactForm from "@/components/contact-form";
import { SITE, SOCIALS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Vero Holland — coaching inquiries, events, partnerships.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's"
        highlight="talk."
        subtitle="Coaching, events, brand partnerships, or just a question — pick the right channel and we'll get back fast."
      />

      <section className="container-x py-12 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 space-y-6">
          <Card title="Coaching Inquiries"
                desc="Serious about transforming? Apply through the coaching form for fastest review."
                cta={{ label: "Apply for Coaching →", href: "/coaching#apply" }} />
          <Card title="Event RSVPs"
                desc="Want to be on the list for the next Booty Brunch & Bubbly? Use the form — pick subject = Event."
                cta={{ label: "Follow @booty.brunch.bubbly →", href: SOCIALS.instagram_events.url, external: true }} />
          <Card title="Brand & Partnerships"
                desc="Collaborations, sponsorships, and press — we'd love to hear from aligned brands." />

          <div className="bg-cream border border-rose-100 rounded-2xl p-6">
            <p className="eyebrow">Direct</p>
            <p className="mt-2 text-sm text-ink/70">{SITE.email}</p>
            <p className="text-sm text-ink/70">{SITE.city}</p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </section>
    </>
  );
}

function Card({ title, desc, cta }: {
  title: string; desc: string; cta?: { label: string; href: string; external?: boolean };
}) {
  return (
    <div className="rounded-2xl bg-white border border-rose-100 p-6">
      <p className="font-display text-2xl">{title}</p>
      <p className="mt-2 text-sm text-ink/70 leading-relaxed">{desc}</p>
      {cta && (
        <a href={cta.href}
           target={cta.external ? "_blank" : undefined}
           rel={cta.external ? "noopener" : undefined}
           className="mt-3 inline-flex text-rose-600 font-semibold text-sm">{cta.label}</a>
      )}
    </div>
  );
}
