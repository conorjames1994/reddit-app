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


 
  
  const [clear, setClear] =useState(false);

  const clearResults = (e) => {
    e.preventDefault();
    setClear(true)

  }



  return (
    <form className={styles.container}>
      <div className={styles.wrapper}>
      <input className={styles.search} value={searchTerm} onChange={changeHandler} onKeyDown={(e) => {if (e.key === "Enter" && searchTerm) {clickHandler}}}placeholder="Search Reddit..."></input>
      <div className={styles.button}>
      <button onClick={clickHandler} type="submit">Search</button>
      </div>
      <div className={styles.button2}>
      <button onClick={clearResults} >Clear Results</button>
      </div>
      
      </div>
      <div className={styles.wrapper2}>
      <div className={styles.navBar}>
      
      <NavLink to="/" > Reddit Feed </NavLink>
    
      <NavLink to="/subredditList" > Subreddit List</NavLink>
      
      </div>
      <div className={styles.searchFeed}>
     <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}clicked={clicked}  clear={clear} clearResults={clearResults} setClear={setClear}/> 
     
     </div>
     
     </div>
    </form>
  )
}