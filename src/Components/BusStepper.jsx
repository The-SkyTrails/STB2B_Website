import React from "react";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";

const BusStepper = () => {
  return (
    <div>
      <Flex
       style={{width:'90%'}}
        h="50"
      
        borderRadius="20px"
           className="shadow-sm p-3 mb-5 bg-white rounded "
      >
        <Flex w="25%" h="90%">
          <Box w="25px" h="25" borderRadius="50%" bg="#1DBCF0" color="white">
            <Text ml="6px">1</Text>
          </Box>
          <Text ml="10" fontWeight="bold">
            Bus Search
          </Text>
        </Flex>
        <Spacer />
        <Flex w="29%" h="90%">
          <Box w="25px" h="25" borderRadius="50%" bg="#1DBCF0" color="white">
            <Text ml="6px">2</Text>
          </Box>
          <Text ml="10" fontWeight="bold">
            Bus Result
          </Text>
        </Flex>
        <Spacer />

        <Flex w="45%" h="90%">
          <Box w="25px" h="25" borderRadius="50%" bg="#1DBCF0" color="white">
            <Text ml="6px">3</Text>
          </Box>
          <Text ml="10" fontWeight="bold">
            Passenger Details
          </Text>
        </Flex>
        <Spacer />
        <Flex w="35%" h="90%">
          <Box w="25px" h="25" borderRadius="50%" bg="#1DBCF0" color="white">
            <Text ml="6px">4</Text>
          </Box>
          <Text ml="10" fontWeight="bold">
            Review Booking
          </Text>
        </Flex>
        <Spacer />
        <Flex w="35%" h="90%">
          <Box w="25px" h="25" borderRadius="50%" bg="#1DBCF0" color="white">
            <Text ml="6px">5</Text>
          </Box>
          <Text ml="10" fontWeight="bold">
            Booking Confirmation
          </Text>
        </Flex>
      </Flex>
    </div>
  );
};

export default BusStepper;
