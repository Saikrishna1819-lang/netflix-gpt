
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse=()=>{

   useNowPlayingMovies();
    return (
        <div className="relative">
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
            {/*

            MainContainer
               - VideoContainer
               - VideoTitle
            Secondary Container
               - MoviesList*n
                  - cards*n

              



              */}
        </div>
    )
}
export default Browse;