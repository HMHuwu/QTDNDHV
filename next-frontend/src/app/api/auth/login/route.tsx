import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (email === process.env.ADMIN_USER && password === process.env.ADMIN_PASS) {
    // Tạo cookie lưu session
    (
      await // Tạo cookie lưu session
      cookies()
    ).set("admin_session", process.env.AUTH_SECRET!, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 2, // 2 giờ
    });

    return NextResponse.json({
      success: true,
      message: "Đăng nhập thành công",
    });
  }

  return NextResponse.json(
    { success: false, message: "Sai tài khoản hoặc mật khẩu" },
    { status: 401 }
  );
}
