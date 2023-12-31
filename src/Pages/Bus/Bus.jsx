import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import BusStepper from "../../Components/BusStepper";
import BusForm from "./busform/BusForm";
import './bus.css'
const bus = () => {
  return (
    <div className="busflight" style={{marginBottom:'20px',backgroundColor:'white', borderRadius:'20px'}}>
      <BusStepper />
      <BusForm />
    </div>
  );
};

export default bus;
