

// this file has all controller for admin operations
import Menu from '../models/menu.js'
export const addToMenu =  async (req,res)=>{
       if(!req.body || !req.body.name || !req.body.description ) return res.status(400).json({message : "Bad Request"});
       const {name,description} = req.body;
       try{
          
           const menu = new Menu({name : name ,
            description : description ,
            image :  req.file.path,
        });
        await menu.save();
        return res.status(200)
                  .json({message : "item added to menu successfully",
                    fileUrl : req.file.path,
                  });
        
       }
       catch(err){
        console.error("error occured while addToMenu : ",err);
        return res.status(500)
                  .json({message : "Internal Server Error",     
                  })
       }
}


export const addToFoodItem = async(req,res)=>{
    if(!req.body || !req.body.name || !req.body.description  || !req.body.price || !req.body.cateogory ) return res.status(400).json({message : "Bad Request"});
    const {name ,description , price ,cateogory} = req.body;
    try{
        

    }
    catch(err){
        console.error("error occured while addToMenu : ",err);
        return res.status(500)
                  .json({message : "Internal Server Error",     
                  })
    }
}





