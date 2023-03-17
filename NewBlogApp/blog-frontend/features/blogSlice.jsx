import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blog: [],
};

const blogPosts = createSlice({
  name: "blog",
  initialState,
  reducers: {
    allPosts: (state, { payload }) => {
      state.blog = payload;
    },
  },
});

export const { allPosts } = blogPosts.actions;
export default blogPosts.reducer;
