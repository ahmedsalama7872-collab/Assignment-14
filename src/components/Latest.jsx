import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import posts from "../assets/posts.json";
import { Link } from "react-router-dom";

export default function Latest() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-orange-500/5 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse  md:flex-row justify-between items-end md:items-end mb-16 gap-6">
          <Link
            to={"/blog"}
            className="flex items-center gap-2 text-orange-500 cursor-pointer group font-medium"
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-300">
              <FontAwesomeIcon icon={faArrowLeftLong} />
            </span>
            <span>عرض جميع المقالات</span>
          </Link>

          <div className="flex flex-col items-end md:items-end text-right w-full md:w-auto">
            <div className='w-26 gap-3.5 mb-6 py-5 relative border border-amber-600 bg-[#24160B] h-8 rounded-full text-white flex items-center px-4 animate-fade-in before:content-[""] before:absolute before:w-2 before:h-2 before:bg-amber-600 before:rounded-full before:right-2.5 before:animate-pulse'>
              <span className="text-sm font-medium text-main">الأحدث</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
            </div>
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              أحدث المقالات
            </span>
            <p className="mt-2 text-lg text-neutral-400">
              محتوى جديد طازج من المطبعة
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" dir="rtl">
          {posts.posts?.slice(3, 6).map((item, index) => (
            <Link key={index} to={`/blog/${item.slug}`}>
              <div className="group bg-[#161616] hover:-translate-y-1 rounded-2xl border border-[#262626] hover:border-orange-500/30 overflow-hidden flex flex-col justify-between transition-all duration-300">
                <div>
                  <div className="relative overflow-hidden h-60">
                    <span className="absolute top-4 z-20 right-4 px-3 py-1 bg-black/70 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/10">
                      {item.category}
                    </span>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-neutral-500 text-xs mb-3">
                      <span className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faClock} /> {item.readTime}
                      </span>
                      <span>•</span>
                      <span>{item.date}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-neutral-400 text-sm line-clamp-2 leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex justify-between items-center mt-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.author?.avatar}
                      alt={item.author?.name}
                      className="w-10 h-10 rounded-full object-cover border border-neutral-700"
                    />
                    <div className="flex flex-col">
                      <span className="text-white text-sm font-medium">
                        {item.author?.name}
                      </span>
                      <span className="text-xs text-neutral-500">
                        مبتكر محتوى
                      </span>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-orange-500/10 flex text-orange-500 group-hover:text-white items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                    <FontAwesomeIcon icon={faAngleLeft} className="text-sm" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
