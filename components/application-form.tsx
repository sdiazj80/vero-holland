"use client";
import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ApplicationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl bg-gradient-to-br from-rose-500 to-rose-700 text-white p-10 md:p-14 text-center">
        <p className="eyebrow text-rose-100">Application Received</p>
        <h3 className="mt-3 font-display text-4xl">You're in the queue.</h3>
        <p className="mt-4 max-w-md mx-auto text-white/85">
          Vero personally reviews every application. Expect a response within
          48 hours. In the meantime — follow{" "}
          <a className="underline" href="https://instagram.com/verofitness.coaching" target="_blank" rel="noopener">@verofitness.coaching</a>{" "}
          for daily training drops.
        </p>
        <button onClick={() => setStatus("idle")} className="mt-8 inline-flex px-6 py-3 rounded-full bg-white text-ink font-semibold">
          Submit Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-white border border-rose-100 p-6 md:p-10 shadow-xl shadow-rose-100/60">
      <p className="eyebrow">Coaching Application</p>
      <h3 className="mt-2 font-display text-3xl md:text-4xl">Tell me about you.</h3>
      <p className="mt-2 text-sm text-ink/60">Fields marked * are required. Real answers get real spots.</p>

      <div className="mt-8 grid md:grid-cols-2 gap-5">
        <Field label="Full Name *" name="name" required />
        <Field label="Email *" name="email" type="email" required />
        <Field label="Phone *" name="phone" type="tel" required />
        <Field label="Instagram Handle" name="instagram" placeholder="@yourhandle" />

        <Field className="md:col-span-2" label="Your Goals *" name="goals" required textarea
               placeholder="What do you want to achieve in the next 12 weeks?" />
        <Field className="md:col-span-2" label="Where Are You Now? *" name="current_state" required textarea
               placeholder="Current training, nutrition, body, mindset — be honest." />
        <Field className="md:col-span-2" label="What Would Success Look Like? *" name="desired_outcome" required textarea
               placeholder="Paint the picture. Specific is sexy." />

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold mb-2">Commitment Level *</label>
          <div className="grid sm:grid-cols-3 gap-2">
            {["Curious", "Ready", "All in"].map((c) => (
              <label key={c} className="cursor-pointer">
                <input type="radio" name="commitment" value={c} required className="peer sr-only" />
                <div className="rounded-full border border-rose-200 px-4 py-3 text-center text-sm font-medium peer-checked:bg-ink peer-checked:text-white peer-checked:border-ink hover:border-rose-400 transition">
                  {c}
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-rose-700">⚠ {error}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-rose mt-8 w-full md:w-auto disabled:opacity-60 disabled:cursor-wait"
      >
        {status === "submitting" ? "Sending..." : "Submit Application →"}
      </button>
      <p className="mt-3 text-xs text-ink/50">
        Your info is private. Used only to review your fit for the program.
      </p>
    </form>
  );
}

function Field({
  label, name, type = "text", required, placeholder, textarea, className = "",
}: {
  label: string; name: string; type?: string; required?: boolean;
  placeholder?: string; textarea?: boolean; className?: string;
}) {
  const cls = "w-full rounded-xl border border-rose-200 bg-rose-50/40 px-4 py-3 text-sm focus:outline-none focus:border-rose-500 focus:bg-white transition";
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-semibold mb-2">{label}</label>
      {textarea ? (
        <textarea id={name} name={name} required={required} placeholder={placeholder} rows={4} className={cls} />
      ) : (
        <input id={name} name={name} type={type} required={required} placeholder={placeholder} className={cls} />
      )}
    </div>
  );
}
