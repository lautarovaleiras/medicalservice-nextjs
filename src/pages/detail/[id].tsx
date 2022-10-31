import StaticContext from "context/StaticContext"
import TurnsContext from "context/TurnsContext"
import useUser from "hooks/useUser"
import { useRouter } from "next/router"
import { useContext, useEffect } from "react"

export default function Detail({params}:{params:any}){
    const staticConfig = useContext(StaticContext)
    const {turns} = useContext(TurnsContext)
    const { query } = useRouter()
    const router = useRouter()
    const {isLogged} = useUser()
    useEffect(()=>{
        if (!isLogged) router?.push('/login')
  
    })
    if (!isLogged) return <i>loading</i>

    return(
        <>
        <h1>Turno  {query?.id}</h1>
        <h2>Paciente: {turns?.client?.name} </h2>
        <p>Nombre y apellido:  </p>
        <p>DNI: </p>
        <p>Fecha de Nacimiento: </p>
        <p>Telefono: </p>

        </>
    )
}