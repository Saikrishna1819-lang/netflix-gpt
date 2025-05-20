import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";


const SecondaryContainer=()=>{

    const movies=useSelector((store)=> store.movies);
    if(!movies||movies.length===0)
    {
        return <p>Loading Movies </p>
    }

    
    return(
        <div className="bg-black">
            <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            <MoviesList title={"Popular Movies"} movies={movies.popularMovies}/>
            <MoviesList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
            <MoviesList title={"Upcomming Movies"} movies={movies.upcommingMovies}/>
          
            
        </div>
    )
}
export default SecondaryContainer;