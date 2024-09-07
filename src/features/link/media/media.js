import { useSelector,useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { mediaSelector } from "./mediaSlice";
import { errorSelector, loadingSelector, specificErrorSelector } from "./mediaSlice";
import { fetchRedditPopular } from "./mediaSlice";
import { GetMoreButton } from "../../getMoreButton";
import { Comments } from "../../comments/comments";

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
    <div className="article">
      {articles.slice(count, secondCount).map((article, index) => {
        
        return (
          <div key={article.id}>
            <h1 >r/{article.subreddit}</h1>
            <div>
           
            
            {article.preview ? <img src={article.preview.images[0].source.url} height="200" width="200" /> : null}
            
            

            </div>



          <h1 >{article.title}</h1>
         
          <h1 >{article.author}</h1>
          
          <h3 >ups- {article.ups}</h3>

          <Link to={article.url}  >{article.url} </Link>
         <br/>
         <div>
         <br />
         <NavLink  to="/commentsPage"  state={article.permalink}>comments-{article.num_comments} </NavLink>
         </div>
         
         
          </div>
          
        )
      
      })}
      <br />
      <GetMoreButton clickHandler={clickHandler}/>
    </div>
  )
 
}