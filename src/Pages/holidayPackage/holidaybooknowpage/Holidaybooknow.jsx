import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {  Flex, Spacer, Text } from "@chakra-ui/react";
import Grid from "@mui/system/Unstable_Grid/Grid";
import HolidayPackagedetail from "../holidaypackageresult/HolidayPackagedetail";
import HolidatLeftPackage from "../holidaypackageresult/HolidatLeftPackage";
import { Box, Typography, Button } from "@mui/material";
import Bookingdetailpackage from './Bookingdetailpackage';
import { useSelector } from 'react-redux';

const Holidaybooknow = () => {
  const reducerState = useSelector((state) => state);
  console.log("package Req",reducerState);

  const packageId = reducerState?.searchOneResult?.OneSearchPackageResult?.data?.data?._id

  const userId = reducerState?.logIn?.loginData?.data?.data?.id

  console.log("package Id",packageId);
  console.log("user Id",userId);


  return (
    <div>
     <div className="flightContainer">
        {/* step by step updating part */}

        <Flex
          w="100%"
          h="50"
          mb="20"
          borderRadius="20px"
          m="auto"
          className="shadow-sm p-3 mb-5 bg-white rounded "
        >
          <Flex w="19%" h="90%">
            <Box w="25px" h="25" borderRadius="50%" bg="#1DBCF0" color="white">
              <Text ml="6px">1</Text>
            </Box>
            <Text ml="10" fontWeight="bold">
              Holiday Package Search
            </Text>
          </Flex>
          <Spacer />
          <Flex w="19%" h="90%">
            <Box w="25px" h="25" borderRadius="50%" bg="#1DBCF0" color="white">
              <Text ml="6px">2</Text>
            </Box>
            <Text ml="10" fontWeight="bold">
              Holiday Package Result
            </Text>
          </Flex>
          <Spacer />

          <Flex w="19%" h="90%">
            <Box w="25px" h="25" borderRadius="50%" bg="#1DBCF0" color="white">
              <Text ml="6px">3</Text>
            </Box>
            <Text ml="10" fontWeight="bold">
              Guest Details
            </Text>
          </Flex>
          <Spacer />
          <Flex w="19%" h="90%">
            <Box w="25px" h="25" borderRadius="50%" bg="#1DBCF0" color="white">
              <Text ml="6px">4</Text>
            </Box>
            <Text ml="10" fontWeight="bold">
              Review Booking
            </Text>
          </Flex>
          <Spacer />
          <Flex w="19%" h="90%">
            <Box w="25px" h="25" borderRadius="50%" bg="#1DBCF0" color="white">
              <Text ml="6px">5</Text>
            </Box>
            <Text ml="10" fontWeight="bold">
              Booking Confirmation
            </Text>
          </Flex>
        </Flex>
        <div>
          <Grid container spacing={3}>
            <Grid sm={12} xs={12} md={8} item>
              <Box>
                
                <Bookingdetailpackage/>
              </Box>
            </Grid>
            <Grid sm={12} xs={12} md={4} item>
              
              <Box>
                {/* <HolidayPackagedetail /> */}
                <HolidatLeftPackage packageId={packageId} userId={userId}  />
              </Box>
              
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default Holidaybooknow;
