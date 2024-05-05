import mongoose from 'mongoose';
//import uniqueValidator from 'mongoose-unique-validator';

const BidShipmentSchema = mongoose.Schema({
  _id: Number,
  bidprice: {
    type: Number,
    required: [true,"Name is required"],
    
  },
  email: {
    type: String,
    required: [true,"Email is required"],
   // unique: true,
    lowercase: true,
    trim: true
  },
  siconnm: {
    type: String,
    required: [true,"Siconnm is required"],
   // unique: true,
    lowercase: true,
    trim: true
  },
 /* bidprice:{
    type:Number,
    required:[true,"bidprice is required"],
    trim:true
  }
 */
  
  
  info: String
});

// Apply the uniqueValidator plugin to UserSchema.
//UserSchema.plugin(uniqueValidator);

// Compile schema to model
const BidShipmentSchemaModel = mongoose.model('bidshipment_collections',BidShipmentSchema);

export default BidShipmentSchemaModel