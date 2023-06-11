import { Flex, Image } from "@chakra-ui/react"
import '../../CSS/index.css'
import { TideWhiteCard } from "../../components/Cards/TideWhiteCard"
import { Header } from "../../components/NavBar/Header"
import { ForecastWhiteCard } from "../../components/Cards/ForecastWhiteCard"
import { ActualWhiteCard } from "../../components/Cards/ActualWhiteCard"
import { Video } from "../../components/Video/Video"



export const Dashboard = () => {

  return (
    <Flex 
    position={'relative'}
    display={'flex'}
    flexDirection={'column'}>

        <div className='fixed'>
            <Header />
        </div>
        <Flex margin={'50px'} width={'auto'}>
            {/* <Image
                boxSize='100%'
                objectFit='full'
                src={require('../../img/descarga.png')} alt='Playa kite El Médano Tenerife'/> */}
            <Video />    
        </Flex>


    <Flex
      display={'flex'}
      flexDirection={'row'}
      flexWrap={'wrap'}
      width={'100vw'}
      padding={'5px'}
      justifyContent={'center'}>

        <Flex>
            <ActualWhiteCard localidad={'El Médano'} /> 
        </Flex>
        <Flex>
            <ForecastWhiteCard />
        </Flex>
        <Flex>
            <TideWhiteCard  />
        </Flex>

    </Flex>
    </Flex>
    )
}
