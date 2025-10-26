"use client";

import Image from "next/image";

export default function SecondSection() {
  return (
    <section className=" max-sm:-mt-25 px-4 mx-auto sm:px-6 rounded-xl">
      {/* متن و دکمه */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 sm:gap-12 lg:gap-16 max-w-[1380px] m-auto   rounded-2xl">
        <div className="flex-1 text-center md:text-right max-sm:pt-13">
          <h1 className="text-2xl sm:text2xl md:text-3xl font-bold mb-4 sm:mb-6 text-white">
            خدمات نوآورانه و متفاوت ولزی <br />
            با شعار سرمایه گذاری برای همه
          </h1>
          <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text  max-sm:m-auto max-sm:p-5 lg:inline-block lg:w-xl  ">
            دنبال کردن معامله‌گران بدون هیچ سابقه‌ی حرفه‌ای، گیج شدن بین هزاران خبر
            و سیگنال و ایده معاملاتی مشکلی بود که تیم متعهد و با سابقه‌ی ولزی را
            دور هم جمع کرد تا با ترکیب متخصصان سرمایه گذاری و توسعه دهنده‌های وب
            و موبایل محصولی را خلق کنند و شعار
            <span className="bg-gradient-to-r from-[#75d9d9] from-[15%] to-[#477cff]  bg-clip-text text-transparent">
              سرمایه گذاری برای همه
            </span>{" "}
            را به واقعیت تبدیل کنند
          </p>
          <div className="">
            <button
              type="button"
              className=" hover:g-gradient-to-r hover:from-[#fff] hover:to-[#fff] hover:text-blue-600 mt-6 sm:mt-8 px-8 sm:px-10 py-3 font-semibold text-[#10141f]  bg-gradient-to-r from-[#75d9d9] from-[5%] to-[#477cff] rounded-lg shadow-md transition-all duration-500 transform"
            >
              !همراه شو
            </button>
          </div>
        </div>

        {/* تصویر سمت چپ */}
        <div className="flex">
          <Image
            src="/second-section/why.png"
            alt="خدمات ولزی"
            width={450}
            height={450}
            className=" rounded-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}
