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

  return (
    <Box
      minHeight="100vh"
      position="relative"
      zIndex={2}
      p={10}
      overflow="hidden"
    >
      <SimpleGrid columns={[1, 3]} spacing={10} mb={10}>
        <VStack>
          <Text fontSize="4xl" fontWeight="bold" color="teal.500">
            +300
          </Text>
          <Text fontSize="lg" color="gray.600">
            prêtres
          </Text>
        </VStack>
        <VStack>
          <Text fontSize="4xl" fontWeight="bold" color="teal.500">
            +60 000
          </Text>
          <Text fontSize="lg" color="gray.600">
            paroissiens
          </Text>
        </VStack>
        <VStack>
          <Text fontSize="4xl" fontWeight="bold" color="teal.500">
            +35
          </Text>
          <Text fontSize="lg" color="gray.600">
            diocèses
          </Text>
        </VStack>
      </SimpleGrid>

      <SimpleGrid columns={[1, 3]} spacing={8} ref={ref}>
        <MotionBox
          variants={fadeInUp}
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          p={6}
          bgGradient="linear(to-b, teal.400, teal.500)"
          borderRadius="lg"
          color="white"
          textAlign="center"
        >
          <Text fontSize="xl" fontWeight="bold">
            "Ça touche toutes les tranches d’âge !"
          </Text>
          <HStack spacing={4} mt={4}>
            <Icon as={FaUser} boxSize={20} color="teal.300" />
            <VStack align="start">
              <Text>Père Guillaume</Text>
              <Text fontSize="sm">St Cyr sur Mer</Text>
            </VStack>
          </HStack>
        </MotionBox>

        <MotionBox
          variants={fadeInUp}
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          p={6}
          bgGradient="linear(to-b, teal.400, teal.500)"
          borderRadius="lg"
          color="white"
          textAlign="center"
        >
          <Text fontSize="xl" fontWeight="bold">
            "Pour arrêter avec les groupes Whatsapp"
          </Text>
          <HStack spacing={4} mt={4}>
            <Icon as={FaUser} boxSize={20} color="teal.300" />
            <VStack align="start">
              <Text>Père Maximilien</Text>
              <Text fontSize="sm">St Quentin en Yvelines</Text>
            </VStack>
          </HStack>
        </MotionBox>

        <MotionBox
          variants={fadeInUp}
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          p={6}
          bgGradient="linear(to-b, teal.400, teal.500)"
          borderRadius="lg"
          color="white"
          textAlign="center"
        >
          <Text fontSize="xl" fontWeight="bold">
            "Très content de cet outil missionnaire"
          </Text>
          <HStack spacing={4} mt={4}>
            <Icon as={FaUser} boxSize={20} color="teal.300" />
            <VStack align="start">
              <Text>Père Olivier</Text>
              <Text fontSize="sm">Belley-Ars</Text>
            </VStack>
          </HStack>
        </MotionBox>
      </SimpleGrid>

      <MotionBox
        variants={fadeInUp}
        initial="initial"
        animate={inView ? 'animate' : 'initial'}
        mt={16}
        textAlign="center"
        p={10}
      >
        <Text fontSize="3xl" fontWeight="bold" color="gray.600" mb={10}>
          Une app' en lien avec vos outils actuels
        </Text>
      </MotionBox>

      <SimpleGrid columns={[1, 2, 4]} spacing={8} ref={ref}>
        <MotionBox
          variants={fadeInUp}
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          p={6}
          textAlign="center"
        >
          <Image
            borderRadius="full"
            boxSize="100px"
            src="/OClocherlogo.webp"
            alt="Site Web"
          />
          <Text fontSize="2xl" fontWeight="bold" mt={4}>
            Site Web
          </Text>
          <Text fontSize="md" color="teal.600">
            Synchronisez automatiquement votre site web paroissial avec les
            nouvelles les plus fraîches publiées sur l'appli.
          </Text>
        </MotionBox>

        <MotionBox
          variants={fadeInUp}
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          p={6}
          textAlign="center"
        >
          <Image
            borderRadius="full"
            boxSize="100px"
            src="/OClocherlogo.webp"
            alt="Feuille Paroissiale"
          />
          <Text fontSize="2xl" fontWeight="bold" mt={4}>
            Feuille Paroissiale
          </Text>
          <Text fontSize="md" color="teal.600">
            Piochez parmi les dernières actualités dans l'appli et générez un
            PDF prêt à imprimer !
          </Text>
        </MotionBox>

        <MotionBox
          variants={fadeInUp}
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          p={6}
          textAlign="center"
        >
          <Image
            borderRadius="full"
            boxSize="100px"
            src="/OClocherlogo.webp"
            alt="Outil de gestion"
          />
          <Text fontSize="2xl" fontWeight="bold" mt={4}>
            Outil de gestion
          </Text>
          <Text fontSize="md" color="teal.600">
            Incluez dans OClocher les liens vers les formulaires d'inscription
            et les demandes de sacrements.
          </Text>
        </MotionBox>

        <MotionBox
          variants={fadeInUp}
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          p={6}
          textAlign="center"
        >
          <Image
            borderRadius="full"
            boxSize="100px"
            src="/OClocherlogo.webp"
            alt="Réseaux Sociaux"
          />
          <Text fontSize="2xl" fontWeight="bold" mt={4}>
            Réseaux Sociaux
          </Text>
          <Text fontSize="md" color="teal.600">
            Publiez dans OClocher, puis partagez les posts vers vos réseaux
            sociaux.
          </Text>
        </MotionBox>
      </SimpleGrid>
      <MotionBox
        variants={fadeInButton}
        initial="initial"
        animate={inView ? 'animate' : 'initial'}
        mt={10}
        textAlign="center"
      >
        <Button
          size="lg"
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
