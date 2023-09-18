import React from 'react'
import { Button, Box, Grid, Typography, Link } from "@mui/material";
import ServicesFilter from './servicefilter/ServicesFilter';
import ServicesTotalData from './servicefilter/ServicesTotalData';


const Services = () => {
  return (
    <div className="serviceContainer" style={{marginBottom:'20px',backgroundColor:'white', borderRadius:'20px',paddingLeft:'10px'}}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <ServicesFilter />
          </Grid>
          <Grid item xs={9}>
            <ServicesTotalData />
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Services
