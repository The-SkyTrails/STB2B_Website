import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { getForexAction } from "../../../../../Redux/Auth/forexData/actionForexData";
import { getForex4CustomerAction } from "../../../../../Redux/Auth/ForexData4Customer/actionForex4CustomerData";

const ForexData = () => {
  const reducerState = useSelector((state) => state);
  console.log(reducerState);

  const forexData = reducerState?.getForex?.forexData?.data?.data;
  const ForexData4Customer =
    reducerState?.getForex4Customer?.forexData4Customer?.data?.data;
  console.log("forexData", forexData);
  console.log("forexDataCus", ForexData4Customer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getForexAction());
    dispatch(getForex4CustomerAction());
  }, []);
  return (
    <>
      <div
        style={{
          marginTop: "150px",

          textAlign: "center",
          width: "80%",
        }}
      >
        <h3>Forex Data With Me</h3>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>amount</th>
              <th>commissionType</th>
              <th>currency</th>
              <th>enterCity</th>
              <th>enterLocation</th>
              <th>mobile</th>
              <th>services</th>
            </tr>
          </thead>
          <tbody>
            {forexData?.map((item, index) => {
              return (
                <tr>
                  <td>{item?.amount}</td>
                  <td>{item?.commissionType}</td>
                  <td>{item?.currency}</td>
                  <td>{item?.enterCity}</td>
                  <td>{item?.enterLocation}</td>
                  <td>{item?.mobile}</td>
                  <td>{item?.services}</td>
                </tr>
              );
            })}
            <tr></tr>
          </tbody>
        </Table>

        <h3 className="mt-5">Forex Data With Customer</h3>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>amount</th>
              <th>commissionType</th>
              <th>currency</th>
              <th>enterCity</th>

              <th>mobile</th>
              <th>services</th>
            </tr>
          </thead>
          <tbody>
            {ForexData4Customer?.map((item, index) => {
              return (
                <tr>
                  <td>{item?.name}</td>
                  <td>{item?.amount}</td>
                  <td>{item?.commissionType}</td>
                  <td>{item?.currency}</td>
                  <td>{item?.mobile}</td>
                  <td>{item?.service}</td>
                </tr>
              );
            })}
            <tr></tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default ForexData;
