import { patients } from "mock/patients";
import Patient from "models/Patient";
import { NextApiRequest, NextApiResponse } from "next";
import db from "utils/db"

const handler = async (req:NextApiRequest, res:NextApiResponse)=>{
    await db.connect();
    await Patient.deleteMany();
    await Patient.insertMany(patients)
    await db.disconnect()
    res.send({message: 'success'})
}

export default handler;