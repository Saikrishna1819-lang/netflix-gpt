import { useSelector } from "react-redux";
import { MOVIE_IMAGE_URL } from "../utils/constants";


const SingleMovieCard=({onClose})=>{
      const showMovie=useSelector((store)=> store.movies.showSingleMovieData);
      if (!showMovie) {
  return (
    <div className="w-full h-screen bg-black flex justify-center items-center text-white text-xl">
      Loading...
    </div>
  );
}
console.log(showMovie);
  const {poster_path,title,adult,overview,relaseDate , vote_average,}=showMovie

    return (
        <div className="w-full h-screen bg-black opacity-80 flex justify-center items-center ">

          <div className="bg-gray-900 w-8/12 h-[70%] rounded-xl flex  gap-10 ">
          <div className="h-full w-1/3 flex flex-shrink-0 ">
             <img className=" w-full h-full   rounded-xl object-cover" src={MOVIE_IMAGE_URL+poster_path}></img>
          </div>
          
           
         
         
          <div className="text-white flex flex-col relative">
            <h1 className="text-2xl font-bold">{title}</h1>
            <h2>Overview</h2>
            <p>{overview}</p>
            <button onClick={onClose} className="absolute top-5 right-5 bg-white text-black font-bold text-2xl px-4 py-2 rounded-lg">X</button>
          </div>
          </div>
        </div>
    )
}
export default SingleMovieCard;