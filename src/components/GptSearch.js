import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, BG_IMAGE, OPENAI_KEY } from "../utils/constants";
import lang from "../utils/langConstants";
import GptMovieSuggestions from "./GptMovieSuggestions";

import { useRef } from "react";
import { addGptMovieResults } from "../utils/gptslice";


const GptSearch=()=>{

        const lanKey=useSelector((store)=> store.config.lang )
        const searchText=useRef(null);
        const dispatch=useDispatch();
        const searchMovieTmdb=async(movie)=>{
          const data= await fetch("https://api.themoviedb.org/3/search/movie?query=" +movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS)
          const json= await data.json();
          return json.results;

          
        }
        

        const handleGptSearchClick = async () => {
    // Get the search query from the input
    const query = "Act as a Movie Recomendation system and suggest some movies from the query :"+searchText.current.value.trim()+"only give me names of 5 movies, comma separated like the example result : RRR, Rangasthalam, Racha  ";

    
    
    // Don't proceed if empty query
    if (!query) return;

    try {
        // Call OpenRouter API
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": "Bearer "+OPENAI_KEY,
                "HTTP-Referer": window.location.href,
                "X-Title": "MovieGPT",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "model": "deepseek/deepseek-r1:free",
                "messages": [{
                    "role": "user",
                    "content": query
                }]
            })
        });

        // Parse the response 
        const data = await response.json();
        console.log(data);
        
  
        
        // You can access the AI's reply with:
        const moviesList= data.choices[0]?.message?.content.split(",");
        console.log(moviesList);
        const promiseArray=moviesList.map((movie)=> searchMovieTmdb(movie))
        const tmdbResults= await Promise.all(promiseArray);
      
        dispatch(addGptMovieResults({
          movieNames:moviesList, movieResults:tmdbResults
        }));
        


        
        
        // Do something with the response (you might want to store it in state)
        
    } catch (error) {
        console.error("Error calling API:", error);
        // Handle errors here
    }
};
        
        
    return (
       
        <div className="absolute w-full h-screen overflow-x-hidden   ">
        
            <img className="h-full w-full object-cover  fixed -z-20"  src={BG_IMAGE}></img>
       <div className=" mt-36 mx-4 sm:mx-12 md:mx-24 lg:mx-52  min-w[300px] sm:min-w-[500px]  mb-20  bg-gray-900  bg-opacity-85    shadow-lg rounded-xl  ">
        <form className=  "flex flex-col sm:flex-row items-center  w-full px-5 sm:px-10 py-5 gap-4"  onSubmit={(e)=> e.preventDefault()}>
         <input className="w-full sm:flex-1 px-5  py-3  rounded-lg text-sm " type="text" ref={searchText} placeholder={lang[lanKey].GptSearchPlaceholder} ></input>
        <button className= "  sm:w-auto   bg-red-600  hover:bg-red-700  text-white  px-6 py-3 font-semibold rounded-lg " onClick={handleGptSearchClick} >{lang[lanKey].search}</button>
       </form>
       </div>
        
       
       <GptMovieSuggestions/>
      
      </div>
    )
}
export default GptSearch;



