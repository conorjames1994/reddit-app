import { specificErrorSelector, loadingSelector, stateSelector, errorsSelector, subredditResults } from "./subredditSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import styles from './subreddit.module.css'

export function Subreddit (props) {



const subredditFeed = useSelector(stateSelector);
const isLoading = useSelector(loadingSelector);
const hasError = useSelector(errorsSelector);
const error = useSelector(specificErrorSelector);

const dispatch = useDispatch();


useEffect(() => {
  
 console.log(dispatch(subredditResults(props.input)))
 props.setCount(0);
 props.setSecondCount(10);

}, [props.clicked]);


console.log(subredditFeed)
console.log(props.count)
console.log(props.secondCount)

if(isLoading){

  return (
    <h1>Loading...</h1>
  )
};

if(hasError){
  return (
    <h1>{error}</h1>
  )
}


return (
  <div className={styles.container}>
    <div id={styles["heading"]}>
    <h2>{props.input} </h2>
    <h3>posts {subredditFeed.length}</h3>
    </div>
    {subredditFeed.slice(props.count, props.secondCount).map((post) => {

      return (
        <div className={styles.post} key={post.id}>
          <h3 id={styles["title"]}>"{post.title}"</h3>
<div id={styles["image"]}>
{post.preview ? <img src={post.preview.images[0].source.url} height="200px" width="200px"/> : null}
{post.secure_media ? <video src={post.secure_media.reddit_video.fallback_url} height="200px" width="200px" controls/> : null }
</div>
<h5 id={styles["author"]}>Author- 
  <div style={{color: "orange"}}>{post.author}
    </div>
  </h5>
<h5 id={styles["subreddit"]}>ups- 
  <div style={{color: "orange"}}>{post.ups}
    </div>
  </h5>
<Link id={styles["link"]}to={post.url} >{post.url}</Link>
{post.permalink ? <NavLink id={styles["comment"]} to="/commentsPage"  state={post.permalink}>comments-{post.num_comments} </NavLink> : null}
          

          </div>
      )
    })}
  </div>
  
)

}