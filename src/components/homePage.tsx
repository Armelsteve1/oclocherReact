import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  VStack,
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react';
import {
  motion,
  isValidMotionProp,
  useScroll,
  useTransform,
} from 'framer-motion';
import { chakra } from '@chakra-ui/react';

const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

const Homepage = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const textSizeTitle = useBreakpointValue({
    base: '4xl',
    md: '6xl',
    lg: '7xl',
  });
  const textSizeSubtitle = useBreakpointValue({
    base: 'xl',
    md: '2xl',
    lg: '5xl',
  });
  const textSizePoints = useBreakpointValue({
    base: 'lg',
    md: 'xl',
    lg: '2xl',
  });
  const imageSize = useBreakpointValue({ base: '100%', md: '70%', lg: '45%' });

  return (
    <MotionBox
      style={{ opacity }}
      h="100vh"
      w="100%"
      bgGradient="linear(to-r, teal.600, green.500)"
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
          w={imageSize}
          mb={{ base: 10, lg: 0 }}
          display={{ base: 'block', md: 'block' }}
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
            <Text fontSize={textSizeTitle} fontWeight="bold" color="white">
              OClocher
            </Text>
            <Text fontSize={textSizeSubtitle} color="white" mt={4}>
              Le réseau paroissial au service de l'Église
            </Text>
            <Box mt={6}>
              <Text fontSize={textSizePoints} color="white" mb={3}>
                ✔ Faciliter la vie des prêtres & bénévoles.
              </Text>
              <Text fontSize={textSizePoints} color="white" mb={3}>
                ✔ Faire grandir la fraternité entre paroissiens.
              </Text>
              <Text fontSize={textSizePoints} color="white" mb={3}>
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
