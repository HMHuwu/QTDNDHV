"use client";

import Image from "next/image";
import { Target, Eye, Award, Users, TrendingUp, Shield } from "lucide-react";

// 🔹 Utils nhỏ để gộp class
function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

// 🔹 Các component Card (tự viết, không import)
function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-white text-gray-900 flex flex-col gap-6 rounded-xl border shadow-sm",
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <h4
      data-slot="card-title"
      className={cn("leading-none text-xl font-semibold", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6 [&:last-child]:pb-6", className)}
      {...props}
    />
  );
}

// ======================================================

export default function AboutPage() {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Uy tín",
      description:
        "Xây dựng niềm tin thông qua sự minh bạch và tuân thủ pháp luật",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Con người",
      description: "Con người là trung tâm của mọi hoạt động",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Phát triển",
      description: "Không ngừng đổi mới và phát triển bền vững",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Chất lượng",
      description: "Cam kết chất lượng dịch vụ hàng đầu",
    },
  ];

  const milestones = [
    { year: "2010", event: "Thành lập Quỹ tín dụng nhân dân Hồng Việt" },
    {
      year: "2015",
      event: "Mở rộng mạng lưới chi nhánh và điểm giao dịch",
    },
    {
      year: "2020",
      event: "Đạt mốc 10.000 thành viên và 500 tỷ VNĐ tài sản",
    },
    {
      year: "2025",
      event: "Triển khai dịch vụ ngân hàng số và ứng dụng di động",
    },
  ];

  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Header */}
      <section className="text-white py-16 bg-gradient-to-r from-red-800 to-red-900">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Giới thiệu</h1>
          <p className="text-xl max-w-3xl">
            Quỹ tín dụng nhân dân Hồng Việt - Đơn vị tài chính uy tín, gần gũi
            với cộng đồng
          </p>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-semibold mb-6">Lịch sử hình thành</h2>
            <p className="text-gray-600 mb-4">
              Quỹ tín dụng nhân dân Hồng Việt được thành lập năm 2010 với sứ
              mệnh cung cấp các dịch vụ tài chính đáng tin cậy và dễ tiếp cận
              cho người dân tại địa phương.
            </p>
            <p className="text-gray-600 mb-4">
              Qua hơn 15 năm hoạt động, chúng tôi đã không ngừng phát triển và
              khẳng định vị thế là đơn vị tài chính uy tín, luôn đồng hành cùng
              sự phát triển của cộng đồng.
            </p>
            <p className="text-gray-600">
              Với đội ngũ cán bộ nhân viên giàu kinh nghiệm và tận tâm, chúng
              tôi cam kết mang đến những giải pháp tài chính tối ưu, phù hợp với
              nhu cầu của từng khách hàng.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1707301280380-56f7e7a00aef?auto=format&fit=crop&w=1080&q=80"
              alt="Lịch sử Hồng Việt"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
          <Card className="border-t-4 border-red-700 border-0">
            <CardHeader>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-red-700" />
              </div>
              <CardTitle>Sứ mệnh</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Cung cấp các sản phẩm và dịch vụ tài chính chất lượng cao, dễ
                tiếp cận, góp phần nâng cao đời sống kinh tế của người dân và
                phát triển bền vững cộng đồng địa phương.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-red-700 border-0">
            <CardHeader>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-8 h-8 text-red-700" />
              </div>
              <CardTitle>Tầm nhìn</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Trở thành Quỹ tín dụng nhân dân hàng đầu khu vực, được khách
                hàng tin tưởng và lựa chọn, góp phần vào sự phát triển kinh tế -
                xã hội bền vững của cộng đồng.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold mb-4">Giá trị cốt lõi</h2>
            <p className="text-xl text-gray-600">
              Những giá trị định hướng mọi hoạt động của chúng tôi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-700">
                  {value.icon}
                </div>
                <h3 className="mb-3 text-xl font-medium">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold mb-4">Các mốc quan trọng</h2>
            <p className="text-lg text-gray-600">
              Hành trình phát triển của Quỹ tín dụng Hồng Việt
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-8">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-6 items-center">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-red-800 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {m.year}
                  </div>
                </div>
                <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-700">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Structure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold mb-4">Cơ cấu tổ chức</h2>
            <p className="text-lg text-gray-600">
              Đội ngũ lãnh đạo và nhân sự chuyên nghiệp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Ban Quản trị",
                desc: "Định hướng chiến lược và giám sát hoạt động của Quỹ",
              },
              {
                title: "Ban Giám đốc",
                desc: "Điều hành và quản lý hoạt động kinh doanh hàng ngày",
              },
              {
                title: "Các phòng ban",
                desc: "Thực hiện các chức năng chuyên môn và hỗ trợ nghiệp vụ",
              },
            ].map((d, i) => (
              <Card key={i}>
                <CardHeader className="text-center">
                  <CardTitle>{d.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">{d.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
