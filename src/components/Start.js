import Image from "next/image";

const stepsData = [
  {
    stepNumber: "۱",
    title: "ایجاد حساب کاربری",
    description:
      "در ۳ دقیقه حساب خود را بسازید. هویتتان را با امنیت کامل تأیید کنید. از هر نقطه دنیا به ما بپیوندید.",
    icon: "/Start/why-multibank.webp",
    mainImage: "/Start/Start1.png",
  },
  {
    stepNumber: "۲",
    title: "انتخاب سبد دارایی",
    description:
      "از میان پورتفولیوهایی که متناسب با ریسک و شخصیت مالی شما پیشنهاد داده شده، پورتفولیو مورد نظر خود را انتخاب کنید.",
    icon: "/Start/account-funding.webp",
    mainImage: "/Start/Start2.png",
  },
  {
    stepNumber: "۳",
    title: "کسب بازدهی ماهانه",
    description:
      "با انتخاب درست، شاهد رشد ارزش دارایی‌های دیجیتال خود باشید و سرمایه‌گذاری سودآور و آینده‌سازی را تجربه می‌کنید.",
    icon: "/Start/support.webp",
    mainImage: "/Start/Start3.png",
  },
];

const Start = () => {
  return (
    <section className=" text-white py-20 px-4 sm:px-6 lg:px-8 bg-fixed object bg-cover bg-center bg-no-repeat m-auto">
      <div className="max-w-[1380px] m-auto ">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="text-xl font-bold uppercase tracking-wider mb-8 bg-clip-text ">
            <p className="bg-gradient-to-r from-[#75d9d9] from-[2%] to-[#477cff] bg-clip-text text-transparent"> شروع به کار</p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            در ۳ قدم سرمایه‌گذاری را شروع کنید
          </h2>
          <p
            dir="rtl"
            className="text-gray-400 text-sm sm:text-base leading-relaxed max-sm:text-justify "
          >
            ما سال‌ها تجربه در ارائه سبدهای سرمایه‌گذاری دیجیتال سودآور و روبه‌رشد
            داریم. با پشتیبانی و مشاوره لحظه‌ای، اجرای سریع معاملات، پلتفرم‌های
            پیشرفته و دسترسی به بهترین قیمت‌ها و نقدشوندگی در بازار کریپتو، مسیر
            سرمایه‌گذاری شما را ساده، مطمئن و حرفه‌ای می‌کنیم.
          </p>
        </div>

        {/* گرید کارت‌ها */}
        <div
          dir="rtl"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 text-right"
        >
          {stepsData.map((step, index) => {
            const borderColors = [
              "border-b-[12px] border-b-[#4376f6] rounded-b-2xl  ",
              "border-b-[12px] border-b-[#21cb80] rounded-b-2xl ",
              "border-b-[12px] border-b-[#f59b47] rounded-b-2xl ",
            ];

            return (
              <div
                key={step.stepNumber}
                className={` bg-[#101730] relative rounded-2xl p-4 sm:p-6 flex flex-col shadow-[0px_0px_10px_10px_rgba(0,0,38,0.6)]`}
              >
                {/* نوار رنگی پایین کارت */}
                <div
                  className={`absolute bottom-0 left-0 w-full h-[3px] ${borderColors[index]}`}
                ></div>

                {/* عنوان و آیکون */}
                <div className="flex items-center justify-between mb-3 sm:mb-4 flex-row-reverse">
                  <h4 className=" sm:text-xl font-bold ml-26 w-60 ">
                    {step.stepNumber}- {step.title}
                  </h4>
                  <div className="sm:p-2 rounded-lg">
                    <Image
                      src={step.icon}
                      alt={`آیکون برای ${step.title}`}
                      width={72}
                      height={72}
                    />
                  </div>
                </div>

                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base flex-grow">
                  {step.description}
                </p>

                {/* تصویر اصلی */}
                <div className=" transition-transform duration-500 hover:-translate-y-3 hover:shadow-lg max-w-75 m-auto  ">
                  <Image
                    src={step.mainImage}
                    alt={`تصویر برای ${step.title}`}
                    width={500}
                    height={300}
                    className="rounded-lg object-cover w-full"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Start;
