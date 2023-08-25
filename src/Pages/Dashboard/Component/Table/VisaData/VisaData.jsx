import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getVisaAction } from '../../../../../Redux/getVisa/actionVisaData';

const VisaData = () => {
    const reducerState = useSelector((state) => state);
   
    const visaData = reducerState?.getVisaData?.visaData?.data?.data;
    console.log("visaData",visaData);
    
    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(getVisaAction());
       
    },[])
  return (
   <>
   <div style={{
        marginTop: "150px",
        marginLeft: "17%",
        textAlign: "center",
        width: "80%",
      }}>
        <h3>Visa Data</h3>
    <Table  striped
      bordered
      hover
      responsive
      >
      
      <thead>
        
        <tr>
          <th>name</th>
          <th>email</th>
          <th>mobile</th>
          <th>visaType</th>
        </tr>
      </thead>
    
      <tbody>
        {
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
        }
        <tr>
          
        </tr>
        
      </tbody>
    </Table>
   </div>
   </>
  )
}

export default VisaData