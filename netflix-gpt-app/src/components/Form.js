import { useState } from "react";

const Form=()=>{

    const [isSignIn ,setIsSignIn]=useState(true)
const handleLogin=()=>{
    setIsSignIn(!isSignIn);
}
    return(
     <div className="bg-black relative z-10 top-[40px] max-w-md w-full mx-auto opacity-85 rounded-md ">
        <div className="text-white px-20 py-16">
            <div className="font-bold text-3xl mb-5 ">{isSignIn?"Sign In":"Sign Up"}</div>
            <form>
                {
                    !isSignIn&& <div className="mb-5">
                        <input className="px-4 py-4  bg-gray-800 rounded-lg w-full" type="text" placeholder="Name"></input>
                    </div>
                }
                <div className="mb-5">
                <input className="px-4 py-4  bg-gray-800 rounded-lg w-full" type="email" placeholder="Email"></input>

                </div>
                <div className="mb-5"> 
                    <input className="px-4 py-4 bg-gray-800 rounded-lg w-full" type="password" placeholder="Password"></input>
                </div>
                <div className="mb-5">
                    <button className="w-full bg-red-700 px-4 py-2 rounded-lg  hover:bg-red-800">{isSignIn?"Sign In":"Sign Up"}</button>
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