import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import User from '../models/user.js';
dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY ;

if(!SECRET_KEY ){
    console.error("No SECRET_KEY in envirnment variable");
}
export const  setUser = async (user)=>{
             const {username , email }  = user;
          try{ 
               const user = await User.findOne({username : username});
               
               const payload = {
                     userId : user._id,
                     username : username ,
                     email : email,
               }
               const token = jwt.sign(payload,SECRET_KEY);
               
               return token;
          }
          catch(err){
              console.error("error while setting user ",err);
              return null;
          }
}

export const getUser = (token)=>{
               try{
                  return jwt.verify(token,SECRET_KEY);
               }
               catch(err){
                  console.error("error while getting user ",err);
                  return null;
               }
}
