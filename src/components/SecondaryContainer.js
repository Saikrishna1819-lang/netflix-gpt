import { useDispatch, useSelector } from "react-redux";
import MoviesList from "./MoviesList";
import { clearMovieSearchData } from "../utils/moviesSlice";
import { useEffect, useMemo } from "react";
import MovieCard from "./MovieCard";

const SecondaryContainer = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);
  if (!movies) return <p>Loading Movies...</p>;

  return (
    <div className="bg-black p-4">
      
      
          <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MoviesList title={"Popular Movies"} movies={movies.popularMovies} />
          <MoviesList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
          <MoviesList title={"Upcoming Movies"} movies={movies.upcommingMovies} />
        
  
    </div>
  );
};

export default SecondaryContainer;


