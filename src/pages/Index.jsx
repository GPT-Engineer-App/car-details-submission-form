// Complete the Index page component here
// Use chakra-ui
import { Box, FormControl, FormLabel, Input, NumberInput, NumberInputField, Button, VStack, Heading } from "@chakra-ui/react";
import { FaCar, FaDollarSign, FaRoad } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} as="form" onSubmit={(e) => e.preventDefault()}>
        <Heading as="h1" size="xl">
          Car Submission Form
        </Heading>

        <FormControl id="make" isRequired>
          <FormLabel>Car Make</FormLabel>
          <Input placeholder="e.g., Toyota" />
        </FormControl>

        <FormControl id="model" isRequired>
          <FormLabel>Car Model</FormLabel>
          <Input placeholder="e.g., Corolla" />
        </FormControl>

        <FormControl id="year" isRequired>
          <FormLabel>Year</FormLabel>
          <NumberInput min={1900} max={new Date().getFullYear()}>
            <NumberInputField placeholder="e.g., 2021" />
          </NumberInput>
        </FormControl>

        <FormControl id="color" isRequired>
          <FormLabel>Color</FormLabel>
          <Input placeholder="e.g., Red" />
        </FormControl>

        <FormControl id="maxBudget" isRequired>
          <FormLabel>Maximum Budget</FormLabel>
          <NumberInput min={0} precision={2} step={1000}>
            <NumberInputField placeholder="e.g., 20000" />
            <FaDollarSign />
          </NumberInput>
        </FormControl>

        <FormControl id="maxKilometers" isRequired>
          <FormLabel>Maximum Kilometers</FormLabel>
          <NumberInput min={0} step={1000}>
            <NumberInputField placeholder="e.g., 50000" />
            <FaRoad />
          </NumberInput>
        </FormControl>

        <Button leftIcon={<FaCar />} colorScheme="blue" type="submit">
          Submit
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;
