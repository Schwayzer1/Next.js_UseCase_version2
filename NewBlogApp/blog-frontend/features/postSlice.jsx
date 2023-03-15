import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: [],
};

const allPost = createSlice({
  name: "post",
  initialState,
  reducers: {
    post: (state, { payload }) => {
      state.post = payload;
    },
  },
});

export const { post } = allPost.actions;
export default allPost.reducer;
