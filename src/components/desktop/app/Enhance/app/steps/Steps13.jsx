import {
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Switch,
} from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Steps13 = ({ enhanceData, setEnhanceData, handleOnChange }) => {
  const [show, setShow] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [alternativeNumber, setAlternativeNumber] = useState("");

  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <div className="container ">
      <div className="row">
        <div className={`fade-in mt-5 col-md-6 ${show ? "is-visible" : ""}`}>
          <div className="text-center">
            <h1 className="text-md text-center font-bold my-3">
              Cancellations
            </h1>

            <div style={{ width: "100%" }} className="border rounded p-3">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  How many days in advance can guests cancel free of charge?
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="cancelation"
                  onChange={(e) => handleOnChange(e)}
                  // value={age}
                  label="Room Name"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth className="mt-3">
                <InputLabel id="demo-simple-select-label">
                  or guests will pay 100%
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Room Name"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <p className="text-sm font-bold  mt-3">
                The guest must cancel by 18:00 on the day of arrival or pay 100%
                of the price for the first night
              </p>
              <p className="text-sm  mt-3">
                <span className="text-md font-bold">Note:</span> You'll be able
                to make changes to your policies later on. This is just to get
                you started.
              </p>
            </div>
          </div>
        </div>
        <div className={`fade-in mt-5 col-md-6 ${show ? "is-visible" : ""}`}>
          <div className="text-center">
            <div>
              <h1 className="text-md text-center font-bold my-3">
                Protect against accidental bookings
              </h1>
            </div>

            <div style={{ width: "100%" }} className="border rounded p-3">
              <div className="d-flex justify-content-between">
                <h1 className="text-md text-center font-bold my-3">
                  accidental bookings
                </h1>
                <Switch defaultChecked color="warning" />
              </div>
              <p className="text-md  mt-3">
                To save you time handling accidental bookings, we automatically
                waive cancellation fees for guests that cancel within the first
                24 hours of a booking being made. You can change this period of
                time later in your property management platform.
              </p>
            </div>
          </div>
        </div>
        <div className={`fade-in mt-5 col-md-6 ${show ? "is-visible" : ""}`}>
          <div className="text-center">
            <h1 className="text-md text-center font-bold my-3">
              Check-in/Check-out Ruls
            </h1>

            <div style={{ width: "100%" }} className="border rounded p-3">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Check-in Time
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="checkinTime"
                  onChange={(e) => handleOnChange(e)}
                  // value={age}
                  label="Room Name"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth className="mt-3">
                <InputLabel id="demo-simple-select-label">
                  Check-out Time
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  name="checkOutTime"
                  onChange={(e) => handleOnChange(e)}
                  label="Room Name"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        <div className={`fade-in mt-5 col-md-6 ${show ? "is-visible" : ""}`}>
          <div>
            <h1 className="text-md text-center font-bold my-3">
              Children/Pets
            </h1>

            <div style={{ width: "100%" }} className="border rounded p-3">
              <p className="text-md">
                Can you accommodate children or Some guests like to travel with
                their furry friends. Indicate if you allow pets and if any
                charges apply.
              </p>
              <div className="mx-3 d-flex">
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Children Yes"
                    control={
                      <Radio
                        name="Children"
                        value="allow"
                        onChange={(e) => handleOnChange(e)}
                      />
                    }
                    label="Children Yes"
                  />
                  <FormControlLabel
                    value="Children No"
                    control={
                      <Radio
                        name="Children"
                        value=" not allow"
                        onChange={(e) => handleOnChange(e)}
                      />
                    }
                    label="Children No"
                  />
                </RadioGroup>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Pets Yes"
                    control={
                      <Radio
                        name="pets"
                        value="allow"
                        onChange={(e) => handleOnChange(e)}
                      />
                    }
                    label="Pets Yes"
                  />
                  <FormControlLabel
                    value="Pets No"
                    control={
                      <Radio
                        name="pets"
                        value="not allow"
                        onChange={(e) => handleOnChange(e)}
                      />
                    }
                    label="Pets No"
                  />
                </RadioGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps13;
