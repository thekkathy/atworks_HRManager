import { Button, Container, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Container>
        <div className="row">
          <div className="col m-4">
            <Button variant="outlined" color="primary" onClick={handleClick}>
              Human Resources
            </Button>
            <Menu
              id="hrmenu"
              open={open}
              onClose={handleClose}
              anchorEl={anchorEl}
            >
              <MenuItem>Benefits</MenuItem>
              <MenuItem>Recruit to Hire</MenuItem>
              <MenuItem>
                <Link to="/resource">Resource Management</Link>
              </MenuItem>
              <MenuItem>Offer Letter</MenuItem>
            </Menu>
          </div>
          <div className="col m-4">
            <Button variant="outlined" color="primary">
              Time and Expense
            </Button>
          </div>
          <div className="col m-4">
            <Button variant="outlined" color="primary">
              System Admin
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
