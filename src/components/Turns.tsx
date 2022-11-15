import React, { useEffect } from "react";
import useUser from "../hooks/useUser";
import { useRouter } from "next/router";
import Link from "next/link";
import { getSession } from "next-auth/react";
import { GetServerSideProps } from "next/types";


export default function Turns({ id, service, name, date }: {id:number, service:string, name:string, date:any}) {
  // El guard cacero ( sino esta logeado, no dejo reenderizar esta vista)
  const router = useRouter()


  return (
    <>
      <Link href={`/detail/${id}`} >
        <h4>{service}</h4>
        <p>Paciente: {name}</p>
        <p>Fecha: {date}</p>
      </Link>
    </>
  );
}

/**
 * getServerSideProps only runs on server-side and never runs on the browser. If a page uses getServerSideProps
 * @param param0
 * @returns
 */
 export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
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
