import axios from "axios";

const ENDPOINT = "http://localhost:8080"

export default function login({username,password}:{username:string, password:string}){
    return axios.post(`${ENDPOINT}/users/login`, {username,password}).then(res=>{
        return res.headers['authorization']
    })
}