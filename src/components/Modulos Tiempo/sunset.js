import { Flex, Image } from '@chakra-ui/react';
import React from 'react'

export const Sunset = () => {
    const atardecer= '18:00';
    const ocaso= '18:15';
  return (
    <Flex flexDirection={'column'} fontSize={'0.7rem'}>
        <Flex margin={'2px'}>
            <Image 
                    className='icono-sunset'    
                    boxSize='36px'
                    borderRadius='full'
                    src={require('../Icons/if-weather-sunset-removebg-preview.png')} 
                    alt='Icono-Sunset' 
                    zIndex={10}
                    />
            <Flex flexDirection={'column'}>
                <Flex flexDirection={'row'}>
                    <Flex margin={'2px'}>
                        Atardecer
                    </Flex>
                    <Flex margin={'2px'}>
                        {atardecer}
                    </Flex>
                </Flex>

                <Flex flexDirection={'row'}>
                    <Flex margin={'2px'}>
                        Ocaso
                    </Flex>
                    <Flex margin={'2px'}>
                        {ocaso}
                    </Flex>
                </Flex>

            </Flex>

        </Flex>
    </Flex>
   
  )
}
