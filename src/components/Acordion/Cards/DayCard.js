import { Flex } from '@chakra-ui/react'
import { Olas } from '../../Modulos Tiempo/Olas'
import { Sunrise } from '../../Modulos Tiempo/Sunrise'
import { Sunset } from '../../Modulos Tiempo/Sunset'
import { Temperature } from '../../Modulos Tiempo/Temperature'
import { Viento } from '../../Modulos Tiempo/Viento'

export const DayCard = (props) => {
    const alba= props.alba;
    const amanecer= props.amanecer;
    const atardecer= props.atardecer;
    const crepusculo= props.crepusculo;

  return (
    <Flex
        margin={'5px'}
        width={'auto'}
        border={'1px'}
        borderColor={'rgb(255, 154, 0)'}
        borderRadius={'5px'}>
        <Flex margin={'2px'} padding={'2px'} flexDirection={'column'}>
          <Flex flexDirection={'row'}>
            <Sunrise alba={alba} amanecer={amanecer}/>
          </Flex>
          <Flex>
            <Sunset atardecer= {atardecer} crepusculo= {crepusculo} />
          </Flex>
          <Flex>
            <Viento titulo={'Viento previsto'} />
          </Flex>
          <Flex>
            <Temperature />
          </Flex>
          <Flex>
            {/* <Olas /> */}
          </Flex>
          
        </Flex>
    
    </Flex>
  )
}
