import React, { useState } from 'react'
import BlogHero from '../components/BlogHero'
import Articles from '../components/Articles'
import BlogNav from '../components/BlogNav'
export default function Blog() {
  
  const [cat,setCat]=useState('جميع المقالات')
  const [searched,setSearched]=useState('')
  const [filter,setFilter]=useState('')
    return (

    <section className='mt-20 bg-[#0a0a0a]  '>
        <BlogHero/>
        <BlogNav cat={cat} setCat={setCat} searched={searched} setSearched={setSearched} filter={filter} setFilter={setFilter}/>
        <Articles cat={cat} setCat={setCat} searched={searched} setSearched={setSearched} filter={filter} setFilter={setFilter} />
    </section>
  )
}
