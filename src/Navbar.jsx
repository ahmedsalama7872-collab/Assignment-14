import React from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import logo from './assets/logo-GdqARQRt.png'
export default function Navbar() {
  return (
    <div className="bg-[#0a0a0a]/95  backdrop-blur-xl border-b border-[#262626] fixed top-0 items-center flex   left-0 right-0 z-50 h-20">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* left nav */}
        
        <div className="flex gap-4 justify-between items-center">
          <button className="btn-primary w-32 rounded-3xl bg-main h-12 hover:-translate-y-0.5 text-white  transition-all duration-300 font-semibold">
            ابدأ القراءة
          </button>
          <div className="w-10 h-10 border hover:bg-[#161616] border-transparent transition-all duration-300 hover:border-[#262626] rounded-lg text-[#444444] flex justify-center items-center hover:text-main">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>

{/* center nav */}
<div className="border border-[#262626] w-2xs h-13 rounded-full flex p-1.5 justify-between items-center">
    <div className="w-1/3 rounded-full bg-main h-full flex items-center justify-center text-white">من نحن</div>
    <div className="w-1/3 rounded-full h-full flex items-center justify-center text-white">المدونة</div>
    <div className="w-1/3 rounded-full h-full flex items-center justify-center text-white">الرئيسية</div>
</div>



{/* right nav */}

<div className="flex items-center text-white text-end gap-2.5">
<div>
    <h3 className="text-2xl">عدسة</h3>
    <p className="text-xs text-[#A25A0B]">عالم التصوير الفوتوغرافي</p>
</div>
    <img alt="Photography Logo"  src={logo} className="w-12"></img>
</div>

      </div>
    </div>
  );
}
