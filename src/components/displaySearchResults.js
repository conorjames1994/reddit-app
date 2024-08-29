import { SearchBar } from "../features/searchBar/searchBar";
import { useState } from "react";
import { NavLink } from "react-router-dom";

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
  }
  
  const [clear, setClear] =useState(false);

  const clearResults = (e) => {
    e.preventDefault();
    setClear(true)

  }



  return (
    <div>
      <input value={searchTerm} onChange={changeHandler}></input>
      <button onClick={clickHandler} >Search</button>
      <button onClick={clearResults} >Clear Results</button>
      <br />
      <NavLink to="/"> Reddit Feed </NavLink>
      <br />
     <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}clicked={clicked} moreClick={moreClick} clear={clear} clearResults={clearResults} setClear={setClear}/> 
     <br />
     <button onClick={moreClickHandler}>More articles</button>
    </div>
  )
}