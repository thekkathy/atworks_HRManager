import { Box, TextField, Button, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { addUserAddress } from "../../api/apiRoutes";

const AddressForm = ({ handleClose, addMode = true }) => {
  const [addressType, setaddressType] = React.useState("");
  const [data, setData] = useState([]);

  const { userId } = useParams();

  const handleAddrTypeChange = (event) => {
    setaddressType(event.target.value);
  };

  const { register, handleSubmit } = useForm();

  const handleChange = (key, value) => {
    setData({ ...data, ...{ [key]: value } });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(data);
    addUserAddress(userId, data);
    handleClose();
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
          <form>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ marginBottom: "0.5rem" }}
            >
              Add Address
            </Typography>
            <div className="row">
              <TextField
                fullWidth
                required
                helperText={"Headquarters, warehouse, etc..."}
                id="addrName"
                label="Address Name"
                placeholder="Address Name"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  minlength: 1,
                  maxlength: 200,
                  pattern: "[A-Za-z0-9 ]+",
                }}
                {...register("addrName", {
                  required: true,
                  minLength: 1,
                  maxLength: 20,
                  pattern: /[A-Za-z0-9 ]+/,
                })}
                onChange={(e) => {
                  handleChange("addrName", e.target.value);
                }}
              />
              <TextField
                fullWidth
                required
                id="addrType"
                label="Address Type"
                placeholder="Address Type"
                select
                value={addressType}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => {
                  handleChange("addrType", e.target.value);
                  handleAddrTypeChange(e);
                }}
              >
                <MenuItem key={"BILLING"} value={"BILLING"}>
                  {"BILLING"}
                </MenuItem>
                <MenuItem key={"SHIPPING"} value={"SHIPPING"}>
                  {"SHIPPING"}
                </MenuItem>
                <MenuItem key={"MAIN"} value={"MAIN"}>
                  {"MAIN"}
                </MenuItem>
              </TextField>
              <TextField
                fullWidth
                required
                id="addrLn1"
                label="Address 1"
                placeholder="Address 1"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  minlength: 3,
                  maxlength: 200,
                  pattern: "[A-Za-z0-9 ]+",
                }}
                onChange={(e) => {
                  handleChange("addrLn1", e.target.value);
                }}
                {...register("addrLn1", {
                  required: true,
                  minLength: 3,
                  maxLength: 200,
                  pattern: /[A-Za-z0-9 ]+/,
                })}
              />
              <TextField
                fullWidth
                id="addrLn2"
                label="Address 2"
                placeholder="Address 2"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  maxlength: 200,
                  pattern: "[A-Za-z0-9 ]+",
                }}
                onChange={(e) => {
                  handleChange("addrLn2", e.target.value);
                }}
                {...register("addrLn1", {
                  maxLength: 200,
                  pattern: /[A-Za-z0-9 ]+/,
                })}
              />
              <TextField
                required
                fullWidth
                id="city"
                label="City"
                placeholder="City"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  minlength: 1,
                  maxlength: 100,
                  pattern: "[A-Za-z ]+",
                }}
                {...register("city", {
                  required: true,
                  minLength: 1,
                  maxLength: 100,
                  pattern: /[A-Za-z ]+/,
                })}
                onChange={(e) => {
                  handleChange("city", e.target.value);
                }}
              />
              <TextField
                fullWidth
                required
                id="state"
                label="State"
                placeholder="State"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  minlength: 1,
                  maxlength: 50,
                  pattern: "[A-Za-z ]+",
                }}
                {...register("state", {
                  required: true,
                  minLength: 1,
                  maxLength: 50,
                  pattern: /[A-Za-z ]+/,
                })}
                onChange={(e) => {
                  handleChange("state", e.target.value);
                }}
              />
              <TextField
                fullWidth
                required
                id="country"
                label="Country"
                placeholder="Country"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  minlength: 1,
                  maxlength: 200,
                  pattern: "[A-Za-z ]+",
                }}
                {...register("country", {
                  required: true,
                  minLength: 1,
                  maxLength: 200,
                  pattern: /[A-Za-z ]+/,
                })}
                onChange={(e) => {
                  handleChange("country", e.target.value);
                }}
              />
            </div>
            <div className="mt-4 d-flex">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={() => handleSubmit(onSubmit)}
              >
                Submit
              </Button>
              <div className="mx-2">
                <Button
                  variant="outlined"
                  color="info"
                  type="submit"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </form>
        </Box>
      </div>
    </>
  );
};

export default AddressForm;
