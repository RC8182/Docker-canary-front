import { Divider, Flex} from '@chakra-ui/react'
import React, { useContext } from 'react'
import { WindContext } from '../../Context/WindProvider'
import { DayCard } from '../Acordion/Cards/DayCard';


export const WaveWhiteCard = () => {

  const { obViento }= useContext(WindContext);

  console.log('estamos en obviento', obViento)
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
    flexDirection={'column'}
    flexWrap={'wrap'}
    overflow={'auto'}
    >
    <Flex flexDirection={'column'}>
      <Flex >
        <h2>Wave card </h2>
      </Flex>
        <Divider className={'divider'} orientation='horizontal' borderColor={'rgb(255, 154, 0)'} />

        <Flex flexDirection={'column'} margin={'5px'}>
          <DayCard />
        </Flex>
      </Flex>


    </Flex>
  )
}
