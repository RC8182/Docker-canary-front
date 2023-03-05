import { Divider, Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { WindContext } from '../../Context/WindProvider';
import { RosaViento } from '../Icons/RosaViento';
import { Compass } from '../Modulos Tiempo/compass';
import { Tiempo } from '../Modulos Tiempo/tiempo';
import { Viento } from '../Modulos Tiempo/viento';

export const WinWhiteCard = (props) => {
  const {obVientoActual}= useContext(WindContext);

    const localidad= props.localidad;
    const tiempo= 'Soleado'
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', 'hour':'numeric', 'minute': 'numeric' };
    const fecha_hora= new Date().toLocaleString('es-ES', options);

    const grados= obVientoActual?.grados;
    const direccion= obVientoActual?.direccion +' '+ grados + 'º'
  return (
    <Flex 
        className='contenedor-card'
        backgroundColor={'#FFF'}
        color={'black'} 
        fontSize={'18px'}
        borderRadius={'10px'}
        width={'300px'}
        height={'380px'}
        margin={'2px'}
        padding={'8px'}
        display={'flex'}
        flexDirection={'column'}
        flexWrap={'wrap'}>
        <Flex flexDirection={'row'} >
          <Flex flexDirection={'column'} margin={'2px'}>
            <Flex >
              <h2>{localidad} </h2>
            </Flex>
            <Flex fontSize={'.5em'} >
              <h3>{fecha_hora}</h3>
            </Flex>        
          </Flex>
          <Divider className={'divider'} orientation='vertical' borderColor={'rgb(255, 154, 0)'} />
          <Tiempo tiempo={tiempo} />
        </Flex>  

        <Divider className={'divider'} orientation='horizontal' borderColor={'rgb(255, 154, 0)'} />

        <Flex 
          justifyContent={'center'}
          margin={'10px'}
          flexDirection={'column'}>

              <Flex                 
                display={'flex'}
                flexDirection={'column'}
                flexWrap={'wrap'}
                margin={'2px'}>

                    <Flex justifyContent={'start'}>
                        <Flex>
                        <Viento viento={obVientoActual?.viento} />
                        </Flex>
                    </Flex>

                    <Flex justifyContent={'center'}>
                        <RosaViento grados={grados} />
                    </Flex>
                    <Flex justifyContent={'center'}>
                        <Flex>
                          <Compass compass={direccion}/>
                        </Flex>
                    </Flex>
              </Flex>            
        </Flex>

    </Flex>
  )
}
