import mongoose from 'mongoose';
//import uniqueValidator from 'mongoose-unique-validator';

const ShipmentSchema = mongoose.Schema({
  _id: Number,
  title: {
    type: String,
    required: [true,"Name is required"],
    lowercase: true,
    trim: true,
  },
  catnm: {
    type: String,
    required: [true,"Category is required"],
   // unique: true,
    lowercase: true,
    trim: true
  },
  subcatnm: {
    type: String,
    required: [true,"SubCategory is required"],
    //unique: true,
    lowercase: true,
    trim: true
  },
  
  description: {
    type: String,
    required: [true,"description is required"],
    trim: true
  },
  baseprice: {
    type: Number,
    required: [true,"baseprice is required"],
    trim: true
  },
 /* email: {
    type: Number,
    required: [true,"Email is required"],
    trim: true
  },
  lowestbid: {
    type: Number,
    trim: true
  },
  */
  siconnm:String,
  uid: String,
  info: String
});

// Apply the uniqueValidator plugin to UserSchema.
//UserSchema.plugin(uniqueValidator);

// Compile schema to model
const ShipmentSchemaModel = mongoose.model('shipment_collections',ShipmentSchema);

export default ShipmentSchemaModel