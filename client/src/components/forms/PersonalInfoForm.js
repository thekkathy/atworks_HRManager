import { Box, Button, MenuItem, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { calculateHourlyRate } from "../../utils/calculateHourlyRate";

const PersonalInfoForm = () => {
  const [hourlyRate, sethourlyRate] = useState(0);
  const [data, setData] = useState([]);

  const { userId } = useParams();

  const { CurrentUser } = useContext(CurrentUserContext);

  const onAnnualRateChange = (e) => {
    sethourlyRate(calculateHourlyRate(e.target.value));
  };

  const handleChange = (key, value) => {
    setData({ ...data, ...{ [key]: value } });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(data);
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
                  minLength: 1,
                  maxLength: 20,
                  pattern: "[A-Za-z]+",
                }}
                defaultValue={userId ? CurrentUser[0]?.firstName : null}
                onChange={(e) => {
                  handleChange("firstName", e.target.value);
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
                  minLength: 1,
                  maxLength: 20,
                  pattern: "[A-Za-z]+",
                }}
                defaultValue={userId ? CurrentUser[0]?.lastName : null}
                onChange={(e) => {
                  handleChange("lastName", e.target.value);
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
                inputProps={{ maxLength: 50 }}
                defaultValue={userId ? CurrentUser[0]?.email : null}
                onChange={(e) => {
                  handleChange("email", e.target.value);
                }}
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
                  minLength: 1,
                  maxLength: 50,
                  pattern: "[A-Za-z0-9]+",
                }}
                defaultValue={userId ? CurrentUser[0]?.userType : null}
                onChange={(e) => {
                  handleChange("userType", e.target.value);
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
                onChange={(e) => {
                  handleChange("dob", e.target.value);
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
                defaultValue={userId ? CurrentUser[0]?.gender : null}
                onChange={(e) => {
                  handleChange("gender", e.target.value);
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
                helperText={"Please enter exactly 10 numbers"}
                label="Mobile"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  minLength: 10,
                  maxLength: 10,
                  pattern: "[0-9]{10}",
                }}
                defaultValue={userId ? CurrentUser[0]?.mobilePhone : null}
                onChange={(e) => {
                  handleChange("mobile", e.target.value);
                }}
              />
              <TextField
                required
                helperText={"Please enter salary up to two decimal points"}
                id="salary"
                label="Annual Salary"
                InputLabelProps={{
                  shrink: true,
                }}
                type="number"
                inputProps={{
                  minLength: 1,
                  maxLength: 20,
                  pattern: "[0-9]+.[0-9]{0,2}",
                  step: "0.01",
                }}
                defaultValue={userId ? CurrentUser[0]?.annualSalary : null}
                onChange={(e) => {
                  handleChange("salary", e.target.value);
                  onAnnualRateChange(e);
                }}
              />
              <TextField
                id="hourlyRate"
                label="Hourly Rate"
                placeholder="Hourly Rate"
                InputProps={{
                  readOnly: true,
                }}
                defaultValue={userId ? calculateHourlyRate(CurrentUser[0]?.annualSalary) : 0}
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
