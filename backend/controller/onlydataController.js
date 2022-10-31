
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
//const cloudinary = require("cloudinary");
const bodyParser = require('body-parser');
//const multer=require('multer');
//const upload=require('../middleware/upload');
  
//app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.json);
const dotenv = require("dotenv");
const cors = require("cors");
//const fileupload = require('express-fileupload'); 
const errorMiddleware = require("../middleware/error");

const cloudinary = require("../utils/cloudinary");
const upload  = require('../utils/multer');
//const uuid=require('uuid').v4;
const path = require('path');
const Onlydataproduct = require("../models/onlydataModel");
const fs = require('fs');


// Create Product -- Admin
exports.createProduct = catchAsyncErrors(async (req, res,next)=> {
  
      const { pincode, landmark ,gender,price,room} =req.body;
    /*
      const user = await User.create({
        name,
        email,
        password,
        avatar: {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        },
      });
      */
 
     
     //image
  const myCloud = await cloudinary.v2.uploader.upload (req.file.path, {
    folder: "proimages",
   // width: 150,
   // crop: "scale",
  });
  
  
  //const { name } = req.body;
  const data = {
    pincode: req.body.pincode,
    landmark: req.body.landmark,
    gender: req.body.gender,price: req.body.price,
    room: req.body.room,
   // phonenumber: req.body.phonenumber,
    image: {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    } 
   
}

  const onlydataproduct = await Onlydataproduct.create(data
    /*
    {pincode, landmark ,gender,price,room,
    image:{
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      }
      ,
    }
    */
   
                                 );
   // name,);
  res.status(201).json({
    success: true,
    onlydataproduct
  //  upload
  //  data:urls
   // data: urls
  });
});




  // Get All Product  with serach and filter

exports.getAllSearchProducts = catchAsyncErrors(async (req, res, next) => {
   // const resultPerPage = 8;
   // const productsCount = await Onlydataproduct.countDocuments();
  
    const apiFeature = new ApiFeatures(Onlydataproduct.find(), req.query) .search().filter();
  
   // let onlydataproduct = await apiFeature.query;
   // let filteredProductsCount = onlydataproduct.length;
   // apiFeature.pagination(resultPerPage);
  
   const onlydataproduct = await apiFeature.query;
  
    res.status(200).json({
      success: true,
      onlydataproduct
     // productsCount,
     // resultPerPage,
     // filteredProductsCount,
    });
  });


  // get all product without search
exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
      
    const onlydataproduct= await Onlydataproduct.find();
    
        res.status(200).json({
          success: true,
          onlydataproduct
         
        });
      });
    