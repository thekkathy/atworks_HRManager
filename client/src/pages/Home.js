import { Button, Container, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [openHrMenu, setopenHrMenu] = useState(false);
  const handleClick = (event) => {
    setopenHrMenu(event.currentTarget);
  };
  const handleClose = () => {
    setopenHrMenu(null);
  };
  return (
    <>
      <Container>
        <div className="row">
          <div className="col m-4">
            <Button variant="outlined" color="primary" onClick={handleClick}>
              Human Resources
            </Button>
            {openHrMenu ? (
              <Menu
                id="hrmenu"
                open={openHrMenu}
                onClose={handleClose}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem>Benefits</MenuItem>
                <MenuItem>Recruit to Hire</MenuItem>
                <MenuItem>
                  <Link to="/resource">Resource Management</Link>
                </MenuItem>
                <MenuItem>Offer Letter</MenuItem>
              </Menu>
            ) : null}
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
