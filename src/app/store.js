import { configureStore } from '@reduxjs/toolkit';

import { mediaReducer } from '../features/link/media/mediaSlice';


export const store = configureStore({
  reducer: {
    media: mediaReducer
  },
});
