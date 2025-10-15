"use client";

import Image from "next/image";

export default function SecondSection() {
  return (
    <section className=" text-white py-16 px-4 sm:px-6 md:px-20 max-w-[1280px] rounded-xl  mx-auto flex flex-col md:flex-row-reverse items-center gap-6 sm:gap-60  shadow-[0px_20px_20px_40px_rgba(0,0,0,0.9)]">
      {/* متن و دکمه */}
      <div className="flex-1 text-center md:text-right">
        <h1 className="text-2xl sm:text2xl md:text-3xl font-bold mb-4 sm:mb-6">
          خدمات نوآورانه و متفاوت ولزی <br />
          با شعار سرمایه گذاری برای همه
        </h1>
        <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text">
          دنبال کردن معامله‌گران بدون هیچ سابقه‌ی حرفه‌ای، گیج شدن بین هزاران خبر و
          سیگنال و ایده معاملاتی مشکلی بود که تیم متعهد و با سابقه‌ی ولزی را دور
          هم جمع کرد تا با ترکیب متخصصان سرمایه گذاری و توسعه دهنده‌های وب و
          موبایل محصولی را خلق کنند و شعار{" "}
          <span className="bg-gradient-to-r from-[#75d9d9] from-[15%] to-[#477cff]  bg-clip-text text-transparent">
            سرمایه گذاری برای همه
          </span>{" "}
          را به واقعیت تبدیل کنند.
        </p>
        <button
          type="button"
          className="  bg-gradient-to-r from-[#75d9d9] from-[5%] to-[#477cff] px-7 py-2 rounded-md font-semibold text-sm sm:text-base hover:g-gradient-to-r hover:from-[#fff] hover:to-[#fff] hover:text-blue-600 transition-all  duration-500"
        >
          !همراه شو
        </button>
      </div>

      {/* تصویر سمت چپ */}
      <div className="flex">
        <Image
          loading="lazy"
          src="/second-section/why.png"
          alt="خدمات ولزی"
          width={400}
          height={400}
          className=" rounded-lg"
          priority
        />
      </div>
    </section>
  );
}
