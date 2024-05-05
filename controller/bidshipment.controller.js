import '../models/connection.js';
//import UserSchemaModel from '../models/user.model.js';
import BidShipmentSchemaModel from '../models/bidshipment.model.js';
import url from 'url';

 
export var save=async (req,res,next)=>{
    console.log(req.body)
    var bDetails=req.body;
     var bList = await BidShipmentSchemaModel.find();
     var l=bList.length;
     var _id=l==0?1:bList[l-1]._id+1;
     
     bDetails={...bDetails,"_id":_id,"info":Date()  };
     try
     {
       
      var shipment = await BidShipmentSchemaModel.create(bDetails);
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
  var bList = await BidShipmentSchemaModel.find(condition_object).sort({'bidprice':1}).limit(1);
  var l=bList.length;
  if(l!=0)
    //return res.status(201).json(bList);
  
    return res.status(201).json(bList);
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



