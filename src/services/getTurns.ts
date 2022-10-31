const apiUrl = ''
export default function getrTuns(){
    return fetch(apiUrl)
        .then(res=>res.json())
        .then(response=>{ return response})
}