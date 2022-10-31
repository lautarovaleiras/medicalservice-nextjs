import React,{useEffect, useState} from 'react';

const Context =  React.createContext({})

export  function  UserContextProvider({children}:{children:any}){
    const [jwt, setJwt] = useState(null)
    useEffect(()=>{
        // Al ponerlo en una function obliga  a que se ejectua por unica vez
       const token = localStorage.getItem('jwt')
       if (token !== null) setJwt(token) 
    },[])

    return <Context.Provider value={{jwt,setJwt}}>
        {children}
    </Context.Provider>
}

export default Context;