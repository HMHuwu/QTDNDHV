// app/api/upload/route.ts
import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import fs from "fs";
import path from "path";
import { IncomingForm } from "formidable";
import { promisify } from "util";

export const dynamic = "force-dynamic"; // bắt buộc khi xử lý form lớn

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

export async function POST(req: NextRequest) {
  const form = new IncomingForm({ uploadDir: "./tmp", keepExtensions: true });
  const parseForm = promisify(form.parse.bind(form));

  const [fields, files] = await parseForm(await req.formData());

  const file = files.file[0];
  const filePath = file.filepath;
  const mimeType = file.mimetype || "application/octet-stream";

  const response = await drive.files.create({
    requestBody: {
      name: file.originalFilename,
      mimeType,
    },
    media: {
      mimeType,
      body: fs.createReadStream(filePath),
    },
  });

  await drive.permissions.create({
    fileId: response.data.id,
    requestBody: {
      role: "reader",
      type: "anyone",
    },
  });

  const result = await drive.files.get({
    fileId: response.data.id,
    fields: "webViewLink, webContentLink",
  });

  fs.unlinkSync(filePath); // xoá file tạm

  return NextResponse.json({
    id: response.data.id,
    link: result.data.webViewLink,
  });
}
