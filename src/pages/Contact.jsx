import { Box, VStack, Heading, Text, Link, Input, Textarea, Button, FormControl, FormLabel, HStack, IconButton, Image } from "@chakra-ui/react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Contact = () => {
  return (
    <Box p={4} maxW="800px" mx="auto">
      <VStack spacing={6} align="stretch">
        <Heading textAlign="center" color="green.600">Contact Us</Heading>

        <Image 
          src="http://stock.calucid.com/fetch/calucid/dolce-mamma-italian-bar-and-grille/restaurant-exterior" 
          alt="Dolce Mamma Exterior" 
          width="100%" 
          height="200px" 
          objectFit="cover" 
          borderRadius="md"
        />

        <Box textAlign="center">
          <Text fontSize="lg" fontWeight="bold">Dolce Mamma Italian Bar and Grille</Text>
          <Text>4505 Bath Pike, Bethlehem, PA 18017, USA</Text>
          <Text>Phone: <Link href="tel:+16103178405" color="red.500">(610) 317-8405</Link></Text>
          <Text>Email: <Link href="mailto:info@dolcemamma.com" color="red.500">info@dolcemamma.com</Link></Text>
        </Box>

        <HStack justify="center" spacing={4}>
          <IconButton 
            as={Link} 
            href="https://www.facebook.com" 
            aria-label="Facebook" 
            icon={<FaFacebook />} 
            colorScheme="facebook" 
            isRound 
          />
          <IconButton 
            as={Link} 
            href="https://www.instagram.com" 
            aria-label="Instagram" 
            icon={<FaInstagram />} 
            colorScheme="red" 
            isRound 
          />
        </HStack>

        <Box>
          <Heading size="md" mb={4} color="green.600">Send Us a Message</Heading>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Your Name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Your Email" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Your Message" />
            </FormControl>
            <Button colorScheme="red" width="full">Send Message</Button>
          </VStack>
        </Box>

        <Image 
          src="http://stock.calucid.com/fetch/calucid/dolce-mamma-italian-bar-and-grille/restaurant-interior" 
          alt="Dolce Mamma Interior" 
          width="100%" 
          height="200px" 
          objectFit="cover" 
          borderRadius="md"
        />

        <HStack justify="center" spacing={6} mt={4}>
          <Link as={RouterLink} to="/" color="green.600">Home</Link>
          <Link as={RouterLink} to="/about" color="green.600">About</Link>
          <Link as={RouterLink} to="/menu" color="green.600">Menu</Link>
          <Link as={RouterLink} to="/visit" color="green.600">Visit</Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Contact;