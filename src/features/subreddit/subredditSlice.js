import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const subredditResults = createAsyncThunk("fetchResultsOfSubreddit/subredditSlice", async (arg) => {
  const url = `https://www.reddit.com/${arg}/.json?raw_json=1`
  const response = await fetch(url);
  const jsonResponse = await response.json();

  return jsonResponse
  
})




export const subredditSlice = createSlice({
  name: "subreddit",
  initialState: {
    subreddit: [],
    isLoading: false,
    hasError: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(subredditResults.pending, (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    })
    .addCase(subredditResults.rejected, (state, action) => {
      state.hasError = true;
      state.isLoading = false;
      state.error = action.error.message;

    })
    .addCase(subredditResults.fulfilled, (state, action) => {
      state.hasError = false;
      state.isLoading = false;
      const data = action.payload;
      state.subreddit = data.data.children.map(child => child.data)
      

    })
  }

})

export const subredditReducer = subredditSlice.reducer;

export const loadingSelector = (state) => {
  return state.subreddit.isLoading;
}

export const specificErrorSelector = (state) => {
  return state.subreddit.error;
}

export const errorsSelector = (state) => {
  return state.subreddit.hasError;
}

export const stateSelector = (state) => {
  return state.subreddit.subreddit;
}