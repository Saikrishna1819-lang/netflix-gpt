import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useTrailer=(id)=>{
    const dispatch = useDispatch();
   

    const getMovieVideos = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
            API_OPTIONS
        );
        const json = await data.json();
        
        const trailers = json?.results?.filter(
            video => video.type === "Trailer" && video.site === "YouTube"
        );
        dispatch(addTrailerVideo(trailers));
    };

    useEffect(() => {
        getMovieVideos();
    }, [id, dispatch]);

}
export default useTrailer