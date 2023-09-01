import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import EditIcon from "@mui/icons-material/Edit";
import GradingIcon from "@mui/icons-material/Grading";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import ResponsiveAppBar from "./Topbar";

import Tables from "./Table/Table";
import MarkUpAmount from "./Table/MarkUpAmount";
import PackageDetails from "./Table/packageUpdate/PackageDetails";
import EditHolidayPackage from "./Table/packageUpdate/EditPackage";
import { useLocation } from "react-router-dom";
import ForexData from "./Table/Forex/ForexData";
import VisaData from "./Table/VisaData/VisaData";
import AdminWelcome from "./Table/AdminWelcome";

import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const location = useLocation();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const editHolidayPackage =
    location.pathname === "/admin/dashboard/EditHolidayPackage";
  const { collapseSidebar } = useProSidebar();
  const [selectedTab, setSelectedTab] = useState("AdminWelcome");

  const handleTabChange = (tabName) => {
    setSelectedTab(tabName);
  };
  return (
    <>
      <div className="wrapper" style={{ width: "100%" }}>
        <ResponsiveAppBar />

        <Box
          sx={{
            position: "fixed",
            left: 0,
            top: -18,
            flexGrow: 1,
            display: "flex",
            width: "15%",
            height: "100%",
            marginTop: "120px",
            zIndex: "1000",
          }}
        >
          {/* <Tabs
            style={{
              background: "DarkBlue",
              borderRight: "2px solid darkblue",
            }}
            orientation="vertical"
            variant="scrollable"
            TabIndicatorProps={{
              sx: {
                backgroundColor: "white",
                height: "1px",
              },
            }}
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ color: "warning.main", zIndex: "10" }}
          >
             <Tab
             sx={{
              display: "flex",
              color: "white",
              backgroundColor: value === 0 ? "lightblue" : "initial",
            }}
              label="Admin Panel"
              icon={
                <AdminPanelSettingsIcon
                  style={{ position: "absolute", top: "21px", left: "8px" }}
                />
              }
              {...a11yProps(0)}
            />
            <Tab
              sx={{
                display: "flex",
                color: "white",
                backgroundColor: value === 1 ? "lightblue" : "initial",
              }}
              label="User Table"
              icon={
                <StackedBarChartIcon
                  style={{ position: "absolute", top: "21px", left: "8px" }}
                />
              }
              {...a11yProps(1)}
            />
           
            <Tab
              sx={{
                display: "flex",
                color: "white",
                backgroundColor: value === 2 ? "lightblue" : "initial",
              }}
              label="User MarkUp Amount"
              icon={
                <GradingIcon
                  style={{ position: "absolute", top: "21px", left: "0" }}
                />
              }
              {...a11yProps(2)}
            />
            <Tab
              sx={{
                display: "flex",
                color: "white",
                backgroundColor: value === 3 ? "lightblue" : "initial",
              }}
              label="Edit Holiday Package"
              icon={
                <EditIcon
                  style={{ position: "absolute", top: "21px", left: "0" }}
                />
              }
              {...a11yProps(3)}
            />
            <Tab
              sx={{
                display: "flex",
                color: "white",
                backgroundColor: value === 4 ? "lightblue" : "initial",
              }}
              label="Forex"
              icon={
                <CurrencyExchangeIcon
                  style={{ position: "absolute", top: "21px", left: "8px" }}
                />
              }
              {...a11yProps(4)}
            />
            <Tab
              sx={{
                display: "flex",
                color: "white",
                backgroundColor: value === 5 ? "lightblue" : "initial",
              }}
              label="Visa Request"
              icon={
                <RequestQuoteIcon
                  style={{ position: "absolute", top: "21px", left: "8px" }}
                />
              }
              {...a11yProps(5)}
            />
          </Tabs> */}
          <Sidebar style={{ height: "100vh", background: "#005778" }}>
            <Menu>
              <MenuItem
                icon={<MenuOutlinedIcon />}
                onClick={() => {
                  collapseSidebar();
                }}
                style={{ textAlign: "center" }}
              >
                <h2>Admin</h2>
              </MenuItem>
              <MenuItem
                icon={<HomeOutlinedIcon />}
                onClick={() => handleTabChange("AdminWelcome")}
              >
                Home
              </MenuItem>
              <MenuItem
                icon={<PeopleOutlinedIcon />}
                onClick={() => handleTabChange("User Table")}
              >
                User Table
              </MenuItem>
              <MenuItem
                icon={<ContactsOutlinedIcon />}
                onClick={() => handleTabChange("User MarkUp Amount")}
              >
                User MarkUp Amount
              </MenuItem>
              <MenuItem
                icon={<ReceiptOutlinedIcon />}
                onClick={() => handleTabChange("Edit Holiday Package")}
              >
                Edit Holiday Package
              </MenuItem>
              <MenuItem
                icon={<HelpOutlineOutlinedIcon />}
                onClick={() => handleTabChange("Forex")}
              >
                Forex
              </MenuItem>
              <MenuItem
                icon={<CalendarTodayOutlinedIcon />}
                onClick={() => handleTabChange("Visa Request")}
              >
                Visa Request
              </MenuItem>
            </Menu>
          </Sidebar>

          {/* <TabPanel value={value} index={4}>
            Item Five
          </TabPanel> 
          <TabPanel value={value} index={5}>
            Item Six
          </TabPanel>*/}
          {/* <TabPanel value={value} index={6}>
            Item Seven
          </TabPanel> */}
        </Box>
        {/* <TabPanel value={value} index={0}>
          <AdminWelcome />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Tables />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <MarkUpAmount />
        </TabPanel>
        <TabPanel value={value} index={3}>
          {editHolidayPackage ?  <EditHolidayPackage />  : <PackageDetails /> } 
          </TabPanel>
          <TabPanel value={value} index={4}>
          <ForexData />
        </TabPanel>

        <TabPanel value={value} index={5}>
          <VisaData />
        </TabPanel> */}
        <div>
          {selectedTab === "AdminWelcome" && <AdminWelcome />}
          {selectedTab === "User Table" && <Tables />}
          {selectedTab === "User MarkUp Amount" && <MarkUpAmount />}
          {selectedTab === "Edit Holiday Package" && <PackageDetails />}
          {selectedTab === "Forex" && <ForexData />}
          {selectedTab === "Visa Request" && <VisaData />}
        </div>
      </div>
    </>
  );
}
