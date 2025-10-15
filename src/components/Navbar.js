"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { title: "امکانات", href: "/features" },
    { title: "بازارها", href: "/markets" },
    { title: "وبلاگ آموزشی", href: "/blog" },
    { title: "راهنما", href: "/help" },
    { title: "ارتباط با ما", href: "/contact" },
  ];

  return (
    <>
      <nav
        dir="rtl"
        className="bg-[#0b1120] text-white shadow-md fixed w-full z-50"
      >
        <div className="max-w-[1024px] mx-auto px-6 py-4 flex justify-between items-center">
          {/* لوگو */}
          <Link href="/" className="flex items-center text-2xl font-bold">
            <img src="/Logo/logo.png" className="w-8 h-8 ml-2" alt="ولزی" />
            <span className="text-white">ولزی</span>
          </Link>

          {/* منوی دسکتاپ */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#477cff] hover:to-[#75d9d9]"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* دکمه‌های ورود و ثبت نام دسکتاپ */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              type="button"
              className="px-5 py-1 rounded-lg border border-gray-600 hover:bg-gray-700 transition-colors duration-300"
            >
              ورود
            </button>
            <button
              type="button"
              className="px-6 py-1 rounded-lg bg-gradient-to-r from-[#75d9d9] from-[-20%] to-[#477cff] hover:opacity-90 hover:g-gradient-to-r hover:from-[#fff] hover:to-[#fff] hover:text-blue-600 duration-500 transition-all text-[#10141f] "
            >
              ثبت نام
            </button>
          </div>

          {/* آیکون منوی همبرگری برای موبایل */}
          <div className="md:hidden">
            <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* پوشش پس‌زمینه (Backdrop) */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-[rgba(0,0,0,0.7)] bg-opacity-50 z-20 md:hidden"
        ></div>
      )}

      {/* منوی سایدبار موبایل ) */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-2/3 max-w-sm bg-[#12151D] shadow-xl transform transition-transform duration-300 ease-in-out z-50
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6" dir="rtl">
          {/* لوگو و دکمه بستن در بالای سایدبار */}
          <div className="flex justify-between items-center mb-4 ">
            <Link
              href="/"
              className="flex items-center text-2xl font-bold "
              onClick={() => setIsMenuOpen(false)}
            ></Link>
            <button
              className=" bg-amber-50 rounded-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              <FiX size={24} />
            </button>
          </div>

          {/* لینک‌های ناوبری */}
          <ul className="flex flex-col items-start space-y-6 text-white">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-cyan-400 text-lg transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* دکمه‌های ورود و ثبت نام */}
          <div className="flex flex-col items-center space-y-3 pt-6 mt-6 border-t border-gray-600">
            <button
              type="button"
              className="w-full px-4 py-2 rounded-lg border border-gray-600 hover:bg-gray-700 transition-colors duration-300 text-white"
            >
              ورود
            </button>
            <button
              type="button"
              className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-[#477cff] to-[#75d9d9] hover:opacity-90 transition-opacity duration-300"
            >
              ثبت نام
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
