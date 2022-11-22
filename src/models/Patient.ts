

import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema(
  {
   
    fullName: { type: String, required: true },
    dni:{type:String,required:true},
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    prepaidMedicine : { type: String, required: false },
    idPrepaidMedicine: { type: String, required: false },
    
  },
  {
    timestamps: true,
  }
);

const Patient = mongoose.models.patientSchema || mongoose.model('Patient', patientSchema);
export default Patient;