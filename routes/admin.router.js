import express from 'express';
var router=express.Router();

//const app = express();

router.get("/",(request,response)=>{
response.render("demo");
});
router.get("/manageusers",(request,response)=>{
response.send("<h1>/manageusers url invoked,admin panel</h1>");
});
router.get("/epadmin",(request,response)=>{
response.send("<h1>/epadmin url invoked,admin panel</h1>");
});

export default router;