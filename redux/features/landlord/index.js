import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  properties: "",
  messages:"",
};

const landlordSlice = createSlice({
  name: "landlord",
  initialState: initialState,
  reducers: {
    setProperties: (state, action) => {
      const properties = action.payload;
      state.properties = properties;
    },
    setMessages:(state, action)=>{
      const messages = action.payload;
      state.messages = messages
    },
  },
});

export const { setProperties,setMessages, } = landlordSlice.actions;
export const properties = (state) => state.landlord.properties;
export const messages = state => state.landlord.messages
export default landlordSlice.reducer;