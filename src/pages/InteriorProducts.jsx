import { Box, Heading, SimpleGrid, Text, Image, Button } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const InteriorProducts = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={6}>Interior Products</Heading>
      <SimpleGrid columns={[1, null, 3]} spacing={6}>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://via.placeholder.com/300" alt="Interior Product 1" />
          <Box p={4}>
            <Heading as="h3" size="md" mb={2}>Interior Product 1</Heading>
            <Text mb={2}>All-purpose interior cleaner.</Text>
            <Button leftIcon={<FaShoppingCart />} colorScheme="brand">Buy Now</Button>
          </Box>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://via.placeholder.com/300" alt="Interior Product 2" />
          <Box p={4}>
            <Heading as="h3" size="md" mb={2}>Interior Product 2</Heading>
            <Text mb={2}>Leather conditioner.</Text>
            <Button leftIcon={<FaShoppingCart />} colorScheme="brand">Buy Now</Button>
          </Box>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://via.placeholder.com/300" alt="Interior Product 3" />
          <Box p={4}>
            <Heading as="h3" size="md" mb={2}>Interior Product 3</Heading>
            <Text mb={2}>Dashboard cleaner.</Text>
            <Button leftIcon={<FaShoppingCart />} colorScheme="brand">Buy Now</Button>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default InteriorProducts;