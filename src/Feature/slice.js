import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listing:[]
}

const addSlice = createSlice({
  name:"listing",
  initialState,
  reducers:{
    addListing:(state, {payload}) => {
        state.listing = payload;
    },
  },  
})



export const {addListing} = addSlice.actions;

export const getList = (state) => state.listing.listing

export default addSlice.reducer;