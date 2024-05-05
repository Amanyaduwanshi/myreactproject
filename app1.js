import express from 'express'
import url from 'url';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';

var app=express();

// to link router 
import userRouter from './routes/user.router.js'
import categoryRouter from './routes/category.router.js'
import subcategoryRouter from './routes/subcategory.router.js'
import shipmentRouter from  './routes/shipment.router.js'
import bidshipmentRouter from './routes/bidshipment.router.js'
//to extract body cntent from method:PoST,DELETE,PATCH
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));//urlencode is used to decode data
 
//to resolve cross origin problem use cors middleware;
app.use(cors());

//to handle file content
app.use(fileUpload());

//route level middleware to load api router
app.use("/user",userRouter)
app.use("/category",categoryRouter)
app.use("/subcategory",subcategoryRouter)
app.use("/shipment",shipmentRouter)
app.use("/bid",bidshipmentRouter)

app.listen(3001);
console.log("server invoked at link http://localhost:3001");