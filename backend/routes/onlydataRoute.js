const express=require("express");
const {  createProduct, getAllProducts, getAllSearchProducts} = require("../controller/onlydataController");
  
const dotenv = require("dotenv");
const cors = require("cors");
//const fileupload = require('express-fileupload'); 
const errorMiddleware = require("../middleware/catchAsyncErrors");

const cloudinary = require("../utils/cloudinary");
const upload  = require('../utils/multer');

const router =express.Router();



   
router.route("/product").post(upload.single('image'),createProduct);
router.route("/products").get(getAllProducts);
router.route("/products/search").get(getAllSearchProducts);
//router.route("/products/:id").put(updateProduct);
/*
router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);
*/
//router.route("/product/new").post(upload.array('images'),createProduct);

//router.post("/", checkAuth, upload.single('productImage'), ProductsController.products_create_product);

//router.route("/checkproduct/:id").put(upda);



module.exports=router