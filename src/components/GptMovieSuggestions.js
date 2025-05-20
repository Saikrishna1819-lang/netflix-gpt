import { useSelector } from "react-redux"
import MoviesList from "./MoviesList";

const GptMovieSuggestions=()=>{
const {movieNames,movieResults}=useSelector(store=> store.gpt); 
if(!movieNames) return null;


return (
      
           
            <div className="w-full mx-auto bg-black   bg-opacity-80 " >
                {
                    movieNames.map((movieName,index)=>(
                        <MoviesList key={movieName} title={movieName} movies={movieResults[index]}  />

                    ))
                }
            </div>

       
       
    )
}
export default GptMovieSuggestions;



