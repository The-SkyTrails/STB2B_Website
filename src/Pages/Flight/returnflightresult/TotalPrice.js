import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { apiURL } from "../../../Constants/constant";
import {
  quoteAction,
  returnQuoteAction,
} from "../../../Redux/FlightFareQuoteRule/actionFlightQuote";
const TotalPrice = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reducerState = useSelector((state) => state);
  const [departureResult, setDepartureResult] = useState(null);
  const [returnResult, setReturnResult] = useState(null);
  const DepartureResultIndex = sessionStorage.getItem("DepartureResultIndex");
  const ReturnResultIndex = sessionStorage.getItem("ReturnResultIndex");
  console.log(reducerState);
  useEffect(() => {
    if (DepartureResultIndex) {
      const payload = {
        EndUserIp: reducerState?.ip?.ipData,
        TokenId: reducerState?.ip?.tokenData,
        TraceId:
          reducerState?.twoWay?.twoWayData?.data?.data?.Response?.TraceId,
        ResultIndex: DepartureResultIndex,
      };
      dispatch(quoteAction(payload));

      //   axios({
      //     method: "POST",
      //     url: "/travvolt/flight/farequote",
      //     baseURL: `${apiURL.baseURL}`,
      //     data: payload,
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   }).then((res) => {
      //     console.log("DepartureResultIndex", res);
      //   });
    }
  }, [DepartureResultIndex]);
  useEffect(() => {
    if (ReturnResultIndex) {
      const payload = {
        EndUserIp: reducerState?.ip?.ipData,
        TokenId: reducerState?.ip?.tokenData,
        TraceId:
          reducerState?.twoWay?.twoWayData?.data?.data?.Response?.TraceId,
        ResultIndex: ReturnResultIndex,
      };
      dispatch(returnQuoteAction(payload));
      //   axios({
      //     method: "POST",
      //     url: "/travvolt/flight/farequote",
      //     baseURL: `${apiURL.baseURL}`,
      //     data: payload,
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   }).then((res) => {
      //     console.log("ReturnResultIndex", res);
      //   });
    }
  }, [ReturnResultIndex]);
  return (
    <div>
      <div className="w-100 bg-light position-fixed bottom-0">
        <div className="m-2 p-3">
          <div className="row m-0">
            <div className="col px-5 ">
              <div>Departure</div>
              <div className="d-flex justify-content-between">
                <span>10:00AM -- 01:00PM</span>
                <span>₹ 3000</span>
              </div>
            </div>
            <div className="col px-5">
              <div>Return</div>
              <div className="d-flex justify-content-between">
                <span>5:00AM -- 8:00AM</span>
                <span>₹ 3000</span>
              </div>
            </div>
            <div className="col d-flex align-items-center">
              <button className="btn btn-lg btn-primary fs-6">
                Proceed to payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalPrice;
