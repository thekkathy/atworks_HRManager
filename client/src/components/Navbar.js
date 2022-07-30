import React from "react";
import AppBar from "@mui/material/AppBar";
import { Button, IconButton, makeStyles, Toolbar } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate("/");
    }
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" className="navlink">
            <Button color="inherit">HR Manager</Button>
          </Link>
          <IconButton color="inherit" onClick={goToHome}>
            <HomeIcon />
          </IconButton>
          <IconButton color="inherit" onClick={goToHome}>
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
