import {
  Box,
  Text,
  VStack,
  HStack,
  Image,
  chakra,
  SimpleGrid,
  Button,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const MotionBox = chakra(motion.div);

const comments = [
  {
    text: "Et encore bravo pour l'amélioration permanente de l'appli et des outils associés.",
    author: 'Jean-François',
    diocese: 'Diocèse de Bayonne',
  },
  {
    text: "L'application est vraiment intuitive et facilite la gestion de la paroisse.",
    author: 'Marie-Thérèse',
    diocese: 'Diocèse de Paris',
  },
  {
    text: 'Merci pour cette innovation qui permet de rester connecté avec toute la communauté.',
    author: 'Père Guillaume',
    diocese: 'Diocèse de Lyon',
  },
];

const UserComments = () => {
  const [currentComment, setCurrentComment] = useState(0);
  const { ref: buttonRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentComment((prev) => (prev + 1) % comments.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const fadeInOut = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeInButton = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <Box
      position="relative"
      minHeight="100vh"
      width="100%"
      bgGradient="linear(to-r, teal.600, green.500)"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      pt={8}
    >
      <MotionBox
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        textAlign="center"
        mb={8}
        p={10}
      >
        <Text fontSize="3xl" fontWeight="bold" color="white">
          Une Équipe à votre service
        </Text>
      </MotionBox>

      <MotionBox
        key={currentComment}
        variants={fadeInOut}
        initial="initial"
        animate="animate"
        exit="exit"
        width="100%"
        maxW="600px"
        p={8}
        bg="white"
        shadow="lg"
        borderRadius="md"
        textAlign="center"
        mb={16}
      >
        <HStack spacing={4}>
          <Box bg="green.500" p={3} borderRadius="md">
            <Text fontSize="2xl" color="white">
              “
            </Text>
          </Box>
          <VStack align="start" spacing={2}>
            <Text fontSize="lg" color="gray.700">
              {comments[currentComment].text}
            </Text>
            <Text fontSize="sm" color="gray.500" fontWeight="bold">
              {comments[currentComment].author} •{' '}
              {comments[currentComment].diocese}
            </Text>
          </VStack>
        </HStack>
      </MotionBox>
      <Box
        width="100%"
        bgGradient="linear(to-r, teal.600, green.500)"
        py={10}
        textAlign="center"
      >
        <Text fontSize="3xl" fontWeight="bold" color="white" mb={12}>
          Un outil complet
        </Text>

        <SimpleGrid columns={[1, 1, 3]} spacing={10}>
          <VStack spacing={4}>
            <Image src="/app.webp" alt="Une Appli" boxSize="400px" />
            <Text fontSize="xl" fontWeight="bold" color="white">
              Une Appli
            </Text>
            <Text fontSize="md" color="whiteAlpha.800" textAlign="center">
              Entre les mains de tous vos paroissiens. Fraternelle, simple et
              intuitive, elle a su convaincre toutes les générations.
            </Text>
          </VStack>
          <VStack spacing={4}>
            <Image src="/cockpit.webp" alt="Un Cockpit" boxSize="400px" />
            <Text fontSize="xl" fontWeight="bold" color="white">
              Un Cockpit
            </Text>
            <Text fontSize="md" color="whiteAlpha.800" textAlign="center">
              Plateforme dédiée aux admins, pour piloter facilement votre
              paroisse.
            </Text>
          </VStack>
          <VStack spacing={4}>
            <Image src="/network.webp" alt="Un Réseau" boxSize="400px" />
            <Text fontSize="xl" fontWeight="bold" color="white">
              Un Réseau
            </Text>
            <Text fontSize="md" color="whiteAlpha.800" textAlign="center">
              Des milliers de paroissiens, de bénévoles qui s'entraident et qui
              vous aident, en plus de l'équipe OClocher !
            </Text>
          </VStack>
        </SimpleGrid>
        <MotionBox
          variants={fadeInButton}
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          mt={10}
          textAlign="center"
          ref={buttonRef}
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
    </Box>
  );
};

export default UserComments;
