import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SouthEastOutlinedIcon from "@mui/icons-material/SouthEastOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
const Cancelation = () => {
  return (
    <div className=" text-dark h-full shadow-md border-2 bg-gray-900  border-gray-300 rounded-4 p-2">
      <div className="d-flex justify-content-between align-items-center text-light">
        <div>
          <h1 className="text-md font-bold">Total Cancellation</h1>
          <p className="text-sm">Displays weekly</p>
        </div>
        <div>
          <FormControl className=" rounded-2 bg-light" style={{ width: "80px" }}>
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
      <div className="row mt-2">
        <div className="col-md-6 mt-1">
          <div className=" bg-gray-800 rounded-2 px-2 py-2 text-light">
            <h1 className="text-xs ">
              <span className="ml-1">This month</span>
            </h1>

            <div className=" mt-2 mb-1">
              <h1 className="text-xs">
                <SouthEastOutlinedIcon className = "text-xs"/> 1.9%
              </h1>
              <h1 className="mt-2 text-xs font-bold mx-2">$894 </h1>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-1">
          <div className=" custom_green_color text-light rounded-2 px-2 py-2">
            <h1 className="text-xs">
              <span className="ml-1">Last Month</span>
            </h1>

            <div className=" mt-2 mb-1">
              <div>
              <h1 className="text-xs">
                <SouthEastOutlinedIcon className = "text-xs"/> 1.9%
              </h1>
              <h1 className="mt-2 text-xs font-bold mx-2">$894 </h1>
              </div>

            
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-2">
          <div className=" bg-gray-800 rounded-2 px-2 py-2 text-light">
            <h1 className="text-xs ">
              <span className="ml-1">This month</span>
            </h1>

            <div className=" mt-2 mb-2">
              <h1 className="text-xs">
                <SouthEastOutlinedIcon className = "text-xs"/> 1.9%
              </h1>
              <h1 className="mt-2 text-xs font-bold mx-2">$894 </h1>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-2">
          <div className=" custom_green_color text-light rounded-2 px-2 py-2">
            <h1 className="text-xs">
              <span className="ml-1">Last Month</span>
            </h1>

            <div className=" mt-2 mb-2">
              <div>
              <h1 className="text-xs">
                <SouthEastOutlinedIcon className = "text-xs"/> 1.9%
              </h1>
              <h1 className="mt-2 text-xs font-bold mx-2">$894 </h1>
              </div>

            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cancelation;
