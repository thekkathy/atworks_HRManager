import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { resourcePageCardHeight } from "../styles/mdsStyles/mdsStyles";

const Filter = () => {
  return (
    <>
      <div className="row py-3">
        <div className="my-2 mx-0 px-0">
          <TextField id="filter-name" label="Name" variant="standard" />
        </div>
        <div className="my-2 px-0">
          <TextField
            id="filter-user-type"
            label="User Type"
            variant="standard"
          />
        </div>
      </div>
      <div className="row py-4 w-100 h-100">
        <Button variant="outlined" color="primary" sx={{ maxWidth: "50%" }}>
          Search
        </Button>
      </div>
    </>
  );
};

export default Filter;
