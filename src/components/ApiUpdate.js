import { useEffect } from 'react'

export const ApiUpdate = () => {
    
    const url_update_marea= process.env.REACT_APP_MY_API +'/update-mareas'
    const updateApiMarea= async()=>{
        const request= await fetch(url_update_marea)
        const respuesta= request.text()  
        return console.log(respuesta) 
    }

    const url_update_viento= process.env.REACT_APP_MY_API +'/update-viento'
    const updateApiViento= async()=>{
        const request= await fetch(url_update_viento)
        const respuesta= request.text()
        return console.log(respuesta)
    }

    const url_update_weather= process.env.REACT_APP_MY_API +'/update-weather'
    const updateApiWeather= async()=>{
        const request= await fetch(url_update_weather)
        const respuesta= request.text()  
        return console.log(respuesta) 
    }

    const url_update_sun= process.env.REACT_APP_MY_API +'/update-sun'
    const updateApiSun= async()=>{
        const request= await fetch(url_update_sun)
        const respuesta= request.text()
        return console.log(respuesta)
    }
    useEffect(() => {
        updateApiMarea()
        const updateMarea=setInterval(() => {
            updateApiMarea()
        }, 36000000); // 1 minuto = 60000 milisegundos

        updateApiViento()
        const updateViento=setInterval(() => {
            updateApiViento()
        }, 180000); // 1 minuto = 60000 milisegundos

        updateApiWeather()
        const updateWeather=setInterval(() => {
            updateApiWeather()
        },  21600000); // 1 hora = 3600000 milisegundos

        updateApiSun()
        const updateSun=setInterval(() => {
            updateApiSun()
        }, 21600000); // 1 hora = 3600000 milisegundos
        
        return () => {
          clearInterval(updateMarea)
          clearInterval(updateViento)
          clearInterval(updateWeather)
          clearInterval(updateSun)
        };
    
      }, []);
      

    
}

