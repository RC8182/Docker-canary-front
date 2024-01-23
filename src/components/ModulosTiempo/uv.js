import { Flex, Image } from '@chakra-ui/react'
import React from 'react'

export const Uv = (props) => {
    const uv= props.uv;

  
  return (
    <Flex flexDirection={'column'} fontSize={'0.7rem'}>
        <Flex margin={'2px'}>
        <Image 
                className='icono-uv'    
                boxSize='36px'
                borderRadius='full'
                src={require('../Icons/if-weather-uv1-removebg-preview.png')} 
                alt='Icono-UV' 
                zIndex={10}
                />
            <Flex flexDirection={'column'} alignSelf={'center'}>
                <Flex flexDirection={'row'} >
                    <Flex margin={'2px'} >
                    Indice Ultravioleta: 
                    </Flex>
                    <Flex margin={'2px'}>
                    {uv}
                </Flex>
            </Flex>

        </Flex>

    </Flex>

  </Flex>
  )
}
