import { Divider, Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { WindContext } from '../../Context/WindProvider';
import { Sunrise } from '../Modulos Tiempo/Sunrise';
import { Sunset } from '../Modulos Tiempo/Sunset';
import { Tiempo } from '../Modulos Tiempo/Tiempo';

import { Temperature } from '../Modulos Tiempo/Temperature';
import { Uv } from '../Modulos Tiempo/Uv';
import { Viento } from '../Modulos Tiempo/Viento';
import { RosaViento } from '../Modulos Tiempo/RosaViento';
import { Compass } from '../Modulos Tiempo/Compass';
import { Olas } from '../Modulos Tiempo/Olas';

export const ActualWhiteCard = (props) => {
  const { estadoSol, obVientoActual}= useContext(WindContext);

    const alba= estadoSol?.status[0].alba;
    const amanecer= estadoSol?.status[0].amanecer;
    const atardecer= estadoSol?.status[0].atardecer;
    const crepusculo= estadoSol?.status[0].crepusculo;

    const grados= obVientoActual?.grados;
    const direccion= obVientoActual?.direccion +' '+ grados + 'º';

    const localidad= props.localidad;
    const tiempo= 'Soleado'
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', 'hour':'numeric', 'minute': 'numeric' };
    const fecha_hora= new Date().toLocaleString('es-ES', options);


  return (
    <Flex 
        className='contenedor-card'
        backgroundColor={'#FFF'}
        color={'black'} 
        fontSize={'18px'}
        borderRadius={'10px'}
        width={'300px'}
        height={'520px'}
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

        <Flex flexDirection={'row'}>
          <Sunrise alba={alba} amanecer={amanecer} /> 
          <Sunset atardecer={atardecer} crepusculo={crepusculo} />
        </Flex>
        <Divider className={'divider'} orientation='horizontal' borderColor={'rgb(255, 154, 0)'} />
        <Flex>
          <Temperature />
        </Flex>
        <Divider className={'divider'} orientation='horizontal' borderColor={'rgb(255, 154, 0)'} />
        <Flex>
          <Uv />
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
                        <Viento titulo= {'Viento Actual: '} viento={obVientoActual?.viento} />
                        </Flex>
                    </Flex>

                    <Flex justifyContent={'center'} position={'relative'}>
                        <RosaViento grados={grados} />
                    </Flex>
                    <Flex justifyContent={'start'}>
                        <Flex>
                          <Compass compass={direccion}/>
                        </Flex>
                    </Flex>
              </Flex>            
      </Flex>
        <Divider className={'divider'} orientation='horizontal' borderColor={'rgb(255, 154, 0)'} />
      <Flex>
        <Olas />
      </Flex>
      <Divider className={'divider'} orientation='horizontal' borderColor={'rgb(255, 154, 0)'} />
    </Flex>
  )
}
