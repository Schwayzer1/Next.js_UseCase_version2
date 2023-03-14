import { configureStore } from "@reduxjs/toolkit";
import blogPosts from "../features/blogSlice";

const store = configureStore({
  reducer: {
    blog: blogPosts,
  },
});

export default store;
