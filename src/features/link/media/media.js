import { useSelector,useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { mediaSelector } from "./mediaSlice";
import { fetchRedditPopular } from "./mediaSlice";


export function Media (){
  
  const articles = useSelector(mediaSelector)
 ;

  const dispatch = useDispatch();
  useEffect(()=> {
    

      dispatch(fetchRedditPopular());
    

    
  })


  return (
    <div>
      {articles.map((article, index) => {
        return (
          <div>
             
             <div>
         <video key={index} width="320" height="240" controls>
         <source src={article.secure_media} type="video/mp4"/>
           Your browser does not support the video tag.
           </video>
           </div>

          <h1 key={index}>{article.title}</h1>
          <h1 key={index}>{article.author}</h1>
          <a href={article.url} key={index} >{article.url} </a>
         
          </div>
        )
      })}
    </div>
  )
 
}