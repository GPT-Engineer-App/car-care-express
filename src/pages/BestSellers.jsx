import { Box, Heading, SimpleGrid, Text, Image, Button } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const BestSellers = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={6}>Best Sellers</Heading>
      <SimpleGrid columns={[1, null, 3]} spacing={6}>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://via.placeholder.com/300" alt="Best Seller 1" />
          <Box p={4}>
            <Heading as="h3" size="md" mb={2}>Best Seller 1</Heading>
            <Text mb={2}>Top-rated car cleaning solution.</Text>
            <Button leftIcon={<FaShoppingCart />} colorScheme="brand">Buy Now</Button>
          </Box>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://via.placeholder.com/300" alt="Best Seller 2" />
          <Box p={4}>
            <Heading as="h3" size="md" mb={2}>Best Seller 2</Heading>
            <Text mb={2}>Highly recommended microfiber towels.</Text>
            <Button leftIcon={<FaShoppingCart />} colorScheme="brand">Buy Now</Button>
          </Box>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://via.placeholder.com/300" alt="Best Seller 3" />
          <Box p={4}>
            <Heading as="h3" size="md" mb={2}>Best Seller 3</Heading>
            <Text mb={2}>Popular all-in-one interior cleaner.</Text>
            <Button leftIcon={<FaShoppingCart />} colorScheme="brand">Buy Now</Button>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default BestSellers;