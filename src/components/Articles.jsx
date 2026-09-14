import React, { useState } from 'react'
import posts from '../assets/posts.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBorderAll, faClock ,faAngleLeft, faX } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function Articles({cat,setCat,searched,setSearched,filter,setFilter}) {
    let[art,setArt]=useState(0)

  let filtered = posts.posts.filter((po) => {
    let matchSearch =
        po.title.includes(searched) ||
        po.excerpt.includes(searched);

    let matchCategory =
        cat === "جميع المقالات" ||
        po.category === cat;

    return matchSearch && matchCategory;
});

  return (
<div dir='rtl' className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-[146px]'>
<div className='flex justify-between items-center mb-6'>
    <span className='text-neutral-400 font-medium'>عرض <span className='font-bold text-white'>{filtered.length}</span> مقالات</span>


<div className='flex gap-2'>
    <div className='flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1'>
        <button className='p-2 rounded-lg transition-all duration-300 bg-orange-500 text-white'>
            <FontAwesomeIcon icon={faBorderAll}/>
        </button>
       <button className='p-2 rounded-lg transition-all duration-300 text-neutral-400 hover:text-white'>
            <FontAwesomeIcon icon={faBars}/>
        </button>


        
    </div>

{filter?<button onClick={()=>{setFilter(false);setCat('جميع المقالات');setSearched([])}} className='text-sm text-neutral-500 hover:text-orange-500 flex items-center gap-1 transition-colors'><FontAwesomeIcon icon={faX}/>مسح الفلاتر</button>
:''}
</div>
</div>
<div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8'>

    {filtered.slice(art,art+6).map((item,index)=>{
        return  <Link to={`/blog/${item.slug}`} key={index}>
           <div 
               
              className="group bg-[#161616] h-full hover:-translate-y-1 rounded-2xl border border-[#262626] hover:border-orange-500/30 overflow-hidden flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* صورة الكارد */}
                <div className="relative overflow-hidden h-60">
                  <span className="absolute top-4 z-20 right-4 px-3 py-1 bg-black/70 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/10">
                    {item.category}
                  </span>
                  <img 
                    src={item.image || img1} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                  />
                </div>

                {/* محتوى الكارد */}
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

              {/* أسفل الكارد (الكاتب وسهم الانتقال) */}
              <div className="p-6 pt-0 flex justify-between items-center mt-4">
                <div className="flex items-center gap-3">
                  <img 
                    src={item.author?.avatar || img1} 
                    alt={item.author?.name} 
                    className="w-10 h-10 rounded-full object-cover border border-neutral-700" 
                  />
                  <div className="flex flex-col">
                    <span className="text-white text-sm font-medium">{item.author?.name}</span>
                    <span className="text-xs text-neutral-500">مبتكر محتوى</span>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-orange-500/10 flex text-orange-500 group-hover:text-white items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                  <FontAwesomeIcon icon={faAngleLeft} className="text-sm" />
                </div>
              </div>

            </div>
            </Link>
    })}

</div>


</div>  )
}
