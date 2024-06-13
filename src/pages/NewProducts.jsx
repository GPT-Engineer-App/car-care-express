import { Box, Heading, SimpleGrid, Text, Image, Button } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const NewProducts = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={6}>New Products</Heading>
      <SimpleGrid columns={[1, null, 3]} spacing={6}>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://via.placeholder.com/300" alt="New Product 1" />
          <Box p={4}>
            <Heading as="h3" size="md" mb={2}>New Product 1</Heading>
            <Text mb={2}>Latest car cleaning solution.</Text>
            <Button leftIcon={<FaShoppingCart />} colorScheme="brand">Buy Now</Button>
          </Box>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://via.placeholder.com/300" alt="New Product 2" />
          <Box p={4}>
            <Heading as="h3" size="md" mb={2}>New Product 2</Heading>
            <Text mb={2}>Advanced microfiber towels.</Text>
            <Button leftIcon={<FaShoppingCart />} colorScheme="brand">Buy Now</Button>
          </Box>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://via.placeholder.com/300" alt="New Product 3" />
          <Box p={4}>
            <Heading as="h3" size="md" mb={2}>New Product 3</Heading>
            <Text mb={2}>Innovative interior cleaner.</Text>
            <Button leftIcon={<FaShoppingCart />} colorScheme="brand">Buy Now</Button>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default NewProducts;