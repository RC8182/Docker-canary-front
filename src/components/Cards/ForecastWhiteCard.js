import { Divider, Flex,} from '@chakra-ui/react'
import React, { useContext } from 'react'
import { WindContext } from '../../Context/WindProvider'
import { DayCard } from '../Acordion/Cards/DayCard'
import {selecPorHoras} from '../../functions/funciones'



export const ForecastWhiteCard = () => {

  const {  estadoSol, dias }= useContext(WindContext);
  const data= selecPorHoras(8,22,dias)

  console.log('Data ',data);

  const getListaViento= (lista)=>{
    const listaObj=[]
      lista.map((e)=>{
        return listaObj.push(e?.velViento)
      })
    return listaObj
  }
  const getListaRacha= (lista)=>{
    const listaObj=[]
      lista.map((e)=>{
        return listaObj.push(e?.racha)
      })
    return listaObj
  }
  const getListaDirViento= (lista)=>{
    const listaObj=[]
      lista.map((e)=>{
        return listaObj.push(e?.dirViento)
      })
    return listaObj
  }

  const getHora= (list)=>{
    const listaHora=[]
      list[0].map((e)=>{
       return listaHora.push(e?.hora)
    })
    return listaHora
  }


  return (
    <Flex         
    className='contenedor-card'
    backgroundColor={'#FFF'}
    color={'black'} 
    fontSize={'18px'}
    borderRadius={'10px'}
    width={'300px'}
    margin={'2px'}
    padding={'8px'}
    flexDirection={'column'}
    flexWrap={'wrap'}
    overflow={'auto'}
    >
    <Flex flexDirection={'column'}>
    
      <Flex flexDirection={'column'} >
          <Flex margin={'5px'}>
            <h2> Pronóstico </h2>
          </Flex>
      </Flex>

        <Divider className={'divider'} orientation='horizontal' borderColor={'rgb(255, 154, 0)'} />
        
        <Flex flexDirection={'column'} >
        { 
          
          data?.map ((e, index)=>{

            const alba= estadoSol?.status[index].alba;
            const amanecer= estadoSol?.status[index].amanecer;
            const atardecer= estadoSol?.status[index].atardecer;
            const crepusculo= estadoSol?.status[index].crepusculo;
            const options = { weekday: 'long', month: 'long', day: 'numeric'};
            const fecha= new Date(data[index][0]?.fecha).toLocaleString('es-ES', options);
            return <DayCard
              key={index} 
              fecha= {fecha} hora={getHora(data)} viento={getListaViento(data[index])} racha={getListaRacha(data[index])} direccion={getListaDirViento(data[index])}
              alba= {alba} amanecer= {amanecer} atardecer= {atardecer} crepusculo= {crepusculo} />
          })
          }
        </Flex>
        <Divider className={'divider'} orientation='horizontal' borderColor={'rgb(255, 154, 0)'} />
      </Flex>


    </Flex>
  )
}
