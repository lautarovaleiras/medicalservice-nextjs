import React from "react";
import Turns from "@components/Turns";
import { useState, useEffect } from "react";
import data from "../mock/TurnsDataExample";
import useUser from "../hooks/useUser";
import { useRouter } from "next/router";

export default function Agenda() {
  // Ejemplo de loading
  const [loading, updateloading] = useState(false);

  const [turns, updateTurn] = useState(data);

  const {isLogged} = useUser()

  const router = useRouter()

  // El guard cacero ( sino esta logeado, no dejo reenderizar esta vista)
 

  /**
   * useEffect => onInit() de react
   * El segundo parametro son las dependencias, si se le pasa
   * un array vacio, solo se ejecuta una sola vez.
   *
   */
  useEffect(() => {
    if (!isLogged) router?.push('/login')
    updateloading(true);
    updateTurn(data);
    updateloading(false);
    
    
    
    
    
  }, []);

  if (!isLogged) return <i>loading</i>
  if(loading) return <i>loading</i>
  if (!turns) return <p>No profile data</p>
  
  return (<>
    {turns && turns.map((turn:any) => (
    <Turns
      key={turn.id}
      id={turn.id}
      service={turn.service.type}
      name={turn.client.name}
      date={turn.date}
    />
  ))}
  </>)
}
