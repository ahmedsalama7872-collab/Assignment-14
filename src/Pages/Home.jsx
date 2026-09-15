import React, { useEffect } from 'react'
import Hero from '../components/Hero.jsx'
import Special from '../components/Special.jsx'
import Exp from '../components/Exp.jsx'
import Latest from '../components/Latest.jsx'
import Subscribe from '../components/Subscribe.jsx'

export default function Home() {
  
  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}, []);
  return (

    <main className='flex-grow pt-20'>

    <Hero/>
    <Special/>
    <Exp/>
    <Latest/>
    <Subscribe/>
</main>
  )
}
