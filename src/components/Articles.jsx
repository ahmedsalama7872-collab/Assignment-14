import { useState } from "react";
import posts from "../assets/posts.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBorderAll,
  faClock,
  faAngleLeft,
  faX,
  faAngleRight,
  faRotate,
  faArrowLeftLong,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faFaceFrown } from "@fortawesome/free-regular-svg-icons";

export default function Articles({
  cat,
  setCat,
  searched,
  setSearched,
  filter,
  setFilter,
  art,
  setArt,
}) {
  const [grid, setGrid] = useState(true);
  let filtered = posts.posts.filter((po) => {
    let matchSearch =
      po.title.includes(searched) || po.excerpt.includes(searched);

    let matchCategory = cat === "جميع المقالات" || po.category === cat;

    return matchSearch && matchCategory;
  });
  let numOfBtns = Math.ceil(filtered.length / 6);
  console.log(filtered);

  return (
    <div
      id="arts"
      dir="rtl"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-[146px]"
    >
      <div className="flex justify-between items-center mb-6">
        <span className="text-neutral-400 font-medium">
          عرض <span className="font-bold text-white">{filtered.length}</span>{" "}
          مقالات
          {cat != "جميع المقالات" ? (
            <span>
              {" "}
              في <span className="fw-semibold text-orange-500">{cat}</span>
            </span>
          ) : (
            ""
          )}
        </span>

        <div className="flex gap-2">
          <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
            <button
              onClick={() => setGrid(true)}
              className={`cursor-pointer flex items-center justify-center p-2 w-10 h-10 rounded-lg transition-all duration-300 ${grid ? "bg-orange-500 text-white" : "text-neutral-400 hover:text-white"}`}
            >
              <FontAwesomeIcon icon={faBorderAll} />
            </button>
            <button
              onClick={() => setGrid(false)}
              className={`cursor-pointer flex items-center justify-center p-2 w-10 h-10 rounded-lg transition-all duration-300 ${grid ? "text-neutral-400 hover:text-white" : "bg-orange-500 text-white"}`}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>

          {filter ? (
            <button
              onClick={() => {
                setFilter(false);
                setCat("جميع المقالات");
                setSearched("");
              }}
              className="text-sm text-neutral-500 hover:text-orange-500 flex items-center gap-1 transition-colors"
            >
              <FontAwesomeIcon icon={faX} />
              مسح الفلاتر
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      <div
        className={`grid ${grid ? " grid-cols-1  md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"} gap-8`}
      >
        {filtered.slice(art, art + 6).map((item, index) => {
          return (
            <Link to={`/blog/${item.slug}`} key={index}>
              <div
                className={`group bg-[#161616] h-full rounded-2xl border border-[#262626] hover:border-orange-500/30 overflow-hidden flex  ${grid ? "flex-col  hover:-translate-y-1" : "flex-col md:flex-row"}  transition-all duration-300`}
              >
                <div
                  className={`relative overflow-hidden h-52 ${!grid ? "lg:w-80 md:w-72 w-full" : ""}`}
                >
                  <span
                    className={`absolute top-4 z-20 right-4 px-3 py-1 bg-black/70 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/10 ${!grid ? "hidden" : ""}`}
                  >
                    {item.category}
                  </span>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>

                <div className="flex p-6 flex-1 flex-col">
                  <div className={`${grid ? "pb-4" : "pb-0"}`}>
                    <div className="flex items-center gap-2 text-neutral-500 mb-3">
                      <span
                        className={`px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20 ${grid ? "hidden" : ""}`}
                      >
                        {item.category}
                      </span>
                      <span
                        className={`flex items-center gap-1 ${grid ? "text-xs" : "text-sm"}`}
                      >
                        <FontAwesomeIcon icon={faClock} /> {item.readTime}
                      </span>
                      <span>•</span>

                      <span
                        className={`flex items-center gap-1 ${grid ? "text-xs" : "text-sm"}`}
                      >
                        <FontAwesomeIcon icon={faCalendar} /> {item.date}
                      </span>
                    </div>

                    <h3
                      className={`${grid ? "text-xl" : "text-xl lg:text-2xl"} font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 leading-snug`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`text-neutral-400 ${grid ? "text-sm " : "text-base"} line-clamp-2 leading-relaxed`}
                    >
                      {item.excerpt}
                    </p>
                  </div>

                  <div
                    className={`  flex justify-between mt-auto items-center ${grid ? "border-t border-[#262626]" : ""}  pt-4 mt-4`}
                  >
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
                    <div
                      className={`w-8 h-8 rounded-full bg-orange-500/10 flex text-orange-500 group-hover:text-white items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent ${!grid ? "hidden" : ""}`}
                    >
                      <FontAwesomeIcon icon={faAngleLeft} className="text-sm" />
                    </div>

                    <span
                      className={`text-orange-500 flex gap-2 items-center ${grid ? "hidden" : ""}`}
                    >
                      <span className="group-hover:translate-x-2 duration-300 transition-all">
                        اقرأ المقال
                      </span>
                      <FontAwesomeIcon icon={faArrowLeftLong} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div
        className={`text-center   ${filtered.length === 0 ? "block" : "hidden"}   `}
      >
        <div className=" p-4 mx-auto rounded-full bg-[#161616] border border-[#262626] w-24 h-24 flex items-center justify-center">
          <FontAwesomeIcon
            icon={faFaceFrown}
            className="text-4xl text-neutral-500"
          />
        </div>
        <h2 className="text-white text-2xl font-semibold mt-4">
          لا توجد مقالات
        </h2>
        <p className="text-neutral-400 mt-2.5">
          حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.
        </p>
        <button
          onClick={() => {
            setFilter(false);
            setCat("جميع المقالات");
            setSearched("");
          }}
          className="hover:-translate-y-0.5 cursor-pointer duration-300 transition-all flex bg-gradient items-center font-semibold justify-center text-white px-6 py-4 rounded-full  gap-2 mx-auto mt-6"
        >
          <FontAwesomeIcon icon={faRotate} />
          إعادة تعيين الفلاتر
        </button>
      </div>

      <div className="flex gap-2 items-center mt-6 mx-auto w-fit">
        {/* previous */}
        <button
          onClick={() => setArt(art >= 6 ? art - 6 : art)}
          className={`h-[45px] w-[45px] rounded-xl border transition-all duration-300  border-[#262626]  flex items-center justify-center  ${numOfBtns <= 1 ? "hidden" : ""} ${art < 6 ? "bg-[#0a0a0a] cursor-not-allowed  text-neutral-600" : "bg-[#161616] cursor-pointer text-white"}`}
        >
          <FontAwesomeIcon icon={faAngleRight} className="m-0 p-0" />
        </button>

        {Array.from({ length: numOfBtns > 1 ? numOfBtns : 0 }).map(
          (btn, index) => {
            return (
              <button
                key={index}
                onClick={() => setArt(index * 6)}
                className={`min-w-[44px] h-11 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer   ${art == index * 6 ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white" : "border-[#262626] border-0 hover:border-orange-500/50 hover:text-white bg-[#161616] border text-neutral-400"}`}
              >
                {index + 1}
              </button>
            );
          },
        )}

        {/* next */}
        <button
          onClick={() => setArt(art + 6 < filtered.length ? art + 6 : art)}
          className={`h-[45px] w-[45px]  border rounded-xl  border-[#262626] flex items-center justify-center hover:border-orange-500/50 duration-300 transition-all ${numOfBtns <= 1 ? "hidden" : ""} ${art + 6 >= filtered.length ? "bg-[#0a0a0a] cursor-not-allowed  text-neutral-600" : "bg-[#161616] cursor-pointer text-white"}`}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
      </div>
    </div>
  );
}
