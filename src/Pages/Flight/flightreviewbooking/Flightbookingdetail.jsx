import Divider from "@mui/material/Divider";
import { Typography, Box, Grid, Button } from "@mui/material";
import React from "react";
import Link from "@mui/material/Link";
import { useDispatch, useSelector, useReducer } from "react-redux";
import { useNavigate } from "react-router-dom";

const Flightbookingdetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reducerState = useSelector((state) => state);
  console.log("reducerState", reducerState);
  const fareQuote =
    reducerState?.flightFare?.flightQuoteData?.Results?.Segments;
  //   const Passengers = sessionStorage.getItem("Passengers");
  //   console.log("Passengers", Passengers);
  return (
    <Box>
      <Typography color="#008FCC" fontWeight="bold" fontSize="16px">
        Booking Details
      </Typography>
      <Box className="mid_header" px={5} py={2} my={2}>
        <Typography color="#252525" fontWeight="bold" fontSize="16px" mb={2}>
          Flight Information
        </Typography>
        {fareQuote?.map((data) => {
          return data?.map((data1) => {
            const dateString = data1?.Origin?.DepTime;
            const date = new Date(dateString);
            const options = {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            };
            const formattedDate = date.toLocaleString("en-US", options);

            const [month, day, year, time, ampm] = formattedDate.split(" ");
            const desiredFormat = `${day}-${month}-${year} ${time} ${ampm}`;

            const dateString1 = data1?.Destination?.ArrTime;
            const date1 = new Date(dateString1);
            const options1 = {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            };
            const formattedDate1 = date1.toLocaleString("en-US", options1);
            const [month1, day1, year1, time1, ampm1] =
              formattedDate1.split(" ");
            const desiredFormat1 = `${day1}-${month1}-${year1} ${time1} ${ampm1}`;
            return (
              <Grid container spacing={3} pt={1.5}>
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
                      {data1?.Airline?.AirlineCode}-
                      {data1?.Airline?.FlightNumber}
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
                      {data1?.Origin?.Airport?.AirportCode}
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
                      {data1?.Destination?.Airport?.AirportCode}
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
                      {desiredFormat}
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
                      {desiredFormat1}
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
                      {data1?.Airline?.FareClass}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            );
          });
        })}
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
        {/* {Passengers?.map((value) => {
          console.log("Value", value);
          return (
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
          );
        })} */}
      </Box>
      {/* <Box className='Top_header' p={5}>
                <Box>
                    <Typography color='#008FCC' fontSize='16px' fontWeight='bold' textAlign='center'>Fare Rule</Typography>
                    <Typography color='#707070' fontSize='12px' fontWeight='bold' textAlign='center'>DEL - BOM</Typography>
                    <Grid container spacing={1} mt={1}>
                        <Grid item xs={6} md={6}>
                            <Box textAlign='center'>
                                <Typography color='#707070' fontSize='14px' fontWeight='bold' textAlign='left' mb={1}>Cancellation</Typography>
                                <Typography color='#008FCC' fontSize='14px' fontWeight='bold' textAlign='left'>INR 3500 from 0 To 3 Days before dept</Typography>
                                <Typography color='#008FCC' fontSize='14px' fontWeight='bold' textAlign='left'>INR 3000 from 4 Days & above before dept</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <Box textAlign='center'>
                                <Typography color='#707070' fontSize='14px' fontWeight='bold' textAlign='left' mb={1}>Reissue</Typography>
                                <Typography color='#008FCC' fontSize='14px' fontWeight='bold' textAlign='left'>INR 3250 from 0 To 3 Days before dept</Typography>
                                <Typography color='#008FCC' fontSize='14px' fontWeight='bold' textAlign='left'>INR 2750 from 4 Days & above before dept</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box py={3}>
                    <ul >
                        <li style={{ color: '#FF0000', fontSize: '14px', fontWeight: 'bold' }}> Mentioned Fee are per PAX and per sector</li>
                        <li style={{ color: '#FF0000', fontSize: '14px', fontWeight: 'bold' }}> Apart from airline charges, GST + RAF + applicable charges if any, will be charged</li>
                    </ul>
                </Box>
                <Box >
                    <Grid container spacing={1} >
                        <Grid item xs={6} md={8}>
                            <Typography color='#707070' fontSize='14px' fontWeight='bold' textAlign='left' mb={1}>6E:BOM - DEL</Typography>
                            <Typography color='#707070' fontSize='14px' textAlign='left' mb={1}>The Fare Basis Code is: R015AP These are Fare Rules for Domestic Flights. Meal: Chargeable Seat: Chargeable Hand Bag: 1 Bag Upto 7 Kg. Check-in Baggage: 15 Kg. Check-in Baggage (Student Fare): 25 Kg.L</Typography>
                            <Typography color='#008FCC ' fontSize='14px' textAlign='left' fontWeight='bold'> Subject to change without prior notice. </Typography>
                            <Typography color='#008FCC ' fontSize='14px' textAlign='left' fontWeight='bold'>  Note : We should receive the request at least four hours prior to Airline Fare Rules Policy. </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box> */}
      <Box className="mid_header" my={2} py={4} px={5}>
        <Box>
          <Typography color="#252525" fontWeight="bold" fontSize="16px" mb={2}>
            Passenger Agreement
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <input className="inputSelect" type="radio" />{" "}
          <Typography color="#252525" fontWeight="bold" fontSize="16px" ml={2}>
            I have reviewed and agreed on the fares and commission offered for
            this booking.
          </Typography>
        </Box>
        <Typography color="#FF0000" fontWeight="bold" fontSize="16px">
          Note : You can earn more commission if you checked the Travel
          Insurance.
        </Typography>
      </Box>
      <Box className="mid_header" my={2} py={4} px={5}>
        <Box>
          <Typography color="#252525" fontWeight="bold" fontSize="16px" mb={2}>
            Payment Option (s)
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <input className="inputSelect" type="radio" />{" "}
          <Typography color="#252525" fontWeight="bold" fontSize="16px" ml={2}>
            I have reviewed and agreed on the fares and commission offered for
            this booking.
          </Typography>
        </Box>
        <Typography color="#FF0000" fontWeight="bold" fontSize="16px">
          Important Note : For Online payment, It is advised to use Mozilla
          Firefox or Internet Explorer browsers for making bookings on portal
          and avoid Chrome browser. We are working on Chrome Browser issue with
          our payment gateway merchants..
        </Typography>
      </Box>
      <Box textAlign="center">
        <form
          action="/Flightbookingconfirmation"
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
              Generate Ticket{" "}
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