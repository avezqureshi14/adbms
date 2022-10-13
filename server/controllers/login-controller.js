import loginUserSchema from "../models/user-login.js";

export const loginUser = async (request, response) => {
    const user = request.body;
    console.log(user);
    const newUser = new user(loginUserSchema);
    try{
        await newUser.save();
        response.status(201).json({msg:'signIn successful'});
    } catch (error){
        response.status(409).json({msg:'error while signIn'});  
    } 
} 
export const SignUpUser = async (request, response) => {
    console.log(user);
} 