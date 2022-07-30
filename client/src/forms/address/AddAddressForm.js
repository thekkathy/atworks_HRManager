import { Box, TextField, Button, MenuItem, Typography } from "@mui/material";
import React from "react";

const AddAddressForm = ({ handleClose }) => {
  const [addressType, setaddressType] = React.useState("");

  const handleAddrTypeChange = (event) => {
    setaddressType(event.target.value);
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
                required
                id="addrName"
                label="Address Name"
                placeholder="Address Name"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                required
                id="addrType"
                label="Address Type"
                placeholder="Address Type"
                select
                value={addressType}
                onChange={handleAddrTypeChange}
                InputLabelProps={{
                  shrink: true,
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
                required
                id="addrLn1"
                label="Address 1"
                placeholder="Address 1"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="addrLn2"
                label="Address 2"
                placeholder="Address 2"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="city"
                label="City"
                placeholder="City"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                required
                id="state"
                label="State"
                placeholder="State"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                required
                id="country"
                label="Country"
                placeholder="Country"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className="mt-4 d-flex">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={() => handleClose()}
              >
                Submit
              </Button>
              <div className="mx-2">
                <Button
                  variant="outlined"
                  color="info"
                  type="submit"
                  onClick={() => handleClose()}
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

export default AddAddressForm;
