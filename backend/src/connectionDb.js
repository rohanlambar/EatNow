import mongoose from 'mongoose'

const connectDatabase = async (url) =>{
    try{
       await mongoose.connect(url)
       console.log("successfully connected to database ");
       // handle error after initial connection
       mongoose.connection.on("error", (err)=>{
        console.error("database connection error : ",err)
       })
    }
    catch(err){
        console.error("error while connecting to database",err)
        process.exit(1);
    } 
                         
}
export default connectDatabase;