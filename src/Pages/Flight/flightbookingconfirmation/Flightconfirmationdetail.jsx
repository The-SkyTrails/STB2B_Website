import Divider from "@mui/material/Divider";
import { Typography, Box, Grid, Button } from "@mui/material";
import React from "react";
import Link from "@mui/material/Link";
import Flightaccordian from './Flightaccordian';

const Flightbookingdetail = () => {
  return (
    <Box>
      <Box className="mid_header" px={5} py={2} my={2}>
        <Box textAlign="left" display="flex" justifyContent="space-between">
          <Typography color="#252525" fontSize="18px" fontWeight="bold">
            SKD Tour & Travel Pvt. Ltd.
          </Typography>
          <Typography color="#0052D0" fontWeight="bold" fontSize="18px">
            PNR: UIMU979
          </Typography>
        </Box>
        <Box
          textAlign="left"
          display="flex"
          justifyContent="space-between"
          mt={1}
        >
          <Typography color="#252525" fontSize="14px" fontWeight="bold">
            Kolkata
          </Typography>
          <Typography color="#252525" fontWeight="bold" fontSize="14px">
            Ticketed
          </Typography>
        </Box>
        <Box textAlign="left" display="flex" justifyContent="space-between">
          <Typography color="#252525" fontSize="14px" fontWeight="bold">
            Phone No. 9876565486
          </Typography>
          <Typography color="#252525" fontWeight="bold" fontSize="14px">
            Book on: 23rd Jan, 2023
          </Typography>
        </Box>
        <Box textAlign="left" display="flex" justifyContent="space-between">
          <Typography color="#252525" fontSize="14px" fontWeight="bold">
            Phone No. 9876565486
          </Typography>
          <Typography color="#252525" fontWeight="bold" fontSize="14px">
            Travel Date: 12th Feb, 2023
          </Typography>
        </Box>
      </Box>
      <Box className="mid_header" px={5} py={2} my={2}>
        <Typography color="#252525" fontWeight="bold" fontSize="16px" mb={2}>
          Flight Information
        </Typography>
        <Grid container spacing={3}>
          <Grid item md={2}>
            <Box className="mid_header" p={1}>
              <Typography
                sx={{
                  color: "#252525",
                  fontSize: "10px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Flight No.
              </Typography>
              <Divider color="gray" mar />
              <Typography
                sx={{
                  color: "#3D7AD9",
                  fontSize: "10px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
                pt={1}
              >
                6E - 2172
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2}>
            <Box className="mid_header" p={1}>
              <Typography
                sx={{
                  color: "#252525",
                  fontSize: "10px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Origin
              </Typography>
              <Divider color="gray" mar />
              <Typography
                sx={{
                  color: "#3D7AD9",
                  fontSize: "10px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
                pt={1}
              >
                BOM
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2}>
            <Box className="mid_header" p={1}>
              <Typography
                sx={{
                  color: "#252525",
                  fontSize: "10px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Destination
              </Typography>
              <Divider color="gray" mar />
              <Typography
                sx={{
                  color: "#3D7AD9",
                  fontSize: "10px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
                pt={1}
              >
                DEL
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2}>
            <Box className="mid_header" p={1}>
              <Typography
                sx={{
                  color: "#252525",
                  fontSize: "10px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Dep Date Time
              </Typography>
              <Divider color="gray" mar />
              <Typography
                sx={{
                  color: "#3D7AD9",
                  fontSize: "10px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
                pt={1}
              >
                16-Feb-2023 9:16 hrs
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2}>
            <Box className="mid_header" p={1}>
              <Typography
                sx={{
                  color: "#252525",
                  fontSize: "10px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Arr Date Time
              </Typography>
              <Divider color="gray" mar />
              <Typography
                sx={{
                  color: "#3D7AD9",
                  fontSize: "10px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
                pt={1}
              >
                16-Feb-2023 11:26 hrs
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2}>
            <Box className="mid_header" p={1}>
              <Typography
                sx={{
                  color: "#252525",
                  fontSize: "10px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Class
              </Typography>
              <Divider color="gray" mar />
              <Typography
                sx={{
                  color: "#3D7AD9",
                  fontSize: "10px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
                pt={1}
              >
                RR
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className="mid_header" px={5} py={2} my={2}>
        <Box display="flex" justifyContent="space-between">
          <Typography color="#252525" fontWeight="bold" fontSize="16px" mb={2}>
            Passenger Details
          </Typography>
          <Link fontWeight="bold" fontSize="12px">
            Change Passenger Details
          </Link>
        </Box>
        <Box>
          <Typography color="#6B6B6B" fontWeight="bold" fontSize="16px" mb={2}>
            Passenger 1 (Adult)
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item md={3}>
            <Typography color="#3D7AD9" fontWeight="bold" fontSize="16px">
              Name:
            </Typography>
            <Typography color="#3D7AD9" fontWeight="bold" fontSize="16px">
              Gender:
            </Typography>
            <Typography color="#3D7AD9" fontWeight="bold" fontSize="16px">
              Address:
            </Typography>
            <Typography color="#3D7AD9" fontWeight="bold" fontSize="16px">
              Seat Preferences:
            </Typography>
          </Grid>
          <Grid item md={9}>
            <Typography color="#FF8900" fontWeight="bold" fontSize="16px">
              Mr. Ssdkkh
            </Typography>
            <Typography color="#FF8900" fontWeight="bold" fontSize="16px">
              Male
            </Typography>
            <Typography color="#FF8900" fontWeight="bold" fontSize="16px">
              Kolkata
            </Typography>
            <Typography color="#FF8900" fontWeight="bold" fontSize="16px">
              8D
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box className="Top_header" p={5}>
        <Box>
          <Typography
            color="#008FCC"
            fontSize="16px"
            fontWeight="bold"
            textAlign="center"
          >
            Fare Rule
          </Typography>
          <Typography
            color="#707070"
            fontSize="12px"
            fontWeight="bold"
            textAlign="center"
          >
            DEL - BOM
          </Typography>
          <Grid container spacing={1} mt={1}>
            <Grid item xs={6} md={6}>
              <Box textAlign="center">
                <Typography
                  color="#707070"
                  fontSize="14px"
                  fontWeight="bold"
                  textAlign="left"
                  mb={1}
                >
                  Cancellation
                </Typography>
                <Typography
                  color="#008FCC"
                  fontSize="14px"
                  fontWeight="bold"
                  textAlign="left"
                >
                  INR 3500 from 0 To 3 Days before dept
                </Typography>
                <Typography
                  color="#008FCC"
                  fontSize="14px"
                  fontWeight="bold"
                  textAlign="left"
                >
                  INR 3000 from 4 Days & above before dept
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={6}>
              <Box textAlign="center">
                <Typography
                  color="#707070"
                  fontSize="14px"
                  fontWeight="bold"
                  textAlign="left"
                  mb={1}
                >
                  Reissue
                </Typography>
                <Typography
                  color="#008FCC"
                  fontSize="14px"
                  fontWeight="bold"
                  textAlign="left"
                >
                  INR 3250 from 0 To 3 Days before dept
                </Typography>
                <Typography
                  color="#008FCC"
                  fontSize="14px"
                  fontWeight="bold"
                  textAlign="left"
                >
                  INR 2750 from 4 Days & above before dept
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box py={3}>
          <ul>
            <li
              style={{ color: "#FF0000", fontSize: "14px", fontWeight: "bold" }}
            >
              {" "}
              Mentioned Fee are per PAX and per sector
            </li>
            <li
              style={{ color: "#FF0000", fontSize: "14px", fontWeight: "bold" }}
            >
              {" "}
              Apart from airline charges, GST + RAF + applicable charges if any,
              will be charged
            </li>
          </ul>
        </Box>
        <Box>
          <Grid container spacing={1}>
            <Grid item xs={6} md={8}>
              <Typography
                color="#707070"
                fontSize="14px"
                fontWeight="bold"
                textAlign="left"
                mb={1}
              >
                6E:BOM - DEL
              </Typography>
              <Typography
                color="#707070"
                fontSize="14px"
                textAlign="left"
                mb={1}
              >
                The Fare Basis Code is: R015AP These are Fare Rules for Domestic
                Flights. Meal: Chargeable Seat: Chargeable Hand Bag: 1 Bag Upto
                7 Kg. Check-in Baggage: 15 Kg. Check-in Baggage (Student Fare):
                25 Kg.L
              </Typography>
              <Typography
                color="#008FCC "
                fontSize="14px"
                textAlign="left"
                fontWeight="bold"
              >
                {" "}
                Subject to change without prior notice.{" "}
              </Typography>
              <Typography
                color="#008FCC "
                fontSize="14px"
                textAlign="left"
                fontWeight="bold"
              >
                {" "}
                Note : We should receive the request at least four hours prior
                to Airline Fare Rules Policy.{" "}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box mt={2}>
        <Flightaccordian />
      </Box>
      <Box textAlign="center">
        <form
          action=""
          className="formFlightSearch"
          textAlign="center"
        >
          <Box width="171px" margin="auto">
            <Button
              my={1}
              colorScheme="teal"
              className="btn_booknow"
              variant="contained"
              type="submit"
            >
              {" "}
              View invoice{" "}
            </Button>
          </Box>
        </form>
        <Typography color="#005778" fontWeight="bold" fontSize="18px" mt={5}>
          Copyright © 2022 TRAVVOLT All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Flightbookingdetail;
