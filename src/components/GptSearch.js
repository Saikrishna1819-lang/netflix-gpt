import { useSelector } from "react-redux";
import { BG_IMAGE } from "../utils/constants";
import lang from "../utils/langConstants";

const GptSearch=()=>{

        const lanKey=useSelector((store)=> store.config.lang )
    return (
        <>
        <div>
            <img className="w-full h-screen relative opacity-85" src={BG_IMAGE}></img>
        </div>
       <div className=" absolute  top-[50px] flex justify-center items-center  w-full mt-[150px] ">
        <div className=" bg-gray-800  w-7/12 opacity-90 flex gap-3 items-center justify-center  rounded-3xl py-[10px]">
        <input type="text" placeholder={lang[lanKey].GptSearchPlaceholder} className="bg-white rounded-[50px]  font-bold   ml-5 w-2/3 py-3 px-6 my-10 shadow-xl "></input>
        <button className="bg-white  px-4 py-2 text-lg font-bold rounded-lg">{lang[lanKey].search}</button>
        </div>
       </div>
       </>
    )
}
export default GptSearch;