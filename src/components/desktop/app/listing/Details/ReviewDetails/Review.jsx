import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import ReviewModa from "./ReviewModa";

const Review = () => {
  return (
    <div className="m-3">
      <div className="d-flex justify-content-between align-items-center border-b pb-3 border-gray-400">
        <h1 className="text-3xl font-bold">Categories</h1>

        <div className="d-flex  align-items-center">
          <h1 className="mx-2">Sort Review By</h1>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Filter</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              sx={{ width: "200px" }}
              // value={"Lowest Scores"}
              // defaultValue={"Lowest Scores"}
              label="Age"
              // onChange={handleChange}
            >
              <MenuItem value={"Most Relevent"}>Most Relevent</MenuItem>
              <MenuItem value={"Newest First"}>Newest First</MenuItem>
              <MenuItem value={"Oldest First"}>Oldest First</MenuItem>
              <MenuItem value={"Highest Scores"}>Highest Scores</MenuItem>
              <MenuItem value={"Lowest Scores"}>Lowest Scores</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <Box>
        <ReviewModa />
      </Box>
    </div>
  );
};

export default Review;
