import { useSelector,useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { mediaSelector } from "./mediaSlice";

export function Media (){
  
  const articles = useSelector(mediaSelector)
console.log(articles)
  return (
    <div>
      {articles.map((article, index) => {
        return (
          <div>
             
             <div>
         <video key={index} width="320" height="240" controls>
         <source src={article.media} type="video/mp4"/>
           Your browser does not support the video tag.
           </video>
           </div>

          <h1 key={index}>{article.title}</h1>
          <h1 key={index}>{article.author}</h1>
          <a href={article.url} key={index} >Article link </a>
         
          </div>
        )
      })}
    </div>
  )
 
}