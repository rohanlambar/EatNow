import jwt from 'jsonwebtoken'

const SECRET_KEY = "rohan@123";

if(!SECRET_KEY ){
    console.error("No SECRET_KEY in envirnment variable ");
}
export const  setUser = (user)=>{
             const {username , email }  = user;
          try{ 
               const payload = {
                     username : username ,
                     email : email ,
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
