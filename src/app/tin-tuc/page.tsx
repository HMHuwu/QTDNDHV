"use client";

import Image from "next/image";
import { Calendar, User, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function NewsPage() {
  const featuredNews = {
    title:
      'Quỹ tín dụng Hồng Việt nhận giải thưởng "Đơn vị tín dụng tiêu biểu năm 2025"',
    date: "25/10/2025",
    author: "Ban Biên tập",
    category: "Sự kiện",
    image:
      "https://images.unsplash.com/photo-1707301280380-56f7e7a00aef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    excerpt:
      'Ngày 24/10/2025, tại Hội nghị tổng kết ngành Tín dụng nhân dân toàn quốc, Quỹ tín dụng nhân dân Hồng Việt vinh dự được nhận giải thưởng "Đơn vị tín dụng tiêu biểu năm 2025" nhờ những đóng góp xuất sắc cho cộng đồng và hoạt động kinh doanh hiệu quả.',
  };

  const newsCategories = [
    { name: "Tất cả", count: 24 },
    { name: "Thông báo", count: 8 },
    { name: "Tin tức", count: 10 },
    { name: "Sự kiện", count: 6 },
  ];

  const newsList = [
    {
      title: "Thông báo lịch nghỉ Tết Nguyên Đán 2025",
      date: "15/01/2025",
      author: "Phòng Hành chính",
      category: "Thông báo",
      image:
        "https://images.unsplash.com/photo-1696690955056-3fd701dbda85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      excerpt:
        "Quỹ tín dụng Hồng Việt xin thông báo lịch nghỉ Tết Nguyên Đán Ất Tỵ 2025 từ ngày 26/1 đến hết ngày 2/2/2025...",
    },
    {
      title: "Chương trình khuyến mại lãi suất tháng 10/2025",
      date: "01/10/2025",
      author: "Phòng Kinh doanh",
      category: "Tin tức",
      image:
        "https://images.unsplash.com/photo-1707779491435-000c45820db2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      excerpt:
        "Nhân dịp kỷ niệm 15 năm thành lập, Quỹ áp dụng lãi suất ưu đãi đặc biệt cho khách hàng gửi tiết kiệm...",
    },
    {
      title: "Khai trương điểm giao dịch mới tại quận 7",
      date: "20/09/2025",
      author: "Ban Biên tập",
      category: "Sự kiện",
      image:
        "https://images.unsplash.com/photo-1716703742287-2b06c3c6d81a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      excerpt:
        "Điểm giao dịch mới tại 123 Nguyễn Văn Linh, Quận 7 chính thức đi vào hoạt động, phục vụ người dân khu vực phía Nam...",
    },
    {
      title: "Tổ chức từ thiện hỗ trợ học sinh nghèo",
      date: "15/09/2025",
      author: "Ban Biên tập",
      category: "Sự kiện",
      image:
        "https://images.unsplash.com/photo-1758599668547-2b1192c10abb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      excerpt:
        "Quỹ đã trao tặng 100 suất học bổng trị giá 500 triệu đồng cho học sinh có hoàn cảnh khó khăn...",
    },
    {
      title: "Triển khai ứng dụng Mobile Banking mới",
      date: "10/08/2025",
      author: "Phòng Công nghệ",
      category: "Tin tức",
      image:
        "https://images.unsplash.com/photo-1707301280380-56f7e7a00aef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      excerpt:
        "Ứng dụng Hồng Việt Mobile chính thức ra mắt, giúp khách hàng giao dịch mọi lúc mọi nơi...",
    },
    {
      title: "Hội thảo tài chính cá nhân cho doanh nghiệp nhỏ",
      date: "05/07/2025",
      author: "Phòng Tư vấn",
      category: "Sự kiện",
      image:
        "https://images.unsplash.com/photo-1716703742287-2b06c3c6d81a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      excerpt:
        "Hội thảo miễn phí dành cho chủ doanh nghiệp nhỏ về quản lý tài chính và kế hoạch phát triển kinh doanh...",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("Tất cả");

  const filteredNews =
    activeCategory === "Tất cả"
      ? newsList
      : newsList.filter((item) => item.category === activeCategory);

  return (
    <div>
      {/* Header */}
      <section className="text-white py-16 bg-gradient-to-r from-red-800 to-red-900">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl mb-4 font-bold">Tin tức & Sự kiện</h1>
          <p className="text-xl max-w-3xl">
            Cập nhật thông tin mới nhất về hoạt động và sự kiện của Quỹ tín dụng
            Hồng Việt
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden border-gray-200 border-1 rounded-xl hover:shadow-2xl transition-shadow max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2">
            <div className="relative aspect-video lg:aspect-auto">
              <Image
                src="/image/quochoi.jpg"
                alt={featuredNews.title}
                fill
                className="object-cover"
              />
              <span className="absolute top-4 left-4 bg-red-800 text-white text-sm font-medium px-3 py-1 rounded">
                Nổi bật
              </span>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="bg-gray-900 text-white text-sm px-3 py-1 rounded w-fit mb-3">
                {featuredNews.category}
              </span>
              <h2 className="text-3xl font-semibold mb-4 text-gray-900">
                {featuredNews.title}
              </h2>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {featuredNews.date}
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {featuredNews.author}
                </div>
              </div>
              <p className="text-gray-600 mb-6">{featuredNews.excerpt}</p>
              <button className="flex items-center bg-red-800 text-white w-36 gap-4 text-nowrap px-5 py-2 rounded-lg hover:opacity-90 transition cursor-pointer hover:scale-105">
                Đọc thêm <ArrowRight className=" w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50 border-y border-gray-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            {newsCategories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`px-4 py-2 rounded-md border text-sm font-medium transition-all ${
                  activeCategory === cat.name
                    ? "bg-red-800 text-white border-red-800"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {cat.name}
                <span className="ml-2 text-sm">{cat.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-xl text-gray-700">Đang cập nhật ...</div>

          {/* tin tức */}
          <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 hidden">
            {filteredNews.map((news, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow bg-white"
              >
                <div className="relative aspect-video">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs bg-gray-100 px-3 py-1 rounded mb-2 inline-block text-gray-800">
                    {news.category}
                  </span>
                  <h3 className="text-lg font-semibold line-clamp-2 mb-2 text-gray-900">
                    {news.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {news.date}
                    </div>
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {news.author}
                    </div>
                  </div>
                  <p className="text-gray-600 line-clamp-3 mb-4">
                    {news.excerpt}
                  </p>
                  <button className="flex items-center text-red-700 font-medium hover:underline">
                    Xem chi tiết
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-6 py-3 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-100 transition cursor-pointer">
              Xem thêm tin tức
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
