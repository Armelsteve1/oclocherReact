import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  VStack,
  Stack,
} from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import { chakra } from '@chakra-ui/react';

const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

const Homepage = () => {
  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      h="100vh"
      w="100%"
      bgGradient="linear(to-r, teal.400, teal.600)"
    >
      <Flex
        h="100vh"
        w="100%"
        justifyContent="center"
        alignItems="center"
        px={{ base: 6, md: 12 }}
        flexDirection={{ base: 'column', lg: 'row' }}
        textAlign={{ base: 'center', lg: 'left' }}
      >
        <Box
          w={{ base: '100%', md: '70%', lg: '45%' }}
          mb={{ base: 10, lg: 0 }}
          display={{ base: 'none', md: 'block' }}
        >
          <Image
            src="/oclocheapp.webp"
            alt="OClocher App"
            boxSize="100%"
            objectFit="contain"
          />
        </Box>
        <VStack
          spacing={8}
          maxW="600px"
          alignItems={{ base: 'center', lg: 'flex-start' }}
        >
          <Box>
            <Text
              fontSize={{ base: '5xl', md: '6xl', lg: '7xl' }}
              fontWeight="bold"
              color="white"
            >
              OClocher
            </Text>
            <Text
              fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
              color="white"
              mt={4}
            >
              Le réseau paroissial au service de l'Église
            </Text>
            <Box mt={6}>
              <Text fontSize={{ base: 'xl', md: '2xl' }} color="white" mb={3}>
                ✔ Faciliter la vie des prêtres & bénévoles.
              </Text>
              <Text fontSize={{ base: 'xl', md: '2xl' }} color="white" mb={3}>
                ✔ Faire grandir la fraternité entre paroissiens.
              </Text>
              <Text fontSize={{ base: 'xl', md: '2xl' }} color="white" mb={3}>
                ✔ Être toujours plus missionnaires !
              </Text>
            </Box>
          </Box>

          <Stack direction={{ base: 'column', md: 'row' }} spacing={6} mt={4}>
            <Button
              as="a"
              href="#"
              size="lg"
              bg="white"
              color="teal.500"
              leftIcon={
                <Image
                  src="/apple-store-icon.svg"
                  alt="App Store"
                  boxSize="30px"
                />
              }
              _hover={{ bg: 'gray.100' }}
              fontSize="xl"
              px={8}
            >
              Télécharger dans l'App Store
            </Button>
            <Button
              as="a"
              href="#"
              size="lg"
              bg="white"
              color="teal.500"
              leftIcon={
                <Image
                  src="/google-play-icon.svg"
                  alt="Google Play"
                  boxSize="30px"
                />
              }
              _hover={{ bg: 'gray.100' }}
              fontSize="xl"
              px={8}
            >
              Obtenir sur Google Play
            </Button>
          </Stack>
        </VStack>
      </Flex>
    </MotionBox>
  );
};

export default Homepage;
