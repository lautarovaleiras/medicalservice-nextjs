import { useState,useEffect } from "react";
import  { getMultipleCountryCovidCases } from "../services/getCovidCases";
export function useCovid(country:any = []){

    const [loading, updateloading] = useState(false);
  
    const [covidCases, updateCovidCases] = useState([]);
    /**
     * useEffect => onInit() de react
     * El segundo parametro son las dependencias, si se le pasa
     * un array vacio, solo se ejecuta una sola vez.
     *
     */
    useEffect(() => {
      updateloading(true);
        // Recuperamos el country de local storage
      const countries = country && country.length > 0 ? country : localStorage.getItem('lastCountry') || 'ARGENTINA';

      getMultipleCountryCovidCases(countries).then(covidCases=>{
          updateCovidCases(covidCases)
          updateloading(false);
          if(country) localStorage.setItem('lastCountry',country);
        })
    }, [country]);
  
    // Muestra cargando
    return [loading,covidCases];
}