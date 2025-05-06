import Header from "./Header";
import Form from "./Form";
const Login=()=>{
    return (

<div className="bg-black min-h-screen">
        <div className="relative h-screen w-full ">
            <div className="absolute inset-0">
                <img
                 className="w-full h-full object-cover"
                 src="https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/IN-en-20250428-TRIFECTA-perspective_e045264e-b4d4-4a6f-b2cc-f95e3344a332_small.jpg" 
                 alt="bg-img"
                 />
                 <div className="absolute inset-0 bg-black opacity-60"></div>
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