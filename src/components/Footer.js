"use client";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaGlobe,
} from "react-icons/fa";
import { IoChevronDownSharp } from "react-icons/io5";

// Social media icons configuration
const socialIcons = [
  { icon: FaFacebookF, url: "#" },
  { icon: FaLinkedinIn, url: "#" },
  { icon: FaTwitter, url: "#" },
  { icon: FaYoutube, url: "#" },
  { icon: FaInstagram, url: "#" },
  { icon: FaGlobe, url: "#" },
];

const sections = [
  {
    title: "ولزی",
    links: [
      { label: "شرایط و قوانین", href: "#" },
      { label: "درباره ما", href: "#" },
      { label: "تماس با ما", href: "#" },
      { label: "برند متریال", href: "#" },
    ],
  },
  {
    title: "راهنمای استفاده",
    links: [
      { label: "حساب کاربری", href: "#" },
      { label: "واریز و برداشت", href: "#" },
      { label: "بازار سرمایه‌گذاری", href: "#" },
      { label: "امنیت", href: "#" },
    ],
  },
  {
    title: "خدمات کاربران",
    links: [
      { label: "سوالات متداول", href: "#" },
      { label: "بلاگ", href: "#" },
      { label: "دعوت از دوستان", href: "#" },
      { label: "مستندات", href: "#" },
    ],
  },
  {
    title: "تماس با ما",
    links: [
      { label: "شماره تلفن", href: "#" },
      { label: "ایمیل ولزی", href: "mailto:Support@wealzi.com" },
    ],
  },
];

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <footer className=" mt-20  text-white md:p-12" dir="rtl">
      <div className="max-w-[1380] m-auto mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-500"></div>
      <div className="max-w-[1380px] mx-auto p-6 md:p-0">
        <div
          dir="rtl"
          className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 lg:grid-cols-6 gap-10"
        >
          {/* Logo + About */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center max-sm:justify-start mb-4">
              <img src="/Logo/logo.png" alt="ولزی" className="w-8 h-8 ml-2" />
              <h3 className="text-2xl font-bold">ولزی</h3>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed font-light max-w-[360px] mx-auto sm:mx-0 text-justify">
              ما در ولزی با هدف ایجاد بستری امن به منظور سرمایه‌گذاری در
              دارایی‌های دیجیتال گامی نو در ارایه سرویس‌های سرمایه‌گذاری و مدیریت
              پورتفولیو برداشتیم و پیش بردن تمامی مراحل سرمایه‌گذاری را در کمال
              هوشمندی و حفظ سادگی برای بهبود توانایی سرمایه‌گذاری برای تمام اقشار
              جامعه را رسالت خود می‌دانیم.
            </p>
          </div>

          {/* Menu sections */}
          {sections.map((section, index) => (
            <div key={index} className="text-right">
              {/* Header (clickable in mobile) */}
              <div
                className="flex justify-between items-center sm:cursor-default cursor-pointer"
                onClick={() => toggleSection(index)}
              >
                <h5 className="text-lg font-semibold mb-4 text-white">
                  {section.title}
                </h5>
                <IoChevronDownSharp
                  className={`w-5 h-5 text-gray-400 sm:hidden transition-transform ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>

              {/* Links */}
              <ul
                className={`space-y-3 text-sm text-gray-400 transition-all duration-300 overflow-hidden sm:max-h-none ${
                  openIndex === index
                    ? "max-h-60 opacity-100"
                    : "max-h-0 opacity-0 sm:opacity-100"
                } sm:!max-h-none`}
              >
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="hover:text-cyan-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex justify-center sm:justify-end max-sm:mt-10 space-x-4">
          {socialIcons.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className="text-gray-400 hover:text-white transition-transform hover:scale-110"
              aria-label={`Link to ${item.icon}`}
            >
              <item.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Footer bottom */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} ولزی. تمام حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
