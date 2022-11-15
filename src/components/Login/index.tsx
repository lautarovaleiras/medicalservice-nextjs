import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {signIn} from 'next-auth/react'


import useUser from '../../hooks/useUser';
export default function Login(){
    const [username, setUsername ] = useState("");
    const [password, setPassword ] = useState("");
    const {login, isLogged,hasLoginError,isLoginLoading} = useUser()

    const router = useRouter()

    useEffect(()=>{
        if(isLogged) router?.push('/')
    },[isLogged,router])
    
    const handleSubmit = (e:any)=>{

        e.preventDefault()
        login({username, password})
        router.push('/')
    }


    async function handleGoogleSignIn(){
      signIn('google',{callbackUrl:"http://localhost:3000"})
    }
    return (
    <>
        {isLoginLoading && <strong>Checking credentials</strong>}
        {!isLoginLoading && (
          <>
          <form className="form" onSubmit={handleSubmit}>
       
            <input
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          

        
            <input
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button className="btn">Login</button>
          </form>
          <button onClick={handleGoogleSignIn}>Google SignIn</button>
          </>
        )}
        {hasLoginError && <strong>Crentials are invalid</strong>}
      </>
    );

}