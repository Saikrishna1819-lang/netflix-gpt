import Header from "./Header";
import Form from "./Form";
import { BG_IMAGE } from "../utils/constants";
const Login=()=>{
    return (

<div className="bg-black min-h-screen">
        <div className="relative h-screen w-full ">
            <div className="absolute inset-0">
                <img
                 className="w-full h-full object-cover"
                 src={BG_IMAGE}
                 alt="bg-img"
                 />
                 <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            
                <Header/>
                <Form/>
               
           
            


        </div>
        <div className="text-white bg-black text-center mt-10 py-4">
            i am builing netflix-gpt
        </div>
        

        

        </div>
     
    )
}
export default Login;