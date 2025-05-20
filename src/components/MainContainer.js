import { useSelector } from "react-redux";
import VideoContainer from "./VideoContainer";
import VideoTitle from "./VideoTitle";

const MainContainer=()=>{
    const movies=useSelector((store)=> store.movies?.nowPlayingMovies);
    if(!movies) return;
    const mainMovie=movies[0];
    
    const {id,overview,title}=mainMovie;
   
    

    return(
        <div className="relative w-full h-screen ">
             <VideoContainer id={id}/>
            <VideoTitle overview={overview} title={title}/>
           

        </div>
    )
}
export default MainContainer;