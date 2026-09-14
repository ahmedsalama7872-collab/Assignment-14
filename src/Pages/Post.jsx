import React from 'react'
import ArticleHero from '../components/ArticleHero'
import ArticleContent from '../components/ArticleContent'
import posts from "../assets/posts.json";
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import MayLike from '../components/MayLike';

export default function Post() {
    const { slug } = useParams();
  const post = posts.posts.find(
    (p) => slug === p.slug
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className='bg-[#0a0a0a] min-h-screen'>
    <ArticleHero post={post}/>
    <ArticleContent post={post}/>
    <MayLike post={post}/>
    </div>
  )
}
