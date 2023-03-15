import { configureStore } from "@reduxjs/toolkit";
import allUser from "../features/userSlice";
import allPost from "../features/postSlice";

const store = configureStore({
  reducer: {
    user: allUser,
    post: allPost,
  },
});

export default store;
