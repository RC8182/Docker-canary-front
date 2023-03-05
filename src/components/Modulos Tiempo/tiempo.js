import { Flex, Image } from '@chakra-ui/react'
import React from 'react'

export const Tiempo = (props) => {
    const tiempo= props.tiempo;
    let icon='';
    switch (tiempo) {
        case 'Soleado':
            icon= require('../Icons/if-weather-soleado-preview.png');
            break;
        case 'Parcialmente Nublado':
            icon= require('../Icons/if-weather-parcialmente nublado-removebg-preview.png');
            break;
        case 'Nublado':
            icon= require('../Icons/if-weather-nublado-removebg-preview.png');
            break;
        case 'Lluvia':
            icon= require('../Icons/if-weather-sol y lluvia-removebg-preview.png');
            break;
        case 'Calima':
            icon= require('../Icons/if-weather-calima-removebg-preview.png');
            break;    
    default:
            break;
    }
  
  return (
    <Flex flexDirection={'column'} fontSize={'1rem'}>
        <Flex margin={'2px'}>
            <Image 
                    className='icono-Tiempo'    
                    boxSize='36px'
                    borderRadius='full'
                    src={icon} 
                    alt='Icono-Tiempo' 
                    zIndex={10}
                    />
            <Flex flexDirection={'column'} alignSelf={'center'}>
                <Flex flexDirection={'row'} >
                    <Flex margin={'2px'}>
                        {tiempo}
                    </Flex>
                </Flex>
            </Flex>

        </Flex>
    </Flex>
  )
}