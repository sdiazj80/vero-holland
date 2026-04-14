import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: Record<string, string>;
  try { body = await req.json(); } catch { return NextResponse.json({ ok: false }, { status: 400 }); }

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  console.log("[CONTACT MESSAGE]", { received_at: new Date().toISOString(), ...body });

  const apiKey = process.env.RESEND_API_KEY;
  const inbox = process.env.COACH_INBOX;
  if (apiKey && inbox) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: "Vero Holland <hello@veroholland.com>",
          to: [inbox],
          subject: `Contact (${body.subject ?? "general"}) — ${body.name}`,
          text: Object.entries(body).map(([k, v]) => `${k}: ${v}`).join("\n"),
        }),
      });
    } catch (e) { console.error(e); }
  }

  return NextResponse.json({ ok: true });
}
