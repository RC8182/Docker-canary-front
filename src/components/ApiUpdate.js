import { useEffect } from 'react'

export const ApiUpdate = () => {

    const url_data= process.env.REACT_APP_MY_API +'/update'
    const url_viento= process.env.REACT_APP_MY_API +'/update-viento'
    
    const updateApiData= async()=>{
        const request= await fetch(url_data)
        const respuesta= request.text()   
        console.log('Esta es la  respuesta..', await respuesta)
        
    }
    const updateApiViento= async()=>{
        const getViento= await fetch(url_viento)
        const res= getViento.text()
        return console.log(res)
    }
    useEffect(() => {
        updateApiData()
        console.log('Actualizando Datos!!!')
        const updateData=setInterval(() => {
            updateApiData()
        }, 120000); // 1 minuto = 60000 milisegundos
        updateApiViento()
        const updateViento=setInterval(() => {
            updateApiViento()
        }, 180000); // 1 minuto = 60000 milisegundos
        
        return () => {
          clearInterval(updateData)
          clearInterval(updateViento)
        };
    
      }, );

    
}

