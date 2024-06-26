import { Box, Button, Container, Flex, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaShippingFast, FaTags, FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Promotional Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box bg="brand.500" color="white" p={4} borderRadius="md" mb={6} textAlign="center">
          <Flex align="center" justify="center">
            <FaShippingFast size="24px" />
            <Text ml={2} fontSize="lg">Free Shipping on Orders Over $50!</Text>
          </Flex>
        </Box>
      </motion.div>

      {/* Quick Links */}
      <SimpleGrid columns={[2, null, 4]} spacing={4} mb={6}>
        <Button leftIcon={<FaTags />} colorScheme="brand" variant="outline">Packages</Button>
        <Button leftIcon={<FaTags />} colorScheme="brand" variant="outline">New Products</Button>
        <Button leftIcon={<FaTags />} colorScheme="brand" variant="outline">Best Sellers</Button>
        <Button leftIcon={<FaTags />} colorScheme="brand" variant="outline">Car Towels</Button>
        <Button leftIcon={<FaTags />} colorScheme="brand" variant="outline">Exterior Products</Button>
        <Button leftIcon={<FaTags />} colorScheme="brand" variant="outline">Interior Products</Button>
        <Button leftIcon={<FaTags />} colorScheme="brand" variant="outline">Contact</Button>
      </SimpleGrid>

      {/* Featured Products */}
      <Heading as="h2" size="lg" mb={4}>Featured Products</Heading>
      <SimpleGrid columns={[1, null, 3]} spacing={6}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 1" />
            <Box p={4}>
              <Heading as="h3" size="md" mb={2}>Product 1</Heading>
              <Text mb={2}>High-quality car cleaning solution.</Text>
              <Button leftIcon={<FaShoppingCart />} colorScheme="brand">Buy Now</Button>
            </Box>
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 2" />
            <Box p={4}>
              <Heading as="h3" size="md" mb={2}>Product 2</Heading>
              <Text mb={2}>Premium microfiber towels.</Text>
              <Button leftIcon={<FaShoppingCart />} colorScheme="brand">Buy Now</Button>
            </Box>
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 3" />
            <Box p={4}>
              <Heading as="h3" size="md" mb={2}>Product 3</Heading>
              <Text mb={2}>All-in-one interior cleaner.</Text>
              <Button leftIcon={<FaShoppingCart />} colorScheme="brand">Buy Now</Button>
            </Box>
          </Box>
        </motion.div>
      </SimpleGrid>
    </Container>
  );
};

export default Index;