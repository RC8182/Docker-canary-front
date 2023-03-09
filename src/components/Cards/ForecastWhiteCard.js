import { Divider, Flex,} from '@chakra-ui/react'
import React, { useContext } from 'react'
import { WindContext } from '../../Context/WindProvider'
import { Acordion } from '../Acordion/Acordion'


export const ForecastWhiteCard = () => {

  const { obViento, estadoSol }= useContext(WindContext);

  return (
    <Flex         
    className='contenedor-card'
    backgroundColor={'#FFF'}
    color={'black'} 
    fontSize={'18px'}
    borderRadius={'10px'}
    width={'300px'}
    margin={'2px'}
    padding={'8px'}
    flexDirection={'column'}
    flexWrap={'wrap'}
    overflow={'auto'}
    >
    <Flex flexDirection={'column'}>
    
      <Flex flexDirection={'column'} >
          <Flex margin={'5px'}>
            <h2> Pronóstico </h2>
          </Flex>
      </Flex>

        <Divider className={'divider'} orientation='horizontal' borderColor={'rgb(255, 154, 0)'} />
        
        <Flex flexDirection={'column'} >
        { 
          obViento?.map ((e, index)=>{
            const alba= estadoSol?.status[index].alba;
            const amanecer= estadoSol?.status[index].amanecer;
            const atardecer= estadoSol?.status[index].atardecer;
            const crepusculo= estadoSol?.status[index].crepusculo;
            return <Acordion 
              key={index} 
              fecha= {e.fecha} hora={e.hora} viento={e.viento} racha={e.racha}
              alba= {alba} amanecer= {amanecer} atardecer= {atardecer} crepusculo= {crepusculo} />
          })
          }
        </Flex>
        <Divider className={'divider'} orientation='horizontal' borderColor={'rgb(255, 154, 0)'} />
      </Flex>


    </Flex>
  )
}
