import { Comments } from "../features/comments/comments"
import { NavLink } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useState } from "react";

export function CommentsPage (props){
  

  const [count, setCount] = useState(0);
const [secondCount, setSecondCount] = useState(10);

 
  const commentStateHandler = () => {
   
  }

  const [clicked, setClicked] = useState(false)

  const clickHandler = () => {
    setClicked(!clicked)
  }

  const moreComments = () => {
    setCount(prev => prev + 10);
    setSecondCount(prev => prev + 10);
    window.scrollTo(0,0)
   
   }

   

  return (
    <div>
      <NavLink to="/" onClick={commentStateHandler}> Back to Reddit Feed </NavLink>
      <br/>
      <NavLink to="/DisplaySearchResults" onClick={commentStateHandler}> Search page </NavLink>
      <br />
      <Comments clicked={clicked} clickHandler={clickHandler} 
      count={count} secondCount={secondCount} setCount={setCount} setSecondCount={setSecondCount}/>
      <button onClick={moreComments} >More comments</button>

    </div>
  )
}