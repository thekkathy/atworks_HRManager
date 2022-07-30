import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { mockGetAddress } from "../api/mockGetAddress";
import AddressTable from "../components/AddressTable";
import TabPanel from "../components/TabPanel";
import AddPersonalInfo from "../forms/personalInfo/AddPersonalInfo";
import "../styles/UserTabBar.css";

const UserTabBar = ({ addUser }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const addresses = mockGetAddress;
  return (
    <div>
      <div className="row">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Personal Info" />
            <Tab label="Address Manager" />
            <Tab label="Payment" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {addUser ? <AddPersonalInfo /> : "EditUser"}
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AddressTable rowData={addresses} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          Payment
        </TabPanel>
      </div>
      <div className="row">
        <div className="p-4 back-to-summary">
          <Button variant="contained" color="info" type="submit">
            <Link to="/resource">Back to Summary</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserTabBar;
