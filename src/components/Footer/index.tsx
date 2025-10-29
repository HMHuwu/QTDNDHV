"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-red-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-main rounded-lg flex items-center justify-center">
                <Image
                  src="/image/logo.png"
                  alt="Hồng Việt"
                  width={32}
                  height={32}
                  className="inset-0 w-10 h-10 object-cover overflow-visible"
                />
              </div>
              <div>
                <div className="text-white font-semibold">QTDND Hồng Việt</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Quỹ tín dụng nhân dân Hồng Việt - Đồng hành cùng cộng đồng, phát
              triển bền vững.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4 font-semibold">Liên kết nhanh</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/gioi-thieu", label: "Giới thiệu" },
                { href: "/san-pham-dich-vu", label: "Sản phẩm - Dịch vụ" },
                { href: "/lai-suat", label: "Lãi suất" },
                { href: "/tin-tuc", label: "Tin tức" },
                { href: "/lien-he", label: "Liên hệ" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-main-lighter"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4 font-semibold">Thông tin liên hệ</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>thôn Bá Thôn 2, xã Tiên Hưng, tỉnh Hưng Yên</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>02273 898 060</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>qtdhongviet08@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-white mb-4 font-semibold">Giờ làm việc</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <div>Thứ 2 - Thứ 6:</div>
                  <div>7:00 - 11:00 | 13:00 - 17:00</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 Quỹ tín dụng nhân dân Hồng Việt. Bảo lưu mọi quyền.</p>
        </div>
      </div>
    </footer>
  );
}
