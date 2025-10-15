const HeroSection = () => {
  return (
    <div
      className="relative text-white 
                   min-h-[80vh] sm:min-h-screen 
                   grid place-items-center px-4 sm:px-8 md:px-16 overflow-hidden"
    >
      <video
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/Background/video-1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        dir="rtl"
        className="relative z-10 flex flex-col items-center text-center mb-20 "
      >
        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold leading-tight sm:leading-tight md:leading-normal">
          <span className="bg-gradient-to-r from-[#75d9d9] from-[40%] to-[#477cff]  bg-clip-text text-transparent block">
            سرمایه‌گذاری {""}
            <span className=" mr-2  bg-clip-text text-white">هوشمند</span>
          </span>
          <span className="block mt-2">
            در دارایی‌های{" "}
            <span className="bg-gradient-to-r from-[#75d9d9] from-[5%] to-[#477cff] bg-clip-text text-transparent">
              دیجیتال
            </span>
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-base sm:text-lg md:text-xl text-gray-200">
          هوشمندانه تصمیم بگیرید و مانند بهترین سرمایه‌گذاران جهان رفتار کنید.
          <br />
          آینده مالی‌تان را امروز بسازید.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            type="button"
            className="w-full sm:w-auto transform rounded-md bg-gradient-to-r from-[#75d9d9] from-[-60%] to-[#477cff] px-14 py-2 text-lg font-bold hover:g-gradient-to-r hover:from-[#fff] hover:to-[#fff] hover:text-blue-600 duration-500 transition-all"
          >
            شروع به کار
          </button>
          <div className="roundp-0.5 w-full sm:w-auto">
            <button 
              type="button"
              className=" transform rounded-md bg-[#141b34] px-14 py-2 text-lg font-semibold text-blue-300 transition-all duration-300 sm:w-auto hover:bg-white hover:text-blue-600 max-sm:w-full "
            >
              ورود
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
