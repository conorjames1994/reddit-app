import { errorSelector, specificErrorSelector, commentSelector, loadingSelector, fetchReleventComments } from "./commentsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from './comments.module.css';



export function Comments (props) {
const dispatch = useDispatch();
const errors = useSelector(errorSelector);
const error = useSelector(specificErrorSelector);
const loading = useSelector(loadingSelector);


let location = useLocation();

const { state } = location;
const releventCommentsArray = useSelector(commentSelector);
 

useEffect(() => {
  
  

 console.log(dispatch(fetchReleventComments(state)));
 props.setCount(0);
 props.setSecondCount(10)

}, [state]);








if(errors){
  return (
    <h1>{error}</h1>
  )
}

if(loading){
  return (
    <h1>Loading...</h1>
  )
}



return (
  <div className={styles.container}>
   <h1 id={styles["heading"]}>Comments posted {releventCommentsArray.length}</h1>
   {releventCommentsArray.slice(props.count, props.secondCount).map((comment) => {
    
    return (
      <div className={styles.post} key={comment.id}>
        <h2 id={styles["title"]}>"{comment.body}"</h2>
        <h5 id={styles["author"]}>Author - 
          <div style={{color: "orange"}}>{comment.author}
          </div>
          </h5>
        <h3 id={styles["ups"]}>Ups-
          <div style={{color: "orange"}}>{comment.ups}
            </div>
          </h3>
        {comment.replies ? <a id={styles["replies"]}>replies- </a> : null}


      </div>

    )
   })}

  </div>
)



}