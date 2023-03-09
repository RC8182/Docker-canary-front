import { Divider, Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { WindContext } from '../../Context/WindProvider'


export const SunWhiteCard = () => {

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
        <h2>Sol card </h2>
      </Flex>
        <Divider className={'divider'} orientation='horizontal' borderColor={'rgb(255, 154, 0)'} />
      <Flex>
    </Flex>

        <Flex flexDirection={'column'}>

        </Flex>
      </Flex>


    </Flex>
  )
}
