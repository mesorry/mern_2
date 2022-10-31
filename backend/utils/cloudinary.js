//const cloudinary = require("cloudinary").v2;
const cloudinary = require("cloudinary");
const dotenv =require("dotenv");
//const connectDatabase =require("./config/database")

//config
dotenv.config({path:"backend/config/config.env"
});
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports = cloudinary;