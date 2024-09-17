import { searchResults, searchBarSelector, loadingSelector, errorSelector, specificErrorSelector } from "./searchBarSlice";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "./searchBar.module.css"



export function SearchBar (props){

const errors = useSelector(errorSelector);
const error = useSelector(specificErrorSelector);
const loading = useSelector(loadingSelector);
const releventSearchResults = useSelector(searchBarSelector);
const dispatch = useDispatch()

const [count, setCount] = useState(0);
const [secondCount, setSecondCount] = useState(10);


useEffect(()=> {
 props.setClear(false);

  if(props.searchTerm.length > 0){
 console.log(dispatch(searchResults(props.searchTerm)))
  };
  props.setSearchTerm("");
  setCount(0);
  setSecondCount(10);

}, [props.clicked])

useEffect(() => {
  setCount(prev => prev + 10);
 setSecondCount(prev => prev + 10);
}, [props.moreClick])


if(loading){
  return (
  <h1>Loading...</h1>
  )
};

if(errors){
return (
  <p role="alert">{error}</p>
)
}

if(props.clear === true){
return (
  <h1> Search cleared, feel free to search again ! </h1>
)

}

if(props.clear === false){
return (
  <div className={styles.container}>
    { count < 11 ? <h2>Results- {releventSearchResults.length}</h2> : null}
    {releventSearchResults.slice(count, secondCount).map((result) => {
      return (
        
        <div className={styles.post} key={result.id}>
          <h1 id={styles["title"]}>{result.title}</h1>
          <div id={styles["image"]}>
          {result.preview ? <img src={result.preview.images[0].source.url} height="200" width="200" /> : null}
          {result.secure_media ? <video  height="200" width="200" controls/> : null}
          </div>

          <h2 id={styles["subreddit"]}>r/{result.subreddit}</h2>
          <h3 id={styles["author"]}>Author-
            <div style={{color: "orange"}}>{result.author}</div>
            </h3>
          
          <div id={styles["link"]}>
          <Link to={result.url}>{result.url}</Link>
          </div>
          <NavLink id={styles["comment"]} to="/commentsPage" state={result.permalink}>comments-{result.num_comments} </NavLink>




        </div>
      )


    })}
  </div>
)}

}

