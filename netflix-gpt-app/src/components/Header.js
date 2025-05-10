import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {addUser,removeUser} from "../utils/userSlice"
import { LOGO } from "../utils/constants";


const Header=()=>{
    const user=useSelector(store=> store.user)
    const dispatch=useDispatch();
    const navigate=useNavigate();
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
        <button
            onClick={handleSignOut}
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-lg"
        >
            Sign Out
        </button>
    )}
</div>
    )
}
export default Header;
