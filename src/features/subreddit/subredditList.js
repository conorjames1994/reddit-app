import { Subreddit } from "./subreddit"
import { NavLink, Outlet } from "react-router-dom"
import { useState } from "react";
import styles from './subredditList.module.css'
import { Helmet } from "react-helmet";

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
    <div className={styles.container}>
      <div className={styles.header}>
      <h1>Subreddits</h1>
      <div id={styles["navLinks"]}>
    <NavLink to="/"> Reddit Feed </NavLink>
      
      <NavLink to="/DisplaySearchResults" >Search Reddit</NavLink>
      </div>

      <div id={styles["navBar"]}>
        
          <div id={styles["button"]}>
    <button  onClick={handleBadDogsSub}>{arg[0]}</button>
    </div>
    <div id={styles["button"]}>
    <button onClick={handleCatsSub}>{arg[1]}</button>
    </div>
    <div id={styles["button"]}>
    <button onClick={handleDogTrainingSub}>{arg[2]}</button>
    </div>
    <div id={styles["button"]}>
    <button onClick={reset}>Subreddit menu</button>
    </div>
    
    
    </div>


      </div>
      
      

     <div className={styles.subredditFeed}>
      <Subreddit clicked={clicked} setClicked={setClicked} input={input} setInput={setInput} count={count} setCount={setCount} secondCount={secondCount} setSecondCount={setSecondCount}/>
     
      <div id={styles["moreButton"]}>
      <div id={styles["button"]}>
      <button onClick={getMoreHandler}>More</button>
     </div>
     </div>
     
     </div>
     
    </div>
  )
}
