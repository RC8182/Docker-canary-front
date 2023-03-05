import { Flex, Image } from '@chakra-ui/react';
import React from 'react'

export const Temperature = () => {
    const temp_amb= '21º';
    const temp_agua= '19º';
  return (
    <Flex flexDirection={'column'} fontSize={'0.7rem'}>
        <Flex margin={'2px'}>
            <Image 
                    className='icono-teperature'    
                    boxSize='36px'
                    borderRadius='full'
                    src={require('../Icons/if-weather-temp-removebg-preview.png')} 
                    alt='Icono-Temperature' 
                    zIndex={10}
                    />
            <Flex flexDirection={'column'}>
                <Flex flexDirection={'row'}>
                    <Flex margin={'2px'}>
                        Temperatura ambiente:
                    </Flex>
                    <Flex margin={'2px'}>
                        {temp_amb}
                    </Flex>
                </Flex>

                <Flex flexDirection={'row'}>
                    <Flex margin={'2px'}>
                        Temperatura del agua:
                    </Flex>
                    <Flex margin={'2px'}>
                        {temp_agua}
                    </Flex>
                </Flex>

            </Flex>

        </Flex>
    </Flex>
   
  )
}
