const HeroSection = () => {
  return (
    <div className="relative grid min-h-[90vh] place-items-center overflow-hidden px-4 text-white sm:min-h-screen sm:px-8 md:px-16">
      {/* Background Video */}
      <video
        autoPlay
        muted
        playsInline
        className="absolute inset-0 z-[-2] h-full w-full object-cover"
      >
        <source src="/Background/video-1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        dir="rtl"
        className="relative z-10 flex flex-col items-center text-center"
      >
        {/* Main Heading */}
        <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl lg:leading-snug">
          <span className="block bg-gradient-to-r from-[#75d9d9] to-[#477cff] bg-clip-text text-transparent">
            سرمایه‌گذاری <span className="text-white">هوشمند</span>
          </span>
          <span className="mt-2 block">
            در دارایی‌های{" "}
            <span className="bg-gradient-to-r from-[#75d9d9] to-[#477cff] bg-clip-text text-transparent">
              دیجیتال
            </span>
          </span>
        </h1>

        {/* Subheading Paragraph */}
        <p className="mt-6 max-w-2xl text-lg text-gray-200 sm:mt-8 md:text-xl">
          هوشمندانه تصمیم بگیرید و مانند بهترین سرمایه‌گذاران جهان رفتار کنید.
          <br />
          آینده مالی‌تان را امروز بسازید.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex w-full flex-col gap-4 sm:mt-10 sm:w-auto sm:flex-row sm:gap-6">
          <button
            type="button"
            className="w-full sm:w-auto transform rounded-md text-[#10141f] bg-gradient-to-r from-[#75d9d9] from-[-60%] to-[#477cff] px-14 py-2 text-lg font-bold hover:g-gradient-to-r hover:from-[#fff] hover:to-[#fff] hover:text-blue-600 duration-500 transition-all"
          >
            شروع به کار
          </button>

          <button
            type="button"
            className=" transform rounded-md bg-[#141b34] px-14 py-2 text-lg font-semibold text-blue-300 transition-all duration-300 sm:w-auto hover:bg-white hover:text-blue-600 max-sm:w-full "
          >
            ورود
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
