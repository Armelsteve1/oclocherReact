import { Box, SimpleGrid, Text, Image, VStack } from '@chakra-ui/react';

const PartnersSection = () => {
  return (
    <Box py={16} textAlign="center" bg="white">
      <VStack spacing={10} mb={12}>
        <Text fontSize="3xl" fontWeight="bold" color="teal.500">
          Ils parlent d'OClocher...
        </Text>
        <SimpleGrid columns={[2, 3, 6]} spacing={10}>
          <Image
            src="/Logo_Ouest-France.svg.webp"
            alt="Ouest France"
            boxSize="100px"
          />
          <Image src="/Logo_FC.webp" alt="Famille Chrétienne" boxSize="100px" />
          <Image src="/la_croix_1.webp" alt="La Croix" boxSize="100px" />
          <Image src="/logo1.webp" alt="Le Rasso" boxSize="100px" />
          <Image
            src="/RCF_Radio_logo_2015.webp"
            alt="RCF Radio"
            boxSize="100px"
          />
          <Image
            src="/dossierparis.svg"
            alt="Diocèse de Paris"
            boxSize="100px"
          />
        </SimpleGrid>
      </VStack>

      <VStack spacing={10}>
        <Text fontSize="3xl" fontWeight="bold" color="teal.500">
          Nos partenaires
        </Text>
        <SimpleGrid columns={[2, 3, 6]} spacing={10}>
          <Image
            src="/Logo_Ouest-France.svg.webp"
            alt="Ouest France"
            boxSize="100px"
          />
          <Image src="/Logo_FC.webp" alt="Famille Chrétienne" boxSize="100px" />
          <Image src="/la_croix_1.webp" alt="La Croix" boxSize="100px" />
          <Image src="/logo1.webp" alt="Le Rasso" boxSize="100px" />
          <Image
            src="/RCF_Radio_logo_2015.webp"
            alt="RCF Radio"
            boxSize="100px"
          />
          <Image
            src="/dossierparis.svg"
            alt="Diocèse de Paris"
            boxSize="100px"
          />
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default PartnersSection;
