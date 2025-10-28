import { Phone, Facebook } from "lucide-react";
import Image from "next/image";

export default function FloatingButtons() {
  return (
    <div className="fixed right-4 top-[60%] flex flex-col gap-4 z-50">
      {/* Điện thoại */}
      <a
        href="tel:02273964116"
        className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg hover:scale-110 transition"
      >
        <Phone size={24} />
      </a>

      {/* Zalo (dùng icon custom) */}
      <a
        href="https://zalo.me/so-dien-thoai-cua-quy"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-110 transition overflow-hidden"
      >
        <Image src="/image/OIP.webp" alt="Zalo" width={52} height={52} />
      </a>

      {/* Facebook */}
      <a
        href="https://facebook.com/tenpage"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg hover:scale-110 transition"
      >
        <Facebook size={24} />
      </a>
    </div>
  );
}
