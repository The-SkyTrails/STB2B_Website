import React from 'react'
import { Box, Flex, Spacer, Text } from '@chakra-ui/react'
import './sightseeing.css'

const Stepper = () => {
  return (
    <div >
      <Flex  h="50"  borderRadius="20px"  className=" sightContainer shadow-sm p-3 mb-5 bg-white rounded " style={{width:'100%'}}>
        

        <Flex w='25%' h='100%'  className='boxinput' >
          <Box w='30px' h='25' borderRadius="50%" bg="#1DBCF0" color="white" >
            <Text ml="6px">
              1
            </Text>
          </Box>
          <Text ml="10" mr="20" fontWeight="bold">Sightseeing Search</Text>
        </Flex>
        <Spacer />
        <Flex w='26%' h='90%'  >
          <Box w='25px' h='25' borderRadius="50%" bg="#1DBCF0" color="white" >
            <Text ml="6px">
              2
            </Text>
          </Box>
          <Text ml="10" fontWeight="bold">Sightseeing Result</Text>
        </Flex>
        <Spacer />

        <Flex w='26%' h='90%'  >
          <Box w='25px' h='25' borderRadius="50%" bg="#1DBCF0" color="white" >
            <Text ml="6px">
              3
            </Text>
          </Box>
          <Text ml="10" fontWeight="bold">Passenger Details</Text>
        </Flex>
        <Spacer />
        <Flex w='29%' h='90%'  >
          <Box w='25px' h='25' borderRadius="50%" bg="#1DBCF0" color="white" >
            <Text ml="6px">
              4
            </Text>
          </Box>
          <Text ml="10" fontWeight="bold">Review Booking</Text>
        </Flex>
        <Spacer />
        <Flex w='29%' h='90%'  >
          <Box w='25px' h='25' borderRadius="50%" bg="#1DBCF0" color="white">
            <Text ml="6px">
              5
            </Text>
          </Box>
          <Text ml="10" fontWeight="bold">Booking Confirmation</Text>
        </Flex>
      </Flex>

    </div>
  )
}

export default Stepper
