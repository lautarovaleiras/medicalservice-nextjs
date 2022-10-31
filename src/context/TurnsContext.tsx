import data from 'mock/TurnsDataExample';
import React,{useEffect, useState} from 'react';

const Context =  React.createContext<any | null>({})

export  function  TurnsContextProvider({children}:{children:any}){
    const [turns, setTurns] = useState();

    useEffect(()=>{
        setTurns(data)
    },[])
    return <Context.Provider value={{turns,setTurns}}>
        {children}
    </Context.Provider>
}

export default Context;