"use client";
import Navbar from "@/components/Navbar-second";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { showSwal } from "@/utils/helpers";
import { valiadteEmail, validateName, valiadtePassword } from "@/utils/auth";
export default function SignupPage() {
  const [accepted, setAccepted] = useState(false);
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUP = async () => {
    const isValidatName = validateName(name);
    if (!isValidatName) {
      return showSwal("نام وارد شده اشتباه است", "error", "فهمیدم");
    }

    if (email) {
      const isValidateEmail = valiadteEmail(email);
      if (!isValidateEmail) {
        return showSwal("ایمیل را به درستی وارد کنید", "error", "فهمیدم");
      }
    }

    const isValidatePassword = valiadtePassword(password);
    if (!isValidatePassword) {
      return showSwal("رمز قابل حدس است", "error", "فهمیدم");
    }

    const user = { name, email, password, lastname };
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    console.log("res ->", res);
    if (res.status === 422) {
      showSwal("کاربری با این مشخصات از قبل وجود دارد", "error", "متوجه شدم");
    } else if (res.status === 201) {
      showSwal("ثبت نام با موفقیت انجام شد", "success", "ورود به پنل کاربری");
    }

    setEmail("");
    setName("");
    setLastName("");
    setPassword("");
  };
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#0b1120] text-white flex flex-col md:flex-row">
        {/* بخش راست (تصویر و برند) */}
        <div className="hidden md:flex flex-1 flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            {/* <span className="text-xl font-semibold">ولزی</span>
          <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl">
            <Image src="/Logo/logo.png" width={500} height={500} />
          </div> */}
          </div>
          <div className="relative w-[580px] h-[580px] ">
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
        <div
          dir="rtl"
          className="flex-1 flex items-center justify-end p-6 mt-20 "
        >
          <div className="w-full max-w-lg bg-[#101828] border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-xl flex flex-col justify-center h-[80vh]">
            <h1 className="text-3xl font-bold mb-2 text-start bg-gradient-to-r from-[#75d9d9] from-[-10%] to-[#477cff]  bg-clip-text text-transparent ">
              ثبت‌نام سریع و آسان
            </h1>
            <p className="text-white text-start mb-8 text-md">
              فقط چند لحظه تا ساخت حساب مالی شما در ولزی
            </p>

            <form className="space-y-5 flex-grow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white mb-3">نام *</label>
                  <input
                    onChange={(event) => setName(event.target.value)}
                    value={name}
                    type="text"
                    className="w-full bg-[#0b1120] rounded-md px-3 py-3.5 text-white focus:outline-none focus:ring-1 focus:ring-blue-500 hover:bg-[#161e34]"
                    placeholder="نام خود راوارد کنید."
                  />
                </div>
                <div>
                  <label className="block text-sm text-white mb-3">
                    نام خانوادگی *
                  </label>
                  <input
                    onChange={(event) => setLastName(event.target.value)}
                    value={lastname}
                    type="text"
                    className="w-full bg-[#0b1120]  rounded-md px-2 py-3.5 text-white focus:outline-none focus:ring-1 focus:ring-blue-500  hover:bg-[#161e34]"
                    placeholder=" نام خانوادگی خود راوارد کنید."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-white mb-3">ایمیل *</label>
                <input
                  type="email"
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                  className="w-full bg-[#0b1120]  rounded-md px-3 py-3.5 text-white focus:outline-none focus:ring-1 focus:ring-blue-500  hover:bg-[#161e34]"
                  placeholder="ایمیل خود راوارد کنید."
                />
              </div>

              <div>
                <label className="block text-sm text-white mb-3">
                  رمز عبور *
                </label>
                <input
                  onChange={(event) => setPassword(event.target.value)}
                  value={password}
                  type="password"
                  className="w-full bg-[#0b1120]  rounded-md px-3 py-3.5 text-white focus:outline-none focus:ring-1 focus:ring-blue-500  hover:bg-[#161e34]"
                  placeholder="رمز خود راوارد کنید."
                />
              </div>
              {/* چک‌باکس قوانین */}
              <div className="flex items-start gap-2 mt-3">
                <input
                  type="checkbox"
                  id="terms"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-blue-600"
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-gray-300 leading-6"
                >
                  با کلیک بر روی «ثبت‌نام» تأیید می‌کنم که{" "}
                  <span className="text-blue-400 cursor-pointer hover:text-blue-300">
                    قوانین و مقررات ولزی
                  </span>{" "}
                  را خوانده‌ام و می‌پذیرم.
                </label>
              </div>
              <button
                onClick={() => signUP()}
                type="button"
                disabled={!accepted}
                className={`w-full font-medium py-4 rounded-md transition-colors ${
                  accepted
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-gray-700 text-gray-400 cursor-not-allowed"
                }`}
              >
                ثبت‌نام
              </button>
            </form>

            <p className="text-sm text-gray-400 text-center mt-6">
              حساب دارید؟{" "}
              <Link
                href="/signin"
                className="text-blue-400 hover:text-blue-300"
              >
                وارد شوید
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
