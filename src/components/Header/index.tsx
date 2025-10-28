"use client";
import { ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useRef } from "react";
import Image from "next/image";

interface DropItem {
  name: string;
  link: string;
}
interface NavItem {
  name: string;
  link: string;
  dropList?: DropItem[];
}

const NavList: NavItem[] = [
  { name: "Trang chủ", link: "/" },
  { name: "Giới thiệu", link: "/gioi-thieu" },
  { name: "Nội dung hoạt động", link: "/noi-dung-hoat-dong" },
  { name: "Sản phẩm dịch vụ", link: "/san-pham-dich-vu" },
  { name: "Lãi suất", link: "/lai-suat" },
  { name: "Văn bản pháp luật", link: "/van-ban-phap-luat" },
  { name: "Tin tức", link: "/tin-tuc" },
  { name: "Liên hệ", link: "/lien-he" },
];

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );

  const handleClick = (link: string) => {
    router.push(link);
  };
  const [rotateLine, setRotateLine] = useState(false);
  const handleToggle = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => {
        setRotateLine(true);
        setIsAnimating(false);
      }, 300); // delay xoay sau khi di chuyển
      console.log(isOpen);
      console.log(rotateLine);
    } else {
      setRotateLine(false);
      setTimeout(() => {
        setIsOpen(false);
        setIsAnimating(false);
      }, 300); // delay đóng sau khi xoay về
      console.log(isOpen);
      console.log(rotateLine);
    }
  };

  const isActive = (link: string, dropList?: DropItem[]) => {
    if (pathname === link) return true;
    return dropList?.some((dropItem) => pathname === dropItem.link);
  };

  const isActiveDr = (currentPath: string) => {
    return pathname.includes(currentPath);
  };

  return (
    <header>
      <nav className="fixed top-0 left-0 z-50 w-full h-16 bg-white border-b border-gray-200 shadow-md px-0 md:px-4 flex justify-between items-center">
        {/* Logo */}
        <div
          onClick={() => handleClick("/")}
          className="text-xl font-extrabold text-red-700 cursor-pointer pl-10 text-nowrap"
        >
          <div className="flex items-center space-x-3 text-[16px] font-normal">
            <Image
              src="/image/logo.png"
              alt="Hồng Việt"
              width={32}
              height={32}
              className="inset-0 w-10 h-10 object-cover overflow-visible"
            />

            <div>
              <div className="text-main">Quỹ tín dụng nhân dân</div>
              <div className="text-main-dark text-lg">Hồng Việt</div>
            </div>
          </div>
        </div>

        {/* Mobile toggle */}
        <div
          className="relative w-8 h-6 cursor-pointer lg:hidden mr-6"
          onClick={handleToggle}
        >
          {/* Line 1 */}
          <span
            className={`absolute left-0 w-full h-1 bg-red-800 rounded transition-all duration-300 origin-center
          ${isOpen ? "top-1/2" : "top-1"} ${
              rotateLine ? "rotate-45" : "rotate-0"
            }`}
          />

          {/* Line 2 */}
          <span
            className={`absolute left-0 top-1/2 w-full h-1 bg-red-800 rounded transition-all duration-300 origin-center
              ${isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}
          />

          {/* Line 3 */}
          <span
            className={`absolute left-0 w-full h-1 bg-red-800 rounded transition-all duration-300 origin-center
          ${isOpen ? "top-1/2" : "top-5"} ${
              rotateLine ? "rotate-135" : "rotate-0"
            }`}
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 justify-center w-full">
          {NavList.map((item, index) => (
            <li
              key={index}
              onClick={() => handleClick(item.link)}
              className={`group relative cursor-pointer text-base font-semibold px-2 py-4 transition-all duration-200  ${
                isActive(item.link, item.dropList)
                  ? "text-[var(--main-color)] underline underline-offset-[25px]"
                  : "text-gray-700"
              } hover:text-[var(--main-color)]`}
              onMouseEnter={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                setHoveredIndex(index);
              }}
              onMouseLeave={() => {
                timeoutRef.current = setTimeout(() => {
                  setHoveredIndex(null);
                }, 300); // 300ms delay khi chuột rời
              }}
            >
              <div className="flex items-center gap-1 text-nowrap">
                {item.name}
                {item.dropList && <ChevronDown size={14} />}
              </div>

              {item.dropList && hoveredIndex === index && (
                <div className="absolute left-0 top-full z-10 min-w-[220px] flex-col bg-white shadow-lg rounded-lg mt-2 transition-all duration-300">
                  {item.dropList.map((dropItem, dropIndex) => (
                    <div
                      key={dropIndex}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleClick(dropItem.link);
                      }}
                      className={`px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-[var(--main-color)] transition-all duration-200 ${
                        isActiveDr(dropItem.link)
                          ? "bg-gray-100 !text-[var(--main-color)]"
                          : ""
                      }`}
                    >
                      {dropItem.name}
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop login */}
        {/* <button
          onClick={() => handleClick("/agent")}
          className="hidden md:block text-nowrap ml-6 rounded-full bg-[var(--main-color)] px-5 py-2 text-white text-sm font-semibold hover:bg-[var(--main-color)] hover:opacity-80 transition-all duration-200"
        >
          Đăng Nhập
        </button> */}
        {/* <div className="hidden md:block text-nowrap ml-6 rounded-full bg-[var(--main-color)] px-5 py-2 text-white text-sm font-semibold hover:bg-[var(--main-color)] hover:opacity-80 transition-all duration-200">
          <GoogleLoginButton onLoginSuccess={handleGoogleLoginSuccess} />
        </div> */}

        {/* Mobile Menu */}
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black/50"
              onClick={handleToggle}
            />
            <div className="fixed h-full left-0 top-0 w-[80%] bg-white shadow-lg z-50">
              <ul className="flex flex-col py-6 w-full h-full">
                {NavList.map((item, index) => (
                  <li
                    key={index}
                    className="px-6 border-solid border-b-1 border-gray-200"
                  >
                    <div
                      className={`flex items-center justify-between py-6 text-base font-semibold ${
                        pathname === item.link
                          ? "text-[var(--main-color)]"
                          : "text-gray-800"
                      }`}
                    >
                      <span
                        onClick={() => handleClick(item.link)}
                        className="cursor-pointer"
                      >
                        {item.name}
                      </span>
                      {item.dropList && (
                        <ChevronDown
                          onClick={() =>
                            setOpenDropdownIndex(
                              openDropdownIndex === index ? null : index
                            )
                          }
                          className={`cursor-pointer transition-transform duration-300 ${
                            openDropdownIndex === index ? "rotate-180" : ""
                          }`}
                          size={14}
                        />
                      )}
                    </div>
                    {item.dropList && openDropdownIndex === index && (
                      <div className="bg-gray-50 rounded-lg mb-2">
                        {item.dropList.map((dropItem, dropIndex) => (
                          <div
                            key={dropIndex}
                            onClick={() => handleClick(dropItem.link)}
                            className={`px-6 py-3 text-sm text-gray-700 hover:text-[var(--main-color)] hover:bg-gray-100 transition-all duration-200 ${
                              isActiveDr(dropItem.link)
                                ? "bg-gray-100 !text-[var(--main-color)]"
                                : ""
                            }`}
                          >
                            {dropItem.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
                <li className="px-4 mt-4"></li>
              </ul>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
