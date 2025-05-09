import { useRef, useState } from "react";


import { checkEmail,CheckPassword,CheckUserName } from "../utils/checkValidate";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";


const Form=()=>{

    const [isSignIn ,setIsSignIn]=useState(true);
    const [errorEmail,setErrorEmail]=useState(null);
    const [errorPassword,setErrorPassword]=useState(null);
    const [errorUserName,setErrorUserName]=useState(null)
    const navigate=useNavigate();

    const email=useRef(null);
    const password=useRef(null);
    const userName=useRef(null);
    const handleFormValidate=()=>{
        const emailMessage=checkEmail(email.current.value)
        setErrorEmail(emailMessage);
        const passwordMessage=CheckPassword(password.current.value)
        setErrorPassword(passwordMessage);
        let userNameMessage=null;
        if(!isSignIn)
        {
             userNameMessage=CheckUserName(userName.current.value)
             setErrorUserName(userNameMessage);
        }
    
        if(emailMessage||passwordMessage||userNameMessage) return 

        if(!isSignIn)
        {
            //sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
               
    // Signed up 
            const user = userCredential.user;
            updateProfile(user, {
                displayName:userName.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
              }).then(() => {
                // Profile updated!
                navigate("/browse")
                // ...
              }).catch((error) => {
                // An error occurred
                // ...
              });

    // ...
             })
            .catch((error) => {
               const errorCode = error.code;
               const errorMessage = error.message;
    // ..
             });

        }
        else
        {
            //sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    navigate("/browse")
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorPassword(errorCode+"-"+errorMessage);
  });
 

        }
        
    }
    
    const handleLogin=()=>{
        
        setIsSignIn(!isSignIn);
        setErrorEmail(null);
        setErrorPassword(null);
        setErrorUserName(null);
        if(email.current) email.current.value="";
        if(password.current) password.current.value="";
        if(userName.current) userName.current.value="";



    }
    return(
     <div className="bg-black relative z-10 top-[40px] max-w-md w-full mx-auto opacity-85  rounded-md ">
        <div className="text-white px-20 py-16">
            <div className="font-bold text-3xl mb-5 ">{isSignIn?"Sign In":"Sign Up"}</div>
            <form onSubmit={(e)=>{
                e.preventDefault();
                handleFormValidate();
            }}>
                {
                    !isSignIn&&
                    <>
                    <div className="mb-5">
                        <input  ref={userName} className="px-4 py-4  bg-gray-800 rounded-lg w-full" type="text" placeholder="Name"></input>
                    </div>
                    <div className="text-red-600 mb-5">
                        {errorUserName}
                    </div>
                    </> 
                   
                }
                <div className="mb-5">
                <input ref={email} className="px-4 py-4  bg-gray-800 rounded-lg w-full" type="email" placeholder="Email"></input>

                </div>
                <div className="text-red-600 mb-5">
                    {errorEmail}
                </div>
                <div className="mb-5"> 
                    <input ref={password} className="px-4 py-4 bg-gray-800 rounded-lg w-full" type="password" placeholder="Password"></input>
                </div>
                <div className="text-red-600 mb-5">
                    {errorPassword}
                </div>
                <div className="mb-5">
                    <button type="submit"  className="w-full  bg-red-700 px-4 py-2 rounded-lg  hover:bg-red-800">{isSignIn?"Sign In":"Sign Up"}</button>
                </div>
                
            </form>
            <div className="mb-5" ><span className="text-gray-300">{isSignIn?"New to Netflix":"Already registred ?"}</span>
                <a onClick={handleLogin} className="font-bold ml-1 hover:underline" href="#">{isSignIn?"Sign Up now":"Sign In"}</a>
            </div>
            <div className="text-xs mb-5">
                This page is protected by Google reCAPTCHA to ensure you're not a bot.

            </div>
            <div>
                <a className="hover:underline text-blue-500" href="#">Learn more</a>
            </div>
        </div>
     </div>   
    )
}
export default Form;