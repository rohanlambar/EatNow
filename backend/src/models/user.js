import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    username : {
           type :String,
           required : true,

    },
    password : {
           type : String ,
           required : true,
    },
    profilePic : {
           type : String ,
           default : "https://console.cloudinary.com/pm/c-d70a3906ab2a0ea44f656fd6dc4247/media-explorer/posts/profilePics?assetId=43fe272e8451a2278535571ceb31406b",
    },
    role : {
           type : String ,
           default : "Normal",
    },
},
{timestamps : true})

export default mongoose.model('Users',userSchema);