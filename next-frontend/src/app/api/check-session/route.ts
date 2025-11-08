import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");
  const isValid = session?.value === process.env.AUTH_SECRET;

  return NextResponse.json({ isAdmin: !!isValid });
}
