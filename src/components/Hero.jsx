import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faUsers} from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative  flex items-center overflow-hidden bg-[#0a0a0a] min-h-[90vh]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl blob"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl blob"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className='w-44 gap-1.5 mb-8 py-5 mx-auto relative border border-amber-600 bg-[#24160B] h-8 rounded-full text-white flex items-center px-4 animate-fade-in before:content-[""] before:absolute before:w-2 before:h-2 before:bg-amber-600 before:rounded-full before:right-4 before:animate-pulse'>
            <span className="text-sm font-medium">مرحباً بك في عدسة</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75 "></span>{" "}
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight  mx-auto text-center">
          اكتشف <span className="text-gradient">فن</span> <br /> التصوير الفوتوغرافي
        </h1>
        <p className="text-neutral-400 text-xl md:text-2xl max-w-2xl text-center mb-10">
          انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير
        </p>
        <div className="flex flex-col-reverse sm:flex-row justify-center gap-4 mb-16">
          <Link
            to={"/about"}
            className="flex gap-3 items-center text-white justify-center hover:bg-main/10 hover:text-main duration-300 transition-all hover:border-main border px-7 py-4 border-white/30 rounded-full"
          >
            
            <span>اعرف المزيد</span>
            <FontAwesomeIcon icon={faCircleExclamation} />
          </Link>

          <Link
            to={"/blog"}
            className="flex gap-3 group items-center bg-gradient justify-center hover:-translate-y-0.5 duration-300 transition-all  px-8 py-4 text-white rounded-full"
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="group-hover:-translate-x-1 duration-300 transition-all"
            />
            <span>استكشف المقالات</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          
          <div className="bg-[#161616cc] border border-[#262626] flex  flex-col justify-center items-center rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
            <FontAwesomeIcon
              icon={faPenNib}
              className="text-orange-500 mb-1 clip fa-xl"
            />
            <span className="text-3xl text-gradient font-semibold">6</span>
            <span className="text-neutral-400">كاتب</span>
          </div>
          <div className="bg-[#161616cc] border border-[#262626] flex  flex-col justify-center items-center rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
            <FontAwesomeIcon
              icon={faFolderOpen}
              className="text-orange-500 mb-1 clip fa-xl"
            />
            <span className="text-3xl text-gradient font-semibold">5</span>
            <span className="text-neutral-400">تصنيفات</span>
          </div>
          <div className="bg-[#161616cc] border border-[#262626] flex  flex-col justify-center items-center rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
            <FontAwesomeIcon
              icon={faUsers}
              className="text-orange-500 mb-1 clip fa-xl"
            />
            <span className="text-3xl text-gradient font-semibold" dir="rtl">+10ألف

</span>
            <span className="text-neutral-400">قارئ</span>
          </div>
          <div className="bg-[#161616cc] border border-[#262626] flex  flex-col justify-center items-center rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
            <FontAwesomeIcon
              icon={faNewspaper}
              className="text-orange-500 mb-1 clip fa-xl"
            />
            <span className="text-3xl text-gradient font-semibold">+50

</span>
            <span className="text-neutral-400">مقالة</span>
          </div>

        </div>
      </div>
    </section>
  );
}
