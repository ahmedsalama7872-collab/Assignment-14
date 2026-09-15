import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import img1 from '../assets/photo-1500835556837-99ac94a94552.jpg'
export default function Newsletter() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden flex justify-center items-center px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="w-full max-w-4xl bg-[#161616] border border-[#262626] rounded-3xl p-8 md:p-14 flex flex-col items-center text-center relative overflow-hidden shadow-2xl">
        
        {/* أيقونة الرسالة */}
        <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20">
          <FontAwesomeIcon icon={faEnvelope} className="text-3xl text-white" />
        </div>

        {/* العنوان */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          اشترك في <span className="text-orange-500">نشرتنا الإخبارية</span>
        </h2>
        
        {/* الوصف */}
        <p className="text-neutral-400 text-sm md:text-base mb-8 ">
          احصل على نصائح التصوير الحصرية دروس جديدة مباشرة في بريدك الإلكتروني
        </p>

        {/* نموذج الإدخال */}
        <form className="flex flex-col sm:flex-row gap-3 w-full max-w-xl mb-6" dir="rtl">
          <input 
            type="email" 
            placeholder="أدخل بريدك الإلكتروني" 
            className="flex-1 bg-[#0a0a0a] border border-[#262626] focus:border-orange-500 outline-none px-5 py-4 rounded-xl text-white text-sm placeholder:text-neutral-600 transition-colors duration-300"
          />
          <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-4 rounded-xl transition-colors duration-300 cursor-pointer shadow-lg shadow-orange-500/20">
            اشترك الآن
          </button>
        </form>

        {/* إحصائيات المشتركين والصور */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-neutral-400" dir="rtl">
          <div className="flex -space-x-2 mr-2">
            <img src={img1} className="w-6 h-6 rounded-full object-cover border-2 border-[#161616]" alt="user" />
            <img src={img1} className="w-6 h-6 rounded-full object-cover border-2 border-[#161616]" alt="user" />
            <img src={img1} className="w-6 h-6 rounded-full object-cover border-2 border-[#161616]" alt="user" />
          </div>
          <span>انضم لـ <strong className="text-white">10,000+</strong> مصور</span>
          <span className="w-1 h-1 rounded-full bg-neutral-700 hidden md:block"></span>
          <span>بدون إزعاج</span>
          <span className="w-1 h-1 rounded-full bg-neutral-700 hidden md:block"></span>
          <span>إلغاء الاشتراك في أي وقت</span>
          
        </div>

      </div>
    </section>
  );
}