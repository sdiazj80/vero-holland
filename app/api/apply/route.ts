import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Application = {
  name?: string;
  email?: string;
  phone?: string;
  instagram?: string;
  goals?: string;
  current_state?: string;
  desired_outcome?: string;
  commitment?: string;
};

export async function POST(req: Request) {
  let body: Application;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const required = ["name", "email", "phone", "goals", "current_state", "desired_outcome", "commitment"] as const;
  for (const f of required) {
    if (!body[f] || String(body[f]).trim().length < 2) {
      return NextResponse.json({ ok: false, error: `Missing field: ${f}` }, { status: 400 });
    }
  }

  // Forwarding hook — wire to email provider (Resend, Postmark, etc.) when ready.
  // For now: log server-side so the deployment is functional out of the box.
  console.log("[COACHING APPLICATION]", {
    received_at: new Date().toISOString(),
    ...body,
  });

  // If RESEND_API_KEY + COACH_INBOX env vars are set, send the email.
  const apiKey = process.env.RESEND_API_KEY;
  const inbox = process.env.COACH_INBOX;
  if (apiKey && inbox) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Vero Holland <apply@veroholland.com>",
          to: [inbox],
          subject: `New Coaching Application — ${body.name}`,
          text: Object.entries(body).map(([k, v]) => `${k}: ${v}`).join("\n"),
        }),
      });
    } catch (e) {
      console.error("[email send failed]", e);
    }
  }

  return NextResponse.json({ ok: true });
}
