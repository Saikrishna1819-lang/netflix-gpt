 import { useEffect } from "react";
 import { useDispatch } from "react-redux";
 import { API_OPTIONS } from "../utils/constants";
 import { addNowPlayingmovies } from "../utils/moviesSlice";


const useNowPlayingMovies=()=>{
    //Fetch data form the api and update store
     const dispatch=useDispatch();

    const getNowPlayingMovies =async ()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
        const json=await data.json();
        
       
        dispatch(addNowPlayingmovies(json.results));
    }
 useEffect(()=>{
    getNowPlayingMovies()
 },[])
}

export default useNowPlayingMovies;