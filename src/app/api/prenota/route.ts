import { NextResponse } from "next/server";

// TODO: collegare a email (Resend) / DB / Google Calendar
export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validazione minima
    const required = ["nome", "cognome", "email", "telefono", "servizio", "data", "orario"];
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Campo mancante: ${field}` },
          { status: 400 }
        );
      }
    }

    // Placeholder: log a console. Sostituire con invio email o scrittura DB.
    console.log("[prenotazione]", body);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Richiesta non valida" }, { status: 400 });
  }
}
