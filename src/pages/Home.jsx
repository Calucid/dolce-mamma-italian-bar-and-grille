import { Box, Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box bg="white" color="black">
      {/* Hero Section */}
      <Box
        bgImage="url('http://stock.calucid.com/fetch/calucid/dolce-mamma-italian-bar-and-grille/italian-restaurant')"
        bgSize="cover"
        bgPosition="center"
        height={{ base: "70vh", md: "90vh" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        px={4}
      >
        <Stack spacing={6} maxW="lg" bg="rgba(0,0,0,0.6)" p={6} borderRadius="md">
          <Heading color="white" fontSize={{ base: "3xl", md: "5xl" }}>
            Welcome to Dolce Mamma
          </Heading>
          <Text color="white" fontSize={{ base: "md", md: "lg" }}>
            Authentic Italian cuisine in the heart of Bethlehem, PA.
          </Text>
          <Flex justify="center" gap={4}>
            <Button as={Link} to="/menu" colorScheme="red" size="lg">
              View Menu
            </Button>
            <Button as={Link} to="/visit" colorScheme="green" size="lg">
              Visit Us
            </Button>
          </Flex>
        </Stack>
      </Box>

      {/* About Section */}
      <Box py={16} px={6} textAlign="center">
        <Heading fontSize={{ base: "2xl", md: "4xl" }} color="green.600">
          Experience the Taste of Italy
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} mt={4} maxW="3xl" mx="auto">
          At Dolce Mamma, we bring the rich flavors of Italy to your plate with
          fresh ingredients and traditional recipes.
        </Text>
      </Box>

      {/* Featured Dishes */}
      <Box bg="gray.100" py={16} px={6}>
        <Heading textAlign="center" mb={8} color="red.600">
          Featured Dishes
        </Heading>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="center"
          gap={6}
          wrap="wrap"
        >
          <Box textAlign="center">
            <Image
              src="http://stock.calucid.com/fetch/calucid/dolce-mamma-italian-bar-and-grille/pasta"
              alt="Pasta Dish"
              width="300px"
              height="200px"
              borderRadius="md"
            />
            <Text mt={2} fontSize="lg" fontWeight="bold">
              Signature Pasta
            </Text>
          </Box>
          <Box textAlign="center">
            <Image
              src="http://stock.calucid.com/fetch/calucid/dolce-mamma-italian-bar-and-grille/pizza"
              alt="Pizza Dish"
              width="300px"
              height="200px"
              borderRadius="md"
            />
            <Text mt={2} fontSize="lg" fontWeight="bold">
              Wood-Fired Pizza
            </Text>
          </Box>
          <Box textAlign="center">
            <Image
              src="http://stock.calucid.com/fetch/calucid/dolce-mamma-italian-bar-and-grille/tiramisu"
              alt="Tiramisu Dessert"
              width="300px"
              height="200px"
              borderRadius="md"
            />
            <Text mt={2} fontSize="lg" fontWeight="bold">
              Classic Tiramisu
            </Text>
          </Box>
        </Flex>
      </Box>

      {/* Call to Action */}
      <Box py={16} textAlign="center">
        <Heading fontSize={{ base: "2xl", md: "4xl" }} color="green.600">
          Join Us for an Unforgettable Experience
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} mt={4} maxW="3xl" mx="auto">
          Whether you're dining in or ordering takeout, we promise an authentic
          Italian experience.
        </Text>
        <Button as={Link} to="/contact" colorScheme="red" size="lg" mt={6}>
          Contact Us
        </Button>
      </Box>
    </Box>
  );
};

export default Home;