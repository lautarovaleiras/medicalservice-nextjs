import { NextApiRequest,NextApiResponse } from 'next';
import Patient from "models/Patient";
import { getSession } from "next-auth/react";
import db from "utils/db";
import { Schema, model, connect } from 'mongoose';



const handler = async (req:NextApiRequest, res:NextApiResponse<any> )=> {
    const session = await getSession({ req });
    if (!session) {
      //return res.status(401).send('admin signin required');
    }

    if (req.method === 'GET') {
        return getHandler(req, res);
      } else if (req.method === 'POST') {
        return postHandler(req, res);
      } else {
        return res.status(400).send({ message: 'Method not allowed' });
      }
    };


  const postHandler = async (req:NextApiRequest, res:NextApiResponse<any>) => {
    await db.connect();

    const newPatient = new Patient({...req.body});

    let patient;
    try {
        patient = await newPatient.save();

    } catch (error) {
      return  res.status(500).json({message:'error_save_patient',error})
    }
    await db.disconnect();

   return  res.status(201).json({ message: 'Product created successfully', patient });
  };


  const getHandler = async (req:NextApiRequest, res:NextApiResponse) => {
    await db.connect();
    const patients = await Patient.find({});
    await db.disconnect();
    return res.send(patients);
  };
  export default handler;