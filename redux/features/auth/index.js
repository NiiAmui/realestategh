import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setCredentials: (state, action) => {
      const userInfo = action.payload;
      state.user = userInfo;
    },
    logout: (state, action) => {
      state.user = {};
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export const currentUser = (state)=>state.auth.user
export default authSlice.reducer;