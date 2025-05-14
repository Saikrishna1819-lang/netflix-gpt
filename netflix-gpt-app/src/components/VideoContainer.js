import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import useTrailer from "../hooks/useTrailer";

const VideoContainer = ({ id }) => {
    
   
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);
    const key = trailerVideo && trailerVideo[0]?.key;
    useTrailer(id);

    if (!key) return <div>Loading trailer...</div>;

    return (
        <div className="absolute top-0 left-0 w-full h-screen -z-10">
        <iframe
            className="absolute top-0 w-full h-full aspect-video"
           src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&loop=1&playlist=${key}&controls=0&modestbranding=1&rel=0`}
            title="YouTube video player"
            allow="autoplay; fullscreen"
        ></iframe>
    </div>
    );
};

export default VideoContainer;
