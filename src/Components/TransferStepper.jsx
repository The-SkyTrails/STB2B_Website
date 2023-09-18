import React from 'react'
import {Box, Flex ,Spacer,Text} from '@chakra-ui/react'

const TransferStepper = () => {
  return (
    <div className='transferstepper'   style={{width:'100%'}}>
       <Flex  h="50"   borderRadius="20px"  className="shadow-sm p-3  bg-white rounded transferstepper">

<Flex w='29%' h='90%'  >
<Box w='25px' h='25'   borderRadius="50%" bg="#1DBCF0" color="white" >
 <Text ml="6px">
   1
 </Text>
</Box>
<Text ml="10" fontWeight="bold">Transfer  Search</Text>
</Flex>
 <Spacer />
 <Flex w='29%' h='90%'  >
<Box w='25px' h='25'   borderRadius="50%" bg="#1DBCF0" color="white" >
 <Text ml="6px">
   2
 </Text>
</Box>
<Text ml="10" fontWeight="bold">Transfer  Result</Text>
</Flex>
 <Spacer />

 <Flex w='35%' h='90%'  >
<Box w='25px' h='25'   borderRadius="50%" bg="#1DBCF0" color="white" >
 <Text ml="6px">
   3
 </Text>
</Box>
<Text ml="10" fontWeight="bold">Passenger Details</Text>
</Flex>
 <Spacer />
 <Flex w='35%' h='90%'  >
<Box w='25px' h='25'   borderRadius="50%" bg="#1DBCF0" color="white" >
 <Text ml="6px">
   4
 </Text>
</Box>
<Text ml="10" fontWeight="bold">Review Booking</Text>
</Flex>
 <Spacer />
 <Flex w='35%' h='90%'  >
<Box w='25px' h='25'   borderRadius="50%" bg="#1DBCF0" color="white">
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

export default TransferStepper
