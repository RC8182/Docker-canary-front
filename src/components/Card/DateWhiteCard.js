import { Divider, Flex, Image } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { WindContext } from '../../Context/WindProvider'
import { Acordion } from '../Acordion/Acordion'
import { Sunrise } from '../Modulos Tiempo/sunrise'
import { Sunset } from '../Modulos Tiempo/sunset'
import { Temperature } from '../Modulos Tiempo/temperature'
import { Uv } from '../Modulos Tiempo/uv'

export const DateWhiteCard = () => {

  const { obViento }= useContext(WindContext);

  console.log('estamos en obviento', obViento)
  return (
    <Flex         
    className='contenedor-card'
    backgroundColor={'#FFF'}
    color={'black'} 
    fontSize={'18px'}
    borderRadius={'10px'}
    width={'300px'}
    height={'380px'}
    margin={'2px'}
    padding={'8px'}
    flexDirection={'column'}
    flexWrap={'wrap'}
    overflow={'auto'}
    >
    <Flex flexDirection={'column'}>
    
      <Flex flexDirection={'column'} >
          <Flex margin={'5px'}>
            <h2>Info Día </h2>
          </Flex>
          
        <Divider className={'divider'} orientation='horizontal' borderColor={'rgb(255, 154, 0)'} />
        <Flex flexDirection={'row'}>
          <Sunrise /> 
          <Sunset />
        </Flex>
        <Divider className={'divider'} orientation='horizontal' borderColor={'rgb(255, 154, 0)'} />
        <Flex>
          <Temperature />
        </Flex>
        <Divider className={'divider'} orientation='horizontal' borderColor={'rgb(255, 154, 0)'} />
        <Flex>
          <Uv />
        </Flex>
        
      </Flex>

        <Divider className={'divider'} orientation='horizontal' borderColor={'rgb(255, 154, 0)'} />
        <Flex >
          <h2> Predicción Viento </h2>
        </Flex>
        
        
        <Flex flexDirection={'column'}>
        { 
          obViento?.map ((e, index)=>{

            return <Acordion fecha= {e.fecha} hora={e.hora} viento={e.viento} racha={e.racha} key={index}/>
          })
          }
        </Flex>
        <Divider className={'divider'} orientation='horizontal' borderColor={'rgb(255, 154, 0)'} />
      </Flex>


    </Flex>
  )
}
