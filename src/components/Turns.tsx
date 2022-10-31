import React, { useEffect } from "react";
import useUser from "../hooks/useUser";
import { useRouter } from "next/router";
import Link from "next/link";


export default function Turns({ id, service, name, date }: {id:number, service:string, name:string, date:any}) {
  // El guard cacero ( sino esta logeado, no dejo reenderizar esta vista)
  const router = useRouter()
  const {isLogged} = useUser()

  useEffect(()=>{
    if  (!isLogged) router.push("/login")

  },[])

  if (!isLogged) return <i>loading</i>

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
