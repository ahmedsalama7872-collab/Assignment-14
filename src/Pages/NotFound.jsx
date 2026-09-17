import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown,faHome,faNewspaper } from "@fortawesome/free-regular-svg-icons";

export default function NotFound() {
  return (
<div className="flex-grow pt-20">
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute inset-0 opacity-40">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px] animate-[float_6s_ease-in-out_infinite]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-500/10 rounded-full blur-[100px] animate-[float_8s_ease-in-out_infinite_1s]"></div>
        </div>
        <div className="relative text-center px-4 max-w-lg mx-auto">
            <h1 className=" text-[140px] md:text-[180px] font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 leading-none select-none">404</h1>
             <div className="relative w-fit mx-auto mt-4">
             <div className=" bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full border border-orange-500/30 p-14 mx-auto  w-24 h-24 flex items-center justify-center">
          <FontAwesomeIcon
            icon={faFaceFrown}
            className="text-5xl text-orange-500"
          />
        </div>
        <div className="absolute -top-2 -right-2 w-5 h-5 bg-orange-500 rounded-lg rotate-12 animate-bounce"></div>
        <div className="absolute -bottom-1 -left-3 w-4 h-4 bg-yellow-500 rounded-full animate-pulse"></div>
        </div>


        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 mt-8">عفواً! الصفحة غير موجودة</h2>
    <p className="text-neutral-400 mb-8 text-lg">الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار الصحيح.</p>



     <div className="flex flex-col-reverse border-b pb-12 border-[#262626] sm:flex-row justify-center gap-4 mb-16">
              <Link
                to={"/blog"}
                className="flex gap-3 font-semibold  items-center text-white justify-center hover:bg-main/10 hover:text-main duration-300 transition-all hover:border-main border px-7 py-4 border-white/30 rounded-full"
              >
                <span>تصفح المقالات</span>
                <FontAwesomeIcon icon={faNewspaper} />
              </Link>
    
              <Link
                to={"/home"}
                className="flex gap-3 font-semibold group items-center bg-gradient justify-center hover:-translate-y-0.5 duration-300 transition-all  px-8 py-4 text-white rounded-full"
              >
                <span>الذهاب للرئيسية</span>
                <FontAwesomeIcon
                  icon={faHome}
                  
                />
              </Link>
            </div>


            <div>
                <span className="text-sm text-neutral-500 mb-4">قد تجد هذه مفيدة:</span>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                    <Link className="text-orange-500 hover:text-orange-400 hover:underline font-medium" to={'/blog'}>المدونة</Link>
                    <Link className="text-orange-500 hover:text-orange-400 hover:underline font-medium" to={'/'}>من نحن</Link>
                    <Link className="text-orange-500 hover:text-orange-400 hover:underline font-medium" to={'/'}>الخصوصية</Link>
                </div>
            </div>




        </div>
    </div>
</div>
  );
}