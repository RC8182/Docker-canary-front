import { Flex, Image } from '@chakra-ui/react'
import React from 'react'

export const Viento = (props) => {
    const viento= props.viento;
  
  return (
    <Flex flexDirection={'column'} fontSize={'1rem'}>
        <Flex margin={'2px'}>
        <Image 
                className='icono-fuerza viento'    
                boxSize='36px'
                borderRadius='full'
                src={require('../Icons/if-weather-wind-removebg-preview b.png')} 
                alt='Icono-Fuerza Viento' 
                zIndex={10}
                />
            <Flex flexDirection={'column'} alignSelf={'center'}>
                <Flex flexDirection={'row'} >
                    <Flex margin={'2px'} >
                    Viento Actual: 
                    </Flex>
                    <Flex margin={'2px'}>
                    {viento}
                </Flex>
            </Flex>

        </Flex>

    </Flex>

  </Flex>
  )
}