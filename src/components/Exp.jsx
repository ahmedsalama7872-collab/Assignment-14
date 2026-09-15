import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faSliders, faMountain, faUser, faGear, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Explore({setArt,setCat,setFilter}) {
  return (
    <section className="py-24 bg-[#111111] relative border-y border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className='w-30 gap-1.5 mb-8 py-5 mx-auto relative border border-amber-600 bg-[#24160B] h-8 rounded-full text-white flex items-center px-4 animate-fade-in before:content-[""] before:absolute before:w-2 before:h-2 before:bg-amber-600 before:rounded-full before:right-3 before:animate-pulse'>
          <span className="text-sm font-medium text-main">التصنيفات</span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75 "></span>{" "}
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
        </div>

        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight ">
          استكشف حسب الموضوع
        </h2>
        <p className="text-neutral-500 mt-6 text-xl">
          اعثر على محتوى مصمم حسب اهتماماتك
        </p>

    <div dir="rtl" className="grid md:grid-cols-4 mt-10 gap-6 grid-cols-2">
{/* card 1 */}
<Link onClick={()=>{setCat('إضاءة');;setFilter(true);setArt(0)}} to={'/blog'} className="group cursor-pointer relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1">
    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <div className="relative z-30 flex gap-2 flex-col items-start">

    <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
        <FontAwesomeIcon icon={faGear} className="text-2xl text-orange-500 duration-300 transition-all group-hover:text-white"/>
    </div>

    <h4 className="text-white text-lg font-semibold inline">إضاءة</h4>
    <p className="text-neutral-500 text-sm group-hover:text-white/80 transition-colors duration-300">3 مقالة</p>

    </div>

    <div className="absolute top-12 left-12 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300"><FontAwesomeIcon icon={faAngleLeft} className="text-white"/></div>
    
</Link>
{/* .............. */}
{/* card 2 */}
<Link onClick={()=>{setCat('بورتريه');;setFilter(true);setArt(0)}} to={'/blog'} className="group cursor-pointer relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1">
    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <div className="relative z-30 flex gap-2 flex-col items-start">

    <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
        <FontAwesomeIcon icon={faUser} className="text-2xl text-orange-500 duration-300 transition-all group-hover:text-white"/>
    </div>

    <h4 className="text-white text-lg font-semibold inline">بورتريه</h4>
    <p className="text-neutral-500 text-sm group-hover:text-white/80 transition-colors duration-300">3 مقالة</p>

    </div>

    <div className="absolute top-12 left-12 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300"><FontAwesomeIcon icon={faAngleLeft} className="text-white"/></div>
    
</Link>
{/* .............. */}

{/* card 3 */}
<Link onClick={()=>{setCat('مناظر طبيعية');;setFilter(true);setArt(0)}} to={'/blog'} className="group cursor-pointer relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1">
    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <div className="relative z-30 flex gap-2 flex-col items-start">

    <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
        <FontAwesomeIcon icon={faMountain} className="text-2xl text-orange-500 duration-300 transition-all group-hover:text-white"/>
    </div>

    <h4 className="text-white text-lg font-semibold inline">مناظر طبيعية</h4>
    <p className="text-neutral-500 text-sm group-hover:text-white/80 transition-colors duration-300">2 مقالة</p>

    </div>

    <div className="absolute top-12 left-12 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300"><FontAwesomeIcon icon={faAngleLeft} className="text-white"/></div>
    
</Link>
{/* .............. */}


{/* card 4 */}
      <Link onClick={()=>{setCat('تقنيات');;setFilter(true);setArt(0)}} to={'/blog'} className="group cursor-pointer relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-30 flex gap-2 flex-col items-start">
      
          <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
              <FontAwesomeIcon icon={faSliders} className="text-2xl text-orange-500 duration-300 transition-all group-hover:text-white"/>
          </div>
      
          <h4 className="text-white text-lg font-semibold inline">تقنيات</h4>
          <p className="text-neutral-500 text-sm group-hover:text-white/80 transition-colors duration-300">5 مقالة</p>
      
          </div>
      
          <div className="absolute top-12 left-12 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300"><FontAwesomeIcon icon={faAngleLeft} className="text-white"/></div>
          
      </Link>
      {/* .............. */}


{/* card 5 */}
<Link onClick={()=>{setCat('معدات');;setFilter(true);setArt(0)}} to={'/blog'} className="group cursor-pointer relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1">
    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <div className="relative z-30 flex gap-2 flex-col items-start">

    <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
        <FontAwesomeIcon icon={faSun} className="text-2xl text-orange-500 duration-300 transition-all group-hover:text-white"/>
    </div>

    <h4 className="text-white text-lg font-semibold inline">معدات</h4>
    <p className="text-neutral-500 text-sm group-hover:text-white/80 transition-colors duration-300">3 مقالة</p>

    </div>

    <div className="absolute top-12 left-12 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300"><FontAwesomeIcon icon={faAngleLeft} className="text-white"/></div>
    
</Link>
{/* .............. */}

          </div>

      </div>
    </section>
  );
}