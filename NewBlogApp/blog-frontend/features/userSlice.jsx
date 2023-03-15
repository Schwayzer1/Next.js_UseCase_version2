import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

const allUser = createSlice({
  name: "user",
  initialState,
  reducers: {
    user: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { user } = allUser.actions;
export default allUser.reducer;
