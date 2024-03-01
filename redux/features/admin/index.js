import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  statistics: [],
  landlords: [],
  tenants: [],
};

const adminSlice = createSlice({
  name: "admin",
  initialState: initialState,
  reducers: {
    setStatistics: (state, action) => {
      const statistics = action.payload;
      state.statistics = statistics;
    },
    setLandlords: (state, action) => {
      const landlords = action.payload;
      state.landlords = landlords;
    },
    setTenants: (state, action) => {
      const tenants = action.payload;
      state.tenants = tenants;
    },
  },
});

export const { setStatistics, setLandlords, setTenants } =
  adminSlice.actions;
export const statistics = (state) => state.landlord.statistics;
export const landlords = (state) => state.landlord.landlords;
export const tenants = (state) => state.landlord.tenants;
export default adminSlice.reducer;
