import { faArrowLeftLong, faImages } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import posts from "../assets/posts.json"
import { Link } from "react-router-dom";

export default function MayLike({post}) {


    let filtered= posts.posts.filter((po)=>{
        return po.category===post.category&&po.slug!==post.slug})
    
    


  return (
    <>
      <section
        dir="rtl"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 py-12 border-t border-[#262626]"
      >
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <span className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center border border-orange-500/30">
              <FontAwesomeIcon
                icon={faImages}
                className="text-orange-500 text-xl"
              />
            </span>

            <div>
              <h2 className="text-2xl font-bold text-white">مقالات قد تعجبك</h2>
              <p className="text-neutral-500 text-sm">
                استكشف المزيد من المحتوى المميز
              </p>
            </div>
          </div>

          <Link
            className="hidden sm:flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors group"
            to={"/blog"}
          >
            عرض الكل{" "}
            <FontAwesomeIcon
              icon={faArrowLeftLong}
              className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform"
            />
          </Link>
        </div>




        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">


        {/* like card */}
       {filtered.slice(0,3).map((card)=>{
        return ( <Link to={`/blog/${card.slug}`} key={card.id}>
        <div className="group relative bg-[#111111] rounded-2xl  border border-[#262626] hover:border-orange-500/30 transition-all duration-500 grid-flow-col grid grid-rows-[190px_110px]  overflow-hidden">
            <div className="overflow-hidden relative">
                <img src={card.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent"></div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">{card.category}</div>
            </div>
            <div className=" p-4">
                <h3 className="font-bold text-white group-hover:text-orange-500 transition-colors line-clamp-2 mb-3">{card.title}</h3>
                <div className="flex justify-between mt-auto text-sm text-neutral-500 items-center">
                    <div className="flex gap-3 ">
                        <img src={card.author.avatar} className="w-6 rounded-full" alt="" />
                        <h4>{card.author.name}</h4>
                    </div>
                    <span>{card.readTime}</span>
                </div>
            </div>
        </div>



        </Link>)
       })}


        </div>


      </section>
    </>
  );
}
