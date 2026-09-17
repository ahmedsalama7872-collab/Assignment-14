import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo-GdqARQRt.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return (
    <>
      <div className="bg-[#0a0a0a]/95 z-[99999] backdrop-blur-xl border-b border-[#262626] fixed top-0 items-center flex left-0 right-0 h-20">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* left nav */}
          <div className="md:flex hidden gap-4 justify-between items-center">
            <Link
              to={"/blog"}
              className="w-32 flex justify-center items-center rounded-3xl bg-gradient h-12 hover:-translate-y-0.5 text-white text-sm transition-all duration-300 font-semibold cursor-pointer"
            >
              ابدأ القراءة
            </Link>
            <div className="w-10 h-10 border hover:bg-[#161616] border-transparent transition-all duration-300 hover:border-[#262626] rounded-lg text-[#444444] flex justify-center items-center hover:text-main cursor-pointer">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </div>

          <div className="border border-[#262626] w-2xs h-13 rounded-full md:flex p-1.5 justify-between items-center hidden">
            <NavLink
              to="/about"
              className={`w-1/3 rounded-full h-full flex items-center justify-center transition-all cursor-pointer ${location.pathname === "/about" ? "bg-gradient text-white" : "text-white hover:text-orange-500"}`}
            >
              من نحن
            </NavLink>
            <NavLink
              to="/blog"
              className={`w-1/3 rounded-full h-full flex items-center justify-center transition-all cursor-pointer ${location.pathname.startsWith("/blog") ? "bg-gradient text-white" : "text-white hover:text-orange-500"}`}
            >
              المدونة
            </NavLink>
            <NavLink
              to="/home"
              className={`w-1/3 rounded-full h-full flex items-center justify-center transition-all cursor-pointer ${location.pathname === "/" || location.pathname === "/home" ? "bg-gradient text-white" : "text-white hover:text-orange-500"}`}
            >
              الرئيسية
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 text-neutral-400 hover:text-white hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626] cursor-pointer"
          >
            <FontAwesomeIcon
              icon={isOpen ? faXmark : faBars}
              className="fa-lg"
            />
          </div>

          {/* right nav */}
          <Link to={"/home"} className="group">
            <div className="flex items-center text-white text-end gap-2.5">
              <div>
                <h3 className="text-2xl font-bold">عدسة</h3>
                <p className="text-xs text-[#A25A0B] hidden sm:block">
                  عالم التصوير الفوتوغرافي
                </p>
              </div>
              <img
                alt="Photography Logo"
                src={logo}
                className="w-12 group-hover:scale-105 duration-300 transition-all"
              />
            </div>
          </Link>
        </div>
      </div>

      <div
        className={`fixed top-20 left-2 right-2 bg-[#161616]/95 backdrop-blur-xl border-b rounded-b-2xl border-[#262626] z-[99998] md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen
            ? "max-h-[300px] opacity-100 py-6"
            : "max-h-0 opacity-0 py-0 border-b-0"
        }`}
        dir="rtl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-0">
          <NavLink
            to="/home"
            onClick={() => setIsOpen(false)}
            className={`w-full rounded-xl h-10 flex items-center px-6 text-sm transition-all cursor-pointer ${location.pathname === "/" || location.pathname === "/home" ? "bg-orange-500/15 border border-orange-500/50 text-orange-500 font-medium" : "text-neutral-300 hover:bg-[#1a1a1a]"}`}
          >
            الرئيسية
          </NavLink>

          <NavLink
            to="/blog"
            onClick={() => setIsOpen(false)}
            className={`w-full rounded-xl h-10 flex items-center px-6 text-sm transition-all cursor-pointer ${location.pathname === "/blog" ? "bg-orange-500/15 border border-orange-500/50 text-orange-500 font-medium" : "text-neutral-300 hover:bg-[#1a1a1a]"}`}
          >
            المدونة
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={`w-full rounded-xl h-10 text-sm flex items-center px-6 transition-all cursor-pointer ${location.pathname === "/about" ? "bg-orange-500/15 border border-orange-500/50 text-orange-500 font-medium" : "text-neutral-300 hover:bg-[#1a1a1a]"}`}
          >
            من نحن
          </NavLink>

          <Link
            to={"/blog"}
            onClick={() => setIsOpen(false)}
            className="w-full rounded-full flex justify-center items-center bg-gradient h-14 hover:-translate-y-0.5 duration-300 transition-all text-white text-base font-semibold shadow-lg shadow-orange-500/20 mt-2 cursor-pointer"
          >
            ابدأ القراءة
          </Link>
        </div>
      </div>
    </>
  );
}
