import { faBlog, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function BlogHero() {
  return (
    <div className='relative py-20 overflow-hidden'>
        <div className='absolute inset-0 bg-[#0a0a0a]'></div>
        <div className='absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]'></div>
        <div className='absolute inset-0'>
            <div className='absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl'></div>
            <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl'></div>
        </div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
             <div className='w-fit text-orange-500 gap-1.5 mb-8 py-5 mx-auto relative border border-amber-600 bg-[#24160B] h-8 rounded-full  flex items-center px-4 animate-fade-in before:content-[""] before:absolute before:w-2 before:h-2 before:bg-amber-600 before:rounded-full before:right-4 before:animate-pulse'>
            <span className="text-sm font-medium">مدونتنا</span>
            <FontAwesomeIcon icon={faNewspaper}/>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75 "></span>{" "}
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
          </div>


            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'>استكشف <span className='text-gradient'>مقالاتنا</span></h1>
            <p className='text-xl text-neutral-400 max-w-2xl mx-auto'>اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</p>

        </div>
    </div>
  )
}
