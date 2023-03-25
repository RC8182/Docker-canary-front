export const limpiarHora=(list)=>{
    const lista= list?.map((e)=>{ return e})
    const horaLimpia= lista?.map((i)=> {return i.replace("h", "" ) })
    return horaLimpia
  }

export const separarXdia= (init, end, objeto)=>{

    let listaData=[]

        for(let i=init; i< 168; i++){
          if( i < end){
            listaData.push({
              'dirViento': objeto.dirViento[i],
              'estadoTiempo': objeto.estadoTiempo[i],
              'fecha':objeto.fecha[i],
              'hora': objeto.hora[i],
              'temp': objeto.temp[i],
              'uv': objeto.uv[i],
              'velViento': objeto.velViento[i],
              'racha': objeto.racha[i]
              });
              }
        }
      return listaData;
  }


export const selecPorHoras= (init, end, list)=>{

    const listaDias= list.map((e)=>{
      return e
    })
    const dia= listaDias.map((e, i)=>{
      return listaDias[i]
    })
    const horas= dia.map((e,i)=>{
      return dia[i]
    })
    const selec= horas.map((e,i)=>{
      const listaHoras= []
      for(let j= init; j < end; j++){
        listaHoras.push(horas[i][j])
      }
      return listaHoras
    })

    return selec

   }