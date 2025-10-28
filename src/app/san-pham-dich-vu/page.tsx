"use client";
// import Image from "next/image";
import Link from "next/link";
import {
  Banknote,
  PiggyBank,
  TrendingUp,
  CreditCard,
  HandCoins,
  LineChart,
  FileCheck,
  Users,
  ArrowRight,
} from "lucide-react";

export default function ServicesPage() {
  const loanServices = [
    {
      icon: <Banknote className="w-10 h-10" />,
      title: "Cho vay tiêu dùng",
      description:
        "Đáp ứng nhu cầu chi tiêu cá nhân, mua sắm, du lịch với lãi suất ưu đãi.",
      features: [
        "Hạn mức lên đến 500 triệu VNĐ",
        "Thời gian vay linh hoạt đến 5 năm",
        "Thủ tục đơn giản, giải ngân nhanh",
      ],
    },
    {
      icon: <HandCoins className="w-10 h-10" />,
      title: "Cho vay sản xuất kinh doanh",
      description:
        "Hỗ trợ vốn cho các hoạt động sản xuất, kinh doanh, phát triển doanh nghiệp.",
      features: [
        "Hạn mức cao, phù hợp quy mô",
        "Lãi suất cạnh tranh",
        "Tư vấn kế hoạch kinh doanh",
      ],
    },
    {
      icon: <FileCheck className="w-10 h-10" />,
      title: "Cho vay thế chấp",
      description:
        "Cho vay với tài sản đảm bảo: nhà đất, ô tô, giấy tờ có giá.",
      features: [
        "Thẩm định giá trị tài sản chuyên nghiệp",
        "Hạn mức vay tối ưu",
        "Thời gian vay dài hạn",
      ],
    },
  ];

  const savingServices = [
    {
      icon: <PiggyBank className="w-10 h-10" />,
      title: "Tiết kiệm không kỳ hạn",
      description:
        "Gửi tiền linh hoạt, rút bất cứ lúc nào, vẫn hưởng lãi suất.",
      features: [
        "Rút tiền bất kỳ lúc nào",
        "Lãi suất cạnh tranh",
        "Không mất phí giao dịch",
      ],
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Tiết kiệm có kỳ hạn",
      description: "Gửi tiền với kỳ hạn cố định, lãi suất cao hơn.",
      features: [
        "Kỳ hạn từ 1 tháng đến 36 tháng",
        "Lãi suất hấp dẫn",
        "Tái tục tự động",
      ],
    },
    {
      icon: <LineChart className="w-10 h-10" />,
      title: "Tiết kiệm tích lũy",
      description: "Gửi tiền định kỳ hàng tháng, tích lũy cho tương lai.",
      features: [
        "Gửi định kỳ hàng tháng",
        "Tích lũy dài hạn",
        "Lãi suất ưu đãi",
      ],
    },
  ];

  const otherServices = [
    {
      icon: <CreditCard className="w-10 h-10" />,
      title: "Dịch vụ thanh toán",
      description:
        "Chuyển tiền, thanh toán hóa đơn, nạp tiền điện thoại nhanh chóng.",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Tư vấn tài chính",
      description: "Hỗ trợ lập kế hoạch tài chính cá nhân và gia đình.",
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="text-white py-16 bg-gradient-to-r from-red-800 to-red-900">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Sản phẩm - Dịch vụ</h1>
          <p className="text-xl max-w-3xl">
            Giải pháp tài chính toàn diện, đáp ứng mọi nhu cầu của bạn
          </p>
        </div>
      </section>

      {/* Cho vay */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Dịch vụ cho vay
            </h2>
            <p className="text-lg text-gray-600">
              Các gói vay linh hoạt với lãi suất cạnh tranh
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {loanServices.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition p-6 cursor-pointer hover:bg-red-50"
              >
                <div className="w-16 h-16 bg-red-200 rounded-lg flex items-center justify-center mb-4 text-red-700">
                  {s.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-600 mb-4">{s.description}</p>

                <ul className="space-y-2 mb-6">
                  {s.features.map((f, j) => (
                    <li key={j} className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-main mr-2 mt-1" />
                      <span className="text-gray-600">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/lien-he">
                  <button className="w-full bg-[var(--main-color)] text-white py-2 px-4 rounded-xl font-semibold hover:opacity-80 transition cursor-pointer">
                    Đăng ký ngay
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiết kiệm */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Dịch vụ tiết kiệm
            </h2>
            <p className="text-lg text-gray-600">
              Gửi tiền an toàn, sinh lời hiệu quả
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {savingServices.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition p-6 cursor-pointer hover:bg-green-50"
              >
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4 text-green-600">
                  {s.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-600 mb-4">{s.description}</p>

                <ul className="space-y-2 mb-6">
                  {s.features.map((f, j) => (
                    <li key={j} className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-green-600 mr-2 mt-1" />
                      <span className="text-gray-600">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/lai-suat">
                  <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-xl font-semibold hover:bg-gray-100 transition cursor-pointer">
                    Xem lãi suất
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dịch vụ khác */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Dịch vụ khác
            </h2>
            <p className="text-lg text-gray-600">
              Các tiện ích bổ sung cho khách hàng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {otherServices.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition p-6 cursor-pointer hover:bg-purple-50"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                  {s.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-600">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-red-700 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Cần tư vấn về sản phẩm?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Đội ngũ chuyên viên của chúng tôi sẵn sàng hỗ trợ bạn tìm giải pháp
            tài chính phù hợp nhất
          </p>
          <Link href="/lien-he">
            <button className="bg-red-100 text-main font-semibold py-3 px-6 rounded-xl text-lg hover:bg-red-200 transition inline-flex items-center cursor-pointer">
              Liên hệ tư vấn <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
