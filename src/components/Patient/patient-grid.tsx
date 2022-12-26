import { Box, Container } from '@mui/material';
import axios from 'axios';
import { patients } from 'mock/patients';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { PatientListResults } from './patient-list-results';
import { PatientListToolbar } from './patient-list-toolbar';


export default function PatientGrid(){

    const [patients,setPatients] = useState(null);

    useEffect(()=>{
        axios.get(`/api/patient`).then((res)=>{
            setPatients(res.data)
        }).catch((error)=>{
            console.error(error)
        })
    },[])

    if(patients === null) return <p>Cargando....</p>

    return (
        <>
            <Head>
            <title>
                Customers | Material Kit
            </title>
            </Head>
            <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 8
            }}
            >
            <Container maxWidth={false}>
                <PatientListToolbar />
                <Box sx={{ mt: 3 }}>
                <PatientListResults patients={patients} />
                </Box>
            </Container>
            </Box>
        </>


    );



}