import BlogHero from '../components/BlogHero'
import Articles from '../components/Articles'
import BlogNav from '../components/BlogNav'
import { useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';
export default function Blog() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
 const {
    cat,
    setCat,
    searched,
    setSearched,
    filter,
    setFilter,
    art,
    setArt,
    scroll,
    setScroll
  } = useOutletContext();
 useEffect(() => {
  if (scroll) {
    window.scrollTo(0, 0);
    setScroll(false);
  }
}, [scroll, setScroll]);

    return (

    <section className='mt-20 bg-[#0a0a0a]  '>
        <BlogHero/>
        <BlogNav cat={cat} setCat={setCat} searched={searched} setSearched={setSearched} filter={filter} setFilter={setFilter} art={art} setArt={setArt}/>
        <Articles cat={cat} setCat={setCat} searched={searched} setSearched={setSearched} filter={filter} setFilter={setFilter} art={art} setArt={setArt}/>
    </section>
  )
}
