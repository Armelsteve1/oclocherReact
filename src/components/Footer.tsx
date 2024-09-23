import {
  Box,
  Text,
  VStack,
  HStack,
  Icon,
  Link,
  SimpleGrid,
} from '@chakra-ui/react';
import {
  FaLinkedin,
  FaFacebook,
  FaHome,
  FaYoutube,
  FaUser,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={10} px={5}>
      <SimpleGrid columns={[1, 2]} spacing={10} mb={10}>
        <HStack alignItems="start">
          <Icon as={FaUser} boxSize={20} color="teal.300" />
          <VStack alignItems="flex-start">
            <Text fontWeight="bold" fontSize="lg">
              Arthur Regnard
            </Text>
            <Text fontSize="sm">
              Père de famille et développeur de formation, Arthur pilote le
              développement d'OClocher depuis sa création. C'est grâce à lui que
              l'outil peut évoluer avec tant d'agilité à la suite de chacune de
              vos suggestions !
            </Text>
            <Link href="https://linkedin.com" color="teal.300" isExternal>
              LinkedIn
            </Link>
          </VStack>
        </HStack>
        <HStack alignItems="start">
          <Icon as={FaUser} boxSize={20} color="teal.300" />
          <VStack alignItems="flex-start">
            <Text fontWeight="bold" fontSize="lg">
              Xavier de Colombel
            </Text>
            <Text fontSize="sm">
              Père de famille et ancien consultant en stratégie, Xavier est
              responsable du bon déploiement d'OClocher dans les paroisses.
              Contactez-le pour toute demande d'aide ou d'information !
            </Text>
            <Link href="https://linkedin.com" color="teal.300" isExternal>
              LinkedIn
            </Link>
          </VStack>
        </HStack>
      </SimpleGrid>
      <SimpleGrid columns={[1, 2, 3]} spacing={10} mb={10}>
        <VStack alignItems="flex-start">
          <Text fontWeight="bold" fontSize="lg">
            Liens utiles
          </Text>
          <Link href="#" color="teal.300">
            Accueil
          </Link>
          <Link href="#" color="teal.300">
            CGV
          </Link>
          <Link href="#" color="teal.300">
            Mentions Légales
          </Link>
          <Link href="#" color="teal.300">
            Politique cookies
          </Link>
          <Link href="#" color="teal.300">
            Politique de Confidentialité
          </Link>
        </VStack>
        <VStack alignItems="flex-start">
          <Text fontWeight="bold" fontSize="lg">
            À propos
          </Text>
          <Text fontSize="sm">
            OClocher est une société créée par des paroissiens, au service des
            communautés chrétiennes. Nos produits ont pour but de faciliter la
            fraternité des communautés chrétiennes, pour les aider à être
            missionnaires et diffuser le message du Christ.
          </Text>
        </VStack>
        <VStack alignItems="flex-start">
          <Text fontWeight="bold" fontSize="lg">
            Rejoignez-nous
          </Text>
          <Link href="#" color="teal.300">
            Contactez-nous
          </Link>
          <HStack spacing={4}>
            <Link href="https://facebook.com" isExternal>
              <Icon as={FaFacebook} boxSize={6} />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <Icon as={FaLinkedin} boxSize={6} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaHome} boxSize={6} />
            </Link>
            <Link href="https://youtube.com" isExternal>
              <Icon as={FaYoutube} boxSize={6} />
            </Link>
          </HStack>
        </VStack>
      </SimpleGrid>
      <HStack justifyContent="space-between" pt={10} borderTop="1px solid gray">
        <Text fontSize="sm">Copyright © OClocher SAS</Text>
        <HStack>
          <Text fontSize="sm">Créé avec</Text>
          <Link
            href="https://armelsteve.com"
            isExternal
            color="teal.300"
            fontSize="sm"
          >
            ASO - #1 fullstack
          </Link>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Footer;
