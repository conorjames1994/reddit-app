import { configureStore } from '@reduxjs/toolkit';

import { mediaReducer } from '../features/link/media/mediaSlice';
import { searchBarReducer } from '../features/searchBar/searchBarSlice';


export const store = configureStore({
  reducer: {
    searchBar: searchBarReducer,
    media: mediaReducer
  },
});
