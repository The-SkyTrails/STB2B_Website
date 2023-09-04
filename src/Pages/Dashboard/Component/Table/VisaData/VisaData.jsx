import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { getVisaAction } from "../../../../../Redux/getVisa/actionVisaData";
const visaData1 = [
  {
    name: "John Doe",
    email: "john@example.com",
    mobile: "123-456-7890",
    visaType: "Tourist",
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    mobile: "987-654-3210",
    visaType: "Business",
  },
  {
    name: "Alice Johnson",
    email: "alice@example.com",
    mobile: "555-555-5555",
    visaType: "Student",
  },
  {
    name: "Michael Brown",
    email: "michael@example.com",
    mobile: "111-222-3333",
    visaType: "Work",
  },
  {
    name: "Emily Davis",
    email: "emily@example.com",
    mobile: "444-555-6666",
    visaType: "Tourist",
  },
  {
    name: "William Lee",
    email: "william@example.com",
    mobile: "777-888-9999",
    visaType: "Business",
  },
  {
    name: "Sophia Miller",
    email: "sophia@example.com",
    mobile: "222-333-4444",
    visaType: "Student",
  },
  {
    name: "James Wilson",
    email: "james@example.com",
    mobile: "888-999-0000",
    visaType: "Work",
  },
  {
    name: "Olivia Taylor",
    email: "olivia@example.com",
    mobile: "123-987-4567",
    visaType: "Tourist",
  },
  {
    name: "Liam Martinez",
    email: "liam@example.com",
    mobile: "555-777-2222",
    visaType: "Business",
  },
];

const VisaData = () => {
  const reducerState = useSelector((state) => state);

  const visaData = reducerState?.getVisaData?.visaData?.data?.data;
  console.log("visaData", visaData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVisaAction());
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
        <h3>Visa Data</h3>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>name</th>
              <th>email</th>
              <th>mobile</th>
              <th>visaType</th>
            </tr>
          </thead>

          <tbody>
            {/* {
            visaData?.map((item, index) => {
               return(
                <tr>
                <td>{item?.name}</td>
                <td>{item?.email}</td>
                <td>{item?.mobile}</td>
                <td>{item?.visaType}</td>
              </tr>
               )
            }
            )
        } */}
            {visaData1?.map((item, index) => {
              return (
                <tr>
                  <td>{item?.name}</td>
                  <td>{item?.email}</td>
                  <td>{item?.mobile}</td>
                  <td>{item?.visaType}</td>
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

export default VisaData;
