"use client";

import { useState } from "react";
import Image from "next/image";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const servicesData = {
  "سرمایه گذاری": {
    image: "/svg/svg1.png",
    details: {
      title: "انتخاب هوشمند سبد ",
      p: "سرمایه گذاری ",
      description:
        "به جای دنبال کردن ترندها و سیگنال‌های پر ریسک، از میان پورتفولیوهای آماده و تحلیل شده، بر اساس موارد زیر انتخاب کنید",
      listItems: [
        "سطح ریسک",
        "مدت زمان سرمایه گذاری",
        "حوزه مورد علاقه",
        "بودجه مالی",
      ],
      summary:
        "سبد سرمایه گذاری خود را انتخاب کنید و بدون دغدغه آینده مالی خود را تضمین کنید.",
      features: [
        { title: "آنالیز کامل", text: "بررسی و نمره دهی تخصصی هر پورتفولیو" },
        { title: "شخصی سازی", text: "پیشنهاد پورتفولیوی اختصاصی هر کاربر" },
        {
          title: "+100",
          text: "  سرمایه‌گذاری آسان برای همه، از مبتدی تا حرفه‌ای ",
        },
      ],
    },
  },
  "ارزهای دیجیتال": {
    image: "/svg/svg2.webp",
    details: {
      title: "ورود به دنیای  ",
      p: " ارزهای دیجیتال",
      description:
        "با سرمایه‌گذاری در ارزهای دیجیتال پیشرو، از پتانسیل رشد بالای این بازار بهره‌مند شوید. ما به شما کمک می‌کنیم بر اساس:",
      listItems: ["تحلیل تکنیکال", "پروژه‌های معتبر", "آینده‌نگری بازار"],
      summary:
        "با آگاهی و ابزار مناسب، ریسک خود را مدیریت کرده و در بازار کریپتو سرمایه‌گذاری کنید.",
      features: [
        { title: "امنیت بالا", text: "نگهداری دارایی‌ها در کیف پول‌های امن" },
        { title: "تنوع رمزارزها", text: "دسترسی به طیف وسیعی از ارزهای معتبر" },
      ],
    },
  },
  "طلا و نقره": {
    image: "/svg/svg3.png",
    details: {
      title: "پناهگاهی امن برای  ",
      p: "سرمایه شما ",

      description:
        "طلا و نقره همواره به عنوان دارایی‌های امن شناخته می‌شوند. شما می‌توانید با توجه به این معیارها سرمایه‌گذاری کنید:",
      listItems: ["حفظ ارزش پول", "پوشش ریسک تورم", "نقدشوندگی بالا"],
      summary:
        "ارزش دارایی خود را در برابر نوسانات اقتصادی حفظ کرده و با اطمینان سرمایه‌گذاری کنید.",
      features: [
        {
          title: "بدون نیاز به نگهداری فیزیکی",
          text: "خرید و فروش آسان از طریق صندوق‌ها",
        },
        {
          title: "معاف از مالیات",
          text: "سود حاصل از این سرمایه‌گذاری معاف از مالیات است",
        },
      ],
    },
  },
  "درآمد ثابت": {
    image: "/svg/svg444.png",
    details: {
      title: "کسب سود ",
      p: "پایدار و بدون ریسک",
      description:
        "اگر به دنبال سرمایه‌گذاری بدون هیچ‌گونه ریسک و با سود مشخص هستید، صندوق‌های درآمد ثابت بهترین گزینه برای شما هستند:",
      listItems: ["سود روزشمار", "پرداخت‌های دوره‌ای منظم", "ضمانت نقدشوندگی"],
      summary:
        "با درآمد ثابت، با خیالی آسوده سود کسب کنید و نگران نوسانات بازار نباشید.",
      features: [
        { title: "مناسب برای همه", text: "بهترین گزینه برای افراد ریسک‌گریز" },
        {
          title: "سود بالاتر از بانک",
          text: "نرخ سود جذاب‌تر نسبت به سپرده‌های بانکی",
        },
      ],
    },
  },
  "املاک و هنر": {
    image: "/svg/svg55.png",
    details: {
      title: "سرمایه‌گذاری در ",
      p: "املاک و هنر",

      description:
        "به زودی امکان سرمایه‌گذاری در حوزه‌های املاک و آثار هنری ارزشمند از طریق پلتفرم ما فراهم خواهد شد.",
      listItems: [
        "سرمایه‌گذاری متری",
        "صندوق‌های املاک و مستغلات",
        "مالکیت بخشی از آثار هنری",
      ],
      summary: "منتظر خبرهای هیجان‌انگیز ما در این بخش باشید.",
      features: [
        { title: "به زودی", text: "این بخش در حال آماده‌سازی است" },
        { title: "فرصت‌های جدید", text: "کشف بازارهای نوین سرمایه‌گذاری" },
      ],
    },
  },
};

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("سرمایه گذاری");
  const tabs = Object.keys(servicesData);

  const activeContent = servicesData[activeTab];

  return (
    <section className="text-white py-20 px-4 sm:px-6 lg:px-8 bg-[#0b1120] bg-cover bg-center bg-no-repeat ">
      <div className="max-w-[1110px] mx-auto">
        {/* عنوان */}
        <div className="text-center">
          <h3 className="bg-gradient-to-r from-[#75d9d9] from-[30%] to-[#477cff] bg-clip-text text-transparent text-xl font-bold ">
            خدمات ما
          </h3>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            سرمایه‌گذاری آسان برای همه، از مبتدی تا حرفه‌ای
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-400 text-sm sm:text-base">
            با استفاده از ولزی در کنار سادگی با اطمینان اقدام به سرمایه گذاری
            کنید. پشت دست بزرگان بازار حتی با مبالغ کم سرمایه گذاری کنید و با
            نقدشوندگی بالا و متناسب با ریسک پروفایل خودتان سبد سرمایه گذاری
            بسازید
          </p>
        </div>

        {/* تب‌ها */}
        <div
          dir="rtl"
          className="mt-10 flex flex-wrap justify-center gap-2 md:gap-4   "
        >
          {tabs.map((tab) => (
            <button
              type="button"
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md text-sm md:text-base font-semibold transition-colors duration-300 ${
                activeTab === tab
                  ? "bg-gray-200 text-gray-900"
                  : "bg-[#1e293b] text-gray-300 hover:bg-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* محتوای تصویر و توضیحات */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="flex items-center justify-center order-last lg:order-first">
            {activeContent && activeContent.image && (
              <Image
                key={activeTab}
                src={activeContent.image}
                alt={activeContent.details.title}
                width={600}
                height={600}
                className=" overflow-hidden object-cover max-w-md lg:max-w-full animate-fade-in"
              />
            )}
          </div>

          {/* ستون راست: توضیحات */}
          <div
            key={activeTab}
            className="lg:sticky lg:top-24 text-right animate-slide-up"
          >
            {activeContent && activeContent.details && (
              <>
                <div className=" rounded-lg p-4">
                  <div className="flex flex-row-reverse">
                    <h3 className="text-xl sm:text-3xl font-bold">
                      {activeContent.details.title}
                    </h3>
                    <h1 className=" text-xl sm:text-3xl font-bold  bg-gradient-to-r from-[#75d9d9] from-[10%] to-[#477cff] bg-clip-text text-transparent">
                      {activeContent.details.p}
                    </h1>
                  </div>

                  <p className="mt-4 text-gray-300 leading-relaxed text-sm sm:text-base ">
                    {activeContent.details.description}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {activeContent.details.listItems.map((item) => (
                      <li
                        key={item}
                        className="flex items-center justify-end gap-2"
                      >
                        <span>{item}</span>
                        <IoMdCheckmarkCircleOutline />
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-gray-300 leading-relaxed text-sm sm:text-base   ">
                    {activeContent.details.summary}
                  </p>
                </div>
                <div className="mt-6 flex flex-row-reverse gap-4 max-sm:grid ">
                  {activeContent.details.features.map((feature) => (
                    <div
                      key={feature.title}
                      className=" border-2 border-gray-800  p-4 rounded-lg bg-gradient-to-r from-[#111b36] from-[14%] to-[#060a12]"
                    >
                      <h4 className="font-bold bg-gradient-to-r from-[#75d9d9] from-[30%] to-[#477cff] bg-clip-text text-transparent">
                        {feature.title}
                      </h4>
                      <p className="mt-1 text-sm text-gray-200">
                        {feature.text}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
