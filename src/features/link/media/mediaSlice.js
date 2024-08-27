import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fakeData } from "../../fakeData";




export const fetchRedditPopular = createAsyncThunk(
  'home/loadHomeFeed',
  async() => {       
      const url = 'https://www.reddit.com/r/popular/hot.json?raw_json=1';
      
      const response = await fetch(url);
      if(!response.ok) {
          const error = await response.json()
          const message = `An error has occured: ${response.status} ${error.message}`;
          throw new Error(message);
      }
      const data = await response.json();
    
      return data;
  }
)
 


 const mediaSlice = createSlice({
  name: "media",
  initialState: {
    media: [
     {
      author: "author",
      secure_media: "media-type",
      title: "title",
      url: "url",
      id: "id"
    }],

    isLoading: false,
    hasError: false,
    error: null,
},

  reducers: {},
  
  extraReducers: (builder) => {
    builder.addCase(fetchRedditPopular.pending, (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    })
    .addCase(fetchRedditPopular.rejected, (state, action) => {
      state.isLoading = false;
      state.hasError = true;
      state.error = action.error.message;

  })
  .addCase(fetchRedditPopular.fulfilled, (state, action) => {
    state.isLoading = false;
    state.hasError = false;
     
      const newData = action.payload.data.children.map((child) => {
        state.media.push(child.data)
     })
      
      
      
  
      
})
  }
})

export const mediaReducer = mediaSlice.reducer;

export const mediaSelector = (state) => {
  return state.media.media
}

export const loadingSelector = (state) => {
  return state.media.isLoading ;
}

export const errorSelector = (state) => {
  return state.media.hasError ;
}

export const specificErrorSelector = (state) => {
  return state.media.error ;
}