import * as React from "react";
import { useState, useEffect } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./Header.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import STLOGO from "../Images/ST-Main-Logo.png";
import { useDispatch, useSelector, useReducer } from "react-redux";
import { logoutAction } from "../Redux/Auth/logIn/actionLogin";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
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
const Header = () => {
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
  return (
    <div className={scrollYvalue > 45 ? "header_scroll" : "header"}>
      <div>
        <a href="/">
          <img
            src={STLOGO}
            style={{ width: "200px", height: "70px" }}
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
        <button onClick={handleOpenModal}>Recharge</button>

        <div style={{ marginBottom: "15px" }}>
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
            <span>Enter Payment Detail</span>
            <CloseIcon
              onClick={handleCloseModal}
              style={{ cursor: "pointer" }}
            />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form onSubmit={handlePayment}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  value={reducerState?.logIn?.loginData?.data?.data?.username}
                  readOnly
                />
              </FormControl>

              <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={reducerState?.logIn?.loginData?.data?.data?.email}
                  readOnly
                />
              </FormControl>

              <FormControl>
                <FormLabel>Amout</FormLabel>
                <Input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </FormControl>

              <Button variant="contained" type="submit">
                Recharge Wallet
              </Button>
              <Button
                style={{ background: "red" }}
                variant="contained"
                onClick={handleCloseModal}
              >
                Cancel
              </Button>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Header;
