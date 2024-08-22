import React from 'react';

import { NewsArticle } from './components/newsArticle';
import { fetchRedditPopular } from './features/link/media/mediaSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App() {



  return (
    <div>
      <NewsArticle />
    </div>
  )
}
export default App;
