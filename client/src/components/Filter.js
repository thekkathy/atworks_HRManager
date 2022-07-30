import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Filter = () => {
  return (
    <>
      <Card>
        <CardContent>
          <div className="row m-2">
            <Typography variant="h6" component="div">
              Filter
            </Typography>
          </div>
          <div className="row">
            <div className="col m-3">
              <TextField id="filter-name" label="Name" variant="standard" />
            </div>
            <div className="col m-3">
              <TextField
                id="filter-user-type"
                label="User Type"
                variant="standard"
              />
            </div>
          </div>
          <div className="row p-4">
            <Button variant="outlined" color="primary" sx={{maxWidth: "25%"}}>
              Search
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Filter;
