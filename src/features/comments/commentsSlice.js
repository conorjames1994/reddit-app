import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchReleventComments = createAsyncThunk("getcomments/commentSlice", async (arg, thunkAPI) => {
  const url = `https://www.reddit.com/${arg}.json`;

  const response = await fetch(url);

  const jsonResponse = await response.json();

  return jsonResponse
})


export const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [
      
    ],
    isLoading: false,
    hasError: false,
    error: null,
  },
reducers: {},
extraReducers: (builder) => {
  builder.addCase(fetchReleventComments.pending, (state, action) => {
    state.isLoading = true;
    state.hasError = false;

  })
  .addCase(fetchReleventComments.rejected, (state, action) => {
    state.isLoading = false;
    state.hasError = true;
  })
  .addCase(fetchReleventComments.fulfilled, (state, action) => {
    state.isLoading = false;
    state.hasError = false;
    const [obj1, obj2] = action.payload;
    obj2.data.children.map(child => state.comments.push(child.data))
  })
}
});

export const commentReducer = commentsSlice.reducer;

export const commentSelector = (state) => {
  return state.comments.comments;
};

export const loadingSelector = (state) => {
  return state.comments.isLoading;
};

export const errorSelector = (state) => {
  return state.comments.hasError;
};

export const specificErrorSelector = (state) => {
  return state.comments.error;
};