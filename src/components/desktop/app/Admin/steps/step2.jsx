import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { useState } from "react";

import CurrencyFormat from "react-currency-format";
const Step2 = ({ setNavigation, stepsData, setStepsData }) => {
  const [addRoomClicked, setAddRoomClicked] = useState(false);

  const handleSteps2OnChange = (e) => {
    let newStepsData = { ...stepsData };
    newStepsData[e.target.name] = e.target.value;
    setStepsData(newStepsData);
  };

  return (
    <div>
      <h1 className="text-md font-bold">Layout and pricing</h1>
      <p className="text-sm">
        Tell us about your first room. Once you've entered all the necessary
        information, you'll be able to fill in the details of your other rooms.
      </p>

      {!addRoomClicked && (
        <div className="mt-4">
          <div className="row">
            <div className="col-md-8">
              <div className="bg-gray-300 py-3 px-3 shadow-md rounded-4">
                <div className="w-full  ">
                  <div>
                    <div className="d-flex justify-content-center">
                      <img
                        src="https://q.bstatic.com/static/img/join/segmentation/empty-state-createroom@2x.png"
                        alt=""
                        style={{ width: "30%" }}
                      />
                    </div>
                    <div className="container my-4">
                      <p className="text-sm text-center">
                        No rooms have been added to your property. Start adding
                        rooms to describe bed options, layout and pricing for
                        guests.
                      </p>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => setAddRoomClicked(true)}
                      >
                        Add Room
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {addRoomClicked && (
        <div className="mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="bg-gray-300 py-3 px-3 shadow-md rounded-4 my-3">
                <form className="w-full ">
                  <div className="row">
                    <div className="col-md-6">
                      <div>
                        <h1 htmlFor="propertyName" className="text-xl">
                          Double
                        </h1>
                        <InputLabel
                          id="demo-simple-select-label"
                          className="mt-3"
                        >
                          Room type
                        </InputLabel>
                        <FormControl fullWidth className="bg-light my-2">
                          <Select
                            id="demo-simple-select"
                            name="roomType"
                            onChange={handleSteps2OnChange}
                          >
                            <MenuItem value={"Signle"}>Signle</MenuItem>
                            <MenuItem value={"Double"}>Double</MenuItem>
                            <MenuItem value={"Twin"}>Twin</MenuItem>
                            <MenuItem value={"Twin/Double"}>
                              Twin/Double
                            </MenuItem>
                            <MenuItem value={"Triple"}>Triple</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="col-md-6">
                      <InputLabel
                        id="demo-simple-select-label"
                        className="mt-3"
                      >
                        Room Name
                      </InputLabel>
                      <FormControl fullWidth className="bg-light my-2">
                        <Select
                          id="demo-simple-select"
                          name="RoomName"
                          onChange={handleSteps2OnChange}
                        >
                          <MenuItem value={"Delux"}>Delux</MenuItem>
                          <MenuItem value={"Double"}>Double</MenuItem>
                          <MenuItem value={"Twin"}>Twin</MenuItem>
                          <MenuItem value={"Twin/Double"}>Twin/Double</MenuItem>
                          <MenuItem value={"Triple"}>Triple</MenuItem>
                        </Select>
                      </FormControl>
                      <p className="text-sm">
                        This is the name guests will see on the Booking.com
                        website.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <InputLabel
                        id="demo-simple-select-label"
                        className="mt-3"
                      >
                        Custom name (optional)
                      </InputLabel>
                      <FormControl fullWidth className="bg-light my-2">
                        <TextField
                          id="outlined-error"
                          placeholder="Your name"
                          name="CustomName"
                          onChange={handleSteps2OnChange}
                        />
                      </FormControl>
                      <p className="text-sm">
                        Create an optional, custom name for your reference.
                      </p>
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="col-md-6">
                      <InputLabel
                        id="demo-simple-select-label"
                        className="mt-3"
                      >
                        Smoking policy
                      </InputLabel>
                      <FormControl fullWidth className="bg-light my-2">
                        <Select
                          id="demo-simple-select"
                          name="SmokingPolicy"
                          onChange={handleSteps2OnChange}
                        >
                          <MenuItem value={"Non-smocking"}>
                            Non-smocking
                          </MenuItem>
                          <MenuItem value={"Smocking"}>Smocking</MenuItem>
                          <MenuItem value={"both"}>
                            I have both smocking and non smocking options for
                            this room type
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="col-md-6">
                      <InputLabel
                        id="demo-simple-select-label"
                        className="mt-3"
                      >
                        Number of rooms (of this type)
                      </InputLabel>
                      <FormControl fullWidth className="bg-light my-2">
                        <TextField
                          type="number"
                          id="outlined-error"
                          defaultValue={1}
                          name="NumberOfRooms"
                          onChange={handleSteps2OnChange}
                        />
                      </FormControl>
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
                          Room size (optional)
                        </h1>

                        <div className="bg-light w-full my-2 d-flex">
                          <TextField
                            type="number"
                            id="outlined-error"
                            defaultValue={1200}
                            name="RoomSize"
                            onChange={handleSteps2OnChange}
                          />
                          <Select
                            id="demo-simple-select"
                            // value={"square metres"}
                            name="RoomSizeType"
                            onChange={handleSteps2OnChange}
                          >
                            <MenuItem value={"square metres"}>
                              square metres
                            </MenuItem>
                            <MenuItem value={"square feet"}>
                              square feet
                            </MenuItem>
                          </Select>
                        </div>
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
                  Base price per nig
                </h1>

                <div className="bg-gray-400 p-3 my-2 rounded-4">
                  <p className="text-sm">
                    This is the lowest price that we automatically apply to this
                    room for all dates. Before your property goes live, you can
                    set seasonal pricing in your property dashboard.
                  </p>
                </div>
                <form className="w-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div>
                        <div className="bg-light w-full my-2 d-flex align-items-center px-2">
                          <div className="">
                            <h1 className="text-dark text-md">INR/per night</h1>
                          </div>
                          <div className="">
                            <TextField
                              type="number"
                              id="outlined-error"
                              defaultValue={1}
                              name="perNight"
                              onChange={handleSteps2OnChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <button
                className="btn btn-primary form-control"
                onClick={() => setNavigation("Amenities")}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Step2;
