

import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema(
  {
   
    fullName: { type: String, required: true },
    dni:{type:String,unique: true, required:true},
    birthday:{type:Date, required:true},
    email:{type:String, required:true},
    phone:{type:String, required:true},
    address: {
      city: { type: String, lowercase: true, trim: true },
      state: { type: String, lowercase: true, trim: true },
      street: { type: String, lowercase: true, trim: true },
      postalCode: { type: String, required: true },
    },
    prepaidMedicine : { type: String, required: false },
    idPrepaidMedicine: { type: String, required: false },
    
  },
  {
    timestamps: true,
  }
);

const Patient = mongoose.models.Patient || mongoose.model('Patient', patientSchema);
export default Patient;