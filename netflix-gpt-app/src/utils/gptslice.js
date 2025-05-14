import { createSlice } from "@reduxjs/toolkit"
import { shallowEqual } from "react-redux"
const gptSlice=createSlice({

    name:"gpt",
    initialState:{
        showGptSearch:false,
    },
    reducers:{
        toggleGptSearchView:(state,actions)=>{
            state.showGptSearch=!state.showGptSearch
        },
    }

})
export const {toggleGptSearchView}=gptSlice.actions;
export default gptSlice.reducer;

