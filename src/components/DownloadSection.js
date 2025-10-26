"use client";
import Image from "next/image";

export default function DownloadSection() {
  return (
    <section className=" relative mt-20">
      {/* تصویر جدا از بک‌گراند */}
      <div className="z-20 absolute 2xl:left-70 xl:left-30 lg:left-30 max-md:left-30 max-sm:top-100 max-sm:left-5 lg:top-1/3 md:left-30 sm:top-1/3 sm:-ml-20 -translate-y-1/2 w-[250px] sm:w-[300px] md:w-[400px] lg:w-[450px] max-sm:w-[350px]">
        <Image
          src="/download-section/wealzi-deskmob.png"
          alt="App Preview"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>

      {/* بک‌گراند آبی و متن */}
      <div className=" m-auto relative bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-16 md:py-10 px-6 md:px-12 lg:py-10 xl:py-10 lg:px-24 max-sm:h-125 max-md:py-5">
        <div className="max-w-[1380px] m-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* متن سمت راست */}
          <div className="w-full md:w-1/2 text-center md:text-right space-y-6 ml-auto  max-md:text-end">
            <h2 className="text-2xl md:text-3xl font-bold">
              دانلود و شروع به کار
            </h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed  ">
              اپلیکیشن ویلزی را دانلود کنید و از هرجا به حساب خود دسترسی داشته
              باشید. شروعی آسان، سریع و امن برای همه کاربران.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-end items-center gap-4 sm:gap-6 max-md:justify-end">
              <button className="bg-white text-gray-800 px-7 h-13 rounded-lg font-semibold hover:bg-gray-200 transition w-full sm:w-auto sm:py-0">
                نسخه وب‌اپلیکیشن برای iOS
              </button>
              <button className="bg-green-500 text-white px-7 h-13 rounded-lg font-semibold hover:bg-green-600 transition w-full sm:w-auto  sm:py-1">
                بازار
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
