import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react'
import React from 'react'
import { DayCard } from './Cards/DayCard'
import { Tablas } from './Tablas/Tablas'

export const Acordion = (props) => {
    const fecha= props.fecha
    const hora= props.hora
    const viento= props.viento
    const racha= props.racha
    const alba= props.alba
    const amanecer= props.amanecer
    const atardecer= props.atardecer
    const crepusculo= props.crepusculo

  return (
    <Accordion defaultIndex={[2]} allowMultiple>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex='1' textAlign='left' fontSize={'0.7rem'}>
            {fecha}
            <DayCard alba={alba} amanecer={amanecer} atardecer={atardecer} crepusculo={crepusculo} />
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} >
        <Tablas hora={hora} viento={viento} racha={racha}/>
      </AccordionPanel>
    </AccordionItem>
 </Accordion>
  )
}
