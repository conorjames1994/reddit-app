import { errorSelector, specificErrorSelector, commentSelector, loadingSelector, fetchReleventComments } from "./commentsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";




export function Comments (props) {
const dispatch = useDispatch();
const errors = useSelector(errorSelector);
const error = useSelector(specificErrorSelector);
const loading = useSelector(loadingSelector);


let location = useLocation();

const { state } = location;
const releventCommentsArray = useSelector(commentSelector);
 

useEffect(() => {
  
  

 dispatch(fetchReleventComments(state));
 props.setCount(0);
 props.setSecondCount(10)

}, [state]);




console.log(releventCommentsArray)




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
  <div >
   <h1>Comments posted {releventCommentsArray.length}</h1>
   {releventCommentsArray.slice(props.count, props.secondCount).map((comment) => {
    
    return (
      <div key={comment.id}>
        <h3>"{comment.body}"</h3>
        <h5>-{comment.author}</h5>
        <h3>Ups-{comment.ups}</h3>
        {comment.replies ? <a>replies- </a> : null}


      </div>

    )
   })}

  </div>
)



}