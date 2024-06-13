import { Box, Heading, Text, VStack, Input, Textarea, Button } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={6}>Contact Us</Heading>
      <VStack spacing={4} align="stretch">
        <Box>
          <Text fontSize="lg" mb={2}>Name</Text>
          <Input placeholder="Your Name" />
        </Box>
        <Box>
          <Text fontSize="lg" mb={2}>Email</Text>
          <Input placeholder="Your Email" />
        </Box>
        <Box>
          <Text fontSize="lg" mb={2}>Message</Text>
          <Textarea placeholder="Your Message" />
        </Box>
        <Button colorScheme="brand">Send Message</Button>
      </VStack>
    </Box>
  );
};

export default Contact;