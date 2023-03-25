import { Flex, Image } from '@chakra-ui/react'
import React from 'react'

export const ContenidoTablaViento = (props) => {
    
    const hora= props.hora;
    const viento=props.viento;
    const racha= props.racha;
    const direccion= props.direccion;
    const dirViento='rotate('+ direccion +'deg)'

  return (
    <Flex
    className='viento-table'
    width={'200px'}
    height={'40px'}
    margin={'2px'}
    backgroundColor={'gray'}
    borderRadius={'5px'}
    justifyContent={'space-around'}
    fontSize={'0.8rem'}>

            <Flex margin={'5px'} color={'white'}>
                {hora} 
            </Flex>
            <Flex margin={'5px'} color={'white'}>
                {viento} Knots
            </Flex>
            <Flex margin={'5px'} color={'white'}>
                {racha} Knots
            </Flex>
            <Flex margin={'5px'} color={'white'}>
                {direccion}º
                <Image
                className='icono-flecha-rosa-viento'     
                boxSize='20px'
                borderRadius='full'
                src={require('../../Icons/kisspng-arrow-clip-art-red-arrow-down-5aaae5eb244620.2286416215211494191486.png')} 
                alt='Wind Compass' 
                transform={dirViento}
                zIndex={5}
                />
            </Flex>

    </Flex>
  )
}
