
// add to cart 
// this function will take a req from user and add food item with quantity to the cart

import Cart from "../models/cart.js";




export const handleGetCartItem = async(req,res)=>{
            if(!req.user || !req.user.username || !req.body) return res.status(400)
                                                                       .json({
                                                                              message :"Bad Request",
                                                                              success: false,
                                                                           });
            const {userId}  = req.user;
            try{
                 const result = await Cart.find({username : userId });
                 return res.status(200)
                           .json({data : result , success : true});
            }
            catch(err){
                  console.error("error while : ",err);
                  return res.status(500)
                            .json({message : "internal server error ",
                                   success : false,
                            })
            }
}

export const handleAddToCart = async (req,res)=>{ 
   if(!req.user || !req.user.username || !req.body) return res.status(400)
                                                              .json({
                                                                     message :"Bad Request",
                                                                     success: false,
                                                                  });
         
         const {userId} = req.user;
         
         const data = req.body;
      try{
         const itemInfo = {
            foodImg : data.foodImg,
            name : data.name,
            username : userId,
            quantity : data.quantity,
         } 

         const result = await Cart.create(itemInfo);
         return res.status(200)
                   .json({message : "Added cart Item to cart",
                          success : true,
                   });
      }
      catch(err){
         console.error("error ocurred : ",err);
         return res.status(500)
                   .json({message : "Internal Server Error",
                          success : false,
                   })
      }

}
// update to cart 
export const handleUpdateToCart = async (req,res)=>{
         if(!req.user || !req.user.username || !req.body) return res.status(400)
                                                                    .json({
                                                                           message :"Bad Request",
                                                                           success: false,
                                                                        });
        const { userId} = req.user;
        const data = req.body;
        try{
         const cart = await Cart.findOne({username : userId ,
                                      name : data.name ,
                                     });
        

         const itemInfo = {
            foodImg : data.foodImg,
            name : data.name,
            username : userId,
            quantity : data.quantity,
         } 
         const result = await Cart.findByIdAndUpdate({_id : cart._id},itemInfo);
         return res.status(200)
                   .json({message : "Updated cart Item successfully ",
                          success : true,
                   })
        }
        catch(err){
         console.error("error while : ",err);
         return res.status(500)
                   .json({messagee : "Internal Server Error ",
                          success : false,
                   })
        }
}


// delete to cart 
export const handleDeleteToCart = async (req,res)=>{
      if(!req.user || !req.user.username || !req.body) return res.status(400)
                                                                 .json({
                                                                        message :"Bad Request",
                                                                        success: false,
                                                                     });
               const {userId} = req.user;
               const data = req.body;
       try{
               const cart = await Cart.findOne({username : userId ,
                  name : data.name ,
               });
               const result = await Cart.findByIdAndDelete({_id : cart._id});
               return res.status(200)
                         .json({message : "cart Item Deleted ",
                                success : true,
                         });
       }
       catch(err){
               console.error("error while : ",err);
               return res.status(500)
                        .json({messagee : "Internal Server Error ",
                              success : false,
                        })
        }

}

