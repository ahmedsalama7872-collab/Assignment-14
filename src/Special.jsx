import React from "react";
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import img1 from './assets/photo-1500835556837-99ac94a94552.jpg'
    import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
    import { faStar } from "@fortawesome/free-solid-svg-icons";
    import { faClock } from "@fortawesome/free-regular-svg-icons";
    import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
    import posts from './assets/posts.json'
    export default function Special() {
    return (
        <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-500/5 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col-reverse md:flex-row justify-between items-end  mb-12 gap-4">
            <button className="bg-gradient w-30 h-12 rounded-xl text-white flex items-center justify-center group hover:-translate-y-0.5 cursor-pointer duration-300 transition-all">
                {" "}
                <FontAwesomeIcon
                icon={faAngleLeft}
                className=" group-hover:-translate-x-1 duration-300 transition-all"
                />{" "}
                عرض الكل
            </button>

            <div className="flex flex-col items-end">
                <div className='w-26 gap-5.5 mb-8 py-5  relative border border-amber-600 bg-[#24160B] h-8 rounded-full text-white flex items-center px-4 animate-fade-in before:content-[""] before:absolute before:w-2 before:h-2 before:bg-amber-600 before:rounded-full before:right-2 before:animate-pulse'>
                <span className="text-sm font-medium text-main">مميز</span>
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75 "></span>{" "}
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                </div>
                <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                مقالات مختارة
                </span>
                <p className="mt-2 text-xl text-neutral-400">
                محتوى منتقى لبدء رحلة تعلمك
                </p>
            </div>
            </div>

        <div className="flex flex-col items-center gap-10">



            {/* card */}
{posts.posts?.slice(0, 3).map((item, index) => (
 

        <div key={index} dir="rtl" className=" grid grid-cols-1 group overflow-hidden md:grid-cols-2 gap-0 rounded-2xl border border-[#262626] hover:border-orange-500/30">
       {/* image */}
        <div className="overflow-hidden relative">

        <span className="absolute top-4 z-50 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold rounded-full"> <FontAwesomeIcon
                icon={faStar}/> مميز</span>
        <img src={item.image} alt="" className=" h-72 md:h-[400px] w-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"/>
        </div>
        
        {/* content */}
        <div className="bg-[#161616] p-8 flex flex-col justify-between">
          <div>
            <div className="flex gap-4 items-center mb-4">
                <div className="flex">
                  <span className=" flex items-center justify-center px-3 py-1 border text-main border-orange-500/20 bg-[#24160B] rounded-full text-xs font-semibold bg-orange-500/10 ">{item.category}</span>
                </div>

                <span className="text-neutral-500 text-sm"> <FontAwesomeIcon
                    icon={faClock}/> {item.readTime}  </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300 leading-tight">{item.title}</h2>
            <p className="text-neutral-400 mb-6 line-clamp-3 leading-relaxed">{item.excerpt}</p>
          </div>
           
           <div className="mt-auto flex justify-between items-center">
                <div className="flex gap-2.5">
                    <div className="relative">

                    <img src={item.author?.avatar} className="w-12 rounded-full h-12 object-cover" alt="" />
                    <div className="absolute -bottom-0.5 -left-0.5 w-4 h-4 bg-orange-500 rounded-full border-2 border-[#161616]"></div>
                    </div>

<div className="flex-col flex">

                    <span className="text-white">{item.author?.name} </span>
                    <span className="text-xs text-neutral-500">{item.date}</span>
</div>
                </div>

                <span className="text-main flex items-center"><span className="group-hover:translate-x-2 duration-300 transition-all">اقرأ المقال</span> <FontAwesomeIcon
                    icon={faArrowLeftLong} className="ms-2"/></span>
           </div>
        </div>
        </div>
 
))}



        </div>

        </div>
        </section>
    );
    }