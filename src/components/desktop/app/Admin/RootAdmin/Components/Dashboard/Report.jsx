import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SouthEastOutlinedIcon from "@mui/icons-material/SouthEastOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import screenSize from "@/src/components/desktop/core/lib/MediaQuery/ScreenSize";
const Report = () => {
  const resulation = ('600px');
  const resulation2 = ('1300px')
  return (
    <div className=" text-dark shadow-md border-2 bg-gray-900  border-gray-300 rounded-4 p-2">
      <div className="d-flex justify-content-between align-items-center text-light">
        <div>
          <h1 className="text-md font-bold">Reports</h1>
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
      <div className="row my-3">
        <div className="col-md-6">
          <div className="  bg-sky-700 rounded-2 px-1 py-1 text-light">
            <h1 className="text-xs text-light mt-1">
              <PeopleAltIcon className="text-light text-sm" />
              <span className="ml-1">Total Customer</span>
            </h1>

            <div className="d-flex align-items-center mt-1 mb-1">
              <h1 className="mt-2 text-xs font-bold mx-1">1,800 </h1>
              <h1 className="text-light text-xs">
                <NorthEastIcon className = "text-xs"/> 2.1%
              </h1>
            </div>
            <ht className="text-xs ml-1 mt-1">Last 7 Days.</ht>
          </div>
        </div>
        <div className="col-md-6">
          <div className=" custom_green_color rounded-2 px-2 py-2 text-light">
            <h1 className="text-xs">
              <ShoppingCartOutlinedIcon className="text-sm" />
              <span className="ml-1">Total Booking</span>
            </h1>

            <div className="d-flex align-items-center mt-1">
              <h1 className="mt-2 text-xs font-bold mx-1">1,200 </h1>
              <h1 className="text-xs">
                <SouthEastOutlinedIcon className="text-sm"/> 1.9%
              </h1>
            </div>
            <ht className="text-xs ml-1">Last 7 Days.</ht>
          </div>
        </div>
        <div className="col-md-6 mt-2">
          <div className=" bg-gray-700 text-light rounded-2 px-2 py-1">
            <h1 className="text-xs">
              <PaymentsOutlinedIcon className= "test-xs"/>
              <span className="ml-1">Total Incomes</span>
            </h1>

            <div className="d-flex align-items-center mt-1 mb-1">
              <h1 className="mt-2 text-xs font-bold">$894 </h1>
              <h1 className="text-xs">
                <SouthEastOutlinedIcon className ="text-xs ml-1" /> 1.9%
              </h1>
            </div>
            <ht className="text-xs">Last 7 Days .</ht>
          </div>
        </div>
        <div className="col-md-6 mt-2">
          <div className="custom_red_color text-light rounded-2 px-2 py-2">
            <h1 className="text-sm">
              <AttachMoneyOutlinedIcon className="text-sm" />
              <span className="text-xs">Total Cost</span>
            </h1>

            <div className="d-flex align-items-center mt-1">
              <h1 className="mt-2 text-xs font-bold ">$894 </h1>
              <h1 className="text-xs">
                <SouthEastOutlinedIcon className = "text-xs ml-1" /> 1.9%
              </h1>
            </div>
            <ht className="text-xs">Last 7 Days.</ht>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
