import {  Flex, Image} from '@chakra-ui/react'
import React from 'react'

export const RosaViento = (props) => {
  const grados= props.grados;
  const dirViento='rotate('+ grados +'deg)'
  return (
    <Flex 
      display={'flex'} 
      height={'150px'} 
      width={'150px'} 
      >

        <Flex  height={'150px'} width={'150px'} alignItems={'center'} justifyContent={'center'} position={'absolute'} >

            <Image 
                className='icono-rosa-viento'    
                boxSize='150px'
                borderRadius='full'
                src={require('../Icons/clipart1138278.png')} 
                alt='Wind Compass' 
                zIndex={10}
                />

        </Flex>
        <Flex  height={'150px'} width={'150px'} alignItems={'center'} justifyContent={'center'} position={'absolute'} >

            <Image
                className='icono-flecha-rosa-viento'     
                boxSize='105px'
                borderRadius='full'
                src={require('../Icons/kisspng-arrow-clip-art-red-arrow-down-5aaae5eb244620.2286416215211494191486.png')} 
                alt='Wind Compass' 
                transform={dirViento}
                zIndex={5}
                />

        </Flex>

    </Flex>
  )
}
