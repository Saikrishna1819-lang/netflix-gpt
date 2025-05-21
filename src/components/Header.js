import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {addUser,removeUser} from "../utils/userSlice"
import { API_OPTIONS, LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptslice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";
import { addSearchMovieName } from "../utils/moviesSlice";

const Header=()=>{
    const user=useSelector(store=> store.user)



 
    const dispatch=useDispatch();
    const navigate=useNavigate();
    
    const showGpt=useSelector((store)=> store.gpt.showGptSearch)
   
    const handleMovieSerach=async()=>{
      const moviename=document.getElementById("movie").value;
    
    
   dispatch(addSearchMovieName(moviename));    
      }

     
    

    const handleChangeLanguage=(e)=>{
      dispatch(changeLanguage(e.target.value));
    }
  
    
    const handleGptSearchClick=()=>{
      dispatch(toggleGptSearchView());


      
    }

    const handleSignOut=()=>{
        signOut(auth).then(() => {
          
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          }); 

    }
     useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in
              const {uid ,email,displayName} = user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName}))
              navigate("/browse")
              // ...
            } else {
              // User is signed out
              // ...
              dispatch(removeUser());
              navigate("/");
            }
          });
          return ()=> unsubscribe();
    },[])
    return(
      <div className="fixed top-0 left-0 w-full p-4 z-20 bg-gradient-to-b from-black">
        <div className="  flex flex-col items-center sm:flex-row sm:justify-between sm:items-center">
    
      <img className="w-40 object-contain " src={LOGO} alt="logo" />
      
    
    {user && (
        <div className="flex gap-4 items-center  ">
         {showGpt&&(
           <select className="rounded-lg bg-blue-900 px-4 py-2 text-white font-bold" onChange={handleChangeLanguage} >
            {SUPPORTED_LANGUAGES.map((lan)=> <option  key={lan.identifier} value={lan.identifier} >{lan.name}</option>
              
            )}
          </select>
         )}
          <button onClick={handleGptSearchClick} className="bg-blue-900 text-white font-semibold px-4 py-2 rounded-md">{ showGpt? "Home" :"GPT Search"}</button>
          {!showGpt&&(
            <>
            <input id="movie" className="bg-white px-4 py-2 text-lg  rounded-lg" placeholder="Search"></input>
          <button onClick={handleMovieSerach} className="px-4 py-2 bg-blue-800 rounded-lg text-white font-semibold text-md">Search</button>
          </>
          )}
        <button
            onClick={handleSignOut}
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-lg"
        >
            Sign Out
        </button>
        
        </div>
    )}
</div>
</div>
    )
}
export default Header;



