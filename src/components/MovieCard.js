
import { MOVIE_IMAGE_URL } from "../utils/constants";
import { Link } from "react-router-dom";

import { addSingleMovieData } from "../utils/moviesSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const MovieCard=({movieDetails})=>{
    const dispatch=useDispatch();
    const {vote_average,vote_count,title,release_date,poster_path}=movieDetails;
    
   const handleMovieCard=()=>{
    dispatch(addSingleMovieData(movieDetails));    
   }

   

    if(poster_path===null) return null
   
    return ( 

     
            <div onClick={handleMovieCard} className="w-[70px] sm:w-[100px] lg:w-[120px] flex-shrink-0   shadow-md rounded-lg overflow-hidden" >

                     <img  className="w-full" src={MOVIE_IMAGE_URL+movieDetails?.poster_path}></img>
            </div>
       
    
        

)
}
export default MovieCard;





