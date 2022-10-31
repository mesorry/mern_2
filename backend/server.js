const app= require("./app");

const dotenv =require("dotenv");
const connectDatabase =require("./config/database")

//config
dotenv.config({path:"backend/config/config.env"
});



// handling uncaught error

process.on("uncaughtException",(err)=>{

console.log('Error:${err.message}');

console.log('shutting down the server due uncaughtException');
  
process.exit(1);

});
/*
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
*/
//connecting database
connectDatabase();


  const server=app.listen(process.env.PORT,()=>{

    console.log('server is working on http://localhost:${process.env.PORT}')
      });

      //unhandle promise rejection

      process.on("unhandledRejection",(err)=>{
        console.log('Error:${err.message}');
        console.log('shutting down the server due unhandle promise rejection');
           


        server.close(()=>{
          process.exit(1);

        });
      });