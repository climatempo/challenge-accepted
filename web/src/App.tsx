import { ChakraProvider } from '@chakra-ui/react';
import { Home } from './pages/Home';

export function App() {
   return (
      <ChakraProvider>
         <Home />
      </ChakraProvider>
   );
}
