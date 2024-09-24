import {
  Box,
  Text,
  VStack,
  HStack,
  Image,
  SimpleGrid,
  Button,
  chakra,
  Icon,
  useBreakpointValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUser } from 'react-icons/fa';

const MotionBox = chakra(motion.div);

const TestimonialsPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const fadeInButton = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.3 },
    },
  };

  const textSize = useBreakpointValue({ base: 'xl', md: '4xl' });
  const smallTextSize = useBreakpointValue({ base: 'md', md: 'lg' });
  const buttonSize = useBreakpointValue({ base: 'md', lg: 'lg' });
  const imageSize = useBreakpointValue({ base: '80px', md: '100px' });
  const spacingSize = useBreakpointValue({ base: 6, md: 10 });

  return (
    <Box
      minHeight="100vh"
      position="relative"
      zIndex={2}
      p={spacingSize}
      overflow="hidden"
    >
      <SimpleGrid columns={[1, 3]} spacing={spacingSize} mb={spacingSize}>
        <VStack>
          <Text fontSize={textSize} fontWeight="bold" color="teal.500">
            +300
          </Text>
          <Text fontSize={smallTextSize} color="gray.600">
            prêtres
          </Text>
        </VStack>
        <VStack>
          <Text fontSize={textSize} fontWeight="bold" color="teal.500">
            +60 000
          </Text>
          <Text fontSize={smallTextSize} color="gray.600">
            paroissiens
          </Text>
        </VStack>
        <VStack>
          <Text fontSize={textSize} fontWeight="bold" color="teal.500">
            +35
          </Text>
          <Text fontSize={smallTextSize} color="gray.600">
            diocèses
          </Text>
        </VStack>
      </SimpleGrid>

      <SimpleGrid columns={[1, 1, 3]} spacing={spacingSize} ref={ref}>
        {[...Array(3)].map((_, index) => (
          <MotionBox
            key={index}
            variants={fadeInUp}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            p={6}
            bgGradient="linear(to-b, teal.400, teal.500)"
            borderRadius="lg"
            color="white"
            textAlign="center"
          >
            <Text fontSize={smallTextSize} fontWeight="bold">
              {index === 0
                ? 'Ça touche toutes les tranches d’âge !'
                : index === 1
                  ? 'Pour arrêter avec les groupes Whatsapp'
                  : 'Très content de cet outil missionnaire'}
            </Text>
            <HStack spacing={4} mt={4}>
              <Icon as={FaUser} boxSize={imageSize} color="teal.300" />
              <VStack align="start">
                <Text>
                  {index === 0
                    ? 'Père Guillaume'
                    : index === 1
                      ? 'Père Maximilien'
                      : 'Père Olivier'}
                </Text>
                <Text fontSize="sm">
                  {index === 0
                    ? 'St Cyr sur Mer'
                    : index === 1
                      ? 'St Quentin en Yvelines'
                      : 'Belley-Ars'}
                </Text>
              </VStack>
            </HStack>
          </MotionBox>
        ))}
      </SimpleGrid>

      {/* Information Section */}
      <MotionBox
        variants={fadeInUp}
        initial="initial"
        animate={inView ? 'animate' : 'initial'}
        mt={spacingSize}
        textAlign="center"
        p={spacingSize}
      >
        <Text
          fontSize={useBreakpointValue({ base: '2xl', md: '3xl' })}
          fontWeight="bold"
          color="gray.600"
          mb={spacingSize}
        >
          Une app' en lien avec vos outils actuels
        </Text>
      </MotionBox>
      <SimpleGrid columns={[1, 2, 4]} spacing={spacingSize} ref={ref}>
        {[
          'Site Web',
          'Feuille Paroissiale',
          'Outil de gestion',
          'Réseaux Sociaux',
        ].map((feature, index) => (
          <MotionBox
            key={index}
            variants={fadeInUp}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            p={spacingSize}
            textAlign="center"
          >
            <Image
              borderRadius="full"
              boxSize={imageSize}
              src="/OClocherlogo.webp"
              alt={feature}
            />
            <Text fontSize={smallTextSize} fontWeight="bold" mt={4}>
              {feature}
            </Text>
            <Text fontSize="md" color="teal.600">
              {index === 0
                ? "Synchronisez automatiquement votre site web paroissial avec les nouvelles les plus fraîches publiées sur l'appli."
                : index === 1
                  ? "Piochez parmi les dernières actualités dans l'appli et générez un PDF prêt à imprimer !"
                  : index === 2
                    ? "Incluez dans OClocher les liens vers les formulaires d'inscription et les demandes de sacrements."
                    : 'Publiez dans OClocher, puis partagez les posts vers vos réseaux sociaux.'}
            </Text>
          </MotionBox>
        ))}
      </SimpleGrid>

      {/* Call to Action */}
      <MotionBox
        variants={fadeInButton}
        initial="initial"
        animate={inView ? 'animate' : 'initial'}
        mt={spacingSize}
        textAlign="center"
      >
        <Button
          size={buttonSize}
          bg="orange.400"
          color="white"
          _hover={{ bg: 'orange.500' }}
        >
          Je demande un rendez-vous de présentation
        </Button>
      </MotionBox>
    </Box>
  );
};

export default TestimonialsPage;
