import { Box, Button, MenuItem, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { addUser, retrieveUser, updateUser } from "../../api/apiRoutes";
import { calculateHourlyRate } from "../../utils/calculateHourlyRate";

const PersonalInfoForm = () => {
  const [hourlyRate, sethourlyRate] = useState(0);
  const [data, setData] = useState([]);

  const { userId } = useParams();

  const onAnnualRateChange = (e) => {
    sethourlyRate(calculateHourlyRate(e.target.value));
  };

  const handleChange = (key, value) => {
    setData({ ...data, ...{ [key]: value } });
  };

  const [user, setUser] = useState({});
  const { register, handleSubmit, reset } = useForm({ defaultValues: user });
  useEffect(() => {
    const getUser = async () => {
      const currUser = await retrieveUser(userId);
      if (currUser) {
        setUser(currUser);
        reset({
          ...currUser,
          hourlyRate: calculateHourlyRate(currUser.annualSalary),
        });
        console.log(currUser);
      }
    };
    if (userId) {
      getUser();
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    if (userId) {
      updateUser(data, userId);
    } else {
      addUser(data);
    }
  };

  return (
    <>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
      >
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
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
              {...register("firstName", {
                required: true,
                minLength: 1,
                maxLength: 20,
                pattern: /[A-Za-z]+/,
              })}
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
              {...register("lastName", {
                required: true,
                minLength: 1,
                maxLength: 20,
                pattern: /[A-Za-z]+/,
              })}
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
              {...register("email", {
                required: true,
                minLength: 1,
                maxLength: 50,
              })}
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
                pattern: "[A-Za-z0-9 ]+",
              }}
              {...register("userType", {
                required: true,
                minLength: 1,
                maxLength: 50,
                pattern: /[A-Za-z0-9 ]+/,
              })}
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
              {...register("dateOfBirth", {
                required: true,
              })}
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
              {...register("gender", {
                required: true,
              })}
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
              {...register("mobilePhone", {
                required: true,
                minLength: 10,
                maxLength: 10,
                pattern: /[0-9]{10}/,
              })}
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
              {...register("annualSalary", {
                required: true,
                minLength: 1,
                maxLength: 20,
                pattern: /[0-9]+.[0-9]{0,2}/,
              })}
              onChange={(e) => {
                handleChange("annulaSalary", e.target.value);
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
              {...register("hourlyRate")}
              value={hourlyRate}
            />
          </div>
          <div className="mt-4 d-flex">
            <Button
              variant="outlined"
              color="primary"
              type="submit"
              id="submitButton"
            >
              Submit
            </Button>
          </div>
        </form>
      </Box>
    </>
  );
};

export default PersonalInfoForm;
