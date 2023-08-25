import React from 'react'
import { Button } from 'react-bootstrap' 
import { Flex } from '@chakra-ui/react'
import transfer from "../../../Images/transfer.png"
const Calander = () => {
  return (
    <form action="" className='formFlightSearch'>

    {/* Type of return  */}

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
    <label className="form_lable">Months & Year</label>
    <input type="month" placeholder='Enter Months & Year' />
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
  )
}

export default Calander
