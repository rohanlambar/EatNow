import mongoose, { Mongoose, Schema } from 'mongoose'
 
const cartSchema = mongoose.Schema({
    foodImg : {
        type : String, 
        default : " ",
        required : true,
    },
    name : {
        type : String,
        required : true,
    },
    username : {
            type : Schema.Types.ObjectId,
            ref : 'User',
            required : true,
    },
    quantity : {
             type : Number,
             required :true,
    },

});

export default mongoose.model('Cart',cartSchema);