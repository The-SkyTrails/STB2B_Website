import React, { useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import EngineeringIcon from "@mui/icons-material/Engineering";
import mainImage from "../../../Images/mainImage.png";
import HolidayRating from "../holidaypackageresult/HolidayRating";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import "./holidayguestdetail.css";
import { useDispatch, useSelector } from "react-redux";
import { getPackageBookingAction } from "../../../Redux/getHolidayBooking/packageBookingAction";
import Custombutton from "../../../Custombuttom/Button";

const Holidayguestinfo = ({
  personList,
  setPersonList,
  childCount,
  setchildCount,
  adultCount,
  setadultCount,
}) => {
  const dispatch = useDispatch();
  const reducerState = useSelector((state) => state);
  const onePackage =
    reducerState?.searchOneResult?.OneSearchPackageResult?.data?.data;
  console.log("package Req", reducerState);
  console.log("onePackageee", onePackage);

  const packageId =
    reducerState?.searchOneResult?.OneSearchPackageResult?.data?.data?._id;

  const userId = reducerState?.logIn?.loginData?.data?.data?.id;

  // const [personList, setPersonList] = useState([
  //   { name: "", dob: "", gender: "" },
  // ]);


  const handlePersonChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...personList];
    list[index][name] = value;
    setPersonList(list);
  };

  const handlePersonRemove = (index) => {
    const year = +personList[personList.length - 2].dob.substring(0, 4);
   
    console.log(year)
    if (year < 2018) {
      setadultCount((prev) => prev - 1);
    } else {
      setchildCount((prev) => prev - 1);
    }
    const list = [...personList];
    list.splice(index, 1);
    setPersonList(list);
     
  };

  const handlePersonAdd = () => {
    setPersonList([...personList, { name: "", dob: "", gender: "" }]);
    const year = +personList[personList.length - 1].dob.substring(0, 4);
    if (year < 2018) {
      setadultCount((prev) => prev + 1);
    } else {
      setchildCount((prev) => prev + 1);
    }
  };

  const handleBookingPackage = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const payload = {
      pakageid: packageId,
      userId: userId,
      travellers: [personList],
      contact_details: {
        email: formData.get("email"),
        fullName: formData.get("fullName"),
        contactNumber: {
          phone: formData.get("phone"),
        },
      },
      sale_summary: {
        price: "55485",
        fare_breakup: "55485",
        total_basic_cost: "47382",
        coupon_discount: "-7382",
        fee_taxes: "1892",
        gst: "1892",
        total_gst: "41",
      },
      departureCity: "delhi",
      adults: "2",
      child: "0",
    };

    console.log("payload", payload);
    const holidayData = new FormData();
    holidayData.append("data", JSON.stringify(payload));
    dispatch(getPackageBookingAction([payload]));
    event.target.reset();
  };

  

  return (
    <Box>
      <form onSubmit={handleBookingPackage}>
        <Box className="main-head" marginTop={2}>
          <Typography className="holiday_txt">
            {onePackage?.pakage_title}
          </Typography>
          {/* <Typography className="holiday_txt_b">
            Feb 28, 2023
            <Typography fontSize="10px" color="#FF8900" px={1}>
              4D/3N
            </Typography>
            Mar 3, 2023 / From New Delhi
          </Typography> */}
        </Box>
        <Box className="main-head" mt={2}>
          <Typography className="holiday_txt">Traveller Details</Typography>
          <Typography className="holiday_txt_b" py={1}>
            {personList.length - 1} Travellers
            <Typography
              fontSize="14px"
              fontWeight="bold"
              color="#006FFF"
              px={1}
            >
              {adultCount} Adults || {childCount} childrens
            </Typography>
          </Typography>

          <Typography className="Top_txt" py={3}>
            Travellers
          </Typography>
          {personList.map((singleService, index) => (
            <div key={index} className="services" py={1}>
              <Box>
                <Grid container spacing={3} my={1}>
                  <Grid item xs={12} sm={12} lg={4}>
                    <Box className="topest_field">
                      <label className="label_field">
                        {" "}
                        Name<span style={{ color: "red" }}>*</span>
                      </label>
                      <Box className="input_shadow" ml={3}>
                        <input
                          className="input_decor"
                          type="text"
                          placeholder="Enter your name"
                          name="name"
                          onChange={(e) => handlePersonChange(e, index)}
                        />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} lg={4} py={1}>
                    <Box className="topest_field">
                      <label className="label_field">
                        Date of Birth<span style={{ color: "red" }}>*</span>
                      </label>
                      <Box className="input_shadow" ml={3}>
                        <input
                          className="input_decor"
                          type="date"
                          name="dob"
                          onChange={(e) => handlePersonChange(e, index)}
                        />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} lg={3}>
                    <Box className="topest_field">
                      <label className="label_field">
                        Gender<span style={{ color: "red" }}>*</span>
                      </label>
                      {/* <input  className="input_decor" type='text' placeholder="Enter your Gender" name="gender" /> */}
                      <Box className="input_shadow" ml={3}>
                        <select
                          name="gender"
                          className="input_decor"
                          onChange={(e) => handlePersonChange(e, index)}
                        >
                          <option>Select</option>
                          <option value="female">Female</option>
                          <option value="male">Male</option>
                          <option value="other">Other</option>
                        </select>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>

                <Box
                  className="second_division"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {personList.length - 1 === index && personList.length < 9 && (
                    <Button
                      variant="contained"
                      type="button"
                      onClick={handlePersonAdd}
                    >
                      <span>+ Add a Person</span>
                    </Button>
                  )}
                  {personList.length !== 1 && (
                    <Button
                      variant="contained"
                      color="warning"
                      type="button"
                      onClick={() => handlePersonRemove(index)}
                    >
                      <span>- Remove</span>
                    </Button>
                  )}
                </Box>
              </Box>
            </div>
          ))}

          <Box py={1}>
            <Typography fontSize="16px" fontWeight="bold" color="#006FFF">
              Please Enter Contact Details
            </Typography>
            <Box mt={2} display="flex">
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#252525",
                  fontWeight: "bold",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Email: *
              </Typography>
              <Box className="input_area" ml={2}>
                <input
                  className="input_decor"
                  type="email"
                  name="email"
                  id="departure"
                  // className="deaprture_input"
                  placeholder="abc@gmail.com"
                  style={{
                    textDecoration: "none",
                    border: "none",
                    marginTop: "5px",
                  }}
                />
              </Box>
              <Box className="input_area" mx={1}>
                <FormControl>
                  <NativeSelect
                    defaultValue={0}
                    inputProps={{
                      name: "price",
                    }}
                  >
                    <option value={10}>Mobile Code: *</option>
                    <option value={20}>+91</option>
                    <option value={30}>87</option>
                  </NativeSelect>
                </FormControl>
              </Box>
              <Box className="input_area" mx={1}>
                <input
                  className="input_decor"
                  type="text"
                  name="phone_number"
                  // className="deaprture_input"
                  placeholder="Mobile No. *"
                  style={{
                    textDecoration: "none",
                    border: "none",
                    marginTop: "5px",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className="main-head" my={2}>
          <Typography fontSize="16px" color="black" fontWeight="bold" px={1}>
            Special Requests
          </Typography>
          <Box my={1}>
            <input
              className="input_decor"
              type="text"
              name="phone_number"
              // className="special_request"
              placeholder="Mobile No. *"
              style={{
                textDecoration: "none",
                border: "1px solid #70707057",
                borderRadius: "20px",
                width: "100%",
              }}
            />
          </Box>
        </Box>

        <Box className="main-head" my={2}>
          <Typography className="holiday_txt" textDecoration="underline">
            Package Itinerary & Inclusions
          </Typography>
          {/* <Typography className="holiday_txt_b" py={1}>
            Itinerary
            <Typography
              fontSize="14px"
              fontWeight="bold"
              color="#006FFF"
              px={1}
            >
              / 2 Flight / 1 Hotel / 2 Transfers
            </Typography>
          </Typography> */}
          {/* <Box border="1px solid red">
            <Box display="flex" justifyContent="space-between">
              <Typography
                sx={{
                  color: "#FF8900",
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginY: "10px",
                }}
              >
                Day 1
              </Typography>
              <Typography
                sx={{
                  color: "#666666",
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginY: "10px",
                }}
              >
                23rd Feb, 2023
              </Typography>
            </Box>

            <Box>
              <Grid container py={2}>
                <Grid lg={6}>
                  <Typography className="holiday_txt_b" py={1}>
                    Onward Flight
                  </Typography>
                  <Box display="flex" justifyContent="space-around">
                    <Box>
                      <Typography className="h_time">04:55</Typography>
                      <Typography className="h_address">New Delhi</Typography>
                      <Typography className="h_address">Tue, 29 Feb</Typography>
                    </Box>
                    <Box>
                      <FlightTakeoffIcon sx={{ color: "#25B1CA" }} />
                    </Box>
                    <Box display="flex" justifyContent="space-around">
                      <Box>
                        <Typography className="r_address">09h 15m</Typography>
                        <Typography className="r_address">
                          1 Stop via Jaipur
                        </Typography>
                      </Box>
                    </Box>

                    <Box>
                      <FlightLandIcon sx={{ color: "#25B1CA" }} />
                    </Box>
                    <Box>
                      <Typography className="p_time">04:55</Typography>
                      <Typography className="p_address">New Delhi</Typography>
                      <Typography className="p_address">Tue, 29 Feb</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid lg={6}></Grid>
              </Grid>
            </Box>

            <Box>
              <Typography className="holiday_txt_b">Transfer</Typography>
              <Box
                sx={{ padding: "10px", display: "flex", alignItems: "center" }}
                ml={2}
              >
                <EngineeringIcon />
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#252525",
                    fontWeight: "bold",
                  }}
                  ml={1}
                >
                  Transfer:
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#FF8900",
                    fontWeight: "bold",
                  }}
                  ml={1}
                >
                  Airport to hotel in Goa | 1 hrs
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography className="holiday_txt_b">Hotel Stay</Typography>

              <Grid container p={2}>
                <Grid item lg={6}>
                  <Box display="flex" ml={2}>
                    <Box sx={{ width: "20%", height: "30%" }}>
                      <img src={mainImage} className="flight_img" />
                    </Box>
                    <Box px={2}>
                      <Typography
                        color="#252525"
                        fontSize="12px"
                        fontWeight="bold"
                      >
                        WelcomHotel Dwarka - Member ITC Hotel Group
                      </Typography>
                      <HolidayRating />
                      <Typography
                        color="#252525"
                        fontSize="10px"
                        fontWeight="bold"
                      >
                        Check in - Tue, 28 Feb 2023 Check out - Fri, 3 Mar 2023
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item lg={6}>
                  <Box ml={2}>
                    <Typography
                      color="#252525"
                      fontSize="14px"
                      fontWeight="bold"
                    >
                      Room Type Deluxe Room Special x 1
                    </Typography>
                    <Typography
                      color="#252525"
                      fontSize="10px"
                      fontWeight="bold"
                    >
                      Room Type Deluxe Room Special x 1
                    </Typography>
                    <Box display="flex" textAlign="center">
                      <FileDownloadDoneIcon style={{ color: "#26A202" }} />
                      <Typography
                        color="#252525"
                        fontSize="14px"
                        fontWeight="bold"
                        ml={1}
                      >
                        Breakfast Included
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Box display="flex" justifyContent="space-between">
              <Typography
                sx={{
                  color: "#FF8900",
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginY: "10px",
                }}
              >
                Day 2
              </Typography>
              <Typography
                sx={{
                  color: "#666666",
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginY: "10px",
                }}
              >
                24rd Feb, 2023
              </Typography>
            </Box>
            <Box>
              <Typography className="holiday_txt_b">Day Meals</Typography>
              <Box
                sx={{ padding: "10px", display: "flex", alignItems: "center" }}
                ml={2}
              >
                <FastfoodIcon />
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#252525",
                    fontWeight: "bold",
                  }}
                  ml={1}
                >
                  Breakfast:
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#FF8900",
                    fontWeight: "bold",
                  }}
                  ml={1}
                >
                  Included at Hotel
                </Typography>
              </Box>
            </Box>

            <Box>
              <Typography
                sx={{
                  paddingX: "10px",
                  fontSize: "12px",
                  color: "#252525",
                  fontWeight: "bold",
                }}
                ml={2}
              >
                Day at Leisure
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography
                sx={{
                  color: "#FF8900",
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginY: "10px",
                }}
              >
                Day 3
              </Typography>
              <Typography
                sx={{
                  color: "#666666",
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginY: "10px",
                }}
              >
                24rd Feb, 2023
              </Typography>
            </Box>
            <Box>
              <Typography className="holiday_txt_b">Day Meals</Typography>
              <Box
                sx={{ padding: "10px", display: "flex", alignItems: "center" }}
                ml={2}
              >
                <FastfoodIcon />
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#252525",
                    fontWeight: "bold",
                  }}
                  ml={1}
                >
                  Breakfast:
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#FF8900",
                    fontWeight: "bold",
                  }}
                  ml={1}
                >
                  Included at Hotel
                </Typography>
              </Box>
              <Typography
                sx={{
                  paddingX: "10px",
                  fontSize: "12px",
                  color: "#252525",
                  fontWeight: "bold",
                }}
                ml={1}
              >
                Checkout from Hotel in Goa
              </Typography>

              <Box
                sx={{ padding: "10px", display: "flex", alignItems: "center" }}
                ml={2}
              >
                <EngineeringIcon />

                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#FF8900",
                    fontWeight: "bold",
                  }}
                  ml={1}
                >
                  Included at Hotel | 1 hrs
                </Typography>
              </Box>
              <Box>
                <Grid container py={2}>
                  <Grid lg={6}>
                    <Typography className="holiday_txt_b" py={1}>
                      Return Flight
                    </Typography>
                    <Box display="flex" justifyContent="space-around">
                      <Box>
                        <Typography className="h_time">04:55</Typography>
                        <Typography className="h_address">New Delhi</Typography>
                        <Typography className="h_address">
                          Tue, 29 Feb
                        </Typography>
                      </Box>
                      <Box>
                        <FlightTakeoffIcon sx={{ color: "#25B1CA" }} />
                      </Box>
                      <Box display="flex" justifyContent="space-around">
                        <Box>
                          <Typography className="r_address">09h 15m</Typography>
                          <Typography className="r_address">
                            1 Stop via Jaipur
                          </Typography>
                        </Box>
                      </Box>

                      <Box>
                        <FlightLandIcon sx={{ color: "#25B1CA" }} />
                      </Box>
                      <Box>
                        <Typography className="p_time">04:55</Typography>
                        <Typography className="p_address">New Delhi</Typography>
                        <Typography className="p_address">
                          Tue, 29 Feb
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid lg={6}></Grid>
                </Grid>
              </Box>
              <Box>
                <Typography className="holiday_txt_b" py={1}>
                  Package Exclusions
                </Typography>
                <ul>
                  <li>Expenses of personal nature</li>
                  <li>Mentioned cost is not valid between 6 pm and 8 am</li>
                  <li>Anything not mentioned under inclusions</li>
                  <li>
                    Package price does not include Gala dinner charges
                    applicable on Christmas and New Year's Eve
                  </li>
                </ul>
              </Box>
            </Box>
          </Box> */}
          {onePackage.detailed_ltinerary.map((item, index) => {
            return (
              <>
                <Box key={index}>
                  <Typography sx={{ color: "orange", fontWeight: "bold" }}>
                    Day{index + 1}
                  </Typography>
                  <Typography>{item}</Typography>
                </Box>
              </>
            );
          })}
        </Box>
        <Box className="main-head" mt={2}>
          <Typography className="holiday_txt" textDecoration="underline">
            Cancellation & Date Change
          </Typography>
          <Typography
            sx={{ fontSize: "16px", color: "#666666", fontWeight: "bold" }}
          >
            Package Cancellation Policy
          </Typography>
          <Typography
            sx={{ fontSize: "16px", color: "#252525", fontWeight: "bold" }}
          >
            Cancellation & Charges:
          </Typography>
          <Box display="flex" justifyContent="space-between" my={1}>
            <Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#252525",
                  fontWeight: "300",
                  textAlign: "left",
                }}
              >
                Cancellation Time
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#006FFF",
                  fontWeight: "300",
                  textAlign: "left",
                }}
              >
                Till 03 Feb 23
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#006FFF",
                  fontWeight: "300",
                  textAlign: "left",
                }}
              >
                After 03 Feb 23
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#252525",
                  fontWeight: "300",
                  textAlign: "right",
                }}
              >
                Cancellation Charges
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#FF8900",
                  fontWeight: "300",
                  textAlign: "right",
                }}
              >
                ₹2,000 Cancellation Fee
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#FF8900",
                  fontWeight: "300",
                  textAlign: "right",
                }}
              >
                Non Refundable
              </Typography>
            </Box>
          </Box>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#666666",
              fontWeight: "300",
              textAlign: "left",
            }}
          >
            Note: These are non-refundable amounts as per the current components
            attached. In the case of component change/modifications, the policy
            will change accordingly.
          </Typography>
          <Typography
            sx={{ fontSize: "16px", color: "#666666", fontWeight: "bold" }}
          >
            Package Cancellation Policy
          </Typography>
          <Box display="flex" justifyContent="space-between" my={1}>
            <Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#252525",
                  fontWeight: "300",
                  textAlign: "left",
                }}
              >
                Date Change Possible
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#006FFF",
                  fontWeight: "300",
                  textAlign: "left",
                }}
              >
                Till 03 Feb 23
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#006FFF",
                  fontWeight: "300",
                  textAlign: "left",
                }}
              >
                After 03 Feb 23
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#252525",
                  fontWeight: "300",
                  textAlign: "right",
                }}
              >
                Date Change
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#FF8900",
                  fontWeight: "300",
                  textAlign: "right",
                }}
              >
                ₹0 Date Change Fee
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#FF8900",
                  fontWeight: "300",
                  textAlign: "right",
                }}
              >
                Date cannot be changed
              </Typography>
            </Box>
          </Box>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#666666",
              fontWeight: "300",
              textAlign: "left",
            }}
          >
            Note: These are non-refundable amounts as per the current components
            attached. In the case of component change/modifications, the policy
            will change accordingly. Date Change fees don't include any fare
            change in the components on the new date. Fare difference as
            applicable will be charged separately. Date Change will depend on
            the availability of the components on the new requested date.
          </Typography>
        </Box>
        {/* <form action="/Holidayreviewbooking"> */}
        <Box display="flex" justifyContent="center" width={"100%"} marginTop={2}>
            {/* <Button variant="contained" type="submit" style={{borderRadius:'10px'}}>
              Proceed to Booking Review
            </Button> */}
            <Custombutton title={"Proceed to Bokking Review"} />
          </Box>
      
      </form>
    </Box>
  );
};

export default Holidayguestinfo;
