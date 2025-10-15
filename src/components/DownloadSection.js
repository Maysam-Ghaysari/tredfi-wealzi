import Image from "next/image";

const DownloadSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#75d9d9] from-[10%] to-[#467bff]  py-10 px-4 sm:px-8 md:px-16 rounded-3xl max-w-[1100px] mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-14">
        <div className="flex-shrink-0 order-1 md:order-1">
          <Image
            src="/download-section/rocket.webp"
            alt="Rocket Icon"
            width={300}
            height={300}
            className="w-28 h-28 sm:w-36 sm:h-36 md:w-54 md:h-40 object-contain mx-auto md:mx-0"
          />
        </div>

        <div className="flex-1 text-center md:text-right order-2 md:order-2">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-5 leading-snug">
            دانلود و شروع به کار
          </h2>
          <p className="text-white/90 text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
            اپلیکیشن ولزی را دانلود کنید و از هرجا به حساب خود دسترسی داشته
            باشید. شروعی آسان، سریع و امن برای همه کاربران
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-end">
            <button
              type="button"
              className="bg-white text-blue-600 font-semibold py-2.5 px-6 rounded-lg shadow hover:bg-gray-100 transition text-sm sm:text-base whitespace-nowrap"
            >
              نسخه وب‌اپلیکیشن برای کاربران iOS
            </button>
            <button
              type="button"
              className="bg-green-500 text-white font-semibold py-2.5 px-6 rounded-lg shadow hover:bg-green-600 transition text-sm sm:text-base whitespace-nowrap"
            >
              دریافت از بازار
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
