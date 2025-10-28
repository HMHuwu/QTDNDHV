// app/api/delete/[id]/route.ts
import { google } from "googleapis";
import { NextResponse } from "next/server";

const CLIENT_ID = "YOUR_CLIENT_ID";
const CLIENT_SECRET = "YOUR_CLIENT_SECRET";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = "YOUR_REFRESH_TOKEN";

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({ version: "v3", auth: oauth2Client });

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  await drive.files.delete({ fileId: params.id });
  return NextResponse.json({ success: true });
}
