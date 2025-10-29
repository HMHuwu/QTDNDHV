import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    // Tạo transporter Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Cấu hình email gửi đi
    const mailOptions = {
      from: `"Liên hệ Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_RECEIVER || process.env.GMAIL_USER,
      subject: `Tin nhắn mới từ ${name}`,
      text: `Họ và tên: ${name}\n\nEmail: ${email}\n\nSĐT: ${phone}\n\nTiêu đề: ${subject}\n\nNội dung:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({
      success: true,
      message: "Gửi tin nhắn thành công!",
    });
  } catch (error: unknown) {
    console.error("Lỗi gửi email:", error);
    return Response.json(
      { success: false, message: "Không gửi được tin nhắn." },
      { status: 500 }
    );
  }
}
