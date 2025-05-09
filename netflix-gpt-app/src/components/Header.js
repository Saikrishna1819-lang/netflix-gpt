import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header=()=>{
    const user=useSelector(store=> store.user)
    const navigate=useNavigate();
    const handleSignOut=()=>{
        signOut(auth).then(() => {
            navigate("/")
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          }); 

    }
    return(
        <div className="relative p-4 z-10  flex  justify-between items-center">
           <div>
           <img className="w-44 " src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt='logo'></img>
           </div>
           { user && (
            <div>
            <button onClick={handleSignOut} className="bg-red-600 hover:bg-red-700 font-bold text-white px-4 py-2 rounded-lg ">Sign Out</button>
            </div>
           ) 

           }
            
        </div>
    )
}
export default Header;
