import * as React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./Header.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import tra from "../Images/tra.png";
import { useDispatch, useSelector, useReducer } from "react-redux";
import { logoutAction } from "../Redux/Auth/logIn/actionLogin";

const Header = () => {
  const reducerState = useSelector((state) => state);
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
  return (
    <div className="header">
      <a href="/">
        <img src={tra} style={{ width: "70px", height: "70px" }} />
      </a>
      <div className="travvolt">
        <h1 className="heading">SKY TRAILS  </h1>
      </div>
      <div className="welcome">
        <p>Contect Your Representative</p>
        <p className="welPrice">
          Cash Balance: ₹ {reducerState?.logIn?.loginData?.data?.data?.balance}
        </p>
        <p>Recharge</p>

        <div style={{ marginBottom: "15px" }}>
          <Box>
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
            margin: "auto",
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
            <MenuItem onClick={handleSubmit}>{reducerState?.logIn?.loginData?.data?.data?"Logout":"Login"}</MenuItem>
            <MenuItem onClick={editPackage}>My Package</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;
