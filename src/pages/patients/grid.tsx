import { useState } from 'react';
import { Box, Button, Card, CardContent, CardHeader, Container, Divider, TextField, Typography } from '@mui/material';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useEffect } from 'react';
import PatientForm from '@pages/patients/form';
import PatientGrid from '@components/Patient/patient-grid';

export default function PatientsPage(props: any) {
  

    return (

        <>
            <Head>
                <title>
                    Pacientes | MedicalService
                </title>
            </Head>
            <PatientGrid/>
        </>


    );
};

