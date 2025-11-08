import Image from "next/image";
import { Calendar, Users, Heart, Award } from "lucide-react";

export default function ActivitiesPage() {
  const activities = [
    {
      title: "Chương trình từ thiện hỗ trợ học sinh nghèo",
      date: "15/09/2025",
      category: "Cộng đồng",
      image:
        "https://images.unsplash.com/photo-1758599668547-2b1192c10abb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      description:
        "Quỹ tín dụng Hồng Việt đã trao tặng 100 suất học bổng cho học sinh có hoàn cảnh khó khăn tại địa phương, góp phần hỗ trợ các em tiếp tục con đường học vấn.",
    },
    {
      title: "Hội thảo tài chính cá nhân và quản lý tiền bạc",
      date: "20/08/2025",
      category: "Sự kiện",
      image:
        "https://images.unsplash.com/photo-1707301280380-56f7e7a00aef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      description:
        'Tổ chức buổi hội thảo với chủ đề "Quản lý tài chính cá nhân hiệu quả" thu hút hơn 200 người dân tham gia, chia sẻ kiến thức về đầu tư và tiết kiệm.',
    },
    {
      title: "Tài trợ xây dựng nhà tình nghĩa",
      date: "05/07/2025",
      category: "Cộng đồng",
      image:
        "https://images.unsplash.com/photo-1513807016779-d51c0c026263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      description:
        "Quỹ đã đóng góp 200 triệu đồng để xây dựng 5 căn nhà tình nghĩa cho các gia đình chính sách và người có công với cách mạng.",
    },
    {
      title: "Chương trình khám sức khỏe miễn phí",
      date: "12/06/2025",
      category: "Y tế",
      image:
        "https://images.unsplash.com/photo-1716703742287-2b06c3c6d81a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      description:
        "Phối hợp với bệnh viện địa phương tổ chức khám sức khỏe miễn phí cho hơn 300 người dân, đặc biệt là người cao tuổi và trẻ em.",
    },
    {
      title: "Ngày hội thành viên năm 2025",
      date: "25/05/2025",
      category: "Sự kiện",
      image:
        "https://images.unsplash.com/photo-1696690955056-3fd701dbda85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      description:
        "Tổ chức Ngày hội thành viên với nhiều hoạt động vui chơi, giao lưu và trao thưởng cho các thành viên xuất sắc trong năm.",
    },
    {
      title: "Hỗ trợ nông dân phát triển kinh tế",
      date: "10/04/2025",
      category: "Kinh tế",
      image:
        "https://images.unsplash.com/photo-1707779491435-000c45820db2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      description:
        "Triển khai chương trình cho vay ưu đãi với lãi suất thấp giúp nông dân đầu tư vào sản xuất, nâng cao thu nhập.",
    },
  ];

  const stats = [
    {
      icon: <Heart className="w-8 h-8" />,
      value: "50+",
      label: "Chương trình từ thiện",
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "10,000+",
      label: "Người được hỗ trợ",
    },
    { icon: <Award className="w-8 h-8" />, value: "15+", label: "Giải thưởng" },
    {
      icon: <Calendar className="w-8 h-8" />,
      value: "100+",
      label: "Sự kiện tổ chức",
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="text-white py-16 bg-gradient-to-r from-red-800 to-red-900">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl mb-4 font-bold">Nội dung hoạt động</h1>
          <p className="text-xl max-w-3xl">
            Những hoạt động cộng đồng và sự kiện tiêu biểu của Quỹ tín dụng Hồng
            Việt
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-red-200 rounded-full flex items-center justify-center mx-auto mb-4 text-red-700">
                  {stat.icon}
                </div>
                <div className="text-4xl text-red-700 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-gray-900 mb-4">Hoạt động tiêu biểu</h2>
            <p className="text-xl text-gray-600">
              Cập nhật các chương trình và sự kiện mới nhất
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative aspect-video">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-main text-white text-sm px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    {item.date}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-16 text-red-700 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl mb-6 font-semibold">
              Cam kết với cộng đồng
            </h2>
            <p className="text-xl mb-8">
              Quỹ tín dụng Hồng Việt luôn đặt trách nhiệm xã hội lên hàng đầu.
              Chúng tôi tin rằng sự thành công của Quỹ gắn liền với sự phát
              triển bền vững của cộng đồng.
            </p>
            <p className="text-lg">
              Mỗi hoạt động chúng tôi thực hiện đều hướng đến mục tiêu mang lại
              giá trị thiết thực cho người dân, góp phần xây dựng một cộng đồng
              văn minh, hiện đại và nhân ái.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
