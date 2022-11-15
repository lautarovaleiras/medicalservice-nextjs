import React from "react";
import Turns from "@components/Turns";
import { useState, useEffect } from "react";
import data from "../mock/TurnsDataExample";
import useUser from "../hooks/useUser";
import { useRouter } from "next/router";
import { getSession, useSession } from "next-auth/react";
import { GetServerSideProps, NextApiRequest } from "next";
import { NextRequest } from "next/server";
import { Session } from "next-auth";

export default function Agenda(props: Session) {
  // Ejemplo de loading
  const [loading, updateloading] = useState(false);

  const [turns, updateTurn] = useState(data);

  const { data: session } = useSession();

  // El guard cacero ( sino esta logeado, no dejo reenderizar esta vista)

  // if(loading) return <i>loadizg</i>
  // if (!turns) return <p>No profile data</p>

  return (
    <>
      {turns &&
        turns.map((turn: any) => (
          <Turns
            key={turn.id}
            id={turn.id}
            service={turn.service.type}
            name={turn.client.name}
            date={turn.date}
          />
        ))}
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
