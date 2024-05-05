import express from 'express';
import url from 'url';
import bodyParser from 'body-parser'
var router=express.Router();



router.get("/",(request,response)=>{
response.render("home");
});
router.get("/about",(request,response)=>{
response.render("about");
});
router.get("/service",(request,response)=>{
response.render("service");
});
router.get("/login",(request,response)=>{
response.render("login");
});
router.get("/contact",(request,response)=>{
response.render("contact");
});
router.get("/register",(request,response)=>{
response.render("register");
});
//url :/test,method:GET
//router.get("/test",(request,response)=>{
//to get data from query string url parsing is needed
//http://localhost:3000/test/?username=admin@123&password=admin123
//var userdetails=url.parse(request.url,true).query;
//console.log(userdetails);
//response.send("/test url invoked & method GET");

//to get data from url params
//url :/test,method:GET(url params)
//router.get("/test/:unm/:upass",(request,response)=>{
//console.log(request.params);
//response.send("/test url invoked & method GET");

//url:/test,method:POST

router.post("/test",(request,response)=>{
console.log(request.body);
response.send("/test url invoked & method POST");
});

//url:/test, method:PATCH

router.patch("/test",(request,response)=>{
console.log(request.body);
response.send("/test url invoked & method POST");
});

//url:/test, method:DELETE

router.delete("/test",(request,response)=>{
console.log(request.body);
response.send("/test url invoked & method POST");
});
export default router;