"use client";
import Navbar from "@/components/Navbar-second";
import Image from "next/image";
import Link from "next/link";

export default function SignupPage() {
  return (
    <>
      <Navbar />
      <div className="bg-[#0b1120] text-white flex flex-col md:flex-row">
        {/* بخش راست (تصویر و برند) */}
        <div className="hidden md:flex flex-1 flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            {/* <span className="text-xl font-semibold">ولزی</span>
          <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl">
            <Image src="/Logo/logo.png" width={500} height={500} />
          </div> */}
          </div>
          <div className="relative w-[580px] h-[580px] mt-40 ">
            {/* تصویر برند */}
            <Image
              src="/login-register/logo-1.png"
              alt="welzi brand"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* بخش چپ (فرم ثبت‌نام) */}
        <div dir="rtl" className=" flex-1 flex justify-end p-4 mt-50">
          <div className="w-full max-w-lg bg-[#101828] border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-xl flex flex-col justify-center h-[60vh]">
            <h1 className="text-3xl font-bold mb-2 text-start bg-gradient-to-r from-[#75d9d9] from-[-10%] to-[#477cff]  bg-clip-text text-transparent ">
              ورود
            </h1>
            {/* <p className="text-white text-start mb-8 text-md">
              فقط چند لحظه تا ساخت حساب مالی شما در ولزی
            </p> */}

            <form className="space-y-5 flex-grow">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-white mb-3"
                >
                  آدرس ایمیل *
                </label>
                <input
                  type="email"
                  className="w-full bg-[#0b1120]  rounded-md px-3 py-3.5 text-white focus:outline-none focus:ring-1 focus:ring-blue-500  hover:bg-[#161e34]"
                  placeholder="ایمیل خود راوارد کنید."
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm text-white mb-3"
                >
                  رمز عبور *
                </label>
                <input
                  type="password"
                  className="w-full bg-[#0b1120]  rounded-md px-3 py-3.5 text-white focus:outline-none focus:ring-1 focus:ring-blue-500  hover:bg-[#161e34]"
                  placeholder="رمز خود راوارد کنید."
                />
              </div>
              <button type="button" className="text-blue-400 cursor-pointer">
                فراموشی رمز ؟
              </button>
              <button
                type="submit"
                className="w-full font-medium py-4 rounded-md transition-colors bg-blue-600 hover:bg-blue-700 text-white"
              >
                ورود
              </button>
            </form>

            <p className="text-sm text-gray-400 text-center mt-6">
              حساب دارید؟{" "}
              <Link
                href="/signup"
                className="text-blue-400 hover:text-blue-300"
              >
                ثبت‌نام
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
