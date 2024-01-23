import { Flex, Image } from '@chakra-ui/react'
import React from 'react'

export const Sunrise = (props) => {
    const alba= props.alba;
    const amanecer= props.amanecer;

  
  return (
    <Flex flexDirection={'column'} fontSize={'0.7rem'}>
        <Flex margin={'2px'}>
        <Image 
                className='icono-sunrise'    
                boxSize='36px'
                borderRadius='full'
                src={require('../Icons/if-weather-sunrise-removebg-preview.png')} 
                alt='Icono-Sunrise' 
                zIndex={10}
                />
        <Flex flexDirection={'column'}>
            <Flex flexDirection={'row'}>
            <Flex margin={'2px'}>
            Alba:
            </Flex>
            <Flex margin={'2px'}>
            {alba}
            </Flex>
            </Flex>

            <Flex flexDirection={'row'}>
            <Flex margin={'2px'}>
            Amanecer:
            </Flex>
            <Flex margin={'2px'}>
            {amanecer}
            </Flex>
            </Flex>

        </Flex>

    </Flex>

  </Flex>
  )
}
