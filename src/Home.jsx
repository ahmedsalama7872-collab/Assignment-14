import React from 'react'
import Hero from './Hero'
import Special from './Special'
import Exp from './Exp.jsx'
import Latest from './Latest.jsx'
import Subscribe from './Subscribe.jsx'
export default function Home() {
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
