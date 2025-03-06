import { Box, Heading, Text, Image, VStack, HStack, Link, Icon, Divider } from "@chakra-ui/react";
import { FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Visit = () => {
  return (
    <Box maxW="1200px" mx="auto" p={4}>
      <VStack spacing={8} align="center">
        <Heading as="h1" size="2xl" textAlign="center" color="green.600">
          Visit Dolce Mamma Italian Bar and Grille
        </Heading>

        <Image
          src="http://stock.calucid.com/fetch/calucid/dolce-mamma-italian-bar-and-grille/restaurant-exterior"
          alt="Dolce Mamma Exterior"
          width="100%"
          maxW="800px"
          height="auto"
          borderRadius="md"
        />

        <Box textAlign="center">
          <Text fontSize="xl" fontWeight="bold">
            Authentic Italian Cuisine in the Heart of Bethlehem, PA
          </Text>
          <Text fontSize="md" color="gray.600">
            Experience the flavors of Italy with our carefully crafted dishes, warm ambiance, and exceptional service.
          </Text>
        </Box>

        <Divider />

        <HStack spacing={6} wrap="wrap" justify="center">
          <Box textAlign="center">
            <Icon as={FaMapMarkerAlt} boxSize={8} color="red.500" />
            <Text fontSize="lg" fontWeight="bold">Location</Text>
            <Text>4505 Bath Pike</Text>
            <Text>Bethlehem, PA 18017, USA</Text>
          </Box>

          <Box textAlign="center">
            <Icon as={FaPhone} boxSize={8} color="green.500" />
            <Text fontSize="lg" fontWeight="bold">Call Us</Text>
            <Link href="tel:+16103178405" color="blue.500">(610) 317-8405</Link>
          </Box>

          <Box textAlign="center">
            <Icon as={FaClock} boxSize={8} color="yellow.500" />
            <Text fontSize="lg" fontWeight="bold">Hours</Text>
            <Text>Monday - Thursday: 11 AM - 9 PM</Text>
            <Text>Friday - Saturday: 11 AM - 10 PM</Text>
            <Text>Sunday: 12 PM - 8 PM</Text>
          </Box>
        </HStack>

        <Divider />

        <Box width="100%" maxW="800px">
          <iframe
            title="Google Map"
            width="100%"
            height="400px"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCZfNxROLqjeHORHMSc28B1mvxbvKHlukU&q=4505+Bath+Pike,Bethlehem,PA+18017,USA`}
          />
        </Box>

        <Image
          src="http://stock.calucid.com/fetch/calucid/dolce-mamma-italian-bar-and-grille/restaurant-interior"
          alt="Dolce Mamma Interior"
          width="100%"
          maxW="800px"
          height="auto"
          borderRadius="md"
        />

        <HStack spacing={4} wrap="wrap" justify="center">
          <Link as={RouterLink} to="/" fontSize="lg" color="blue.500">
            Home
          </Link>
          <Link as={RouterLink} to="/menu" fontSize="lg" color="blue.500">
            Menu
          </Link>
          <Link as={RouterLink} to="/about" fontSize="lg" color="blue.500">
            About Us
          </Link>
          <Link as={RouterLink} to="/contact" fontSize="lg" color="blue.500">
            Contact
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Visit;