import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const Address = ({ handleStep1OnChange }) => {
  return (
    <>
      <h1 htmlFor="propertyName" className="text-xl">
        Where is your property located?
      </h1>
      <div className="row my-4">
        <div className="col-md-6">
          <label htmlFor="propertyName" className="text-sm">
            Street address
          </label>
          <input
            type="text"
            name="street"
            onChange={(e) => handleStep1OnChange(e)}
            id=""
            className="form-control my-2"
            placeholder="e.g. 123 Easy Street"
          />
          <label htmlFor="propertyName" className="text-sm ">
            Address line 2
          </label>
          <input
            type="text"
            name="addressLine2"
            onChange={(e) => handleStep1OnChange(e)}
            id=""
            className="form-control my-2"
            placeholder="e.g. 123 Easy Street"
          />

          <label htmlFor="propertyName" className="text-sm ">
            Country/region
          </label>
          <FormControl fullWidth className="bg-gray-100">
            <Select
              id="demo-simple-select"
              label="Star"
              name="country"
              onChange={(e) => handleStep1OnChange(e)}
              value={"N/A"}
              // onChange={handleChange}
            >
              <MenuItem defaultValue={"N/A"}>N/A</MenuItem>
              <MenuItem value={"N/A"}>N/A</MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>

          <label htmlFor="propertyName" className="text-sm ">
            City
          </label>
          <input
            type="text"
            name="city"
            onChange={(e) => handleStep1OnChange(e)}
            id=""
            className="form-control my-2"
            placeholder="e.g. 123 Easy Street"
          />

          <label htmlFor="propertyName" className="text-sm ">
            Post Code
          </label>
          <input
            type="text"
            name="postCode"
            onChange={(e) => handleStep1OnChange(e)}
            id=""
            className="form-control my-2"
            placeholder="e.g. 123 Easy Street"
          />
        </div>
      </div>
    </>
  );
};

export default Address;
