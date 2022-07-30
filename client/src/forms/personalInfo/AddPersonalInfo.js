import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { calculateHourlyRate } from "../../utils/calculateHourlyRate";

const AddPersonalInfo = () => {
    const [hourlyRate, sethourlyRate] = useState(0);
    const onAnnualRateChange = (e) => {
        e.preventDefault();
        sethourlyRate(calculateHourlyRate(e.target.value));
    } 
  return (
    <>
      <div>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
        >
          <form>
            <div className="row">
              <TextField
                required
                id="first"
                label="First Name"
                placeholder="First Name"
                InputLabelProps={{
                    shrink: true,
                  }}
              />
              <TextField
                required
                id="last"
                label="Last Name"
                placeholder="Last Name"
                InputLabelProps={{
                    shrink: true,
                  }}
              />
              <TextField
                required
                id="email"
                label="Email"
                type="email"
                placeholder="Email"
                InputLabelProps={{
                    shrink: true,
                  }}
              />
              <TextField
                required
                id="usertype"
                label="User Type"
                placeholder="User Type"
                InputLabelProps={{
                    shrink: true,
                  }}
              />
              <TextField
                required
                id="dob"
                label="Date of Birth"
                type="date"
                InputLabelProps={{
                    shrink: true,
                  }}
              />
              <TextField
                required
                id="gender"
                label="Gender"
                placeholder="Gender"
                InputLabelProps={{
                    shrink: true,
                  }}
              />

              <TextField
                required
                id="mobile"
                label="Mobile"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                required
                id="salary"
                label="Annual Salary"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={onAnnualRateChange}
              />
              <TextField
                id="hourlyRate"
                label="Hourly Rate"
                placeholder="Hourly Rate"
                InputProps={{
                  readOnly: true,
                }}
                defaultValue={0}
                value={hourlyRate}
              />
            </div>
            <div className="mt-4 d-flex">
              <Button variant="outlined" color="primary" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </Box>
      </div>
    </>
  );
};

export default AddPersonalInfo;
