import { MOVIE_IMAGE_URL } from "../utils/constants";
const MovieCard=({movieDetails,title})=>{
   
    return (
        <div className="w-[120px] flex-shrink-0  shadow-md rounded-lg overflow-hidden" >
            
            <img className="w-full" src={MOVIE_IMAGE_URL+movieDetails.poster_path}></img>
        </div>
    )
}
export default MovieCard;