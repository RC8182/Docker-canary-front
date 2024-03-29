import { Divider, Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { TideContext } from '../../Context/TideProvider'
import { TideChart } from '../Charts/TideChart'
import { CuentaAtras } from '../CuentaAtras'
import { Bajamar } from '../ModulosTiempo/bajamar'
import { Pleamar } from '../ModulosTiempo/pleamar'

export const TideWhiteCard = () => {
  const today= new Date();
  const tomorrow= new Date();
  tomorrow.setDate(today.getDate() + 1)


  const {marea1, marea2, marea3, marea4,marea5 ,listaDatosMareas}= useContext(TideContext);
    
  // Pasamos la hora de str a num y la comparamos con la hora actual para sacar el estado actual.
  const horaActual= new Date().getTime();
  const marea1Time= new Date(marea1?.fecha +' '+ marea1?.hora).getTime(); 
  const marea2Time= new Date(marea2?.fecha +' '+ marea2?.hora).getTime(); 
  const marea3Time= new Date(marea3?.fecha +' '+ marea3?.hora).getTime(); 
  const marea4Time= new Date(marea4?.fecha +' '+ marea4?.hora).getTime(); 

  // Buscamos el tipo de marea sabiendo que tenemos solo 2 tipos de mareas
  const hpleamar1= (marea1?.tipo === 'pleamar')? marea1?.hora: marea2?.hora;
  const hpleamar2= (marea3?.tipo === 'pleamar')? marea3?.hora: marea4?.hora;
  const hbajamar1= (marea1?.tipo === 'bajamar')? marea1?.hora : marea2?.hora;
  const hbajamar2= (marea3?.tipo === 'bajamar')? marea3?.hora : marea4?.hora;
      
  // Buscamos el estado de la marea, si la marea actual es pleamar y la proxima marea es bajamar el estado será 'Bajando' 
 
    var proxima_marea=Object;  
    
    if (horaActual < marea1Time){
      proxima_marea= marea1;
    }
    else if(horaActual > marea1Time && horaActual < marea2Time){
      proxima_marea= marea2;
    }
    else if(horaActual > marea2Time && horaActual < marea3Time){
      proxima_marea= marea3
    }
    else if(horaActual > marea3Time && horaActual < marea4Time){
      proxima_marea= marea4
    }
    else{
      proxima_marea= marea5
    }
    const tipoProximaMarea= proxima_marea?.tipo;
    var estado= (proxima_marea?.tipo === 'bajamar')? 'Bajando': 'Subiendo';

    const horarioProximaMarea= new Date(proxima_marea?.fecha +' '+ proxima_marea?.hora).getTime(); 

    
  return (
    <Flex         
    className='contenedor-card'
    backgroundColor={'#FFF'}
    color={'black'} 
    fontSize={'18px'}
    borderRadius={'10px'}
    width={'300px'}
    height={'400px'}
    margin={'2px'}
    padding={'8px'}
    display={'flex'}
    flexDirection={'column'}
    flexWrap={'wrap'}>
      
      <Flex flexDirection={'column'}>
        <Flex >
          <h2>Mareas </h2>
        </Flex>
        <Flex>
        <Divider className={'divider'} orientation='horizontal' borderColor={'rgb(255, 154, 0)'} />
        </Flex>
      </Flex>
      
      <Flex justifyContent={'center'}>
        <CuentaAtras objetivo={horarioProximaMarea} tipo={tipoProximaMarea}/>
      </Flex>

      <Flex fontSize={'.8em'} justifyContent={'center'}>
        <Flex flexDir={'column'} margin={'4px'} padding={'2px'} >
          <Flex>
            <Bajamar bajamar1={hbajamar1} bajamar2={hbajamar2}/>
          </Flex>
        </Flex>

        <Divider className={'divider'} orientation='vertical' borderColor={'rgb(255, 154, 0)'} />

        <Flex flexDir={'column'} margin={'4px'} padding={'2px'}>
          <Flex>
            <Pleamar pleamar1={hpleamar1} pleamar2={hpleamar2} />
          </Flex>

        </Flex>
      </Flex>

      <Flex justifyContent={'center'}>
        {listaDatosMareas? <TideChart min_day={.5} max_day={.5} estado={estado} /> :<div>Cargando...</div> }
      </Flex>

    </Flex>
  )
}
