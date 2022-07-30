import React from "react";
import AppBar from "@mui/material/AppBar";
import { Button, IconButton, Toolbar } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <div className="d-flex w-100">
            <Button color="inherit" variant="text">
              <Link to="/" className="navlink">
                HR Manager
              </Link>
            </Button>
          </div>

          <div className="d-flex justify-content-end w-100">
            <IconButton color="inherit" onClick={goToHome}>
              <HomeIcon />
            </IconButton>
            <IconButton color="inherit" onClick={goToHome}>
              <AccountCircleIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
