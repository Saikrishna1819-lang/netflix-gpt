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
  const {poster_path,title,adult,overview,release_date , vote_average,}=showMovie

    return (
        <div className="w-full h-screen bg-black  flex justify-center items-center ">

          <div className="bg-gray-900 w-8/12 h-[70%] rounded-xl flex   ">
          <div className="h-full w-5/12 flex flex-shrink-0 ">
             <img className=" w-full h-full   rounded-xl object-cover" src={MOVIE_IMAGE_URL+poster_path}></img>
          </div>
          
           
         
         
          <div className="text-white flex flex-col py-14 px-6 gap-5  ">
            <div className="flex justify-between items-center ">
              <h1 className="text-2xl font-bold">{title}</h1>
            <button onClick={onClose} className=" top-5 right-5 bg-white text-black font-bold text-2xl px-3 py-1 rounded-lg">X</button>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-1" >Overview</h2>
            <p>{overview}</p>
            </div>
            <div className="flex gap-3 items-center">
          <button className="bg-gray-200 hover:bg-gray-400 px-6 py-1 text-black text-lg font-semibold rounded-md">Play</button>
          <button className="text-xl font-semibold bg-gray-700 hover:bg-gray-800 rounded-lg px-2.5  py-1 ">&#43;</button>
          <button className="bg-gray-700 hover:bg-gray-800 px-2 py-1.5 rounded-lg ">👍</button>
            </div>
            <div className=" flex flex-col gap-1">
              <div>{adult?"A 18+":"U/A  16+"}</div>
              <div className="font-medium ">Release Date: {release_date}</div>
              <div className="text-green-500 font-semibold " >Rating:   {vote_average.toFixed(1)}</div>
            </div>
          </div>
          </div>
        </div>
    )
}
export default SingleMovieCard;