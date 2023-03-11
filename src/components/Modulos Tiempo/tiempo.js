import { Flex, Image } from '@chakra-ui/react'
import React from 'react'

export const Tiempo = (props) => {
    const tiempo= props.tiempo;
    const fecha= new Date();
    const hora= fecha.getHours();

    let icon='';
    switch (tiempo) {
        case 'Despejado':
            if(hora > 7 && hora < 20){
                icon= require('../Icons/dia/if-weather-soleado-preview.png');
            } else{
                icon= require('../Icons/noche/iconfinder-weather-weather-forecast-moon-night-sky-3859141_121229-removebg-preview.png');
            }
            
            break;
        case 'Parcialmente Nublado':
            if(hora > 7 && hora < 20){
                icon= require('../Icons/dia/if-weather-parcialmente nublado-removebg-preview.png');
            } else{
                icon= require('../Icons/noche/iconfinder-weather-weather-forecast-moon-night-cloud-3859140_121216-removebg-preview.png');
            }
            break;
        case 'Nublado':
            if(hora > 7 && hora < 20){
                icon= require('../Icons/dia/if-weather-nublado-removebg-preview.png');
            } else{
                icon= require('../Icons/noche/iconfinder-weather-weather-forecast-moon-night-cloud-3859140_121216-removebg-preview.png');
            }
            break;
        case 'Lluvia':
            if(hora > 7 && hora < 20){
                icon= require('../Icons/dia/if-weather-sol y lluvia-removebg-preview.png');
            } else{
                icon= require('../Icons/noche/iconfinder-weather-weather-forecast-night-rain-climate-3859142_121234-removebg-preview.png');
            }
            break;
        case 'Calima':
            if(hora > 7 && hora < 20){
                icon= require('../Icons/if-weather-calima-removebg-preview.png');
            } else{
                icon= require('../Icons/noche/iconfinder-weather-weather-forecast-moon-night-sky-3859141_121229-removebg-preview.png');
            }
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