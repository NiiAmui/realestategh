import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  token:"",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setCredentials: (state, action) => {
      console.log('settign creddd')
      const token = action.payload;
      console.log(token)
      state.token = token;
    },
    setUserDetails:(state, action)=>{
      const userInfo = action.payload;
      state.user = userInfo
    },
    logout: (state, action) => {
      state.user = {};
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export const currentUser = (state)=>state.auth.user
export default authSlice.reducer;