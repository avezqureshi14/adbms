import mongoose from "mongoose";

const loginUserSchemaModel = mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }

});


// const SignUpUserSchemaModel = mongoose.Schema({
//     username:{
//         type:String,
//         required:true,
//     },
//     email:{
//         type:String,
//         required:true,
//     },
//     password:{
//         type:String,
//         required:true,
//     }
// })

const loginUserSchema = mongoose.model('userLogin', loginUserSchemaModel);
// const SignUpUserSchema = mongoose.model('userLogin', SignUpUserSchemaModel);
export default loginUserSchema;