import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter, Route, createRoutesFromElements, Link, NavLink, Navigate } from 'react-router-dom';

import { NewsArticle } from './components/newsArticle';
import { DisplaySearchResults } from './components/displaySearchResults';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index path='/' element={<NewsArticle />}/>
      <Route path="DisplaySearchResults" element={<DisplaySearchResults />} />
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
