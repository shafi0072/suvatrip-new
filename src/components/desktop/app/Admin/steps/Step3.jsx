import { facilities } from "@/src/constant/admin/facality";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

const Step3 = ({ setNavigation, stepsData, setStepsData }) => {
  const handleSteps2OnChange = (e) => {
    let newStepsData = { ...stepsData };
    newStepsData[e.target.name] = e.target.value;
    setStepsData(newStepsData);
  };

  return (
    <div>
      <h1 className="text-md font-bold">Facilities & services</h1>
      <p className="text-sm">
        Now, tell us some general details about your property, such as
        facilities available, internet, parking and the languages you speak.
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
                        Parking
                      </h1>
                      <InputLabel
                        id="demo-simple-select-label"
                        className="mt-3"
                      >
                        Is parking available to guests?
                      </InputLabel>
                      <FormControl fullWidth className="bg-light my-2">
                        <Select
                          id="demo-simple-select"
                          name="parking"
                          onChange={handleSteps2OnChange}
                        >
                          <MenuItem value={"No"}>No</MenuItem>
                          <MenuItem value={"Yes, Paid"}>Yes, Paid</MenuItem>
                          <MenuItem value={"Yes, free"}>Yes, free</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
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
                  <div className="col-md-6">
                    <div>
                      <h1 htmlFor="propertyName" className="text-xl">
                        Breakfast
                      </h1>
                      <InputLabel
                        id="demo-simple-select-label"
                        className="mt-3"
                      >
                        Is breakfast available to guests?
                      </InputLabel>
                      <FormControl fullWidth className="bg-light my-2">
                        <Select
                          id="demo-simple-select"
                          name="breakfast"
                          onChange={handleSteps2OnChange}
                        >
                          <MenuItem value={"No"}>No</MenuItem>
                          <MenuItem value={"Yes, it's include in the price"}>
                            Yes, it's include in the price
                          </MenuItem>
                          <MenuItem value={"Yes, it's optional"}>
                            Yes, it's optional
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="bg-gray-300 py-3 px-3 shadow-md rounded-4 my-3">
              <h1 htmlFor="propertyName" className="text-xl">
                Languages spoken
              </h1>

              <form className="w-full ">
                <div className="row">
                  <div className="col-md-6">
                    <div>
                      <InputLabel
                        id="demo-simple-select-label"
                        className="mt-3"
                      >
                        What languages do you or your staff speak?
                      </InputLabel>
                      <FormControl fullWidth className="bg-light my-2">
                        <Select
                          id="demo-simple-select"
                          name="language"
                          onChange={handleSteps2OnChange}
                        >
                          <MenuItem value={"English"}>English</MenuItem>
                          <MenuItem value={"Yes, it's include in the price"}>
                            Yes, it's include in the price
                          </MenuItem>
                          <MenuItem value={"Yes, it's optional"}>
                            Yes, it's optional
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="bg-gray-300 py-3 px-3 shadow-md rounded-4 mb-3">
              <h1 htmlFor="propertyName" className="text-xl">
                Facilities that are popular with guests
              </h1>
              <p className="text-sm">
                Guests look for these facilities the most when they’re searching
                for properties.
              </p>

              <form className="w-full ">
                <div className="row">
                  {facilities.map((items, index) => (
                    <div className="col-md-6 my-2">
                      <div className="py-3 border-b border-gray-500">
                        <FormGroup>
                          <FormControlLabel
                            control={
                              <Checkbox
                                name={items}
                                onChange={handleSteps2OnChange}
                              />
                            }
                            label={items}
                          />
                        </FormGroup>
                      </div>
                    </div>
                  ))}
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

export default Step3;
