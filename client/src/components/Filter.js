import { Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { FiltersContext } from "../context/FiltersContext";
import { UsersContext } from "../context/UsersContext";

const Filter = () => {
  const [data, setData] = useState({ filterName: "", filterUserType: "" });
  const {updateFilters} = useContext(FiltersContext);

  const handleChange = (key, value) => {
    setData({ ...data, ...{ [key]: value } });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updateFilters([data]);
  };

  return (
    <>
      <div className="row py-3">
        <form onSubmit={onSubmit}>
          <div className="my-2 mx-0 px-0">
            <TextField
              id="filterName"
              label="Name"
              variant="standard"
              required
              inputProps={{
                minLength: 1,
                maxLength: 200,
                pattern: "[A-Za-z ]+",
              }}
              onChange={(e) => {
                handleChange("filterName", e.target.value);
              }}
            />
          </div>
          <div className="my-2 px-0">
            <TextField
              id="filterUserType"
              label="User Type"
              variant="standard"
              required
              inputProps={{
                minLength: 1,
                maxLength: 50,
                pattern: "[A-Za-z ]+",
              }}
              onChange={(e) => {
                handleChange("filterUserType", e.target.value);
              }}
            />
          </div>
          <div className="py-4 w-100 h-100">
            <Button
              variant="outlined"
              color="primary"
              sx={{ maxWidth: "50%" }}
              type="submit"
            >
              Search
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Filter;
