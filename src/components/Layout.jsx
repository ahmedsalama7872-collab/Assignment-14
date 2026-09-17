import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function Layout() {
  const [cat, setCat] = useState("جميع المقالات");
  const [searched, setSearched] = useState("");
  const [filter, setFilter] = useState(false);
  const [art, setArt] = useState(0);
  const [scroll, setScroll] = useState(false);
  return (
    <>
      <Navbar />
      <Outlet
        context={{
          filter,
          setFilter,
          scroll,
          setScroll,
          cat,
          setCat,
          searched,
          setSearched,
          art,
          setArt,
        }}
      />
      <Footer
        cat={cat}
        setCat={setCat}
        searched={searched}
        setSearched={setSearched}
        filter={filter}
        setScroll={setScroll}
        setFilter={setFilter}
        art={art}
        setArt={setArt}
      />
    </>
  );
}
