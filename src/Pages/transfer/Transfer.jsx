import React from 'react'
import TransferStepper from '../../Components/TransferStepper';
import TransferForm from './transferForm/TransferForm';
import './transfer.css'
const Transfer = () => {
  return (
     <div className='transferflight' style={{marginBottom:'20px',backgroundColor:'white', borderRadius:'20px'}}>
      <TransferStepper/>
      <TransferForm/>
    </div>
  )
}

export default Transfer
