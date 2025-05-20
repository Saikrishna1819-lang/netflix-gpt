
import { MOVIE_IMAGE_URL } from "../utils/constants";
import { Link } from "react-router-dom";

import { changeShowMovie } from "../utils/moviesSlice";
import { useState } from "react";
const MovieCard=({movieDetails})=>{
    const {vote_average,vote_count,title,release_date,poster_path}=movieDetails;
   

    
    const [popUp,setPopUp]=useState(false);

    const handleShowPopup=()=>{

        setPopUp(true);
        

       
    }
    const handleShowPopdown=()=>{

        setPopUp(false);
        

       

    }

    if(poster_path===null) return null
   
    return ( 

        <div  onMouseEnter={handleShowPopup} onMouseLeave={handleShowPopdown} >
    

      
       { !popUp?(
        <div className="w-[70px] sm:w-[100px] lg:w-[120px] flex-shrink-0   shadow-md rounded-lg overflow-hidden" >

           <img  className="w-full" src={MOVIE_IMAGE_URL+movieDetails?.poster_path}></img>
            </div>
    ):(
        <div className="absolute left-1/2 -translate-x-1/2 top-0 z-20 w-[300px] sm:w-[400px] shadow-md rounded-lg overflow-hidden bg-gray-900" >

           <div className="w-full h-[200px]">
            <img  className="w-full h-full  object-cover " src={MOVIE_IMAGE_URL+movieDetails.poster_path}></img>
            </div>
            <div className=" py-1">
            <div className="w-auto  flex gap-4 my-3 mx-5 items-center ">
                <div className="px-2 py-1 rounded-md bg-white">▶️</div>
                <div className="px-2 py-1 rounded-md bg-white">👍</div>
                <div className="px-2 py-1 rounded-md bg-white">➕</div>
                
            </div>
            <div className="text-white mx-5 mb-5">
                <div className="font-semibold text-xl  mb-2">{title}</div>
                <div className="flex gap-3 items-center">
                    <div className="px-2 py-1 bg-blue-600 rounded-lg">{vote_count} &#9829;</div>
                    <div className="bg-green-600 px-2 py-1 rounded-lg">{vote_average.toFixed(1)}⭐</div>
                     <div className=" px-2 py-1 font-bold border">U/A{movieDetails.adult?" 18+":" 16+"}</div>
                </div>
               
            </div>
            
            </div>
            
           </div>

    )
}</div>)
}
export default MovieCard;





