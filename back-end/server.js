const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');


if(process.env.NODE_ENV!=="production")
{
    require("dotenv").config({path :"config/keys.env"});
}


const resortController = require("./controllers/ResortController.js");
const { hydrate } = require("./models/ResortModel.js");

//APP OBJECT IS THE CEO!
const app = express();


const allowlist = ['http://localhost:3000', 'http://127.0.0.1:3000'];
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   }
// }
const corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

app.use(express.json());
app.use(cors(corsOptionsDelegate));


app.use("/resorts",resortController);


const PORT = process.env.PORT;
app.listen(PORT, async()=>{

    console.log(`Web Server is up an running on PORT : ${PORT}`);

    try
    {
        await  mongoose.connect(process.env.MONGO_DB_CONNECTION);
  
        console.log(`You are now connected to MongoDB`);
    }

    catch(err)
    {
        console.log(`Error : ${err}`)
    }
   


})