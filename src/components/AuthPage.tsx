import { Box, Button, Input, VStack, Heading, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home');
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      w="100vw"
      bg="gray.100"
    >
      <VStack
        spacing={8}
        bg="white"
        p={10}
        boxShadow="lg"
        borderRadius="md"
        maxW="md"
        w="full"
      >
        <Heading size="lg" color="teal.600">
          Mon Espace
        </Heading>
        <Text color="gray.500">
          Veuillez vous authentifier pour accéder à votre espace
        </Text>
        <Input placeholder="Email" size="lg" />
        <Input placeholder="Mot de passe" type="password" size="lg" />
        <Button colorScheme="teal" size="lg" w="full" onClick={handleLogin}>
          Se connecter
        </Button>
      </VStack>
    </Box>
  );
};

export default AuthPage;
