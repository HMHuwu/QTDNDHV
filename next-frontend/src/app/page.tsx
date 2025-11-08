import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Shield,
  Heart,
  Newspaper,
  DollarSign,
} from "lucide-react";
import Image from "next/image";

export default function page() {
  const highlights = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Uy tín - Tin cậy",
      description: "Hoạt động minh bạch, tuân thủ pháp luật",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Gần gũi cộng đồng",
      description: "Phục vụ nhu cầu tài chính của người dân",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Lãi suất cạnh tranh",
      description: "Chính sách lãi suất hợp lý, hấp dẫn",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Tận tâm phục vụ",
      description: "Đội ngũ nhân viên chuyên nghiệp, nhiệt tình",
    },
  ];

  const services = [
    {
      title: "Cho vay cá nhân",
      description: "Giải pháp vay vốn nhanh chóng, thủ tục đơn giản",
      link: "/san-pham-dich-vu",
    },
    {
      title: "Tiết kiệm gửi tiền",
      description: "Lãi suất hấp dẫn, linh hoạt kỳ hạn",
      link: "/san-pham-dich-vu",
    },
    {
      title: "Tư vấn tài chính",
      description: "Hỗ trợ lập kế hoạch tài chính cá nhân, gia đình",
      link: "/san-pham-dich-vu",
    },
  ];

  const news = [
    {
      title: "Thông báo lịch nghỉ Tết Nguyên Đán 2025",
      date: "15/01/2025",
      image:
        "https://images.unsplash.com/photo-1696690955056-3fd701dbda85?auto=format&fit=crop&w=1080&q=80",
    },
    {
      title: "Chương trình khuyến mại lãi suất tháng 10/2025",
      date: "01/10/2025",
      image: "/image/quochoi.jpg",
    },
    {
      title: "Quỹ tín dụng Hồng Việt tổ chức từ thiện cộng đồng",
      date: "20/09/2025",
      image: "/image/hopqh.jpg",
    },
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[500px] md:h-[600px] bg-gradient-to-r from-red-900 to-red-800">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video/Timeline.mp4" type="video/mp4" />
          Trình duyệt của bạn không hỗ trợ video.
        </video>

        {/* Overlay tối để chữ dễ đọc */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/20 backdrop-blur-[0px] pointer-events-none"></div>

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Quỹ tín dụng nhân dân Hồng Việt
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Đồng hành cùng cộng đồng, thành viên
              <br />
              Uy tín, tin cậy - Phát triển bền vững
            </p>
            <div className="flex flex-col gap-4">
              <Link
                href="/san-pham-dich-vu"
                className="w-60 inline-flex items-center bg-white text-red-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
              >
                Khám phá dịch vụ
                <ArrowRight className="ml-6 w-5 h-5" />
              </Link>
              <Link
                href="/lien-he"
                className="w-36 text-nowrap inline-flex items-center bg-white text-red-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
              >
                Liên hệ
                <ArrowRight className="ml-6 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-lg hover:shadow-lg transition"
            >
              <div className="w-16 h-16 bg-red-200 text-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-red-700">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-red-700">
            Sản phẩm & Dịch vụ
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Giải pháp tài chính toàn diện cho mọi nhu cầu
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-semibold text-red-700 mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-600 mb-4">{s.description}</p>
                <Link
                  href={s.link}
                  className="inline-flex items-center border text-red-700 border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition"
                >
                  Tìm hiểu thêm <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/san-pham-dich-vu"
              className="inline-flex items-center bg-red-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-800 transition"
            >
              Xem tất cả dịch vụ
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-16 bg-red-800 text-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            href="/lai-suat"
            className="bg-white/10 p-8 rounded-lg hover:bg-white/20 transition"
          >
            <div className="flex items-center space-x-4">
              <DollarSign className="w-12 h-12" />
              <div>
                <h3 className="text-2xl mb-2 font-semibold">Bảng lãi suất</h3>
                <p>Xem lãi suất huy động và cho vay mới nhất</p>
              </div>
            </div>
          </Link>
          <Link
            href="/van-ban-phap-luat"
            className="bg-white/10 p-8 rounded-lg hover:bg-white/20 transition"
          >
            <div className="flex items-center space-x-4">
              <Newspaper className="w-12 h-12" />
              <div>
                <h3 className="text-2xl mb-2 font-semibold">
                  Văn bản pháp luật
                </h3>
                <p>Tìm hiểu các quy định và chính sách</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* News */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-red-700">
            Tin tức & Sự kiện
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Cập nhật thông tin mới nhất từ Quỹ tín dụng Hồng Việt
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, i) => (
              <div
                key={i}
                className="relative bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-left">
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <h3 className="text-lg font-semibold line-clamp-2 mb-4">
                    {item.title}
                  </h3>
                  <Link
                    href="/tin-tuc"
                    className="text-red-700 inline-flex items-center hover:underline"
                  >
                    Đọc thêm <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/tin-tuc"
              className="inline-flex items-center text-red-700 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Xem tất cả tin tức
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-red-700 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Bạn cần hỗ trợ tài chính?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí và tìm
            giải pháp tài chính phù hợp nhất
          </p>
          <Link
            href="/lien-he"
            className="inline-flex items-center bg-red-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-800 transition"
          >
            Liên hệ tư vấn
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
