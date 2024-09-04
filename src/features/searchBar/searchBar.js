import { searchResults, searchBarSelector, loadingSelector, errorSelector, specificErrorSelector } from "./searchBarSlice";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";



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
 dispatch(searchResults(props.searchTerm))
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
  <div>
    { count < 11 ? <h2>Results- {releventSearchResults.length}</h2> : null}
    {releventSearchResults.slice(count, secondCount).map((result) => {
      return (
        
        <div key={result.id}>
          <h1>{result.title}</h1>
          <div>
          {result.preview ? <img src={result.preview.images[0].source.url} height="200" width="200" /> : null}
          {result.secure_media ? <video  height="200" width="200" controls/> : null}
          </div>

          <h2>{result.subreddit}</h2>
          <h3>{result.author}</h3>
          <Link to={result.url}>{result.url}</Link>
          <br />
          <NavLink  to="/commentsPage" state={result.permalink}>comments-{result.num_comments} </NavLink>




        </div>
      )


    })}
  </div>
)}

}

