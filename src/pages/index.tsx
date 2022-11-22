import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";
import { useState } from "react";

import { useSession } from "next-auth/react";
import { Box, Button, Card, CardContent, Container, Grid, InputAdornment, Pagination, SvgIcon, TextField, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Upload as UploadIcon } from '../icons/upload';
import { Download as DownloadIcon } from '../icons/download';
import { Search as SearchIcon } from '../icons/search';
import { AppoimentCard } from "@components/Appoiment/appoiment-card";
import { AppoimentsListToolbar } from "@components/Appoiment/appoiment-list-toolbar";
import {appoiments} from '../mock/appoiments';
import { DashboardLayout } from "@components/dashboard-layout";
function Home(props: any) {
  const { data: session, status } = useSession();

  const [country, setCountry] = useState("");
  // const [path,pushLocation]=useLocation()

  const handleSubmit = (evt: any) => {
    evt.preventDefault(); // Para  evitar que en el submit se recargue la pagina
    //pushLocation(`Covid/${country}`)
  };
  const handleChangue = (evt: any) => {
    setCountry(evt.target.value.toUpperCase());
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <>
    <Head>
      <title>
        Products | Material Kit
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
        <AppoimentsListToolbar />
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {appoiments.map((product) => (
              <Grid
                item
                key={product.id}
                lg={4}
                md={6}
                xs={12}
              >
                <AppoimentCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Box>
  </>
  );
}

export default Home;
export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context);
    console.log(session);
    if (!session) {
        return {
            redirect: {
                destination: "login",
                permanent: false,
            },
        };
    }
    return {
        props: { session }, // will be passed to the page component as props
    };
};
