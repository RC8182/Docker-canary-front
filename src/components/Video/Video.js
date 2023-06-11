import { AspectRatio, Box, Flex } from '@chakra-ui/react'
import React from 'react'

export const Video = () => {
  return (
    <Box
    as='iframe'
    controls
    src='https://www.youtube.com/embed/_ntI_trEf5E'
    isLooping
    width='100%'
    sx={{
      aspectRatio: '16/9'
    }}
    
/>

  )
}
