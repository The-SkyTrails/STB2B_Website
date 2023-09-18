import  SightseeingStepper from '../../Components/SightseeingStepper';
import React from 'react'
import SightseeingForm from './sightseeingform/SightseeingForm';
import './Sightseeing.css';
const Sightseeing = () => {
  return (
    <div  className="flight" style={{marginBottom:'20px',backgroundColor:'white',borderRadius:'20px'}}>
      <SightseeingStepper/>
      <SightseeingForm/>
    </div>
  )
}

export default Sightseeing
