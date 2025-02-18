
import { getUser } from "../services/auth";


export const checkAuthentication = (req,res,next)=>{
     const authToken = req.headers.authorization;
     if(!authToken || !authToken.startsWith("Bearer ")){
        return res.status(401)
                  .json({message : "Unauthorized ",
                         successs : false;
                  })
     }
     const token = authToken.split(" ")[1];
     const user = getUser(token);
     if(!user){
        return res.status(401)
                  .json({message : "Unauthorized ",
                         successs : false;
                  })
     }
     req.user = user;
     next();
     
}