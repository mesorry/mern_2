const express = require("express");
const app = express();

const dotenv = require("dotenv");
const cors = require("cors");
//const fileupload = require('express-fileupload'); 
const errorMiddleware = require("./middleware/error");

const bodyParser = require('body-parser');
require('dotenv').config();
const multer = require("multer");


app.use(express.json());
//app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(fileUpload());
app.use(express.json());



//route imports 
const onlydata =require("./routes/onlydataRoute");
//const Search =require("./routes/searchlodaRoute");
//const upload=require("./routes/uploadImageRoutes");

app.use("/api/v1",onlydata);
//app.use("/api/v1",Search);
//app.use("/api/v1",upload);
//app.use("/api/v1",imageproduct);

app.use(errorMiddleware);

module.exports=app;