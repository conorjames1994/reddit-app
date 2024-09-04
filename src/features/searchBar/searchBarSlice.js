import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const searchResults = createAsyncThunk('search-results/searchBar', async (arg) => {

  const url = `https://www.reddit.com/search/.json?q=${arg}`;

  const response = await fetch(url);
  const jsonResponse = await response.json();

  return jsonResponse


})


export const searchBarSlice = createSlice({
  name: "searchBar",
  initialState: {
     searchBar: [
    
     ],

     hasError: false,
     isLoading: false,
     error: null,

  },

  reducers: {} ,

  extraReducers: (builder) => {
    builder.addCase(searchResults.pending, (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    })
    .addCase(searchResults.rejected, (state, action) => {
      state.isLoading = false;
      state.hasError = true;
      state.error = action.error.message;

  })
  .addCase(searchResults.fulfilled, (state, action) => {
    state.isLoading = false;
    state.hasError = false;
     
      const newData = action.payload.data.children.map((child) => {
        state.searchBar.push(child.data)
     })
      
      
      
  
      
})
  }
    
  

})

export const searchBarReducer = searchBarSlice.reducer;
export const searchBarSelector = (state) => {
  return state.searchBar.searchBar;
};

export const loadingSelector = (state) => {
  return state.searchBar.isLoading;
};

export const errorSelector = (state) => {
  return state.searchBar.hasError;
}

export const specificErrorSelector = (state) => {
  return state.searchBar.error;
}