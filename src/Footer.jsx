import React from "react";
import siteInfo from './assets/posts.json'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faGithub, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] text-neutral-400 pt-16 pb-8 border-t border-[#262626] overflow-hidden" dir="rtl">
        {/* أضيفت pointer-events-none هنا لمنع الخلفيات من تغطية أو منع تفاعل الماوس مع العناصر */}
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* محتوى الفوتر الرئيسي */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* العمود الأول: نبذة عن الموقع وأيقونات التواصل الاجتماعي */}
          <div className="flex flex-col items-start md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl font-bold text-white">عدسة</span>
              <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-orange-500/20">
                ع
              </div>
            </div>
            <p className="text-sm leading-relaxed text-neutral-400 mb-6 text-right">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
            </p>
            <div className="flex items-center flex-row-reverse gap-3">
              <a href="#youtube" className="w-10 h-10 rounded-xl bg-[#161616] border border-[#262626] flex items-center justify-center text-neutral-400 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="#linkedin" className="w-10 h-10 rounded-xl bg-[#161616] border border-[#262626] flex items-center justify-center text-neutral-400 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="#github" className="w-10 h-10 rounded-xl bg-[#161616] border border-[#262626] flex items-center justify-center text-neutral-400 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#twitter" className="w-10 h-10 rounded-xl bg-[#161616] border border-[#262626] flex items-center justify-center text-neutral-400 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </div>
          </div>

          {/* العمود الثاني: استكشف */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-0.5 bg-gradient rounded-full"></div>
              <h3 className="text-white font-bold text-lg">استكشف</h3>
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#home" className="group flex items-center hover:-translate-x-2 gap-2 hover:text-orange-500 transition-all duration-300">
                  <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-orange-500 text-xs">
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </span>
                  <span>الرئيسية</span>
                </a>
              </li>
              <li>
                <a href="#blog" className="group flex items-center hover:-translate-x-2 gap-2 hover:text-orange-500 transition-all duration-300">
                  <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-orange-500 text-xs">
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </span>
                  <span>المدونة</span>
                </a>
              </li>
              <li>
                <a href="#about" className="group flex items-center hover:-translate-x-2 gap-2 hover:text-orange-500 transition-all duration-300">
                  <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-orange-500 text-xs">
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </span>
                  <span>من نحن</span>
                </a>
              </li>
            </ul>
          </div>

          {/* العمود الثالث: التصنيفات */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-0.5 bg-gradient rounded-full"></div>
              <h3 className="text-white font-bold text-lg">التصنيفات</h3>
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#lighting" className="group flex items-center hover:-translate-x-2 gap-2 hover:text-orange-500 transition-all duration-300">
                  <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-orange-500 text-xs">
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </span>
                  <span>إضاءة</span>
                </a>
              </li>
              <li>
                <a href="#portrait" className="group flex items-center hover:-translate-x-2 gap-2 hover:text-orange-500 transition-all duration-300">
                  <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-orange-500 text-xs">
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </span>
                  <span>بورتريه</span>
                </a>
              </li>
              <li>
                <a href="#landscape" className="group flex items-center hover:-translate-x-2 gap-2 hover:text-orange-500 transition-all duration-300">
                  <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-orange-500 text-xs">
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </span>
                  <span>مناظر طبيعية</span>
                </a>
              </li>
              <li>
                <a href="#techniques" className="group flex items-center hover:-translate-x-2 gap-2 hover:text-orange-500 transition-all duration-300">
                  <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-orange-500 text-xs">
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </span>
                  <span>تقنيات</span>
                </a>
              </li>
            </ul>
          </div>

          {/* العمود الرابع: ابق على اطلاع (النشرة البريدية) */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-0.5 bg-gradient rounded-full"></div>
              <h3 className="text-white font-bold text-lg">ابقى على اطلاع</h3>
            </div>
            <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>
            <div className="w-full space-y-3">
              <input 
                type="email" 
                placeholder="أدخل بريدك الإلكتروني" 
                className="w-full bg-[#161616] border border-[#262626] focus:border-orange-500 outline-none px-4 py-3 rounded-xl text-white text-sm placeholder:text-neutral-600 transition-colors duration-300 relative z-20"
              />
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-xl transition-colors duration-300 shadow-lg shadow-orange-500/20 cursor-pointer relative z-20">
                اشترك
              </button>
            </div>
          </div>

        </div>

        {/* الشريط السفلي (حقوق النشر وروابط السياسة) */}
        <div className="border-t border-[#262626] pt-8 flex flex-col-reverse sm:flex-row-reverse items-center justify-between text-xs text-neutral-500 gap-4">
          <div className="flex items-center gap-6 relative z-20">
            <a href="#privacy" className="hover:text-orange-500 transition-colors duration-300">سياسة الخصوصية</a>
            <a href="#terms" className="hover:text-orange-500 transition-colors duration-300">شروط الخدمة</a>
          </div>
          <div>
            <span>© 2026 عدسة. صنع بكل </span>
            <span className="text-orange-500">♥</span>
            <span> جميع الحقوق محفوظة.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}