import { Box, Flex, Grid, GridItem, Spacer, HStack } from "@chakra-ui/react";
import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="containetArticals">
        <div className="containetArticals1Div">
          <Flex mt="20px">
            <Spacer />
            <Box
              borderRadius="5px"
              textAlign="center"
              color="white"
              p="4"
              mr="10px"
              w="300px"
              h="40px"
              bg="#005778"
            >
              GST FAQ
            </Box>

            <Box
              borderRadius="5px"
              textAlign="center"
              color="white"
              p="4"
              w="300px"
              h="40px"
              bg="#005778"
            >
              FeedBack
            </Box>
            <Spacer />
          </Flex>
          <Flex mt="20px">
            <Spacer />
            <Box
              borderRadius="5px"
              textAlign="center"
              color="white"
              p="4"
              mr="10px"
              w="300px"
              h="40px"
              bg="#005778"
            >
              Report an Issue
            </Box>
            <Box
              borderRadius="5px"
              textAlign="center"
              color="white"
              p="4"
              mr="10px"
              w="300px"
              h="40px"
              bg="#005778"
            >
              Support
            </Box>

            <Box
              borderRadius="5px"
              textAlign="center"
              color="white"
              p="4"
              w="300px"
              h="40px"
              bg="#005778"
            >
              Online Assistance
            </Box>
            <Spacer />
          </Flex>
        </div>

        <div className="containetArticals2Div">
          <div className="skdTravel">
            <h4>Travvolt - A Unit of SKD Tours & Travels</h4>
          </div>
          <div className="line"></div>
          <div className="copyRightFooter">
            <h6>
              &copy; All Rights Reserved{" "}
              <a
                href="https://gbunny.online/"
                style={{ textDecoration: "none" }}
              >
                GrowthBunny
              </a>{" "}
              @2023
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
