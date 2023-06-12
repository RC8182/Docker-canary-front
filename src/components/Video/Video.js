import { Flex } from '@chakra-ui/react'
import React from 'react'

export const Video = () => {
  return (
    
    <Flex
    as='iframe'
    controls
    src='https://www.youtube.com/embed/_ntI_trEf5E'
    isLooping
    width='99%'
    margin={'auto'}
    padding={'20px'}
    sx={{
      aspectRatio: '16/9'
    }}
    
/>

  )
}
