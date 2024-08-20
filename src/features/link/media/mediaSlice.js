import { createSlice } from "@reduxjs/toolkit";




 const mediaSlice = createSlice({
  name: "media",
  initialState: {
    media: [
     {
      author: "author",
      media: "media-type",
      title: "title",
      url: "url",
      id: "id"
    }
],
  reducers: {},
  extraReducers: {}
  },
})

export const mediaReducer = mediaSlice.reducer;

export const mediaSelector = (state) => {
  return state.media.media
}