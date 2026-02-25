import { NextResponse } from "next/server";
import { Resend } from "resend";
import { google } from "googleapis";

const resend = new Resend(process.env.RESEND_API_KEY);

const SHEET_ID = process.env.GOOGLE_SHEETS_ID!;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL!;
const FROM_EMAIL = "Cēzara Kauss <info@cezarakauss.lv>";

function getGoogleAuth() {
  return new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(
        /\\n/g,
        "\n"
      ),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

async function appendToSheet(data: {
  teamName: string;
  captainName: string;
  email: string;
  phone: string;
  comment: string;
  hasLogo: boolean;
}) {
  const auth = getGoogleAuth();
  const sheets = google.sheets({ version: "v4", auth });
  const timestamp = new Date().toLocaleString("lv-LV", {
    timeZone: "Europe/Riga",
  });

  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: "Sheet1!A:G",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          timestamp,
          data.teamName,
          data.captainName,
          data.email,
          data.phone,
          data.comment || "",
          data.hasLogo ? "Jā (e-pastā)" : "Nē",
        ],
      ],
    },
  });
}

async function sendAdminNotification(data: {
  teamName: string;
  captainName: string;
  email: string;
  phone: string;
  comment: string;
  logoBuffer: Buffer | null;
  logoFilename: string | null;
  logoType: string | null;
}) {
  await resend.emails.send({
    from: FROM_EMAIL,
    to: ADMIN_EMAIL,
    subject: `Jauna komanda: ${data.teamName}`,
    html: `
      <h2>Jauna komanda reģistrēta!</h2>
      <table style="border-collapse:collapse;font-family:sans-serif;">
        <tr><td style="padding:8px 16px 8px 0;font-weight:bold;">Komanda:</td><td style="padding:8px 0;">${data.teamName}</td></tr>
        <tr><td style="padding:8px 16px 8px 0;font-weight:bold;">Kapteinis:</td><td style="padding:8px 0;">${data.captainName}</td></tr>
        <tr><td style="padding:8px 16px 8px 0;font-weight:bold;">E-pasts:</td><td style="padding:8px 0;">${data.email}</td></tr>
        <tr><td style="padding:8px 16px 8px 0;font-weight:bold;">Tālrunis:</td><td style="padding:8px 0;">${data.phone}</td></tr>
        ${data.comment ? `<tr><td style="padding:8px 16px 8px 0;font-weight:bold;">Komentārs:</td><td style="padding:8px 0;">${data.comment}</td></tr>` : ""}
        <tr><td style="padding:8px 16px 8px 0;font-weight:bold;">Logo:</td><td style="padding:8px 0;">${data.logoBuffer ? "Pielikumā" : "Nav pievienots"}</td></tr>
        <tr><td style="padding:8px 16px 8px 0;font-weight:bold;">Laiks:</td><td style="padding:8px 0;">${new Date().toLocaleString("lv-LV", { timeZone: "Europe/Riga" })}</td></tr>
      </table>
    `,
    ...(data.logoBuffer && data.logoFilename
      ? {
          attachments: [
            {
              filename: data.logoFilename,
              content: data.logoBuffer,
              contentType: data.logoType || "image/png",
            },
          ],
        }
      : {}),
  });
}

async function sendConfirmationEmail(data: {
  teamName: string;
  captainName: string;
  email: string;
}) {
  await resend.emails.send({
    from: FROM_EMAIL,
    to: data.email,
    subject: "⚽ Pieteikums saņemts — Cēzara Kauss",
    html: `
      <div style="font-family:sans-serif;max-width:600px;color:#333;line-height:1.7;">
        <p>Paldies, ka reģistrējāt savu komandu turnīram <strong>Cēzara Kauss</strong>.</p>
        <p>Lūgums veikt apmaksu uz norādīto konta numuru, maksājuma mērķī norādot savas komandas nosaukumu, valsti un pilsētu no kuras pārstāvēta komanda, lai varam Jūs veiksmīgi apstiprināt turnīram:</p>

        <div style="background:#f7f7f7;padding:20px;margin:20px 0;border-left:4px solid #c9a227;">
          <p style="margin:0 0 4px;font-weight:bold;font-size:13px;color:#888;text-transform:uppercase;letter-spacing:1px;">Maksājuma detaļas:</p>
          <p style="margin:4px 0;"><strong>Biedrība "FUTBOLS GULBENĒ"</strong></p>
          <p style="margin:4px 0;">Reģ. nr. 40008347731</p>
          <p style="margin:4px 0;">LV42HABA0551061679039</p>
          <br/>
          <p style="margin:4px 0;"><strong>Dalības maksa — 100 EUR</strong></p>
        </div>

        <p>Komandas pēc pieteikuma nosūtīšanas saņem apstiprinājumu e-pastā un <strong>3 kalendāro dienu laikā</strong> veic dalības maksas pārskaitījumu. Ja pārskaitījums netiek veikts, komandas pieteikums tiek uzskatīts par atsauktu un tiek anulēts. Saņemot pārskaitījumu, komanda tiek iekļauta dalībnieku sarakstā. Apstiprināto komandu iekļaušana dalībnieku sarakstā notiek katru dienu pēc plkst. 18.00;</p>

        <p style="margin-top:24px;">Uz drīzu tikšanos,<br/><strong>Cēzara Kauss komanda!</strong></p>
      </div>
    `,
  });
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const teamName = formData.get("teamName") as string;
    const captainName = formData.get("captainName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const comment = (formData.get("comment") as string) || "";
    const logo = formData.get("logo") as File | null;

    if (!teamName || !captainName || !email || !phone) {
      return NextResponse.json(
        { error: "Visi lauki ir obligāti" },
        { status: 400 }
      );
    }

    // Validate logo
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/webp", "image/svg+xml"];
    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

    let logoBuffer: Buffer | null = null;
    let logoFilename: string | null = null;
    let logoType: string | null = null;

    if (logo && logo.size > 0) {
      if (!ALLOWED_TYPES.includes(logo.type)) {
        return NextResponse.json(
          { error: "Atļautie formāti: PNG, JPG, WEBP, SVG" },
          { status: 400 }
        );
      }
      if (logo.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: "Logo fails nedrīkst pārsniegt 5MB" },
          { status: 400 }
        );
      }
      logoBuffer = Buffer.from(await logo.arrayBuffer());
      logoFilename = logo.name;
      logoType = logo.type;
    }

    const results = await Promise.allSettled([
      appendToSheet({
        teamName,
        captainName,
        email,
        phone,
        comment,
        hasLogo: !!logoBuffer,
      }),
      sendAdminNotification({
        teamName,
        captainName,
        email,
        phone,
        comment,
        logoBuffer,
        logoFilename,
        logoType,
      }),
      sendConfirmationEmail({ teamName, captainName, email }),
    ]);

    if (results[0].status === "rejected") {
      console.error("Google Sheets error:", results[0].reason);
    }
    if (results[1].status === "rejected") {
      console.error("Admin email error:", results[1].reason);
    }
    if (results[2].status === "rejected") {
      console.error("Confirmation email error:", results[2].reason);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Reģistrācija neizdevās. Lūdzu, mēģiniet vēlreiz." },
      { status: 500 }
    );
  }
}
