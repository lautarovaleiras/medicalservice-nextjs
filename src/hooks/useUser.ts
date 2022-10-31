import React, { useContext, useState } from 'react';
import Context from '../context/UserContext';
import { useCallback } from 'react';
import loginService from '../services/loginService';
export default function useUser(){

    const {jwt,setJwt} = useContext(Context)

    const [state, setState] = useState({loading:false, error:false});


    const login = useCallback(({username,password}:{username:string,password:string})=>{
        loginService({username,password}).then(jwt=>{
            localStorage.setItem('jwt',jwt)
            setJwt(jwt);
            setState({loading:true,error:false})
        }).catch(err=>{
            localStorage.removeItem('jwt')
            setState({loading:false,error:true})
            console.log(err)
        })
    },[setJwt])

    const logout = useCallback(()=>{
        localStorage.removeItem('jwt');
        setJwt(null)
    },[setJwt])

    return {
        isLogged: Boolean(jwt),
        isLoginLoading:state.loading,
        hasLoginError:state.error,
        login,
        logout
    }
}