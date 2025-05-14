
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcommingMovies from "../hooks/useUpcommingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse=()=>{

   useNowPlayingMovies();
   usePopularMovies();
   useTopRatedMovies();
   useUpcommingMovies();

   const gptView=useSelector((store)=> store.gpt.showGptSearch)
   console.log(gptView);
   
    return (
        <div className="relative box-border">

            {  
                gptView?(<>
                

                        <Header/>
                        <GptSearch/>
                         </>) :(
                    <>
                    <Header/>
            <MainContainer/>
            <SecondaryContainer/>
                    </>
                )
                
            }
            
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