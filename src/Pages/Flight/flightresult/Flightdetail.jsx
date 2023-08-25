import React, { useEffect, useState } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Fairrule from "./Fairrule";
import Nonrefundable from "./Nonrefundable";
import LuggageIcon from "@mui/icons-material/Luggage";
import { useDispatch, useSelector, useReducer } from "react-redux";
import image from "../../../Images/FlightImages/1AC.png";
import SingleData from "./SingleData";
import MultipleData from "./MultipleData";
import { tokenAction } from "../../../Redux/ResultIndex/resultIndex";

const Flightdetail = () => {
  const reducerState = useSelector((state) => state);
  const navigate = useNavigate();
  const results =
    reducerState?.oneWay?.oneWayData?.data?.data?.Response?.Results;
  console.log("Reducer State", results);

  useEffect(() => {
    if (!results) {
      navigate("/flights");
    }
  }, [results]);

  return results?.map((result) => {
    return (
      <Box
        mt={3}
        p={2}
        backgroundColor="#F5F5F5"
        boxShadow="1px 1px 8px gray"
        borderRadius="10px"
      >
        {result?.map((flight1) => {
          console.log("flight1", flight1);
          const ResultIndex = flight1.id || flight1?.ResultIndex;
          console.log("ResultIndex", ResultIndex);
          return (
            <div key={ResultIndex}>
              {flight1?.Segments?.map((flight, Index) => {
                console.log("flight", flight);
                const length = flight.length;
                console.log("ResultIndex1", ResultIndex);
                return length === 1 ? (
                  <SingleData
                    flight={flight[0]}
                    stop={length}
                    index={ResultIndex}
                    fare={flight1?.Fare?.PublishedFare}
                  />
                ) : (
                  <MultipleData
                    flight={flight}
                    stop={length}
                    index={ResultIndex}
                    fare={flight1?.Fare?.PublishedFare}
                  />
                );
              })}
            </div>
          );
        })}
      </Box>
    );
  });
};

export default Flightdetail;
