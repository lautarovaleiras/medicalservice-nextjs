import axios from "axios"
import { Environments } from "../environments/environment"
export default function registerService({username,password}){

    return axios.post(`${Environments.ENDPOINT}/users/record`,{username,password}).then(res=>{
        return res
    }).catch((e)=>{throw new Error("hubo un error")});
        
    

}