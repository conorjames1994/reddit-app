import { Subreddit } from "./subreddit"
import { NavLink, Outlet } from "react-router-dom"
import { useState } from "react";


export function SubredditList (){

const [count, setCount] = useState(0);
const [secondCount, setSecondCount] = useState(10);
 
  

  const arg = ["r/BadDogs", "r/Catswithjobs", "r/Dogtraining"];
const [input, setInput] = useState("subreddits");
  const [clicked, setClicked] = useState(false);

  const reset = () => {
    setInput("subreddits")
    setClicked(!clicked)
  }

  const getMoreHandler = () => {
    setCount(prev => prev + 10);
    setSecondCount(prev => prev + 10);
    window.scrollTo(0,0)
  }
  
  const handleBadDogsSub = (e) => {
    e.preventDefault();
    setInput(arg[0])
    setClicked(!clicked)
  }
  const handleCatsSub = (e) => {
    e.preventDefault();
    setInput(arg[1])
    setClicked(!clicked)
  }
  
  const handleDogTrainingSub = (e) => {
    e.preventDefault();
    setInput(arg[2])
    setClicked(!clicked)
  }

  return (
    <div>
      <NavLink to="/"> Reddit Feed </NavLink>
      <br />
      <NavLink to="/DisplaySearchResults" >Search Reddit</NavLink>
      <br/>
      <div>
    <button onClick={handleBadDogsSub}>{arg[0]}</button>
    <br/>
    <button onClick={handleCatsSub}>{arg[1]}</button>
    <br/>
    <button onClick={handleDogTrainingSub}>{arg[2]}</button>
    <br/>
    <button onClick={reset}>Back to subreddit menu</button>
    </div>
     
      <Subreddit clicked={clicked} setClicked={setClicked} input={input} setInput={setInput} count={count} setCount={setCount} secondCount={secondCount} setSecondCount={setSecondCount}/>
     <div>
      <button onClick={getMoreHandler}>More</button>
     </div>
    </div>
  )
}
