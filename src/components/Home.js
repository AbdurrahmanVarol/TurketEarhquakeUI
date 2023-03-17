import React from 'react'
import NewsCart from './NewsCard';
import { news } from '../data/news';
function Home() { 
  return (
    <div>
      <h1>News&Articles</h1>
      {
        news.map(n =>(
          <NewsCart news={n}></NewsCart>
        ))
      }
    </div>
  );
}

export default Home