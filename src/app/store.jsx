import { configureStore } from '@reduxjs/toolkit';

import { mediaReducer } from '../features/link/media/mediaSlice';
import { searchBarReducer } from '../features/searchBar/searchBarSlice';
import { commentReducer } from '../features/comments/commentsSlice';
import { subredditReducer } from '../features/subreddit/subredditSlice';

export const store = configureStore({
  reducer: {
    searchBar: searchBarReducer,
    media: mediaReducer,
    comments: commentReducer,
    subreddit: subredditReducer,
  },
});
