import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faCamera, faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
export default function ArticleContent({post}) {

    let sectionsTitle = post.content.split("\n\n").filter((line) => line.startsWith("## "))
    let paragraphs = post.content.split("\n\n").filter((line)=>!line.startsWith("## "))

  return (
<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
<div className='grid lg:grid-cols-[300px_1fr] gap-12'>
    {/* left col */}
    <div>
    <div dir='rtl' className='lg:sticky lg:top-24 space-y-6'>
       
        <div className='p-6 bg-[#111111] rounded-2xl border border-[#262626]'>
            <div className='mb-5 gap-3 items-center flex'>
                <div className='w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30'>
                <FontAwesomeIcon icon={faList} className='text-orange-500'/>
                </div>
                <h3 className='text-white font-bold'>محتويات المقال</h3>
            </div>


            <nav className='flex-col flex'>
                {sectionsTitle.map((el,index)=>{
                    return(
                    <a key={index} href={`/blog/${post.slug}#section-${index}`} className='flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group'><span className='flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors'>{index+1}</span>{el.replace("## ","")} </a>
                    )
                })}
            </nav>



        </div>


        <div className='p-6 bg-[#111111] rounded-2xl border border-[#262626]'>
            <div className='grid grid-cols-2 gap-4'>
                <div className='text-center p-4 bg-[#0a0a0a] rounded-xl'>
                    <FontAwesomeIcon icon={faClock} className='fa-regular fa-clock text-orange-500 text-xl mb-2'/>
                    <p className='text-white font-bold'>{post.readTime}</p>
                    <p className='text-neutral-500 text-xs'>وقت القراءة</p>
                </div>


                <div className='text-center p-4 bg-[#0a0a0a] rounded-xl'>
                    <FontAwesomeIcon icon={faCalendar} className='fa-regular fa-clock text-orange-500 text-xl mb-2'/>
                    <p className='text-white font-bold'>{post.date}</p>
                    <p className='text-neutral-500 text-xs'>تاريخ النشر</p>
                </div>

            </div>
        </div>
      

<div className='p-6 bg-gradient-to-br from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20 text-center'>
                <div className='w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <FontAwesomeIcon icon={faEnvelope} className='text-2xl text-orange-500'/>
                </div>
                <h3 className='font-bold text-white mb-2'>لا تفوّت جديدنا</h3>
                <p className='text-neutral-400 text-sm mb-4'>اشترك للحصول على أحدث المقالات</p>
                <Link className='block w-full py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors text-center' to={"/blog"}>تصفح المزيد</Link>
</div>








    </div>
</div>


















    {/* right col */}
    <div className=''>
        <div className='p-6 bg-gradient-to-r from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20 mb-10'>
        <p className='text-lg text-neutral-200 leading-relaxed text-end'>{post.excerpt}</p>
        </div>
        <p className='text-neutral-300 leading-relaxed mb-6 text-lg text-end'>{post.content.split("\n\n")[0]}</p>

             {sectionsTitle.map((item,index)=>{
        
        return ( <React.Fragment key={index}>
        <h2 dir='rtl' id={`section-${index}`} className='text-2xl md:text-3xl font-bold text-white mt-14 mb-6 flex items-center gap-4 scroll-mt-24'>
            <span className='flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30'>
            <FontAwesomeIcon icon={faCamera} className='text-orange-500' />
            </span>
            {item.replace("## ","")}
        </h2>
        <p className='text-neutral-300 leading-relaxed mb-6 text-lg ' dir='rtl'>{paragraphs[index+1]}</p>
        </React.Fragment>

        
    )
      })}
        <div dir='rtl' className='mt-14 p-6 bg-[#111111] rounded-2xl border border-[#262626]'>
            <div className='flex items-center gap-3 mb-4'>
                <div className='w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30'>
                <FontAwesomeIcon className='fa-solid fa-tags text-orange-500' icon={faTags}/>
                </div>
                <span className='font-bold text-white'>الوسوم</span>
            </div>
            <div className='flex flex-wrap gap-2'>
                {post.tags.map((tag)=>{
                    return (
                    <span key={tag} className='px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626] hover:border-orange-500/50 hover:text-orange-500 transition-colors cursor-pointer'>#{tag}</span>
                    )
                })}
            </div>
        </div>



        <div dir='rtl' className='mt-6 p-6 bg-[#111111] rounded-2xl border border-[#262626]'>
            <div className='flex items-center justify-between flex-wrap gap-4'>
                <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30'>
                    <FontAwesomeIcon icon={faShareNodes} className='text-orange-500'/>
                    </div>
                    <span className='font-bold text-white'>شارك المقال</span>
                </div>
                <div className='flex gap-2'>
                    <div className='w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#1da1f2] hover:text-white hover:border-transparent transition-all duration-300'>
                        <FontAwesomeIcon icon={faXTwitter}/>
                    </div>
                    <div className='w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#0077b5] hover:text-white hover:border-transparent transition-all duration-300'>
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </div>
                    <div className='w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#25d366] hover:text-white hover:border-transparent transition-all duration-300'>
                        <FontAwesomeIcon icon={faWhatsapp}/>
                    </div>
                    <div className='w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-orange-500 hover:text-white hover:border-transparent transition-all duration-300'>
                        <FontAwesomeIcon icon={faLink}/>
                    </div>
                </div>
            </div>
        </div>









        <div dir='rtl' className='mt-6 p-8 bg-gradient-to-br from-[#161616] to-[#111111] rounded-2xl border border-[#262626]'>
            <div className='flex flex-col sm:flex-row items-center sm:items-start gap-6'>
                <img src={post.author.avatar} className='w-24 h-24 rounded-2xl object-cover ring-4 ring-orange-500/20' alt="" />
                <div className='text-center sm:text-right flex-1'>
                    <span className='text-xs text-orange-500 font-semibold uppercase tracking-wider'>كاتب المقال</span>
                    <h3 className='text-xl font-bold text-white mt-1'>{post.author.name}</h3>
                    <p className='text-neutral-500 text-sm mb-3'>{post.author.role}</p>
                    <p className='text-neutral-400 text-sm leading-relaxed'>مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.</p>
                </div>
            </div>
        </div>
        
    </div>
</div>
</div>  )
}
