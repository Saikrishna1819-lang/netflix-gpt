import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        topRatedMovies:null,
        upcommingMovies:null,
        showMoviePopup:false,
        
        searchedMovieName:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload;
        },
        addUpcommingMovies:(state,action)=>{
            state.upcommingMovies=action.payload;
        },
        changeShowMovie:(state)=>{
            state.showMoviePopup=!state.showMoviePopup;
        },
       
        
        
        addSearchMovieName:(state,action)=>{
            state.searchedMovieName=action.payload;
        }

    }
})


export const {addNowPlayingMovies,addSearchMovieName,addTrailerVideo,changeShowMovie, addPopularMovies,addTopRatedMovies,addUpcommingMovies}=moviesSlice.actions;
export default moviesSlice.reducer;



