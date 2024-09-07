import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter, Route, createRoutesFromElements, Link, NavLink, Navigate } from 'react-router-dom';

import { NewsArticle } from './components/newsArticle';
import { DisplaySearchResults } from './components/displaySearchResults';
import { CommentsPage } from './components/commentsPage';
import { SubredditList } from './features/subreddit/subredditList';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index path='/' element={<NewsArticle />}/>
      <Route exact path="DisplaySearchResults" element={<DisplaySearchResults />} />
      <Route exact path='commentsPage' element={<CommentsPage />}/>
      <Route exact path='subredditList' element={<SubredditList />}/>
      
      
    </Route>
  )
)






function App() {


  return (
   <div>
      <RouterProvider router={router} />
      
      
     
      
      
    </div>
  )
}
export default App;
