import React from "react";
import { Typography } from "@mui/material";
import "./Return.css";
import transfer from "../../../Images/transfer.png";
// import { fontWeight } from '@mui/system'
import { Button } from "react-bootstrap";
import { Grid, GridItem, Flex } from "@chakra-ui/react";

import { Stack } from "react-bootstrap";
const Return = () => {
  return (
    <form action="" className="formFlightSearch">
      {/* Type of return  */}

      <div className="d-flex flex-row mb-3 gap-5">
        <div className="form-check d-flex align-items-center gap-2">
          <input
            type="radio"
            className="form-check-input mt-0"
            id="option1"
            name="returnType"
          ></input>
          <label>Normal Return</label>
        </div>
        <div className="form-check d-flex align-items-center gap-2">
          <input
            type="radio"
            className="form-check-input mt-0"
            id="option2"
            name="returnType"
          ></input>
          <label>LCC Special Return</label>
        </div>
        <div className="form-check d-flex align-items-center  gap-2">
          <input
            type="radio"
            className="form-check-input mt-0"
            id="option3"
            name="returnType"
          ></input>
          <label>GDS Special Return</label>
        </div>
      </div>

      {/* arrival and departure input box */}
      <div className="row w-100">
        <div className="col-xs-12 col-md-2">
          <div className="form_input">
            <label for="from" className="form_lable">
              FROM
            </label>
            <input placeholder="Enter city" />
          </div>
        </div>
        <div className="col-1 d-flex justify-content-center">
          <img src={transfer} alt="name" className="align-self-center" />
        </div>
        <div className="col-xs-12 col-md-2 ps-0" style={{ marginLeft: "20px" }}>
          <div className="form_input">
            <label for="to" className="form_lable">
              TO
            </label>
            <input placeholder="Enter city" />
          </div>
        </div>

        <div className="col-xs-12 col-md-2">
          <div className="form_input">
            <label for="departure" className="form_lable">
              DEPARTURE
            </label>

            <input
              type="date"
              name="departure"
              id="departure"
              className="deaprture_input"
              placeholder="Enter city or airport"
            ></input>
          </div>
        </div>
        <div className="col-xs-12 col-md-2">
          <div className="form_input">
            <label for="departure" className="form_lable">
              RETURN
            </label>

            <input
              type="date"
              name="departure"
              id="departure"
              className="deaprture_input"
              placeholder="Enter city or airport"
            ></input>
          </div>
        </div>

        <div className="col-xs-12 col-md-2">
          <div className="form_input">
            <label className="form_lable"></label>
            <select name="" id="" className="form_input_select">
              <option mx={5}>Any Time</option>
              <option px={5} sx={{ fontSize: "9px", fontWeight: "bold" }}>
                Morning
              </option>

              <option px={5}>Evening</option>
              <option px={5}>Afternoon</option>
              <option mx={5}>Night</option>
            </select>
          </div>
        </div>
      </div>

      <div className="d-flex mt-3  p-1 align-items-center gap-1">
        <div className="">Select A Fare Type:</div>
        <div className="d-flex gap-3 ">
          <div className="d-flex align-items-center gap-1 bg-info p-2 rounded">
            <input type="radio" name="fareType"></input>
            <label className="text-white">Regular Fares</label>
          </div>
          <div className=" d-flex align-items-center gap-1 bg-secondary rounded p-2">
            <input type="radio" name="fareType"></input>
            <label className="text-white">Student Fares</label>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-9">
          <div className="row">
            <div className="col-3 col-md-3 col-lg-2 mb-3">
              <div className="form_input">
                <label className="form_lable">Adult(12+)</label>

                <select name="adult" id="" className="form_input_select">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </select>
              </div>
            </div>

            <div className="col-3 col-md-3 col-lg-2 mb-3">
              <div className="form_input">
                <label className="form_lable">Child(2-11)</label>
                <select name="child" id="" className="form_input_select">
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </select>
              </div>
            </div>
            <div className="col-3 col-md-3 col-lg-3 mb-3">
              <div className="form_input">
                <label className="form_lable">Infant(Under 2 Yrs)</label>
                <select name="infant" id="" className="form_input_select">
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </select>
              </div>
            </div>

            <div className="col-3 col-md-3 col-lg-2 mb-3">
              <div className="form_input">
                <label className="form_lable">Class</label>
                <select name="class" id="" className="form_input_select">
                  <option value="1">All</option>
                  <option value="2">Ecomomy</option>
                  <option value="3">Premimum Economy</option>
                  <option value="4">Business</option>
                  <option value="5">Premimum Business</option>
                  <option value="6">First</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <label className="form_lable1">-More options: Airline prefrence</label>
      </div>
      <div className="row">
        <div className="col-12 col-md-3 col-lg-3 mb-3">
          <div className="showDirectFligthDiv">
            <input type="radio" /> <span>Show direct flight</span>
          </div>
        </div>
      </div>

      <label
        style={{
          fontSize: "20px",
          fontWeight: "400",
          font: "Quicksand, Bold",
          marginBottom: "20px",
        }}
      >
        Restrict my Search to:{" "}
        <span style={{ color: "#00BDC4" }}>Select All / Unselect All</span>
      </label>

      {/* All select tags start from here */}
      <Grid templateColumns="repeat(6, 1fr)" gap={6}>
        <GridItem w="100%" h="30">
          <input
            className="inputSelect"
            type="checkbox"
            defaultChecked="checked"
          />{" "}
          <span>GPS</span>
        </GridItem>
        <GridItem w="100%" h="30">
          <input
            className="inputSelect"
            type="checkbox"
            defaultChecked="checked"
          />{" "}
          <span>Fly Dubai</span>
        </GridItem>
        <GridItem w="100%" h="30">
          <input
            className="inputSelect"
            type="checkbox"
            defaultChecked="checked"
          />{" "}
          <span>Air Arobia</span>
        </GridItem>
        <GridItem w="100%" h="30">
          <input
            className="inputSelect"
            type="checkbox"
            defaultChecked="checked"
          />{" "}
          <span>zoom air</span>
        </GridItem>
        <GridItem w="100%" h="30">
          <input
            className="inputSelect"
            type="checkbox"
            defaultChecked="checked"
          />{" "}
          <span>Other intl LCC</span>
        </GridItem>
        <GridItem w="100%" h="30">
          <input
            className="inputSelect"
            type="checkbox"
            defaultChecked="checked"
          />{" "}
          <span>Air Asia</span>
        </GridItem>
        <GridItem w="100%" h="30">
          <input
            className="inputSelect"
            type="checkbox"
            defaultChecked="checked"
          />{" "}
          <span>Air India Express</span>
        </GridItem>
        <GridItem w="100%" h="30">
          <input
            className="inputSelect"
            type="checkbox"
            defaultChecked="checked"
          />{" "}
          <span>Air Cost</span>
        </GridItem>
        <GridItem w="100%" h="30">
          <input
            className="inputSelect"
            type="checkbox"
            defaultChecked="checked"
          />{" "}
          <span>NokScoot</span>
        </GridItem>
        <GridItem w="100%" h="30">
          <input
            className="inputSelect"
            type="checkbox"
            defaultChecked="checked"
          />{" "}
          <span>Salman Air</span>
        </GridItem>
        <GridItem w="100%" h="30">
          <input
            className="inputSelect"
            type="checkbox"
            defaultChecked="checked"
          />{" "}
          <span>Inter Sky</span>
        </GridItem>
        <GridItem w="100%" h="30">
          <input
            className="inputSelect"
            type="checkbox"
            defaultChecked="checked"
          />{" "}
          <span>Triger Airways</span>
        </GridItem>
        <GridItem w="100%" h="30">
          <input
            className="inputSelect"
            type="checkbox"
            defaultChecked="checked"
          />{" "}
          <span>SpiceJet</span>
        </GridItem>
        <GridItem w="100%" h="30">
          <input
            className="inputSelect"
            type="checkbox"
            defaultChecked="checked"
          />{" "}
          <span>GOFIRTS</span>
        </GridItem>
        <GridItem w="100%" h="30">
          <input
            className="inputSelect"
            type="checkbox"
            defaultChecked="checked"
          />{" "}
          <span>Alliance Air</span>
        </GridItem>
        <GridItem w="100%" h="30">
          <input
            className="inputSelect"
            type="checkbox"
            defaultChecked="checked"
          />{" "}
          <span>Akasa Air</span>
        </GridItem>
        <GridItem w="100%" h="30">
          <input
            className="inputSelect"
            type="checkbox"
            defaultChecked="checked"
          />{" "}
          <span>Fly Scoot</span>
        </GridItem>
        <GridItem w="100%" h="30">
          <input
            className="inputSelect"
            type="checkbox"
            defaultChecked="checked"
          />{" "}
          <span>Indigo</span>
        </GridItem>
        <GridItem w="100%" h="30">
          <input
            className="inputSelect"
            type="checkbox"
            defaultChecked="checked"
          />{" "}
          <span>Bhutan Airlines</span>
        </GridItem>
        <GridItem w="100%" h="30">
          <input
            className="inputSelect"
            type="checkbox"
            defaultChecked="checked"
          />{" "}
          <span>TruJet</span>
        </GridItem>
        <GridItem w="100%" h="30">
          <input
            className="inputSelect"
            type="checkbox"
            defaultChecked="checked"
          />{" "}
          <span>Mega Maldives</span>
        </GridItem>
      </Grid>

      <div className="row">
        <Flex direction="row" justifyContent="center">
          <Button
            mt={4}
            colorScheme="teal"
            // isLoading={props.isSubmitting}
            type="submit"
          >
            Flight Search
          </Button>
        </Flex>
      </div>
    </form>
  );
};

export default Return;
