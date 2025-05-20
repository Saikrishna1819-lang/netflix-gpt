

import MovieCard from "./MovieCard";
const MoviesList=({title,movies})=>{
   if(!movies)
   {
      return <p>Loding Movies</p>
   }
   
    
    return (
       
         <div className= "px-10">
            <div className="text-white font-bold text-xl mb-5">{title}</div>
            <div className="flex gap-2  overflow-x-auto scrollbar-hide mb-5">
           { 

              movies.map((movie)=>(
                <MovieCard key={movie.id} movieDetails={movie}  />
                          ))
           }
        </div>
         </div>
       
    )
}
export default MoviesList;