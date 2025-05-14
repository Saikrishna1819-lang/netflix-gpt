import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {addUser,removeUser} from "../utils/userSlice"
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptslice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header=()=>{
    const user=useSelector(store=> store.user)



 
    const dispatch=useDispatch();
    const navigate=useNavigate();
    
    const showGpt=useSelector((store)=> store.gpt.showGptSearch)
   

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
        <div className="fixed top-0 left-0 w-full p-4 z-20 flex justify-between items-center bg-gradient-to-b from-black">
    <img className="w-40" src={LOGO} alt="logo" />
    {user && (
        <div className="flex gap-4">
         {showGpt&&(
           <select className="rounded-lg bg-blue-900 text-white font-bold" onChange={handleChangeLanguage} >
            {SUPPORTED_LANGUAGES.map((lan)=> <option  key={lan.identifier} value={lan.identifier} >{lan.name}</option>
              
            )}
          </select>
         )}
          <button onClick={handleGptSearchClick} className="bg-blue-900 text-white font-semibold px-4 py-2 rounded-md">{ showGpt? "Home" :"GPT Search"}</button>
        <button
            onClick={handleSignOut}
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-lg"
        >
            Sign Out
        </button>
        
        </div>
    )}
</div>
    )
}
export default Header;
