import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";
import { useState } from "react";

import { useSession } from "next-auth/react";

export default function Home(props: any) {
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

  return (
    <>
      <Head>
        <title> Home </title>
      </Head>
      <h3>Buscar casos de Covid por pais</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="pais"
          onChange={handleChangue}
          value={country}
        />
        <button>Buscar</button>
      </form>
      {/* <CovidCases params={undefined}></CovidCases> */}

      <h3>Ver listado de turnos</h3>
      {/* <Link to='/Turnos'>Turnos</Link> */}
    </>
  );
}

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
