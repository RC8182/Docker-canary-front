import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import {separarXdia, limpiarHora} from '../functions/funciones'

export const WindContext= createContext()

export const WindProvider = ({children}) => {

    const url= process.env.REACT_APP_MY_API
    const fetch_muchoViento= async()=>{
      const respuesta= await fetch(url)
      const res= respuesta.json()
      return res
    }

    const [obVientoActual, setObVientoActual ]= useState()
    const [estadoSol, setEstadoSol ]= useState()
    const [estadotiempo, setEstadoTiempo ]= useState()
    const [dias, setDias]=useState([{}]);

    const get_datos_viento= async()=>{
      const hora= ()=>{
        const h=[]
        for(var i=0; i< 24; i++){
          let hs= (i<= 9)?'0'+i+':00': i +':00';
          h.push(hs)
        }
        return h
      }

      const api= await fetch_muchoViento();
      setObVientoActual(api[0]) // Lista data Viento Actual
      setEstadoSol(api[2]) // Objeto {alba - amanecer - mediodia - atardecer - crepusculo}
      setEstadoTiempo(api[3]) // Objeto {temp-actual, condicion (soleado etc), indiceUv}
      const obFullData=
      {
      'fecha':api[1][1].hourly.time,
      'hora':hora(),
      'velViento':api[1][1].hourly.windspeed_10m,
      'racha': api[1][1].hourly.windgusts_10m,
      'dirViento': api[1][1].hourly.winddirection_10m,
      'temp':api[1][1].hourly.temperature_2m,
      'uv': api[1][1].hourly.uv_index,
      'estadoTiempo': api[1][1].hourly.weathercode
      }
      const diasFullData=[separarXdia(0,24,obFullData), separarXdia(24,48,obFullData), separarXdia(48,72,obFullData)]
      setDias(diasFullData);
    }


    
    useEffect(() => {
      get_datos_viento();
      const apiCall=setInterval(() => {
        get_datos_viento()
      }, 120000); // 1 minuto = 60000 milisegundos
      return () => {
        clearInterval(apiCall);
      };
    }, []);

    const data={limpiarHora, obVientoActual, estadoSol, estadotiempo, dias}

    return (
      <WindContext.Provider value= {data} >
      {children}
      </WindContext.Provider>
    )
}
