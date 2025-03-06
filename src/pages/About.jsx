import { Box, Heading, Text, Image, VStack, HStack, Link, Button, Flex } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const About = () => {
  return (
    <Box bg="white" color="black" p={4} maxW="1200px" mx="auto">
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl" color="green.600">
          About Dolce Mamma Italian Bar and Grille
        </Heading>

        <Image 
          src="http://stock.calucid.com/fetch/calucid/dolce-mamma-italian-bar-and-grille/restaurant-exterior" 
          alt="Dolce Mamma Exterior" 
          width="100%" 
          maxW="800px" 
          height="auto" 
          borderRadius="md"
        />

        <Text fontSize="lg" maxW="800px">
          Located in the heart of Bethlehem, PA, Dolce Mamma Italian Bar and Grille offers an authentic Italian dining experience. 
          Our chefs bring the flavors of Italy to your table with fresh ingredients, traditional recipes, and a warm atmosphere.
        </Text>

        <HStack spacing={4}>
          <Button as={RouterLink} to="/menu" colorScheme="red">
            View Menu
          </Button>
          <Button as={RouterLink} to="/visit" colorScheme="green">
            Visit Us
          </Button>
        </HStack>

        <Box textAlign="left" maxW="800px">
          <Heading as="h2" size="xl" color="red.600" mb={4}>
            Our Story
          </Heading>
          <Text fontSize="md">
            Dolce Mamma was founded with a passion for bringing the rich culinary traditions of Italy to Pennsylvania. 
            From handmade pasta to wood-fired pizzas, every dish is crafted with love and care.
          </Text>
        </Box>

        <Image 
          src="http://stock.calucid.com/fetch/calucid/dolce-mamma-italian-bar-and-grille/chef-cooking" 
          alt="Chef Cooking" 
          width="100%" 
          maxW="800px" 
          height="auto" 
          borderRadius="md"
        />

        <Box textAlign="left" maxW="800px">
          <Heading as="h2" size="xl" color="green.600" mb={4}>
            Our Atmosphere
          </Heading>
          <Text fontSize="md">
            Whether you're enjoying a romantic dinner, a family gathering, or a night out with friends, 
            our restaurant provides a welcoming and elegant ambiance. Experience the warmth of Italian hospitality with us.
          </Text>
        </Box>

        <Image 
          src="http://stock.calucid.com/fetch/calucid/dolce-mamma-italian-bar-and-grille/restaurant-interior" 
          alt="Restaurant Interior" 
          width="100%" 
          maxW="800px" 
          height="auto" 
          borderRadius="md"
        />

        <Box textAlign="left" maxW="800px">
          <Heading as="h2" size="xl" color="red.600" mb={4}>
            Visit Us
          </Heading>
          <Text fontSize="md">
            Come and experience the best of Italian cuisine at Dolce Mamma. We are located at:
          </Text>
          <Text fontSize="lg" fontWeight="bold" mt={2}>
            4505 Bath Pike, Bethlehem, PA 18017, USA
          </Text>
          <Text fontSize="lg" fontWeight="bold" color="green.600">
            (610) 317-8405
          </Text>
        </Box>

        <HStack spacing={4}>
          <Button as={RouterLink} to="/contact" colorScheme="red">
            Contact Us
          </Button>
          <Button as={RouterLink} to="/visit" colorScheme="green">
            Get Directions
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default About;