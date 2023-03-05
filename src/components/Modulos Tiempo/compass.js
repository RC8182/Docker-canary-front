import { Flex, Image } from '@chakra-ui/react'
import React from 'react'

export const Compass = (props) => {
    const compass= props.compass;
  
  return (
    <Flex flexDirection={'column'} fontSize={'1rem'}>
        <Flex margin={'2px'}>
        <Image 
                className='icono-compass'    
                boxSize='36px'
                borderRadius='full'
                src={require('../Icons/compass-celeste-removebg-preview.png')} 
                alt='Icono-Compass' 
                zIndex={10}
                />
            <Flex flexDirection={'column'} alignSelf={'center'}>
                <Flex flexDirection={'row'} >
                    <Flex margin={'2px'} >
                    Direccion: 
                    </Flex>
                    <Flex margin={'2px'}>
                    {compass}
                </Flex>
            </Flex>

        </Flex>

    </Flex>

  </Flex>
  )
}