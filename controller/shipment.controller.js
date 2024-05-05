import '../models/connection.js';
//import UserSchemaModel from '../models/user.model.js';
import ShipmentSchemaModel from '../models/shipment.model.js';
import url from 'url';
import path from 'path';
import rs from 'randomstring';

 const __dirname=url.fileURLToPath(new URL('.',import.meta.url  ));
export var save=async (req,res,next)=>{
    console.log(req.body)
    var sDetails=req.body;
     var sList = await ShipmentSchemaModel.find();
     var l=sList.length;
     var _id=l==0?1:sList[l-1]._id+1;
     var sicon=req.files.sicon;
     var key=rs.generate();
     var siconnm=Date.now()+"-"+key+"-"+sicon.name;
     var uploadpath=path.join(__dirname,"../../UI/public/Assets/uploads/shipmenticons",siconnm );
     sDetails={...sDetails,"_id":_id,"siconnm":siconnm ,"info":Date.now() };
     try
     {
       sicon.mv(uploadpath)
      var shipment = await ShipmentSchemaModel.create(sDetails);
      res.status(201).json({"status":true});
   }
     catch(err)
   {
    console.log(err);
     res.status(500).json({"status": false});
    }
}
export var fetch=async (req,res,next)=>{
  //console.log(req.url)
  var condition_object=url.parse(req.url,true).query;
  var sList = await ShipmentSchemaModel.find(condition_object);
  var l=sList.length;
  if(l!=0)
    return res.status(201).json(sList);
  else
    return res.status(500).json({"result": "Server Error"});
}

/*export var updateCategory=async(request,response,next)=>{
  let cDetails = await CategorySchemaModel.findOne(JSON.parse(request.body.condition_obj));
  if(cDetails){
     let c=await CategorySchemaModel.updateOne(JSON.parse(request.body.condition_obj),{$set: JSON.parse(request.body.content_obj)});   
     if(c)
      return response.status(201).json({"msg":"success"});
     else
      return response.status(500).json({error: "Server Error"});
  }
  else
   return response.status(404).json({error: "Requested resource not available"});
}

export var deleteCategory=async(request,response,next)=>{
  var condition_obj=request.body;
  var cDetails = await CategorySchemaModel.find(condition_obj);
  if(cDetails.length!=0){
    let result = await CategorySchemaModel.deleteMany(condition_obj); 
    if(result)
     return response.status(201).json({"msg":"success"});
    else
     return response.status(500).json({error: "Server Error"});
  }
  else
    return response.status(404).json({error: "Resource not found"}); 
}
*/



