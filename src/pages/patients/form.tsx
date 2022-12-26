import { Box, Button, Card, CardContent, CardHeader, Container, Divider, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function PatientForm(props){
    const router = useRouter()
    const [values, setValues] = useState({
        fullName: '',
        dni: '',
        birthday:'',
        email: '',
        phone: '',
        city: '',
        postalCode: '',
        state:'',
        street:'',
        prepaidMedicine: '',
        idPrepaidMedicine: ''
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    
    const {handleSubmit,register, formState: { errors }}= useForm() ;

    const submitHandler = async ()=>{
        let patientForm = {
            fullName: values.fullName,
            dni: values.dni,
            email: values.email,
            phone: values.phone,
            birthday: values.birthday,
            address: {
                city: values.city,
                postalCode: values.postalCode,
                state:values.state,
                street:values.street,
            },
            prepaidMedicine: values.prepaidMedicine,
            idPrepaidMedicine: values.idPrepaidMedicine
        }
        try {
           await axios.post(`/api/patient`,patientForm);
            router.push("/patients/grid")
          } catch (err) {
            //toast.error(getError(err));
            console.error(err)
        }

    } 
    return (
    <Container maxWidth="lg">
    <Typography
        sx={{ mb: 3 }}
        variant="h4"
    >
        Cargar Paciente
    </Typography>

    <form onSubmit={handleSubmit(submitHandler)}   {...props} >

        <Card>
            <CardHeader
                subheader="Nuevo paciente"
                title="Paciente"
            />
            <Divider />
            <CardContent>
                <TextField
                    fullWidth
                    label="Nombre completo"
                    margin="normal"
                    name="fullName"
                    onChange={handleChange}
                    value={values.fullName}
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    label="D.N.I"
                    margin="normal"
                    name="dni"
                    onChange={handleChange}
                    type="number"
                    value={values.dni}
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    label="Email"
                    margin="normal"
                    name="email"
                    onChange={handleChange}
                    type="email"
                    value={values.email}
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    label="Numero"
                    margin="normal"
                    name="phone"
                    onChange={handleChange}
                    type="number"
                    value={values.phone}
                    variant="outlined"
                />

                <TextField
                    fullWidth
                    label="Provincia"
                    margin="normal"
                    name="state"
                    onChange={handleChange}
                    value={values.state}
                    variant="outlined"
                />
                
                <TextField
                    fullWidth
                    label="Localidad"
                    margin="normal"
                    name="city"
                    onChange={handleChange}
                    value={values.city}
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    label="Codigo Postal"
                    margin="normal"
                    name="postalCode"
                    onChange={handleChange}
                    type="number"
                    value={values.postalCode}
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    label="Direccion"
                    margin="normal"
                    name="street"
                    onChange={handleChange}
                    value={values.street}
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    label="Obra Social"
                    margin="normal"
                    name="prepaidMedicine"
                    onChange={handleChange}
                    value={values.prepaidMedicine}
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    label="Numero cliente"
                    margin="normal"
                    name="idPrepaidMedicine"
                    onChange={handleChange}
                    value={values.idPrepaidMedicine}
                    variant="outlined"
                />
            </CardContent>
            <Divider />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    p: 2
                }}
            >
                <Button
                    color="primary"
                    variant="contained"
                    type='submit'
                >
                    Guardar
                </Button>
            </Box>
        </Card>
    </form>
    <Box sx={{ pt: 3 }}>
        {/* <SettingsPassword /> */}
    </Box>
</Container>
    );
}