import React from 'react';
import {
  ChakraProvider,
  Flex,
} from '@chakra-ui/react';
import { WindProvider } from './Context/WindProvider';
import { TideProvider } from './Context/TideProvider';
import { Dashboard } from './view/Dashboard/Dashboard';
import { customTheme } from './Theme/theme';
import { ApiUpdate } from './components/ApiUpdate';


function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <WindProvider>
        <TideProvider>
          <Flex >
              <Dashboard/>
          </Flex>
        </TideProvider>
      </WindProvider>
    </ChakraProvider>

  );
}

export default App;
