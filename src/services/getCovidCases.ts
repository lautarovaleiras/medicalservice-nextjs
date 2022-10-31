import { isEmpty } from "lodash";


export default function getCovidCasesByCountry({country = {}}){
    let apiUrl
    if (isEmpty(country)){
        apiUrl = 'https://corona.lmao.ninja/v2/countries/Argentina?yesterday=true';
    }else{
        apiUrl = `https://corona.lmao.ninja/v2/countries/${country}?yesterday=true`;
    }  
    return fetch(apiUrl)
        .then(res=>res.json())
        .then(data=> {
            let response = [];
            if (typeof (data.length) === 'undefined') response.push(data)
            else response = data
            
            return response;
        })
}

export function getMultipleCountryCovidCases({countries = []}){
    let apiUrl
    if (isEmpty(countries)){
        apiUrl = 'https://corona.lmao.ninja/v2/countries/Argentina,Brazil,Uruguay?yesterday=true';
    }else{
        apiUrl = `https://corona.lmao.ninja/v2/countries/${countries}?yesterday=true`;
    }  
    return fetch(apiUrl)
        .then(res=>res.json())
        .then(data=> {
            let response = [];
            if (typeof (data.length) === 'undefined') response.push(data)
            else response = data
            
            return response;
        })


}