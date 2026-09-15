import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faChevronLeft,
  faHouse,
  faCalendarDays,
  faClock,
} from "@fortawesome/free-solid-svg-icons";


export default function ArticleHero({post}) {



  return ( 
    <section
      
      className="relative min-h-[720px] pt-30 "

    >
      <img src={post.image} className="absolute inset-0 w-full h-full object-cover" alt="" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/30 to-transparent"></div>

      <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
            {/* Breadcrumb */}
            <div className="flex absolute right-10 top-0 justify-end mb-28">
              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-5 py-2 text-sm">

                <span className="text-orange-500 font-semibold">
                  {post.category}
                </span>

                <span className="text-gray-400">
                  <FontAwesomeIcon icon={faChevronLeft} />
                </span>

                <Link to={'/blog'} className="text-gray-300  hover:text-white">
                  المدونة
                </Link>

                <span className="text-gray-400">
                  <FontAwesomeIcon icon={faChevronLeft} />
                </span>
                  <Link to={'/home'} className="text-gray-300 hover:text-white">
                <FontAwesomeIcon
                  icon={faHouse}
                  
                  />
                  </Link>

              </div>
            </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className=" mx-auto">

<div className="max-w-5xl mx-auto">

            {/* Meta Information */}
            <div className="flex justify-start items-center gap-4 mb-8" dir="rtl">

              <span className="bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-semibold">
                {post.category}
              </span>

              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <FontAwesomeIcon icon={faCalendarDays} />
                <span>{post.date}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <FontAwesomeIcon icon={faClock} />
                <span>{post.readTime}</span>
              </div>

            </div>

            {/* Title */}
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.4] text-right mb-10">
             {post.title}
            </h1>

            {/* Author */}
            <div className="flex justify-end">
              <div dir="rtl" className="flex items-center gap-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4">

                <img
                  src={post.author.avatar}
                  alt="Author"
                  className="w-16 h-16 rounded-full object-cover border-2 border-orange-500"
                  />

                <div className="text-right">
                  <h3 className="text-white font-bold text-lg">
                    {post.author.name}
                  </h3>

                  <p className="text-gray-400 text-sm mt-1">
                    {post.author.role}
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
                  </div>
    
    </section>




  );
}