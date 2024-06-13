import { Box, Heading, SimpleGrid, Text, Image, Button } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const Packages = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={6}>Packages</Heading>
      <SimpleGrid columns={[1, null, 3]} spacing={6}>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://via.placeholder.com/300" alt="Package 1" />
          <Box p={4}>
            <Heading as="h3" size="md" mb={2}>Package 1</Heading>
            <Text mb={2}>Complete car cleaning package.</Text>
            <Button leftIcon={<FaShoppingCart />} colorScheme="brand">Buy Now</Button>
          </Box>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://via.placeholder.com/300" alt="Package 2" />
          <Box p={4}>
            <Heading as="h3" size="md" mb={2}>Package 2</Heading>
            <Text mb={2}>Interior and exterior cleaning package.</Text>
            <Button leftIcon={<FaShoppingCart />} colorScheme="brand">Buy Now</Button>
          </Box>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://via.placeholder.com/300" alt="Package 3" />
          <Box p={4}>
            <Heading as="h3" size="md" mb={2}>Package 3</Heading>
            <Text mb={2}>Premium car detailing package.</Text>
            <Button leftIcon={<FaShoppingCart />} colorScheme="brand">Buy Now</Button>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Packages;