import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcommingMovies from "../hooks/useUpcommingMovies";
import GptSearch from "./GptSearch";
import SearchMovies from "./SearchMovies";
import { API_OPTIONS } from "../utils/constants";
import SingleMovieCard from "./SingleMovieCard";
import {addShowSingle} from "../utils/moviesSlice"

const Browse = () => {
  // Custom hooks to fetch movie categories
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcommingMovies();
  const dispatch=useDispatch();



  const gptView = useSelector((store) => store.gpt.showGptSearch);
  const moviename = useSelector((store) => store.movies.searchedMovieName);
  const showMovie=useSelector((store)=> store.movies.showSingleMovieData);
  const showSingleMovie=useSelector((store)=> store.movies.showSingleMovie);
useEffect(()=>{
    if(showMovie)
  {
    dispatch(addShowSingle());
  }
},[showMovie])
 
 


  const [searchedMovie, setSearchedMovie] = useState(null);





  useEffect(() => {
    const fetchMovie = async () => {
      if (!moviename) return;

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${moviename}&include_adult=false&language=en-US&page=1`,
          API_OPTIONS
        );
        const json = await response.json();
        setSearchedMovie(json.results);
      } catch (error) {
        console.error("Error fetching searched movie:", error);
        setSearchedMovie(null);
      }
    };

    fetchMovie();
  }, [moviename]);

  const handleClose=()=>{
    dispatch(addShowSingle())
  }

  const filterMovieData = useMemo(() => {
    if (moviename && searchedMovie?.length) {
      return searchedMovie.filter(
        (movie) => movie?.title?.toUpperCase() === moviename.toUpperCase()
      );
    }
    return null;
  }, [moviename, searchedMovie]);

  return (
    <div className="w-full h-full relative">
      
      <Header />
      
      { showSingleMovie?(
        <>
        <SingleMovieCard onClose={handleClose}/>
        </>
      ):
         filterMovieData ? (
        <SearchMovies movies={filterMovieData} />
      ) : gptView ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
