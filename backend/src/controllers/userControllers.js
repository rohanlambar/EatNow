import User from '../models/user.js'
import bcrypt from 'bcrypt'
import { setUser } from '../services/auth.js';

export const handleUserSignUp = async (req,res)=>{
                 const {username , password , email } = req.body;
                 
                 if(!username || !password ||  !email ) return res.status(400)
                                                                  .json({message : "fill all required field ",
                                                                         success : false,
                                                                })
                 try {
                    // checking if user already exist 
                    const existingUser = await User.findOne({username : username});
                    if(existingUser){
                        return res.status(400)
                                  .json({message : "user already exists",
                                         success : false,
                                  })
                    }
                    // hashing password 
                    const hashedPassword = await bcrypt.hash(password,10);
                    // saving data of new user
                     const user = new User({
                                    username : username,
                                    password : hashedPassword,
                                    email : email ,

                     });
                     await user.save()
                     console.log("user saved successfully ");
                     return res.status(200)
                                .json({message : "successfully used data save while signup",
                                             success : true,
                                      });


                 }
                 catch(err){
                    console.log("error while handleUserSignUp ",err);
                    return res.status(500)
                              .json({success : false , 
                                     message : `internal server error : ${err}`,
                                    })
                 }
}
export const handleUserLogin = async (req,res)=>{
                 const {username , password } = req.body;
                 if(!username || !password ) return res.status(400)
                                                       .json({message : "enter all required data field",
                                                              success : false,            
                                                     });
                      console.log("username ",username);
                      console.log("password ", password);                               
                 try{
                     const user = await User.findOne({username : username});

                     if(user && await bcrypt.compare(password,user.password)){
                           
                           const token = await setUser(user);
                           
                           return res.status(200)
                                     .json({message : "valid credentials",
                                             success : true,
                                             token : token,
                                     })
                     
                     }
                     else {
                        return res.status(401)
                                  .json({message : "invalid credentials ",
                                          success : false,
                                  })
                     }
                 }
                 catch(err){
                    console.log("error while user login ",err);
                    return res.status(500)
                              .json({message : `Internal Server Error : ${err}`,
                                     success : false, 
                                    })
                 }

}

