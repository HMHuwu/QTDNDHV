"use client";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function FloatingButtons() {
  const [isPullOut, setIsPullOut] = useState(false);

  return (
    <div className="fixed right-0 top-[60%] flex items-center justify-center z-30">
      <div
        className={`flex items-center gap-1 bg-[#fedede91] rounded-l-xl  pr-2 py-2 shadow-xl transition-all duration-500 ${
          isPullOut ? "translate-x-0" : "translate-x-[66%]"
        }`}
      >
        {/* Nút mũi tên */}
        <button
          onClick={() => setIsPullOut(!isPullOut)}
          className="w-8 h-36 bg-transparent focus:ring-transparent text-red-700 rounded-full flex items-center justify-center cursor-pointer transition"
        >
          {isPullOut ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>

        {/* Các icon (ẩn hiện cùng khối) */}
        <div className="flex flex-col gap-3 items-center justify-center">
          {/* Điện thoại */}
          <a
            href="tel:02273898060"
            className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg hover:scale-110 transition"
          >
            <Phone size={20} />
          </a>

          {/* Zalo */}
          <a
            href="https://zalo.me/02273898060"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-110 transition overflow-hidden"
          >
            <Image src="/image/OIP.webp" alt="Zalo" width={40} height={40} />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/groups/817347429807962"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-17 h-11 rounded-full flex items-center justify-center hover:scale-110 transition overflow-hidden"
          >
            <Image src="/image/FB-Logo-No-Background.png" alt="Facebook" fill />
          </a>
        </div>
      </div>
    </div>
  );
}
