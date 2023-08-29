import React, { useEffect, useState } from "react";
import "./Flight.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import Loader from "../Loader/Loader";

import FlightNavBar from "./FlightNavbar/FlightNavBar";
import OneWay from "./FlightForm/OneWay";
import { NavLink, Routes, Route } from "react-router-dom";
import FlightAllRoute from "./FlightAllRoute/FlightAllRought";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import StyledTabs from "./FlightFormContainer";

const Flight = () => {
  const navigate = useNavigate();
  const reducerState = useSelector((state) => state);
  const [loader, setLoader] = useState(false);

  console.log("reducerState", reducerState);
  useEffect(() => {
    if (reducerState?.oneWay?.isLoading == true) {
      setLoader(true);
    }
  }, [reducerState?.oneWay?.isLoading]);
  useEffect(() => {
    if (reducerState?.oneWay?.oneWayData?.data?.data?.Response?.Results) {
      navigate("/Flightresult");
      setLoader(false);
    }
  }, [reducerState?.oneWay?.oneWayData?.data?.data?.Response?.Results]);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
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
              <Box
                w="25px"
                h="25"
                borderRadius="50%"
                bg="#1DBCF0"
                color="white"
              >
                <Text ml="6px">1</Text>
              </Box>
              <Text ml="10" fontWeight="bold">
                Flight Search
              </Text>
            </Flex>
            <Spacer />
            <Flex w="19%" h="90%">
              <Box
                w="25px"
                h="25"
                borderRadius="50%"
                bg="#1DBCF0"
                color="white"
              >
                <Text ml="6px">2</Text>
              </Box>
              <Text ml="10" fontWeight="bold">
                Flight Result
              </Text>
            </Flex>
            <Spacer />

            <Flex w="19%" h="90%">
              <Box
                w="25px"
                h="25"
                borderRadius="50%"
                bg="#1DBCF0"
                color="white"
              >
                <Text ml="6px">3</Text>
              </Box>
              <Text ml="10" fontWeight="bold">
                Passenger Details
              </Text>
            </Flex>
            <Spacer />
            <Flex w="19%" h="90%">
              <Box
                w="25px"
                h="25"
                borderRadius="50%"
                bg="#1DBCF0"
                color="white"
              >
                <Text ml="6px">4</Text>
              </Box>
              <Text ml="10" fontWeight="bold">
                Review Booking
              </Text>
            </Flex>
            <Spacer />
            <Flex w="19%" h="90%">
              <Box
                w="25px"
                h="25"
                borderRadius="50%"
                bg="#1DBCF0"
                color="white"
              >
                <Text ml="6px">5</Text>
              </Box>
              <Text ml="10" fontWeight="bold">
                Booking Confirmation
              </Text>
            </Flex>
          </Flex>
          <div className="flightNavBar">
            {/* <FlightNavBar /> */}
          </div>
          <div className="flightNavBarContainer">
            <FlightAllRoute />
          </div>

        {/* 👍Tabs of flight */}
          <StyledTabs/>

        </div>
      )}
    </>
  );
};

export default Flight;
