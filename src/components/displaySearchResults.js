import { SearchBar } from "../features/searchBar/searchBar";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./displaySearchResults.module.css"
import { Helmet } from "react-helmet";

export function DisplaySearchResults (){

  const [searchTerm, setSearchTerm] = useState("");
  const [clicked, setClicked] = useState(false);

  const changeHandler = ({target}) => {
    setSearchTerm(target.value);
    

  }

  const clickHandler = (e) => {
    e.preventDefault();
    setClicked(!clicked)
  }

  const [moreClick, setMoreClick] = useState(false);

  const moreClickHandler = (e) => {
    e.preventDefault();
    setMoreClick(!moreClick)
    window.scrollTo(0,0)
  }
  
  const [clear, setClear] =useState(false);

  const clearResults = (e) => {
    e.preventDefault();
    setClear(true)

  }



  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <input className={styles.search} value={searchTerm} onChange={changeHandler} placeholder="Search Reddit..."></input>
      <div className={styles.button}>
      <button onClick={clickHandler} >Search</button>
      </div>
      <div className={styles.button2}>
      <button onClick={clearResults} >Clear Results</button>
      </div>
      
      </div>
      <div className={styles.wrapper2}>
      <div className={styles.navBar}>
      
      <NavLink to="/"> Reddit Feed </NavLink>
    
      <NavLink to="/subredditList"> Subreddit List</NavLink>
      
      </div>
      <div className={styles.searchFeed}>
     <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}clicked={clicked} moreClick={moreClick} clear={clear} clearResults={clearResults} setClear={setClear}/> 
     <div id={styles["button3"]}>
     <button style={{display: "grid", justifyContent: "center"
     }} onClick={moreClickHandler}>More articles</button>
     </div>
     </div>
     
     </div>
    </div>
  )
}