import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export default function BlogNav({cat,setCat,searched,setSearched,filter,setFilter}) {
   

  return (
    <div dir='rtl' className='sticky top-20 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                <div className='relative w-full md:w-80'>
                    <input type="text" name="" onChange={(e)=>{setSearched(e.target.value); setFilter(e.target.value.trim() !== "")}}  value={searched||""} placeholder='ابحث في المقالات...' className='focus:border-orange-500 bg-[#161616] text-neutral-300 rounded-2xl border border-[#262626] outline-0 w-full px-5 py-3 pr-12' id="" />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500'/>
                </div>
                <div className='flex flex-wrap items-center justify-center gap-2'>
                    <button className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer border-0 ${cat==='جميع المقالات'?`bg-gradient-to-r from-orange-500 to-orange-600 text-white`:` bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30`}`} onClick={()=>{setCat('جميع المقالات');!searched&&setFilter(false)}}>جميع المقالات</button>
                    <button className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer border-0 ${cat==='إضاءة'?`bg-gradient-to-r from-orange-500 to-orange-600 text-white`:` bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30`}`} onClick={()=>{setCat('إضاءة');setFilter(true)}}>اضاءة</button>
                    <button className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer border-0 ${cat==='بورتريه'?`bg-gradient-to-r from-orange-500 to-orange-600 text-white`:` bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30`}`} onClick={()=>{setCat('بورتريه');setFilter(true)}}>بورتريه</button>
                    <button className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer border-0 ${cat==='مناظر طبيعية'?`bg-gradient-to-r from-orange-500 to-orange-600 text-white`:` bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30`}`} onClick={()=>{setCat('مناظر طبيعية');setFilter(true)}}>مناظر طبيعية</button>
                    <button className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer border-0 ${cat==='تقنيات'?`bg-gradient-to-r from-orange-500 to-orange-600 text-white`:` bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30`}`} onClick={()=>{setCat('تقنيات');setFilter(true)}}>تقنيات</button>
                    <button className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer border-0 ${cat==='معدات'?`bg-gradient-to-r from-orange-500 to-orange-600 text-white`:` bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30`}`} onClick={()=>{setCat('معدات');setFilter(true)}}>معدات</button>




                </div>
            </div>
        </div>
    </div>
  )
}
