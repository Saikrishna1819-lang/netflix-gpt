

// import MovieCard from "./MovieCard";
// const MoviesList=({title,movies})=>{
//    if(!movies)
//    {
//       return null;
//    }
   
    
//     return (
       
//          <div className= "px-10 pt-10  relative">
//             <div className="text-white font-bold text-lg sm:text-xl lg:text-2xl  mb-4 pl-2 border-l-4 border-red-600 ">{title}</div>
//             <div className="flex gap-4  overflow-x-auto scrollbar-hide pb-4">
//            { 

//               movies.map((movie)=>(
//                 movie.poster_path&&<MovieCard key={movie.id} movieDetails={movie}  />
//                           ))
//            }
//         </div>
//          </div>
       
//     )
// }
// export default MoviesList;



import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-10 pt-10 relative">
      <div className="text-white font-bold text-lg sm:text-xl lg:text-2xl mb-4 pl-2 border-l-4 border-red-600">
        {title}
      </div>

      {/* Set relative so MovieCard popup can be positioned properly */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory">
          {movies
            .filter((movie) => movie.poster_path)
            .map((movie) => (
              <div key={movie.id} className="snap-start">
                <MovieCard movieDetails={movie} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
