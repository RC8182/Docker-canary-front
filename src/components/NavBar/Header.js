import { Flex, Heading } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { WindContext } from '../../Context/WindProvider'


export const Header = () => {
    const { limpiarHora, obVientoActual, obViento1}= useContext(WindContext)

    // Como el indice de la hora no siempre será igual que la hora creamos una función para localizar el viento correspondiente a la hora indicada 
  
    const h= new Date().getHours().toString().padStart(2, '0') //padStart 2 digitos, y si tiene 1 solo agregamos un 0
    const obVientoHora= limpiarHora(obViento1?.hora) //quitamos la h de la lista hora 
    const horaActualenLista= String(obVientoHora?.filter((e)=>{return e === h})) // Buscamos la hora Actual en nuestra lista
    const horaIndexList= obVientoHora?.indexOf(horaActualenLista) // Obtenemos el indice de la hora actual en la lista
    const pronostico=  (obViento1?.viento)? <Flex color='rgb(255, 154, 0)'>{obViento1.viento[horaIndexList]}</Flex> : <Flex>cargando</Flex>
    const vientoActual= (obVientoActual?.viento)? <Flex color='rgb(255, 154, 0)'>{obVientoActual.viento}</Flex> : <Flex>cargando</Flex>
    const [scrollPosition, setScrollPosition]=useState(0);
    
    var nombreClase='';
     
    if(scrollPosition <= 20){
      nombreClase='header-bg-transparente '
    }
    else{
      nombreClase='header-bg-opaco'
    }


  useEffect(() => {
    const onScroll = () => setScrollPosition(window.pageYOffset);
    
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);

  }, []);
  return (
    <Flex className={'header ' +nombreClase}>
        <Heading>
            <Flex 
                
                width={'100vw'}
                minHeight={'60px'}
                justifyContent={'space-evenly'}
                flexWrap={'wrap'}>
                <Flex 
                    className='logo' 
                    margin={'2px'}
                    padding={'5px'}
                    color={'white'}
                    fontSize={'0.8rem'}
                    alignSelf={'center'}
                    border={'1px'}
                    borderColor={'rgb(255, 154, 0)'}
                    borderRadius={'5px'}>
                    <h3>Canary-wind.com</h3>
                </Flex>
                <Flex 
                    className='viento_actual' 
                    margin={'2px'}
                    padding={'5px'}
                    color={'white'}
                    fontSize={'0.8rem'}
                    alignSelf={'center'}
                    border={'1px'}
                    borderColor={'rgb(255, 154, 0)'}
                    borderRadius={'5px'}>
                    <Flex padding={'2px'}>
                        <h3>Viento Actual: </h3>
                    </Flex>
                    <Flex padding={'2px'}>
                        <h3>{vientoActual}</h3>
                    </Flex>

                </Flex>
                <Flex 
                    className='pronostico' 
                    margin={'2px'}
                    padding={'5px'}
                    color={'white'}
                    fontSize={'0.8rem'}
                    alignSelf={'center'}
                    border={'1px'}
                    borderColor={'rgb(255, 154, 0)'}
                    borderRadius={'5px'}>
                    <Flex padding={'2px'}>
                        <h3>Pronóstico: </h3>
                    </Flex>
                    <Flex padding={'2px'}>
                        <h3>{pronostico}</h3>
                    </Flex>

                </Flex>
            </Flex>

        </Heading>
    </Flex>
  )
}
