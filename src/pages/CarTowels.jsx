import { Box, Heading, SimpleGrid, Text, Image, Button } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const CarTowels = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={6}>Car Towels</Heading>
      <SimpleGrid columns={[1, null, 3]} spacing={6}>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://via.placeholder.com/300" alt="Car Towel 1" />
          <Box p={4}>
            <Heading as="h3" size="md" mb={2}>Car Towel 1</Heading>
            <Text mb={2}>High-absorbency microfiber towel.</Text>
            <Button leftIcon={<FaShoppingCart />} colorScheme="brand">Buy Now</Button>
          </Box>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://via.placeholder.com/300" alt="Car Towel 2" />
          <Box p={4}>
            <Heading as="h3" size="md" mb={2}>Car Towel 2</Heading>
            <Text mb={2}>Soft and durable car towel.</Text>
            <Button leftIcon={<FaShoppingCart />} colorScheme="brand">Buy Now</Button>
          </Box>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://via.placeholder.com/300" alt="Car Towel 3" />
          <Box p={4}>
            <Heading as="h3" size="md" mb={2}>Car Towel 3</Heading>
            <Text mb={2}>Lint-free microfiber towel.</Text>
            <Button leftIcon={<FaShoppingCart />} colorScheme="brand">Buy Now</Button>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default CarTowels;