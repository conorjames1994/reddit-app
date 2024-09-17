import styles from './newsArticle.module.css'
import { Media } from "../features/link/media/media";
import { NavLink } from "react-router-dom";
import { Helmet } from 'react-helmet';


export function NewsArticle (){

  return (
    <div className={styles.container}>
      <Helmet>
        <title>Reddit</title>
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
      </Helmet>
      <div className={styles.newStyle}>      
      <br />
      <NavLink  to="DisplaySearchResults">Search Reddit</NavLink>
      <br />
      <h1>Home feed</h1>
      <br />
      <NavLink to="/subredditList"> Subreddit List</NavLink>
      <br />
      
      </div>
      

      
      <div className={styles.newsFeed}>
      <Media />
      </div>
      
    
    </div>
  )
}