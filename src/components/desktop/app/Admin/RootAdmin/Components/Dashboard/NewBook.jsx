import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const NewBook = () => {
  return (
    <div className=" text-dark shadow-md border-2 custom_red_color border-gray-300 rounded-4 p-3">
      <div className="d-flex justify-content-between align-items-center text-light">
        <div>
          <h1 className="text-xl font-bold">New Book</h1>
          <p className="text-md">Displays weekly</p>
        </div>
        <div>
          <FormControl
            className=" rounded-2 bg-light"
            style={{ width: "100px" }}
          >
            <InputLabel id="demo-simple-select-label">Date</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Age"
              // onChange={handleChange}
            >
              <MenuItem value={10}>3 weeks</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="mt-3 ">
        <table className="table ">
          <thead className="bg-gray-800 text-light">
            <tr>
              <th scope="col" className="">
                {" "}
                ID
              </th>
              <th scope="col" className="">
                Name
              </th>
              <th scope="col" className="">
                Date
              </th>
              <th scope="col" className="">
                Room
              </th>
            </tr>
          </thead>
          <tbody className="text-light">
            <tr>
              <th scope="row" className="">
                1
              </th>
              <td className=" ">Mark</td>
              <td className="">Otto</td>
              <td className="">@mdo</td>
            </tr>
            <tr>
              <th scope="row" className="">
                1
              </th>
              <td className=" ">Mark</td>
              <td className="">Otto</td>
              <td className="">@mdo</td>
            </tr>
            <tr>
              <th scope="row" className="">
                1
              </th>
              <td className=" ">Mark</td>
              <td className="">Otto</td>
              <td className="">@mdo</td>
            </tr>
            <tr>
              <th scope="row" className="">
                1
              </th>
              <td className=" ">Mark</td>
              <td className="">Otto</td>
              <td className="">@mdo</td>
            </tr>
          </tbody>
        </table>
        <button className="bg-gray-900 hover:bg-gray-800 rounded-2 px-2 py-2 text-light">See More</button>
      </div>
    </div>
  );
};

export default NewBook;
