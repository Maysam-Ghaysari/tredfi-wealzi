const DiscountSection = () => {
  return (
    <section className="py-16 sm:py-20 mx-auto px-4 sm:px-6  rounded-xl ">
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 sm:gap-12 lg:gap-16 max-w-[1100px] m-auto shadow-[0px_-20px_30px_20px_rgba(0,0,1,0.5)] drop-shadow-xl/50  drop-shadow-blue-500 rounded-2xl py-13 ">
        <div className="flex-shrink-0 w-full md:w-auto relative mx-auto md:mx-0">
          {/* خط آبی کمی کج و طول بیشتر */}
          <div className="absolute -inset-1 rounded-[22px] border-2 border-gray-600 transform rotate-5 rotate-x-20 pointer-events-none"></div>

          {/* جعبه داخلی */}
          <div className="relative bg-[#10141F] rounded-[22px] px-8 sm:px-25 py-6 sm:py-2 -rotate-6 text-center border-2 border-cyan-400 ">
            <h3 className="text-5xl sm:text-6xl lg:text-8xl font-black py-5 bg-gradient-to-r from-[#75d9d9] from-[10%] to-[#477cff] bg-clip-text text-transparent">
              20%
            </h3>
            <p className="mt-2 text-xl sm:text-2xl lg:text-3xl font-bold  bg-gradient-to-r from-[#75d9d9] from-[20%] to-[#477cff] bg-clip-text text-transparent">
              کارمزد کمتر
            </p>
          </div>
        </div>

        {/* بخش راست: متن و دکمه */}
        <div className="text-center md:text-right mt-8 md:mt-0 max-w-lg">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
            .حداقل 20% تخفیف بگیرید
          </h2>
          <p className="mt-4 text-base sm:text-lg lg:text-lg text-gray-300 leading-relaxed">
            با دعوت از دوستانتان علاوه بر تخفیف در کارمزد خدمات، از هدایای
            بیشتری برخوردار می شوید
          </p>
          <button
            type="button"
            className=" hover:g-gradient-to-r hover:from-[#fff] hover:to-[#fff] hover:text-blue-600 mt-6 sm:mt-8 px-8 sm:px-10 py-3 font-semibold text-[#10141f]  bg-gradient-to-r from-[#75d9d9] from-[5%] to-[#477cff] rounded-lg shadow-md transition-all duration-500 transform"
          >
            دریافت هدیه
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
