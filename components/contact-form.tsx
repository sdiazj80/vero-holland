"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ContactFormInner() {
  const params = useSearchParams();
  const initialSubject = params.get("subject") ?? "general";
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl bg-gradient-to-br from-rose-500 to-rose-700 text-white p-10 text-center">
        <h3 className="font-display text-3xl">Got it.</h3>
        <p className="mt-3 text-white/85">We'll get back to you within 48 hours.</p>
        <button onClick={() => setStatus("idle")} className="mt-6 px-6 py-3 rounded-full bg-white text-ink font-semibold">Send another</button>
      </div>
    );
  }

  const cls = "w-full rounded-xl border border-rose-200 bg-rose-50/40 px-4 py-3 text-sm focus:outline-none focus:border-rose-500 focus:bg-white transition";

  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-white border border-rose-100 p-6 md:p-10 shadow-xl shadow-rose-100/60">
      <p className="eyebrow">Send a message</p>
      <h3 className="mt-2 font-display text-3xl">Drop us a line.</h3>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Name *</label>
          <input name="name" required className={cls} />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Email *</label>
          <input type="email" name="email" required className={cls} />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold mb-2">Subject *</label>
          <select name="subject" required defaultValue={initialSubject} className={cls}>
            <option value="general">General Question</option>
            <option value="coaching">Coaching</option>
            <option value="event">Event / RSVP</option>
            <option value="shop">Shop / Drop List</option>
            <option value="partnership">Partnership / Press</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold mb-2">Message *</label>
          <textarea name="message" required rows={5} className={cls} />
        </div>
      </div>

      {status === "error" && <p className="mt-4 text-sm text-rose-700">⚠ Something went wrong. Try again.</p>}

      <button disabled={status === "submitting"} className="btn-rose mt-6 w-full md:w-auto disabled:opacity-60">
        {status === "submitting" ? "Sending..." : "Send Message →"}
      </button>
    </form>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={null}>
      <ContactFormInner />
    </Suspense>
  );
}
