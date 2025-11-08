"use client";
import { Info, TrendingUp } from "lucide-react";

export default function InterestRatesPage() {
  const savingsRates = [
    { term: "Không kỳ hạn", rate: "0.5%", minAmount: "0 VNĐ" },
    { term: "1 tháng", rate: "3.5%", minAmount: "5,000,000 VNĐ" },
    { term: "3 tháng", rate: "4.0%", minAmount: "5,000,000 VNĐ" },
    { term: "6 tháng", rate: "5.0%", minAmount: "10,000,000 VNĐ" },
    { term: "9 tháng", rate: "5.5%", minAmount: "10,000,000 VNĐ" },
    { term: "12 tháng", rate: "6.0%", minAmount: "10,000,000 VNĐ" },
    { term: "18 tháng", rate: "6.5%", minAmount: "20,000,000 VNĐ" },
    { term: "24 tháng", rate: "7.0%", minAmount: "20,000,000 VNĐ" },
    { term: "36 tháng", rate: "7.5%", minAmount: "50,000,000 VNĐ" },
  ];

  const loanRates = [
    {
      type: "Cho vay tiêu dùng",
      rate: "8.5% - 12.0%",
      term: "Đến 60 tháng",
      note: "Tùy thuộc thời gian vay và tài sản đảm bảo",
    },
    {
      type: "Cho vay sản xuất kinh doanh",
      rate: "7.5% - 10.0%",
      term: "Đến 120 tháng",
      note: "Ưu đãi cho khách hàng lâu năm",
    },
    {
      type: "Cho vay thế chấp nhà đất",
      rate: "7.0% - 9.5%",
      term: "Đến 240 tháng",
      note: "Lãi suất cố định hoặc thả nổi",
    },
    {
      type: "Cho vay phục vụ đời sống",
      rate: "9.0% - 13.0%",
      term: "Đến 36 tháng",
      note: "Không cần tài sản đảm bảo",
    },
  ];

  const specialRates = [
    {
      title: "Lãi suất ưu đãi cho thành viên mới",
      description:
        "Giảm 0.5% lãi suất trong 6 tháng đầu cho khách hàng mới tham gia",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "Lãi suất ưu đãi gửi tiết kiệm số lượng lớn",
      description: "Cộng thêm 0.3% - 1.0% cho số tiền gửi từ 500 triệu trở lên",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="text-white py-16 bg-gradient-to-r from-red-800 to-red-900">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl mb-4 font-bold">Lãi suất</h1>
          <p className="text-xl max-w-3xl">
            Bảng lãi suất huy động và cho vay áp dụng tại Quỹ tín dụng Hồng Việt
          </p>
        </div>
      </section>

      {/* Alert */}
      <section className="py-8 bg-main-light">
        <div className="container mx-auto px-4">
          <div className="flex items-start bg-red-100 border-l-4 border-red-300 p-4 rounded-lg shadow-sm">
            <Info className="w-5 h-5 text-gray-700 mt-1 mr-3" />
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>Lưu ý:</strong> Lãi suất được cập nhật ngày 27/10/2025 và
              có thể thay đổi theo từng thời kỳ. Vui lòng liên hệ trực tiếp với
              Quỹ để biết thông tin chi tiết.
            </p>
          </div>
        </div>
      </section>

      {/* Savings Rates */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-gray-900 mb-4 font-semibold">
              Lãi suất tiết kiệm
            </h2>
            <p className="text-xl text-gray-600">
              Lãi suất huy động vốn tiền gửi tiết kiệm
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white border rounded-xl shadow-sm overflow-hidden">
            <div className="border-b px-6 py-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Bảng lãi suất tiết kiệm (%/năm)
              </h3>
              <p className="text-gray-500 text-sm">
                Áp dụng cho cá nhân và tổ chức, lãi suất được tính theo năm
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-6 font-semibold text-gray-700">
                      Kỳ hạn
                    </th>
                    <th className="py-3 px-6 font-semibold text-gray-700">
                      Lãi suất (%/năm)
                    </th>
                    <th className="py-3 px-6 font-semibold text-gray-700 text-right">
                      Số tiền gửi tối thiểu
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    key={"upcoming"}
                    className="border-t hover:bg-gray-50 transition-colors text-gray-700"
                  >
                    <td className="py-3 px-6">Đang cập nhật ...</td>
                  </tr>
                  {savingsRates.map((rate, index) => (
                    <tr
                      key={index}
                      className="border-t hover:bg-gray-50 transition-colors text-gray-900 hidden"
                    >
                      <td className="py-3 px-6">{rate.term}</td>
                      <td className="py-3 px-6 text-green-600">{rate.rate}</td>
                      <td className="py-3 px-6 text-right">{rate.minAmount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Rates */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-gray-900 mb-4 font-semibold">
              Lãi suất cho vay
            </h2>
            <p className="text-xl text-gray-600">
              Lãi suất cho vay theo loại hình và mục đích
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-white border rounded-xl shadow-sm overflow-hidden">
            <div className="border-b px-6 py-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Bảng lãi suất cho vay (%/năm)
              </h3>
              <p className="text-gray-500 text-sm">
                Lãi suất cho vay phụ thuộc vào nhiều yếu tố, vui lòng liên hệ để
                được tư vấn cụ thể
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-gray-900  ">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-6 font-semibold text-gray-700">
                      Loại hình cho vay
                    </th>
                    <th className="py-3 px-6 font-semibold text-gray-700">
                      Lãi suất (%/năm)
                    </th>
                    <th className="py-3 px-6 font-semibold text-gray-700">
                      Thời gian
                    </th>
                    <th className="py-3 px-6 font-semibold text-gray-700">
                      Ghi chú
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    key={"upcoming"}
                    className="border-t hover:bg-gray-50 transition-colors text-gray-700"
                  >
                    <td className="py-3 px-6">Đang cập nhật ...</td>
                  </tr>
                  {loanRates.map((rate, index) => (
                    <tr
                      key={index}
                      className="border-t hover:bg-gray-50 transition-colors hidden"
                    >
                      <td className="py-3 px-6">{rate.type}</td>
                      <td className="py-3 px-6 text-red-700">{rate.rate}</td>
                      <td className="py-3 px-6">{rate.term}</td>
                      <td className="py-3 px-6 text-gray-600">{rate.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Special Rates */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-gray-900 mb-4 font-semibold">
              Chính sách ưu đãi
            </h2>
            <p className="text-xl text-gray-600">
              Các chương trình lãi suất đặc biệt
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {specialRates.map((special, index) => (
              <div
                key={index}
                className="flex items-start p-6 text-gray-900 border-green-700 border-0 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4"
              >
                <div className="w-18 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mr-4">
                  {special.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {special.title}
                  </h3>
                  <p className="text-gray-600">{special.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white border-t-4 border-red-800 rounded-xl shadow-sm p-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
              Lưu ý quan trọng
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-main mr-2">•</span>
                Lãi suất có thể thay đổi theo chính sách của Quỹ và quy định của
                Ngân hàng Nhà nước Việt Nam.
              </li>
              <li className="flex items-start">
                <span className="text-main mr-2">•</span>
                Lãi suất cho vay cụ thể sẽ được thông báo sau khi thẩm định hồ
                sơ và tài sản đảm bảo.
              </li>
              <li className="flex items-start">
                <span className="text-main mr-2">•</span>
                Khách hàng rút tiền tiết kiệm trước hạn sẽ bị tính lãi suất theo
                kỳ hạn không kỳ hạn.
              </li>
              <li className="flex items-start">
                <span className="text-main mr-2">•</span>
                Lãi suất thực tế áp dụng tùy thuộc vào điều kiện và thời điểm
                giao dịch.
              </li>
              <li className="flex items-start">
                <span className="text-main mr-2">•</span>
                Để biết thêm thông tin chi tiết, vui lòng liên hệ trực tiếp hoặc
                đến giao dịch tại Quỹ.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
