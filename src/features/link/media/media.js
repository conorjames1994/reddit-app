import { useSelector,useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { mediaSelector } from "./mediaSlice";
import { errorSelector, loadingSelector, specificErrorSelector } from "./mediaSlice";
import { fetchRedditPopular } from "./mediaSlice";
import { GetMoreButton } from "../../getMoreButton";
import { Comments } from "../../comments/comments";
import styles from './media.module.css'
import { Helmet } from "react-helmet";


export function Media (){
  
  const articles = useSelector(mediaSelector);
  const errors = useSelector(errorSelector);
  const loading = useSelector(loadingSelector);
  const error = useSelector(specificErrorSelector);
  

const [commentsClicked, setCommentsClicked] = useState(false);



const commentHandler = (e) => {
 
  setCommentsClicked(!commentsClicked)
}
const [clicked, setClicked] = useState (false);

const [count, setCount] = useState(0);
const [secondCount, setSecondCount] = useState(10)

  const clickHandler = () => {
    setClicked(!clicked)
    window.scrollTo(0,0)
  }

  const dispatch = useDispatch();
  
  useEffect(()=> {
      dispatch(fetchRedditPopular());

      setCount(0);
      setSecondCount(10);
      
      
}, [])

 

  useEffect(() => {
    setCount(prev => prev + 10);

    setSecondCount(prev => prev + 10);

  }, [clicked])
  

  if(loading){

    return (
      <h1> Loading ... </h1>
    )
  }

  if(errors){
    
    return (
      <p role="alert"> {error} </p>
    )
  }

 

  return (
    <div className={styles.articles}>
      {articles.slice(count, secondCount).map((article, index) => {
        
        return (
          <div className={styles.article} key={article.id}>
            <h2 className={styles.subreddit}>r/{article.subreddit}</h2>
            <div className={styles.image}>
           
            
            {article.preview ? <img src={article.preview.images[0].source.url} height="200" width="200" /> : null}
            
            

            </div>



          <h1 className={styles.title}>"{article.title}"</h1>
         
         <div className={styles.author}>
          <h3>Author- 
            <div style={{color: "orange"}}>{article.author}
              </div>
            </h3>
          <h4 >Ups- 
            <div style={{color: "orange"}}>{article.ups}
              </div>
              </h4>
          </div>
          
         <div className={styles.comments}>
         
         
         <NavLink  to="/commentsPage"  state={article.permalink}>Comments-{article.num_comments} </NavLink>
         </div>
         
         <Link  id={styles["link"]} to={article.url}  >{article.url} </Link>
         
         
          </div>
          
        )
      
      })}
      <br />
      <GetMoreButton  className={styles.button} clickHandler={clickHandler}/>
    </div>
  )
 
}