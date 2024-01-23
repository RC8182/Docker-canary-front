import { Flex } from '@chakra-ui/react'; // Make sure to import the necessary Chakra UI components

export const Video = () => {
  // Check if the streaming server is available
  const isStreamingServerAvailable = /* Your logic to check if the streaming server is available */ true;

  // Set the appropriate source URL based on availability
  const src = isStreamingServerAvailable
    ? 'http://localhost:6064/'
    : 'https://www.youtube.com/embed/_ntI_trEf5E';

  return (
    <Flex
      as='iframe'
      controls
      src={src}
      isLooping
      width='99%'
      margin={'auto'}
      padding={'20px'}
      sx={{
        aspectRatio: '16/9'
      }}
    />
  );
};
