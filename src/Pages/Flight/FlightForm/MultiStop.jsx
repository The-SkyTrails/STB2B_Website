import React from 'react'
import { Button } from 'react-bootstrap'

import { Grid,GridItem,Flex} from '@chakra-ui/react'
const MultiStop = () => {
  return (
    <form action="" className='formFlightSearch'>

    {/* Type of return  */}
  
    <div className="row">
   <div className="col-12 col-md-8 col-lg-3 mb-3">
   <div className="form_input" style={{marginLeft:"0px"}}>
   <label for="from" className="form_lable"></label>
   
   <div  className='radioReturn' style={{marginLeft:"0px"}}>
   <input type="radio"  name="return"/>
   <span >Normal Return</span>
   </div>
   </div>
   
   </div>

   <div className="col-12 col-md-8 col-lg-3 mb-3">
   <div className="form_input">
   <label for="from" className="form_lable"></label>
   
   <div className='radioReturn'>
   <input type="radio" name="return"/>
   <span >LCC Special Return</span>
   </div>
   </div>
   
   </div>
   <div className="col-12 col-md-8 col-lg-3 mb-3">
   <div className="form_input">
   <label for="from" className="form_lable"></label>
   
   <div className='radioReturn'>
   <input type="radio" name="return"/>
   <span > Special Return</span>
   </div>
   </div>
   
   </div>
   </div>



   {/* arrival and departure input box */}
   <div className="row">
   <div className="col-12 col-md-8 col-lg-3 mb-3">
   <div className="form_input">
   <label for="from" className="form_lable">FROM</label>
   
   <input placeholder='Enter city or airport'/>
   </div>
   
   </div>
   
   {/* <div className="row">
   <div className="col-12 col-md-8 col-lg-3 mb-3">
   
     <img src={transfer} alt="img"/>
   
   </div>
</div> */}
   
   <div className="col-12 col-md-6 col-lg-3 mb-3">
   <div className="form_input">
   <label for="to" className="form_lable">TO</label>
   <input placeholder='Enter city or airport' />
   </div>
   </div>
   
   
   
   
   
   <div className="col-12 col-md-6 col-lg-3 mb-3">
   <div className="form_input">
   <label for="departure" className="form_lable">DEPARTURE</label>
   
   <input type="date" name="departure" id="departure" className="deaprture_input" placeholder="Enter city or airport" >
   
   </input>
   </div>
   </div>
   
   <div className="col-12 col-md-6 col-lg-3 mb-3">
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
   <label className='form_lable1'>Select A Fair of Type</label>
   
   <div className="row">
   <div className="col-4 col-md-4 col-lg-2 mb-3">
   <div className="form_input">
   
   <label for="from" className="form_lable">Adult(12+)</label>
   
   <select name="" id="" className='form_input_select' >
   
   <option mx={5} sx={{ fontSize: "9px", fontWeight: "bold" }}>1</option>
   <option px={5} >2</option>
   
   <option px={5}>3</option>
   <option px={5}>4</option>
   <option mx={5}>5</option>
   
   </select>
   
   </div>
   
   </div>
   
   <div className="col-4 col-md-4 col-lg-2 mb-3">
   <div className="form_input">
   <label for="to" className="form_lable">Child(2-11)</label>
   <select name="" id="" className='form_input_select'>
   <option mx={5} sx={{ fontSize: "9px", fontWeight: "bold" }}>1</option>
   <option mx={5}>2</option>
   <option px={5} >3</option>
   <option px={5}>4</option>
   <option px={5}>5</option>
   <option mx={5}>5</option>
   </select>
   </div>
   </div>
   <div className="col-9 col-md-4 col-lg-2 mb-3">
   <div className="form_input">
   <label for="to" className="form_lable">Infant (Under 2 Yrs)</label>
   <select name="" id="" className='form_input_select'>
   <option mx={5} sx={{ fontSize: "9px", fontWeight: "bold" }}>2</option>
   <option px={5}>3</option>
   <option px={5}>4</option>
   <option px={5}>5</option>
   <option mx={5}>5</option>
   </select>
   </div>
   </div>
   
   <div className="col-9 col-md-8 col-lg-3 mb-3">
   <div className="form_input">
   <label for="to" className="form_lable">Class</label>
   <select name="" id="" className='form_input_select'>
   
   <option className='option_select' px={5} sx={{ fontSize: "9px", fontWeight: "bold" }}>Ecomomy</option>
   <option className='option_select' px={5}>Premimum Economy</option>
   <option className='option_select' px={5}>Business</option>
   <option className='option_select' mx={5}></option>
   </select>
   </div>
   </div>
   <div className="col-9 col-md-8 col-lg-2 " >
   
   
   
   
   </div>
   
   </div>

   <div className="row">
   <div className="col-12 col-md-3 col-lg-3 mb-3">
   <div className="form_input">
   <label for="from" className="form_lable">Cradit Shell Pnr</label>
   
   <input placeholder='Enter city or airport'/>
   </div>
   
   </div>
  
   
   <div className="col-12 col-md-3 col-lg-3 mb-3">
   <div className="form_input">
   <label for="to" className="form_lable">Preferred Carrier</label>
   <input placeholder='Enter city or airport' />
   <h6 style={{font:"Quicksand, Bold", fontSize:"8px", color:"#4E4C4C"}}>Please enter only GDS online(s)</h6>
   </div>
   </div>
   
   </div>
 

   <label style={{fontSize:"20px" ,fontWeight:"400" , marginBottom:"10px"}}>Restrict my Search to: <span style={{color:"#00BDC4" }}>Select All/ Unselect All</span></label>

   {/* All select tags start from here */}
 <Grid templateColumns='repeat(6, 1fr)' gap={6}>
 <GridItem w='100%' h='30' >
<input className="inputSelect" type="checkbox" defaultChecked="checked" /> <span>GPS</span>
 </GridItem>
 <GridItem w='100%' h='30' >
<input className="inputSelect" type="checkbox" defaultChecked="checked" /> <span>Fly Dubai</span>
 </GridItem>
 <GridItem w='100%' h='30' >
<input className="inputSelect" type="checkbox" defaultChecked="checked" /> <span>Air Arobia</span>
 </GridItem>

 <GridItem w='100%' h='30' >
<input className="inputSelect" type="checkbox" defaultChecked="checked"  /> <span>Mega Maldives</span>
 </GridItem>
</Grid>





<div className='row'>
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

export default MultiStop
