import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const session = req.cookies.get("admin_session")?.value;

  // Nếu chưa đăng nhập → chặn truy cập vào /admin trừ /admin/login
  if (req.nextUrl.pathname.startsWith("/admin") && !session) {
    if (!req.nextUrl.pathname.startsWith("/admin/login")) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  // Nếu đã đăng nhập → chặn quay lại trang login
  if (req.nextUrl.pathname.startsWith("/admin/login") && session) {
    return NextResponse.redirect(new URL("/admin/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"], // áp dụng cho tất cả route /admin
};
