import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Button } from 'react-bootstrap'

import transfer from "../../../Images/transfer.png"
const AdvanceSearch = () => {
  return (
    <div>
     <form action="" className='formFlightSearch'>

{/* radio button for Advance return  */}

<div className="row">
    <div className="col-12 col-md-8 col-lg-3 mb-3 radioDiv">
    <div className="form_input" style={{marginLeft:"o"}}>
    <label for="from" className="form_lable"></label>
    
    <div  className='radioReturn' style={{marginLeft:"0px"}}>
    <input type="radio"  name="return"/>
    <span >Advance OneWay</span>
    </div>
    </div>
    
    </div>

    <div className="col-12 col-md-8 col-lg-3 mb-3">
    <div className="form_input">
    <label for="from" className="form_lable"></label>
    
    <div className='radioReturn'>
    <input type="radio" name="return"/>
    <span >Advance Return</span>
    </div>
    </div>
    
    </div>
    
    </div>



{/* arrival and departure input box */}
<div className="row" >
    <div className="col-12 col-md-3 col-lg-2 mb-3">
    <div className="form_input">
    <label for="from" className="form_lable">FROM</label>
    <input placeholder='Enter city or airport'/>
    </div>
    </div>
    <div className="col-md-1" style={{marginLeft:"-20px", marginRight:"-50px"}}>
      <img src={transfer}  alt="name" />
    </div>
    <div className="col-12 col-md-3 col-lg-3 mb-3">
    <div className="form_input">
    <label for="to" className="form_lable">TO</label>
    <input placeholder='Enter city or airport' />
    </div>
    </div>
    
    
    
    
    
    <div className="col-12 col-md-3 col-lg-3 mb-3">
    <div className="form_input">
    <label for="departure" className="form_lable">DEPARTURE</label>
    
    <input type="date" name="departure" id="departure" className="deaprture_input" placeholder="Enter city or airport" >
    
    </input>
    </div>
    </div>
    
    <div className="col-12 col-md-3 col-lg-3 mb-3">
    <div className="form_input">
    <label className="form_lable"></label>
    <select name="" id="" className='form_input_select' >
    
    <option mx={5}>Any Time</option>
    <option px={5} sx={{ fontSize: "9px", fontWeight: "bold" }}>Morning</option>
    
    <option px={5}>Evening</option>
    <option px={5}>Afternoon</option>
    <option mx={5}>Night</option>
    
    </select>
    </div>
    </div>
    
    
    </div>


{/*  All fair components  */}

<div className="col-12 col-md-6 col-lg-3 mb-3">
<div className="form_input">
<label for="departure" className="form_lable">Show Only</label>

<input type="input" name="departure" id="departure" className="deaprture_input" placeholder="Enter city or airport" >

</input>
</div>
</div>

<label className='form_lable1'>Restrict to specified Airline Leave blank for full results</label>

{/* All select tags start from here */}




<div>
  <Flex direction="row" justifyContent="center">
  <Button

mt={4}

colorScheme='teal'
// isLoading={props.isSubmitting}
type='submit'
>
Flight Search
</Button>
  </Flex>
</div>




</form>
    </div>
  )
}

export default AdvanceSearch
