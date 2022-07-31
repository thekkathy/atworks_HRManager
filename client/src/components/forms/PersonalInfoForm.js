import { Box, Button, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import { calculateHourlyRate } from "../../utils/calculateHourlyRate";

const PersonalInfoForm = ({ addMode = true }) => {
  const [hourlyRate, sethourlyRate] = useState(0);

  const onAnnualRateChange = (e) => {
    e.preventDefault();
    sethourlyRate(calculateHourlyRate(e.target.value));
  };



  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
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
          <form onSubmit={onSubmit}>
            <div className="row">
              <TextField
                required
                id="first"
                label="First Name"
                placeholder="First Name"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  minlength: 1,
                  maxlength: 20,
                  pattern: "[A-Za-z]+",
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
                inputProps={{
                  minlength: 1,
                  maxlength: 20,
                  pattern: "[A-Za-z]+",
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
                inputProps={{ maxlength: 50 }}
              />
              <TextField
                required
                select
                id="userType"
                label="User Type"
                placeholder="User Type"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  minlength: 1,
                  maxlength: 50,
                  pattern: "[A-Za-z0-9]+",
                }}
              >
                <MenuItem key={"CONSULTANT"} value={"CONSULTANT"}>
                  {"CONSULTANT"}
                </MenuItem>
                <MenuItem key={"EMPLOYEE"} value={"EMPLOYEE"}>
                  {"EMPLOYEE"}
                </MenuItem>
              </TextField>
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
                select
                InputLabelProps={{
                  shrink: true,
                }}
              >
                <MenuItem key={"FEMALE"} value={"FEMALE"}>
                  {"FEMALE"}
                </MenuItem>
                <MenuItem key={"MALE"} value={"MALE"}>
                  {"MALE"}
                </MenuItem>
                <MenuItem key={"OTHER"} value={"OTHER"}>
                  {"OTHER"}
                </MenuItem>
              </TextField>
              <TextField
                required
                id="mobile"
                helperText={"Please enter exactly 7 numbers"}
                label="Mobile"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{ minlength: 7, maxlength: 7, pattern: "[0-9]{7}" }}
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
                inputProps={{ minlength: 1, maxlength: 20, pattern: "[0-9]+" }}
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

export default PersonalInfoForm;
