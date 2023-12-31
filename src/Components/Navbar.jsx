import React from 'react';
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';

import { useState, useEffect } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./Header.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { Box, Button, Typography, Paper, makeStyles } from "@mui/material";
import { useNavigate } from "react-router-dom";
import STLOGO from "../Images/ST-Main-Logo.png";
import { useDispatch, useSelector, useReducer } from "react-redux";
import { logoutAction } from "../Redux/Auth/logIn/actionLogin";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import axios from "axios";
import InnerNavbar from '../Layout/InnerNavbar';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function Navbar() {
  const [showNavExternal, setShowNavExternal] = useState(false);
  const [scrollYvalue, setScrollYValue] = useState(0);
  const reducerState = useSelector((state) => state);
  const [openModal, setOpenModal] = React.useState(false);
  const [amount, setAmount] = React.useState("");
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const openLoginpage = () => {
    navigate("/Registration");
  };

  const openRegistration = () => {
    navigate("/Login");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSubmit = () => {
    dispatch(logoutAction());
    window.location.reload();
  };
  // Edit package
  const editPackage = () => {
    navigate("/EditHolidayPackage");
  };
  useEffect(() => {
    const updateSrollYPosition = () => {
      setScrollYValue(window.scrollY);
    };
    window.addEventListener("scroll", updateSrollYPosition);

    return () => window.removeEventListener("scroll", updateSrollYPosition);
  });

  const handleRazorpay = (data) => {
    console.log("handleRazorpay called");
    const options = {
      key: "rzp_test_rSxJ8wZCLzTJck",
      amount: amount * 100,
      currency: "INR",
      name: "The SkyTrails",
      description: "Test Transaction",
      image: STLOGO,
      order_id: data.id,
      handler: function (response) {
        console.log(response);
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  const handlePayment = (e) => {
    e.preventDefault();
    const data = { amount: amount };
    axios
      .post("http://localhost:8000/travvolt/wallet/rechargeWallet", data)
      .then((res) => {
        console.log(res.data);
        handleRazorpay(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    alert(amount);
    setAmount("");
    handleCloseModal();
  };
  const [show, setshow] = useState(false)
  const handleShow =()=>{
    setShowNavExternal(!showNavExternal)
    setshow(true)
  }

  return (
    <>
       <MDBNavbar className='header' style={{backgroundColor:'white'}}>
        <MDBContainer fluid  >
          <div style={{display:'flex',columnGap:'-10px',width:'100%',marginTop:'-20px'}}>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarToggleExternalContent'
            aria-controls='navbarToggleExternalContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={handleShow}
            className='icon'
          >
            <MDBIcon  icon='bars' fas />
            </MDBNavbarToggler>
            <div className={scrollYvalue > 45 ? "header_scroll" : "header"} >
    
    <div >
      <a href="/">
        <img
          src={STLOGO}
          style={{ width: "90%", height: "70px" }}
          className="mt-2 ms-2"
          alt="logo"
        />
      </a>
    </div>
  
    <div className="welcome">
      <p>Contect Your Representative</p>
      <p className="welPrice">
        Cash Balance: ₹ {reducerState?.logIn?.loginData?.data?.data?.balance}
      </p>
      <button style={{borderRadius:'20px',height:'40px',width:'120px'}} onClick={handleOpenModal}>Recharge</button>
  
      <div style={{ marginBottom: "25px", height: "60px" }}>
        <Box marginTop={3}>
          <Typography
            sx={{
              color: "#2525250",
              fontSize: "15px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Welcome{" "}
          </Typography>
          <Typography
            sx={{
              color: "#0052D0",
              fontSize: "22px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {reducerState?.logIn?.loginData?.data?.data?.username}
          </Typography>
        </Box>
      </div>
  
      <div
        style={{
          marginLeft: "-25px",
        }}
      >
        <ArrowDropDownIcon
          onClick={handleClick}
          id="menu"
          aria-controls={open ? "menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          cursor="pointer"
        />
        <Menu
          id="menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleSubmit}>
            {reducerState?.logIn?.loginData?.data?.data ? "Logout" : "Login"}
          </MenuItem>
          <MenuItem onClick={editPackage}>My Package</MenuItem>
        </Menu>
      </div>
    </div>
  
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "-1rem",
          }}
        >
          <Typography
            variant="h6"
            component="h2"
            style={{
              cursor: "pointer",
              textDecoration: "none", // Remove underline by default
              transition: "text-decoration 0.3s ease", // Smooth transition
            }}
          >
            Enter Payment Detail
          </Typography>
  
          <CloseIcon
            onClick={handleCloseModal}
            style={{ cursor: "pointer" }}
          />
        </Typography>
  
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
  
          <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
            <form onSubmit={handlePayment}>
  
              <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <FormLabel>Name</FormLabel>
                <OutlinedInput
                  type="text"
                  value={reducerState?.logIn?.loginData?.data?.data?.username || ''}
                  readOnly
                  sx={{ width: '100%' }}
                />
              </FormControl>
  
  
              <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <FormLabel>Email address</FormLabel>
                <OutlinedInput
                  type="email"
                  value={reducerState?.logIn?.loginData?.data?.data?.email || ''}
                  readOnly
                  placeholder="Enter your email"
                  sx={{ width: '100%' }}
                />
              </FormControl>
  
              <FormControl fullWidth sx={{ marginBottom: 6 }}>
                <FormLabel>Amount</FormLabel>
                <OutlinedInput
  
                  startAdornment={<InputAdornment position="start">₹</InputAdornment>}
  
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  sx={{ width: '100%' }}
                />
              </FormControl>
  
              <Box display="flex" justifyContent="space-between">
                <Button variant="contained" type="submit" sx={{ margin: 0.10 }}>
                  Recharge Wallet
                </Button>
                <Button variant="contained"
  
                  onClick={handleCloseModal}
                  sx={{ margin: 0.5, backgroundColor: 'red', margin: 0.10 }}>
                  Cancel
                </Button>
  
              </Box>
            </form>
          </Paper>
  
        </Typography>
      </Box>
    </Modal>
           </div>
           </div>
   
        </MDBContainer>
      </MDBNavbar> 

     
        
<MDBCollapse show={showNavExternal} style={{ height: '80px' }} className={`innernavbar ${showNavExternal ? 'showCard' : ''}`}>
  {/* Your component content */}



      <InnerNavbar 
      
      />
      </MDBCollapse>
    </>
  );
}