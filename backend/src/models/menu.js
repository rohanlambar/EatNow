import mongoose from 'mongoose';

const menuSchema  = mongoose.Schema({
             image : {
                type : String,
                default : "",
             },
             name : {
                type : String,
                required : true,
             },
             description : {
                type : String,   
             },
}
);

export default mongoose.model("Menu",menuSchema);