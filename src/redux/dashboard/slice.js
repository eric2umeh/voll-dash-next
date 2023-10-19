import { createSlice } from "@reduxjs/toolkit";

const initState = {
  user: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState: initState,
  reducers: {
    saveUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { saveUser } = userSlice.actions;
export default userSlice.reducer;
