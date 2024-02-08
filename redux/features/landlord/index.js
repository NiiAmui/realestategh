import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  properties: [],
  messages:"",
  property:{}
};

const landlordSlice = createSlice({
  name: "landlord",
  initialState: initialState,
  reducers: {
    setProperties: (state, action) => {
      const properties = action.payload;
      state.properties = properties;
    },
    setProperty: (state, action) => {
      const property = action.payload;
      state.property = property;
    },
    setMessages:(state, action)=>{
      const messages = action.payload;
      state.messages = messages
    },
  },
});

export const { setProperties,setMessages,setProperty } = landlordSlice.actions;
export const properties = (state) => state.landlord.properties;
export const messages = state => state.landlord.messages
export const property = state => state.landlord.property
export default landlordSlice.reducer;