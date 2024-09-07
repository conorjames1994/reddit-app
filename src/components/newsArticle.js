import { Media } from "../features/link/media/media";
import { NavLink } from "react-router-dom";
import { GetMoreButton } from "../features/getMoreButton";


export function NewsArticle (){

  return (
    <div>
      <h1>Home feed</h1>

      <br />
      <NavLink to="DisplaySearchResults">Search Reddit</NavLink>
      <br />
      <NavLink to="/subredditList"> Subreddit List</NavLink>
      <br />
      
      <Media />
    
    </div>
  )
}