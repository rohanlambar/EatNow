
import multer from 'multer';
import pkg from 'cloudinary';
const {v2: cloudinary } = pkg;
import {CloudinaryStorage} from 'multer-storage-cloudinary';
import dotenv from 'dotenv'

dotenv.config();

// configuring cloudinary 

cloudinary.config({
    cloud_name :process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY ,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
    cloudinary : cloudinary,
    params : (req,file)=>({
        folder : "foodImages",
        format : file.mimetype.split("/")[1],
    }),
});

const upload = multer({storage});


export  {upload,cloudinary};

