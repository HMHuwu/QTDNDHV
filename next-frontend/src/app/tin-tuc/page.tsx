"use client";

import Image from "next/image";
import { Calendar, User, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

interface NewsItem {
  title: string;
  date: string;
  author: string;
  category: string;
  image: string;
  excerpt: string;
  link: string;
}

interface NewsCategory {
  name: string;
  count: number;
}

type FeaturedNews = NewsItem;

interface NewsResponse {
  featured: FeaturedNews;
  categories: NewsCategory[];
  news: NewsItem[];
}

export default function NewsPage() {
  const [featuredNews, setFeaturedNews] = useState<FeaturedNews | null>(null);
  const [newsCategories, setNewsCategories] = useState<NewsCategory[]>([]);
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch("http://127.0.0.1:8000/api/news");
      const data: NewsResponse = await res.json();

      setFeaturedNews(data.featured);
      setNewsList(data.news);

      // 🔢 Tính toán danh mục ngay tại FE
      const uniqueCategories = Array.from(
        new Set(data.news.map((item) => item.category))
      );

      const categories: NewsCategory[] = [
        { name: "Tất cả", count: data.news.length },
        ...uniqueCategories.map((cat) => ({
          name: cat,
          count: data.news.filter((item) => item.category === cat).length,
        })),
      ];

      setNewsCategories(categories);
    };

    fetchNews();
  }, []);

  const filteredNews =
    activeCategory === "Tất cả"
      ? newsList
      : newsList.filter((item) => item.category === activeCategory);

  if (!featuredNews)
    return <div className="p-10 text-center">Đang tải dữ liệu...</div>;

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
          <div className="overflow-hidden border-gray-200 border rounded-xl hover:shadow-2xl transition-shadow max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2">
            <div className="relative aspect-video lg:aspect-auto">
              <Image
                src={featuredNews.image}
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
              <button
                onClick={() =>
                  (window.location.href =
                    "https://baohungyen.vn/kenh-dan-von-hieu-qua-cua-nong-dan-3184418.html?zarsrc=30&utm_source=zalo&utm_medium=zalo&utm_campaign=zalo")
                }
                className="flex items-center bg-red-800 text-white w-36 gap-4 text-nowrap px-5 py-2 rounded-lg hover:opacity-90 transition cursor-pointer hover:scale-105"
              >
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
        <div className="container mx-auto px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 grid">
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
                <button
                  onClick={() => (window.location.href = news.link)}
                  className="flex items-center text-red-700 font-medium hover:underline"
                >
                  Xem chi tiết
                  <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
