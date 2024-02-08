import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedRegion:'',
  selectedRegions:[],
  selectedDuration:null,
  startDate:'',
  endDate:''
};

const rentalSlice = createSlice({
  name: "rental",
  initialState: initialState,
  reducers: {
    setSelectedRegion: (state, action) => {
      const region = action.payload;
      state.selectedRegion = region;
    },
    setSelectedRegions: (state, action) => {
      const regions = action.payload;
      state.selectedRegions = regions;
    },
    setSelectedDuration: (state, action) => {
      const duration = action.payload;
      state.selectedDuration = duration;
    },
    setStartDate: (state, action) => {
      const startDate = action.payload;
      state.startDate = startDate;
    },
    setEndDate: (state, action) => {
      const endDate = action.payload;
      state.endDate = endDate;
    },
  },
});

export const { setSelectedDuration,setSelectedRegion,setStartDate,setEndDate,setSelectedRegions } = rentalSlice.actions;
export const selectedDuration = (state) => state.rental.selectedDuration;
export const selectedRegion = state => state.rental.selectedRegion
export const selectedRegions = state => state.rental.selectedRegions
export const startDate = state => state.rental.startDate
export const endDate = state => state.rental.endDate
export default rentalSlice.reducer;