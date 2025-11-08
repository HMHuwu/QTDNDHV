"use client";
import { useState } from "react";
import { FileText, Download, Calendar } from "lucide-react";

export default function DocumentsPage() {
  const documents = [
    {
      title: "Điều lệ Quỹ tín dụng nhân dân Hồng Việt",
      date: "01/01/2024",
      type: "Điều lệ",
      category: "Nội bộ",
      size: "2.5 MB",
    },
    {
      title: "Quy chế hoạt động của Quỹ tín dụng nhân dân",
      date: "15/02/2024",
      type: "Quy chế",
      category: "Nội bộ",
      size: "1.8 MB",
    },
    {
      title: "Nghị định 28/2024/NĐ-CP về Quỹ tín dụng nhân dân",
      date: "10/03/2024",
      type: "Nghị định",
      category: "Pháp luật",
      size: "3.2 MB",
    },
    {
      title: "Thông tư 02/2024/TT-NHNN về lãi suất cho vay",
      date: "20/03/2024",
      type: "Thông tư",
      category: "Pháp luật",
      size: "1.5 MB",
    },
    {
      title: "Quy định về huy động vốn và cho vay",
      date: "05/04/2024",
      type: "Quy định",
      category: "Nghiệp vụ",
      size: "2.1 MB",
    },
    {
      title: "Quy trình thẩm định và giải ngân",
      date: "12/04/2024",
      type: "Quy trình",
      category: "Nghiệp vụ",
      size: "1.9 MB",
    },
    {
      title: "Luật các tổ chức tín dụng số 47/2010/QH12",
      date: "16/06/2010",
      type: "Luật",
      category: "Pháp luật",
      size: "4.5 MB",
    },
    {
      title: "Quy chế quản lý rủi ro tín dụng",
      date: "25/05/2024",
      type: "Quy chế",
      category: "Nghiệp vụ",
      size: "2.3 MB",
    },
    {
      title: "Hướng dẫn mở tài khoản và giao dịch",
      date: "30/05/2024",
      type: "Hướng dẫn",
      category: "Khách hàng",
      size: "1.2 MB",
    },
    {
      title: "Biểu phí dịch vụ năm 2024",
      date: "01/06/2024",
      type: "Biểu phí",
      category: "Khách hàng",
      size: "0.8 MB",
    },
    {
      title: "Chính sách bảo mật thông tin khách hàng",
      date: "15/06/2024",
      type: "Chính sách",
      category: "Khách hàng",
      size: "1.1 MB",
    },
    {
      title: "Quy định về an toàn, bảo mật trong hoạt động",
      date: "20/07/2024",
      type: "Quy định",
      category: "Nội bộ",
      size: "1.6 MB",
    },
  ];

  const categories = [
    "Tất cả",
    "Pháp luật",
    "Nội bộ",
    "Nghiệp vụ",
    "Khách hàng",
  ];
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");

  const filteredDocs =
    selectedCategory === "Tất cả"
      ? documents
      : documents.filter((doc) => doc.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Pháp luật":
        return "bg-red-100 text-red-700";
      case "Nội bộ":
        return "bg-blue-100 text-blue-700";
      case "Nghiệp vụ":
        return "bg-green-100 text-green-700";
      case "Khách hàng":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div>
      {/* Header */}
      <section className="text-white py-16 bg-gradient-to-r from-red-800 to-red-900">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Văn bản pháp luật</h1>
          <p className="text-xl max-w-3xl">
            Tổng hợp các văn bản quy phạm pháp luật, quy định nội bộ và hướng
            dẫn nghiệp vụ mới nhất.
          </p>
        </div>
      </section>

      {/* Filter buttons */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-lg border transition-all ${
                  selectedCategory === category
                    ? "bg-red-800 text-white border-red-700"
                    : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Documents grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredDocs.length === 0 ? (
            <p className="text-center text-gray-600 text-lg">
              Không có văn bản nào thuộc danh mục này.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDocs.map((doc, index) => (
                <div
                  key={index}
                  className="bg-white flex flex-col justify-between rounded-xl shadow hover:shadow-lg transition-shadow border border-gray-200"
                >
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-gray-700">
                        <FileText className="w-6 h-6" />
                      </div>
                      <span
                        className={`text-sm font-semibold px-3 py-1 rounded-full ${getCategoryColor(
                          doc.category
                        )}`}
                      >
                        {doc.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold line-clamp-2 mb-2 text-gray-700">
                      {doc.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      {doc.date}
                    </div>
                  </div>
                  <div className="p-5  flex flex-col gap-3">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{doc.type}</span>
                      <span>{doc.size}</span>
                    </div>
                    <button className="flex items-center justify-center gap-2 w-full py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-400 hover:text-white transition cursor-pointer">
                      <Download className="w-4 h-4" />
                      Tải xuống
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="border-t-4 border-red-800 bg-white rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Thông tin quan trọng
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Văn bản pháp luật:</strong> Ban hành bởi cơ quan nhà
                nước, có giá trị pháp lý cao và là cơ sở cho các hoạt động của
                Quỹ.
              </p>
              <p>
                <strong>Quy định nội bộ:</strong> Dành cho hoạt động điều hành
                và quản lý nội bộ, đảm bảo tính tuân thủ và hiệu quả.
              </p>
              <p>
                <strong>Hướng dẫn nghiệp vụ:</strong> Trình bày quy trình và
                cách thực hiện các nghiệp vụ tại Quỹ.
              </p>
              <p>
                <strong>Tài liệu khách hàng:</strong> Giúp khách hàng hiểu rõ
                quyền lợi, nghĩa vụ và dịch vụ của Quỹ.
              </p>
              <p className="italic text-sm text-gray-600">
                * Các văn bản được cập nhật thường xuyên. Hãy kiểm tra định kỳ
                hoặc liên hệ Quỹ để được hỗ trợ.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
