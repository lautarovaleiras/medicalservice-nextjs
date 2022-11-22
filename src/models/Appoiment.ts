

import mongoose from 'mongoose';

const appoimentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date },
    detail:{type: String, required: true},
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    paymentMethod: { type: String, required: true },
    paymentResult: { id: String, status: String, email_address: String },
    appoitmentPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    isPaid: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

const Appoiment = mongoose.models.appoimentSchema || mongoose.model('Appoiment', appoimentSchema);
export default Appoiment;