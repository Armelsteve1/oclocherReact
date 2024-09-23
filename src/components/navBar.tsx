import {
  Box,
  Flex,
  Link,
  IconButton,
  Button,
  Stack,
  HStack,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useDisclosure } from '@chakra-ui/react';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as="header"
      bg="white"
      px={4}
      boxShadow="md"
      w="100%"
      position="fixed"
      top={0}
      zIndex={10}
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box as="a" href="/" onClick={() => window.location.reload()}>
          <Image
            src="/OClocherlogo.webp"
            alt="OClocher Logo"
            boxSize="50px"
            cursor="pointer"
          />
        </Box>

        <HStack as="nav" spacing={8} display={{ base: 'none', md: 'flex' }}>
          <CustomLink href="#abon">Abonnements Paroisses</CustomLink>
          <CustomLink href="#aide">Aide aux Admins</CustomLink>
          <CustomLink href="#partenaires">Partenaires</CustomLink>
          <CustomLink href="#dioceses">Diocèses</CustomLink>
        </HStack>

        <HStack spacing={6} display={{ base: 'none', md: 'flex' }}>
          <Button
            as="a"
            href="#contact"
            colorScheme="teal"
            variant="solid"
            _hover={{ bg: 'teal.600' }}
          >
            Contactez-nous
          </Button>
          <Button
            as="a"
            href="/mon-espace"
            colorScheme="teal"
            variant="outline"
            _hover={{ bg: 'teal.100' }}
          >
            Mon Espace
          </Button>
        </HStack>

        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            <CustomLink href="#abon">Abonnements Paroisses</CustomLink>
            <CustomLink href="#aide">Aide aux Admins</CustomLink>
            <CustomLink href="#partenaires">Partenaires</CustomLink>
            <CustomLink href="#dioceses">Diocèses</CustomLink>
            <Button
              as="a"
              href="#contact"
              colorScheme="teal"
              variant="solid"
              _hover={{ bg: 'teal.600' }}
            >
              Contactez-nous
            </Button>
            <Button
              as="a"
              href="/mon-espace"
              colorScheme="teal"
              variant="outline"
              _hover={{ bg: 'teal.100' }}
            >
              Mon Espace
            </Button>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

const CustomLink = ({ href, children }: any) => (
  <Link
    href={href}
    fontWeight="bold"
    fontSize="lg"
    color="gray.600"
    _hover={{
      color: 'teal.500',
      textDecoration: 'none',
      transform: 'scale(1.05)',
    }}
    _active={{ color: 'teal.600' }}
    transition="all 0.2s ease-in-out"
  >
    {children}
  </Link>
);

export default Navbar;
