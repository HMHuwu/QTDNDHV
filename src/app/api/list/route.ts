// app/api/list/route.ts
import { NextResponse } from "next/server";
import { google } from "googleapis";

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

export async function GET() {
  const response = await drive.files.list({
    q: "mimeType contains 'image/' and trashed = false",
    fields: "files(id,name,webViewLink,thumbnailLink)",
    pageSize: 20,
  });

  return NextResponse.json(response.data.files);
}
