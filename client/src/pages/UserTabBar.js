import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { mockGetAddress } from "../api/mockGetAddress";
import AddressTable from "../components/tables/AddressTable";
import TabPanel from "../components/TabPanel";
import PersonalInfoForm from "../components/forms/PersonalInfoForm";
import "../styles/UserTabBar.css";

const UserTabBar = ({ addMode }) => {
  const [value, setValue] = React.useState(0);

  const { userId } = useParams();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const addresses = mockGetAddress;
  return (
    <div>
      <div className="row">
        <div className="d-flex w-100 mb-4">
          <div className="d-flex w-100 align-items-center">
            {addMode ? (
              <Typography variant="h5" component="h1">
                Add User
              </Typography>
            ) : (
              <Typography variant="h5" component="h1">
                Edit User {userId}
              </Typography>
            )}
          </div>
          <div className="d-flex w-100 justify-content-end back-to-summary">
            <Button variant="contained" color="info" type="submit">
              <Link to="/resource">Back to Summary</Link>
            </Button>
          </div>
        </div>
      </div>
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
          <PersonalInfoForm addMode={addMode} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AddressTable rowData={addresses} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          Payment
        </TabPanel>
      </div>
    </div>
  );
};

export default UserTabBar;
