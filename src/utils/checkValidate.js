export const checkEmail=(email)=>{
    if(email==="") return "Enter your Email Id"
    const isEmailValid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    
    if(!isEmailValid) return "Email is not valid";
   
    return null;
}
export const CheckPassword=(password)=>{
    if(password==="") return "Enter Password";
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!isPasswordValid) return "Password is not valid";
    return null;

}

export const CheckUserName=(userName)=>{
    if(userName==="") return "Enter UserName"
    const isUserNameValid=/^[0-9A-Za-z]{6,16}$/.test(userName)
    if(!isUserNameValid) return "UserName is not valid";
    return null;
}
