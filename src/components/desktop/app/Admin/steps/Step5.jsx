import React from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Switch from "@mui/material/Switch";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const label = { inputProps: { "aria-label": "Color switch demo" } };
const Step5 = () => {
  return (
    <div>
      <h1 className="text-md font-bold">Policies</h1>
      <p className="text-sm">
        Specify some basic policies. Do you allow children or pets? How flexible
        are you with cancellations?
      </p>

      <div className="mt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="bg-gray-300 py-3 px-3 shadow-md rounded-4 my-3">
              <form className="w-full ">
                <div className="row">
                  <div className="col-md-6">
                    <div>
                      <h1 htmlFor="propertyName" className="text-xl">
                        Cancellations
                      </h1>
                      <label
                        id="demo-simple-select-label"
                        className="mt-3 text-sm"
                      >
                        How many days in advance can guests cancel free of
                        charge?
                      </label>
                      <FormControl fullWidth className="bg-light my-2">
                        <Select
                          id="demo-simple-select"
                          value={"1 Day"}
                          // onChange={handleChange}
                        >
                          <MenuItem value={"1 Day"}>1 Day</MenuItem>
                          <MenuItem value={"2 Days"}>2 Days</MenuItem>
                          <MenuItem value={"3 Days"}>2 Days</MenuItem>
                        </Select>
                      </FormControl>

                      <label
                        id="demo-simple-select-label"
                        className="mt-3 text-sm"
                      >
                        or guests will pay 100%
                      </label>
                      <FormControl fullWidth className="bg-light my-2">
                        <Select
                          id="demo-simple-select"
                          value={"of the first night"}
                          // onChange={handleChange}
                        >
                          <MenuItem value={"of the first night"}>
                            of the first night
                          </MenuItem>
                          <MenuItem value={"of the full stay"}>
                            of the full stay
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="bg-yellow-400 rounded-4 p-3 container ">
                    <h1 className="text-sm font-bold">
                      <NotificationsIcon />
                      The guest must cancel by 18:00 on the day of arrival or
                      pay 100% of the price for the first night.
                    </h1>
                    <p className="text-sm mt-2">
                      Please note: You'll be able to make changes to your
                      policies later on. This is just to get you started.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="bg-gray-300 py-3 px-3 shadow-md rounded-4">
              <form className="w-full ">
                <div className="row">
                  <div className="col-md-12">
                    <div className="d-flex justify-content-between align-items-center">
                      <h1 htmlFor="propertyName" className="text-xl">
                        Protect against accidental bookings
                      </h1>
                      <Switch {...label} defaultChecked color="success" />
                    </div>
                    <p className="text-sm mt-3">
                      To save you time handling accidental bookings, we
                      automatically waive cancellation fees for guests that
                      cancel within the first 24 hours of a booking being made.
                      You can change this period of time later in your property
                      management platform.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="bg-gray-300 py-3 px-3 shadow-md rounded-4 my-3">
              <div className="row">
                <div className="col-md-6">
                  <h1 htmlFor="propertyName" className="text-xl">
                    Check-in
                  </h1>
                  <div className="mt-3">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <StaticDatePicker defaultValue={dayjs("2022-04-17")} />
                    </LocalizationProvider>
                  </div>
                </div>
                <div className="col-md-6">
                  <h1 htmlFor="propertyName" className="text-xl">
                    Check-out
                  </h1>
                  <div className="mt-3">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <StaticDatePicker defaultValue={dayjs("2022-04-13")} />
                    </LocalizationProvider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="bg-gray-300 py-3 px-3 shadow-md rounded-4 mb-3">
              <h1 htmlFor="propertyName" className="text-xl">
                Children
              </h1>
              <p className="text-sm">
                Can you accommodate children? (You can specify the ages and
                prices later)
              </p>

              <form className="w-full ">
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="bg-gray-300 py-3 px-3 shadow-md rounded-4 my-3">
              <form className="w-full ">
                <div className="row">
                  <h1 htmlFor="propertyName" className="text-xl">
                    Pets
                  </h1>
                  <p className="text-sm">
                    Some guests like to travel with their furry friends.
                    Indicate if you allow pets and if any charges apply.
                  </p>
                  <div className="col-md-6">
                    <div>
                      <label
                        id="demo-simple-select-label"
                        className="mt-3 text-sm"
                      >
                        Do you allow pets?
                      </label>
                      <FormControl fullWidth className="bg-light my-2">
                        <Select
                          id="demo-simple-select"
                          value={"Yes"}
                          // onChange={handleChange}
                        >
                          <MenuItem value={"Yes"}>Yes</MenuItem>
                          <MenuItem value={"No"}>No</MenuItem>
                          <MenuItem value={"Upon Request"}>
                            Upon Request
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <button
              className="btn btn-primary form-control"
              onClick={() => setNavigation("Hotel Rules")}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step5;
