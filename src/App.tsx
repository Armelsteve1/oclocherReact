import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/navBar';
import Homepage from './components/homePage';

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Homepage />
    </ChakraProvider>
  );
}

export default App;
