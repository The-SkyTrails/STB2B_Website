import { Typography } from "@material-ui/core";
import { Grid, Box, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PinDropIcon from "@mui/icons-material/PinDrop";
import "./holidayform.css";
import { useDispatch, useSelector } from "react-redux";
import { searchPackageAction } from "../../../Redux/SearchPackage/actionSearchPackage";
import { clearHolidayReducer } from "../../../Redux/OnePackageSearchResult/actionOneSearchPackage";

const HolidayForm = () => {
  const reducerState = useSelector((state) => state);
  console.log("holiday", reducerState?.searchResult);
  const [destination, setDestination] = useState("");
  const [daysSearch, setDaySearch] = useState(0);
  const filteredPackage =
    reducerState?.searchResult?.packageSearchResult?.data?.data?.pakage;

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('=====================');
    console.log("--------working--------")
    dispatch(clearHolidayReducer());
  }, [dispatch]);

  const navigate = useNavigate();
  useEffect(() => {
    if (filteredPackage) {
      navigate("HolidaypackageResult");
    }
  }, [filteredPackage]);
  const clickUs = () => {
    const payload = {
      destination,
      days: daysSearch,
    };
    console.log(payload);
    dispatch(searchPackageAction(payload));
  };

 

  return (
    <React.Fragment>
      <>
        <Grid
          item
          md={6}
          sm={12}
          xs={12}
          display="flex"
          justifyContent="center"
          style={{marginTop:'10px'}}
        >
          <TextField
            className="search__Input"
            id="filled-basic"
            label="Search From Destination"
            variant="filled"
            name="destination"
            onChange={(e) => setDestination(e.target.value)}
          />
          <TextField
            className="search__Input"
            id="filled-basic"
            label="Days"
            variant="filled"
            name="days"
            type="number"
            onChange={(e) => setDaySearch(e.target.value)}
            required
          />
          <button
            className="holiday_submit"
            onClick={clickUs}
            variant="contained"
            style={{textAlign:'center'}}
          >
            Search Holiday Package
          </button>
        </Grid>
      </>
    </React.Fragment>
  );
};

export default HolidayForm;
