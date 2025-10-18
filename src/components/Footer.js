import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaGlobe,
} from "react-icons/fa";

// Social media icons configuration
const socialIcons = [
  { icon: FaFacebookF, url: "#" },
  { icon: FaLinkedinIn, url: "#" },
  { icon: FaTwitter, url: "#" },
  { icon: FaYoutube, url: "#" },
  { icon: FaInstagram, url: "#" },
  { icon: FaGlobe, url: "#" },
];

const Footer = () => {
  return (
    <footer className="text-white md:p-12" dir="rtl">
      <div className="max-w-[1380px] mx-auto p-6 md:p-0">
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400"></div>

        <div
          dir="rtl"
          className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 lg:grid-cols-6 gap-10"
        >
          <div className="sm:col-span-2 lg:col-span-2 order-1 ">
            <div className="flex items-center justify-end sm:justify-start mb-4 max-sm:flex-row-reverse">
              <img src="/Logo/logo.png" alt="ولزی" className="w-8 h-8 mr-2" />
              <h3 className="text-2xl font-bold">ولزی</h3>
            </div>
            <p
              dir="rtl"
              className="text-sm text-gray-300 leading-relaxed font-light max-w-[360px] mx-auto sm:mx-0 text-justify "
            >
              ما در ولزی با هدف ایجاد بستری امن به منظور سرمایه‌گذاری در
              دارایی‌های دیجیتال گامی نو در ارایه سرویس های سرمایه‌گذاری و مدیریت
              پورتفولیو برداشتیم و پیش بردن تمامی مراحل سرمایه‌گذاری را در کمال
              هوشمندی و حفظ سادگی برای بهبود توانایی سرمایه‌گذاری برای تمام اقشار
              جامعه را رسالت خود می دانیم.
            </p>
          </div>

          <div className="text-right order-2">
            <h5 className="text-lg font-semibold mb-4 text-white">ولزی</h5>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors ">
                  شرایط و قوانین
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  درباره ما
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  تماس با ما
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  برند متریال
                </a>
              </li>
            </ul>
          </div>

          <div className="text-right order-3">
            <h5 className="text-lg font-semibold mb-4 text-white">
              راهنمای استفاده
            </h5>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  حساب کاربری
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  واریز و برداشت
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  بازار سرمایه‌گذاری
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  امنیت
                </a>
              </li>
            </ul>
          </div>

          <div className="text-right order-4">
            <h5 className="text-lg font-semibold mb-4 text-white">
              خدمات کاربران
            </h5>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  سوالات متداول
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  بلاگ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  دعوت از دوستان
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  مستندات
                </a>
              </li>
            </ul>
          </div>

          <div className="text-right order-5">
            <h5 className="text-lg font-semibold mb-4 text-white">
              تماس با ما
            </h5>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>شماره تلفن</li>
              <li>
                <a
                  href="mailto:Support@wealzi.com"
                  className="hover:text-cyan-400 transition-colors"
                >
                  ایمیل ولزی
                </a>
              </li>
            </ul>
            <div className="flex justify-end sm:justify-start mt-6 space-x-4 max-sm:flex-row-reverse">
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
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
          <p> © {new Date().getFullYear()} ولزی. تمام حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
