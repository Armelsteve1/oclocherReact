import {
  Box,
  Text,
  VStack,
  Image,
  Heading,
  HStack,
  Button,
  IconButton,
  Avatar,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  useBreakpointValue,
  Flex,
} from '@chakra-ui/react';
import {
  FaHeart,
  FaRegEdit,
  FaBars,
  FaCalendarAlt,
  FaChurch,
  FaUsers,
  FaMapMarkerAlt,
  FaNewspaper,
  FaDonate,
} from 'react-icons/fa';

const AppHome = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const posts = [
    {
      id: 1,
      user: 'Oclocher',
      date: '3 jours',
      title: 'Soirée de prière : "Dieu Agit !"',
      description:
        'Cette soirée est organisée dans le cadre du Congrès Mission local...',
      dateTime: 'Samedi 28 septembre, 20h00 - 22h00',
      location: 'Eglise Saint-Leu-Saint-Gilles',
      image: '/network.webp',
    },
    {
      id: 2,
      user: 'Oclocher',
      date: '3 jours',
      title: 'Soirée de prière : "Dieu Agit !"',
      description:
        'Cette soirée est organisée dans le cadre du Congrès Mission local...',
      dateTime: 'Samedi 28 septembre, 20h00 - 22h00',
      location: 'Eglise Saint-Leu-Saint-Gilles',
      image: '/app.webp',
    },
    {
      id: 3,
      user: 'Oclocher',
      date: '3 jours',
      title: 'Soirée de prière : "Dieu Agit !"',
      description:
        'Cette soirée est organisée dans le cadre du Congrès Mission local...',
      dateTime: 'Samedi 28 septembre, 20h00 - 22h00',
      location: 'Eglise Saint-Leu-Saint-Gilles',
      image: '/cockpit.webp',
    },
  ];

  const stories = [
    { id: 1, image: '/apple-store-icon.svg' },
    { id: 2, image: '/google-play-icon.svg' },
    { id: 3, image: '/apple-store-icon.svg' },
    { id: 4, image: 'google-play-icon.svg' },
    { id: 5, image: '/apple-store-icon.svg' },
  ];

  return (
    <Flex height="100vh" width="100vw" overflow="hidden">
      {/* Menu visible par défaut sur grand écran et Drawer sur mobile */}
      {!isMobile ? (
        <Box
          w="250px"
          bg="green.900"
          color="white"
          p={4}
          display="flex"
          flexDirection="column"
          position="fixed"
          left={0}
          top={0}
          bottom={0}
          height="100vh"
        >
          <Heading size="md" mb={6}>
            Communauté OClocher
          </Heading>
          <VStack align="start" spacing={6}>
            <HStack>
              <FaCalendarAlt />
              <Text>Calendrier</Text>
            </HStack>
            <HStack>
              <FaChurch />
              <Text>Sacrements</Text>
            </HStack>
            <HStack>
              <FaUsers />
              <Text>Équipes</Text>
            </HStack>
            <HStack>
              <FaMapMarkerAlt />
              <Text>Lieux</Text>
            </HStack>
            <HStack>
              <FaNewspaper />
              <Text>Gazettes</Text>
            </HStack>
            <HStack>
              <FaDonate />
              <Text>Faire un don</Text>
            </HStack>
          </VStack>
        </Box>
      ) : (
        <>
          <IconButton
            aria-label="Ouvrir le menu"
            icon={<FaBars />}
            onClick={onOpen}
            position="fixed"
            top="1rem"
            left="1rem"
            zIndex={1000}
            bg="green.500"
            color="white"
            _hover={{ bg: 'green.600' }}
          />
          <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay>
              <DrawerContent bg="green.900" color="white">
                <DrawerHeader>Communauté OClocher</DrawerHeader>
                <DrawerBody>
                  <VStack align="start" spacing={6}>
                    <HStack>
                      <FaCalendarAlt />
                      <Text>Calendrier</Text>
                    </HStack>
                    <HStack>
                      <FaChurch />
                      <Text>Sacrements</Text>
                    </HStack>
                    <HStack>
                      <FaUsers />
                      <Text>Équipes</Text>
                    </HStack>
                    <HStack>
                      <FaMapMarkerAlt />
                      <Text>Lieux</Text>
                    </HStack>
                    <HStack>
                      <FaNewspaper />
                      <Text>Gazettes</Text>
                    </HStack>
                    <HStack>
                      <FaDonate />
                      <Text>Faire un don</Text>
                    </HStack>
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </>
      )}

      {/* Section posts */}
      <Flex
        flex="1"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        p={4}
        ml={{ base: 0, md: '250px' }}
        maxW="100%"
        height="100vh"
      >
        <Heading size="lg" color="teal.600" mb={6} textAlign="center">
          Communauté OClocher
        </Heading>

        {/* Stories Section */}
        <HStack
          spacing={6}
          w="full"
          mb={15}
          justify="center"
          px={24}
          overflowX="auto"
          whiteSpace="nowrap"
          padding="26px"
          css={{
            '::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {stories.map((story) => (
            <VStack key={story.id} spacing={2}>
              <Box
                borderRadius="full"
                overflow="hidden"
                boxSize="70px"
                border="3px solid orange"
                display="flex"
                alignItems="center"
                justifyContent="center"
                padding="16px"
              >
                <Image src={story.image} alt="story" boxSize="40px" />
              </Box>
            </VStack>
          ))}
        </HStack>

        {/* Posts Section */}
        <Box
          overflowY="auto"
          w="100%"
          maxW="lg"
          p={2}
          css={{
            '::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {posts.map((post) => (
            <Box
              key={post.id}
              bg="white"
              p={4}
              borderRadius="md"
              boxShadow="md"
              mb={6}
              w="full"
            >
              <HStack mb={2}>
                <Avatar size="md" name={post.user} src="/OClocherlogo.webp" />
                <VStack align="start" spacing={0}>
                  <Text fontWeight="bold">{post.user}</Text>
                  <Text fontSize="sm" color="gray.500">
                    {post.date}
                  </Text>
                </VStack>
              </HStack>

              <Image
                src={post.image}
                alt={post.title}
                borderRadius="md"
                w="full"
              />

              <VStack align="start" mt={4}>
                <Text fontWeight="bold" fontSize="xl">
                  {post.title}
                </Text>
                <Text color="gray.600">{post.description}</Text>
                <Text color="gray.500" fontSize="sm">
                  {post.dateTime}
                </Text>
                <Text color="gray.500" fontSize="sm">
                  {post.location}
                </Text>
              </VStack>

              <HStack justify="space-between" mt={4}>
                <Button
                  leftIcon={<FaHeart />}
                  colorScheme="green"
                  variant="outline"
                >
                  Amen
                </Button>
                <IconButton
                  icon={<FaRegEdit />}
                  colorScheme="orange"
                  aria-label="Éditer"
                />
              </HStack>
            </Box>
          ))}
        </Box>
      </Flex>
    </Flex>
  );
};

export default AppHome;
