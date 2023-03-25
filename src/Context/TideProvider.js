import React, { createContext, useEffect, useState } from 'react'

export const TideContext= createContext();

export const TideProvider = ({children}) => {
  const url= process.env.REACT_APP_MY_API +'/mareas'
  const fetch_mareas= async ()=>{
      const respueta= await fetch(url)
      const res= await respueta.json()
    return res.mareas.datos.marea
  }


  const [listaDatosMareas, setlistaDatosMareas]= useState()
  const [marea1, setMarea1]= useState()
  const [marea2, setMarea2]= useState()
  const [marea3, setMarea3]= useState()
  const [marea4, setMarea4]= useState()
  const [marea5, setMarea5]= useState()

  const getDatosMareas= async()=>{

    const api= await fetch_mareas()
    setlistaDatosMareas(api)
    const fechaActual= new Date().toISOString().split('T')[0]
    const hoy= new Date().getTime(); 
    const manana= hoy +  86400000;
    const fechaManana= new Date(manana).toISOString().split('T')[0]
    const proximas_mareas= await api.filter(e=>{
      return e.fecha === fechaActual || e.fecha === fechaManana
    })

    setMarea1(proximas_mareas[0]);
    setMarea2(proximas_mareas[1]);
    setMarea3(proximas_mareas[2]);
    setMarea4(proximas_mareas[3]);
    setMarea5(proximas_mareas[4]);
  }

  useEffect(() => {
    getDatosMareas()
    const apiCall=setInterval(() => {
      getDatosMareas()
    }, 120000); // 1 minuto = 60000 milisegundos
    
    return () => {
      clearInterval(apiCall)
    };

  }, []);


    const data={getDatosMareas, marea1, marea2, marea3, marea4,marea5, listaDatosMareas}
  return (
    <TideContext.Provider value={data}>
    {children}
    </TideContext.Provider>
  )
}
