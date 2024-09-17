import { Comments } from "../features/comments/comments"
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from './commentsPage.module.css'
import { Helmet } from "react-helmet";

export function CommentsPage (props){
  
  const navigate = useNavigate()

  const [count, setCount] = useState(0);
const [secondCount, setSecondCount] = useState(10);
const [clicked, setClicked] = useState(false)
 
  const commentStateHandler = () => {
   
  }

  const goBack = () => {
    navigate(-1)
  }
  

 

  const clickHandler = () => {
    setClicked(!clicked)
  }

  const moreComments = () => {
    setCount(prev => prev + 10);
    setSecondCount(prev => prev + 10);
    window.scrollTo(0,0)
   
   }

   

  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <h1>Comments</h1>
      <div id={styles["navLinks"]}>
      <NavLink to="/" onClick={commentStateHandler}>Reddit Feed </NavLink>
    
      <NavLink to="/DisplaySearchResults" onClick={commentStateHandler}> Search page </NavLink>
      </div>
      <div style={{display: "flex", justifyContent: "center"}}>
      <div id={styles["button"]}>
      <button  onClick={goBack}>Go back</button>
      </div>
      </div>
      </div>
      <div className={styles.commentFeed}>
      <Comments clicked={clicked} clickHandler={clickHandler} 
      count={count} secondCount={secondCount} setCount={setCount} setSecondCount={setSecondCount}/>
      <div id={styles["moreButton"]}>
      <div id={styles["button2"]}>
      <button onClick={moreComments} >More comments</button>
      </div>
      </div>
       </div>  
    </div>
  )
}