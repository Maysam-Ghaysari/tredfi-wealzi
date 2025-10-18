"use client";

import { useState } from "react";
import Image from "next/image";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const servicesData = {
  "سرمایه گذاری": {
    image: "/Services/portfolio.png",
    details: {
      title: "انتخاب هوشمند سبد ",
      p: "سرمایه گذاری ",
      description:
        "به جای دنبال کردن تریدرها و سیگنال‌های پرریسک، از میان پورتفولیوهای آماده و تحلیل‌شده‌ای انتخاب کنید که متناسب با سطح ریسک‌پذیری، مدت‌زمان سرمایه‌گذاری، حوزه مورد علاقه و بودجه مالی شما طراحی شده‌اند؛ به‌سادگی سبد  سرمایه گذاری مناسب خود را بسازید.",
      listItems: [],
      summary: "",
      features: [
        { title: "آنالیز کامل", text: "بررسی و نمره دهی تخصصی هر پورتفولیو" },
        { title: "شخصی سازی", text: "پیشنهاد پورتفولیوی اختصاصی هر کاربر" },
        {
          title: "+100",
          text: " مدل متفاوت در ایجاد سبدهای سرمایه گذاری",
        },
      ],
    },
  },
  "ارزهای دیجیتال": {
    image: "/svg/svg2.webp",
    details: {
      title: "سرمایه گذاری در  ",
      p: " ارزهای دیجیتال",
      description: (
        <>
          با ولزی در محبوب‌ترین ارزهای دیجیتال مانند بیت‌کوین، اتریوم، ریپل و دیگر
          رمزارزها سرمایه‌گذاری کنید
          <br />
          از نوسانات این بازار پویا بهره ببرید و فرصت‌های رشد را با تصمیم‌های
          هوشمندانه شناسایی کنید
        </>
      ),
      listItems: [],
      summary: "",
      features: [
        {
          title: "<20ms ",
          text: (
            <>
              سرعت بالا <br /> در انتخاب بازارها
            </>
          ),
        },
        { title: "0.1% ", text: "کمترین کارمزد" },
        {
          title: "بیشتر از 1000 ",
          text: (
            <>
              تنوع بالا <br /> پایداری در حد نانوثانیه
            </>
          ),
        },
      ],
    },
  },
  "طلا و نقره": {
    image: "/Services/gold-silver.png",
    details: {
      title: " سرمایه گذاری در   ",
      p: "طلا و نقره  ",

      description:
        "با تنوع‌بخشی به پورتفولیوی خود از طریق سرمایه‌گذاری در فلزات ارزشمند مانند طلا و نقره، فرصت‌های تازه‌ای را برای رشد سرمایه کشف کنید. ولزی با بهره‌گیری از شبکه‌ای گسترده و حرفه‌ای از فعالان و تأمین‌کنندگان جهانی این بازار، امکان معامله‌ای روان، مطمئن را برای شما فراهم می‌کند",
      listItems: [],
      summary: "",
      features: [
        {
          title: " +20",
          text: (
            <>
              مجموعه همکار
              <br /> نگه دارایی دارایی
            </>
          ),
        },
        {
          title: "99%",
          text: (
            <>
              خلوص های متفاوت
              <br /> در خرید طلا و نقره
            </>
          ),
        },
        {
          title: " 0.5% , 1%",
          text: "کارمزدهایی پایین",
        },
      ],
    },
  },
  "درآمد ثابت": {
    image: "/Services/daramad.png",
    details: {
      title: "  سرمایه گذاری با سود ثابت ",
      p: "   سالیانه",
      description: "این قابلیت جدید در حال تکمیل و پیاده سازی است ",
      listItems: [],
      summary: "",
      features: [],
    },
  },
  "املاک و هنر": {
    image: "/Services/art.png",
    details: {
      title: " سرمایه‌گذاری حتی با پول کم در ",
      p: "ملک و آثار هنری",

      description: "این قابلیت جدید در حال تکمیل و پیاده سازی است",
      listItems: [],
      summary: "",
      features: [],
    },
  },
};

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("سرمایه گذاری");
  const tabs = Object.keys(servicesData);

  const activeContent = servicesData[activeTab];

  return (
    <section className="text-white py-20 px-4 sm:px-6 lg:px-8 bg-[#0b1120] bg-cover bg-center bg-no-repeat ">
      <div className="max-w-[1380px] mx-auto">
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
          className="mt-15 flex flex-wrap justify-center gap-2 md:gap-12   "
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
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="flex items-center justify-center order-last lg:order-first">
            {activeContent && activeContent.image && (
              <Image
                key={activeTab}
                src={activeContent.image}
                alt={activeContent.details.title}
                width={500}
                height={500}
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
                    <h3 className="text-3xl max-sm:text-[17px] font-bold">
                      {activeContent.details.title}
                    </h3>
                    <h1 className=" text-3xl max-sm:text-[17px] mr-2 font-bold  bg-gradient-to-r from-[#75d9d9] from-[10%] to-[#477cff] bg-clip-text text-transparent">
                      {activeContent.details.p}
                    </h1>
                  </div>

                  <p className="mt-8 text-gray-300 leading-relaxed text-xl ">
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
                      className=" mt-6 border-2 border-gray-800  p-4 rounded-2xl bg-gradient-to-r from-[#111b36] from-[14%] to-[#060a12]"
                    >
                      <h4 className=" text-xl font-bold bg-gradient-to-r from-[#75d9d9] from-[30%] to-[#477cff] bg-clip-text text-transparent">
                        {feature.title}
                      </h4>
                      <p className="mt-1  text-gray-200">{feature.text}</p>
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
