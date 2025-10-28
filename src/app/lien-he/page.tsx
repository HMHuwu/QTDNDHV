"use client";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Địa chỉ",
      content: "123 Đường Hồng Việt, Xã Tiên Hưng, Tỉnh Hưng Yên",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Điện thoại",
      content: "(028) 1234 5678",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "info@qtdhongviet.vn",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Giờ làm việc",
      content: "Thứ 2 - Thứ 6: 7:30 - 11:30 | 13:30 - 17:00",
    },
  ];

  const branches = [
    {
      name: "Trụ sở chính",
      address: "Hồng Việt, Tiên Hưng, Hưng Yên",
      phone: "(028) 1234 5678",
    },
    {
      name: "Chi nhánh Quận 2",
      address: "Hoa Lư, Tiên Hưng, Hưng Yên",
      phone: "(028) 2345 6789",
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="text-white py-16 bg-gradient-to-r from-red-800 to-red-900">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl mb-4 font-bold">Liên hệ</h1>
          <p className="text-xl max-w-3xl">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="text-center border rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-800">
                {info.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {info.title}
              </h3>
              <p className="text-gray-600 whitespace-pre-line">
                {info.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="py-16 bg-gray-50">
        <div className="container text-gray-700 mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-4xl text-gray-900 mb-6 font-semibold">
              Gửi tin nhắn cho chúng tôi
            </h2>
            <div className="bg-white rounded-xl shadow p-6">
              <p className="text-gray-600 mb-4">
                Điền thông tin bên dưới và chúng tôi sẽ liên hệ lại sớm nhất.
              </p>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-gray-700 font-medium">
                      Họ và tên *
                    </label>
                    <input
                      id="name"
                      placeholder="Nguyễn Văn A"
                      required
                      className="w-full border border-gray-200 rounded-lg p-2 focus:ring-2 focus:ring-gray-300 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-gray-700 font-medium"
                    >
                      Số điện thoại *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="0912 345 678"
                      required
                      className="w-full border border-gray-200 rounded-lg p-2 focus:ring-2 focus:ring-gray-300 outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-gray-700 font-medium">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    required
                    className="w-full border border-gray-200 rounded-lg p-2 focus:ring-2 focus:ring-gray-300 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-gray-700 font-medium"
                  >
                    Tiêu đề
                  </label>
                  <input
                    id="subject"
                    placeholder="Tư vấn về sản phẩm cho vay"
                    className="w-full border border-gray-200 rounded-lg p-2 focus:ring-2 focus:ring-gray-300 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-gray-700 font-medium"
                  >
                    Nội dung *
                  </label>
                  <textarea
                    id="message"
                    placeholder="Nhập nội dung cần tư vấn..."
                    rows={5}
                    required
                    className="w-full border resize-none border-gray-200 rounded-lg p-2 focus:ring-2 focus:ring-gray-300 outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-800 text-white py-2 rounded-lg hover:bg-red-900 transition flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Gửi tin nhắn
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div>
            <h2 className="text-4xl text-gray-900 mb-6 font-semibold">
              Vị trí của chúng tôi
            </h2>
            <div className="bg-white rounded-xl overflow-hidden shadow">
              <div className="aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29888.24258473407!2d106.23749866455775!3d20.545940183031743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ef2bffffffff%3A0xa70f7d18404f403b!2zUXXhu7kgVMOtbiBE4bulbmcgTmjDom4gRMOibiBYw6MgSOG7k25nIFZp4buHdA!5e0!3m2!1svi!2s!4v1761671183089!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Bản đồ vị trí Quỹ tín dụng Hồng Việt"
                ></iframe>
              </div>
            </div>
            <p className="text-gray-600 mt-4">
              Quỹ tín dụng nhân dân Hồng Việt tọa lạc tại trung tâm của xã,
              thuận tiện cho việc di chuyển và giao dịch.
            </p>
          </div>
        </div>
      </section>

      {/* Branches */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-gray-900 mb-4 font-semibold">
              Mạng lưới chi nhánh
            </h2>
            <p className="text-lg text-gray-600">
              Hệ thống điểm giao dịch trên toàn thành phố
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {branches.map((branch, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl text-red-800 font-semibold mb-3">
                  {branch.name}
                </h3>
                <div className="flex items-start mb-2">
                  <MapPin className="w-5 h-5 text-gray-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{branch.address}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-gray-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{branch.phone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl text-gray-900 mb-6 font-semibold">
            Câu hỏi thường gặp
          </h2>
          <p className="text-gray-600 mb-8">
            Bạn cần giải đáp thắc mắc? Hãy tham khảo các câu hỏi thường gặp hoặc
            liên hệ trực tiếp với chúng tôi qua hotline{" "}
            <strong>(028) 1234 5678</strong> để được hỗ trợ nhanh chóng.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="border border-gray-400 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition cursor-pointer">
              Xem câu hỏi thường gặp
            </button>
            <button className="bg-red-800 text-white px-6 py-3 rounded-lg hover:bg-red-900 transition flex items-center justify-center gap-2 cursor-pointer">
              <Phone className="w-4 h-4" />
              Gọi ngay
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
