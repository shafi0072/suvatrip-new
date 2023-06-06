import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import { useRouter } from "next/router";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import screenSize from "../lib/MediaQuery/ScreenSize";
import { facilities } from "@/src/constant/admin/facality";

import DateRange from "./DateRange";
import moment from "moment";

const RoomPrice = ({
  open,
  handleClose,
  handlePropertyOnChange,
  handlePropertyOnChange2,
  newPrice,
  handleSubmit,
  isPriceCalander,
  setIsPriceCalander,
  timeData,
  setTimeData,
  schedulePrice,
  setSchedulePrice,
  scheduleDiscount,
  setScheduleDiscount,
}) => {
  const resulation = screenSize("600px");
  const style = {
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "80%",
    overflow: "scroll",
    width: resulation ? "90%" : "70%",
    "-ms-overflow-style": "none" /* IE and Edge */,
    "scrollbar-width": "none" /* Firefox */,
    "&::-webkit-scrollbar": {
      display: "none" /* Chrome, Safari, and Opera */,
    },
    bgcolor: "background.paper",

    boxShadow: 24,
    p: 4,
    borderRadius: "20px",
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  const router = useRouter();

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {!isPriceCalander && (
            <div className="mt-3 row">
              <label htmlFor="" className="text-md font-bold text-center">
                Room Prices
              </label>
              <div className="border p-3 rounded mt-2">
                <div className="row">
                  <div className="col-md-6">
                    <div>
                      <h1 htmlFor="" className="text-md font-bold ">
                        Title
                      </h1>
                      <input
                        type="text"
                        name="roomPriceTitle"
                        className="form-control mt-2 py-3"
                        placeholder="Title"
                        onChange={handlePropertyOnChange}
                      />
                    </div>
                    <div className="mt-3">
                      <h1 htmlFor="" className="text-md font-bold mb-2">
                        parking
                      </h1>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Parking
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Parking"
                          name="parking"
                          onChange={handlePropertyOnChange}
                        >
                          <MenuItem value={"allowed"}>Allow</MenuItem>
                          <MenuItem value={"Not Allowed"}>Not Allowed</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="mt-3">
                      <h1 htmlFor="" className="text-md font-bold mb-2">
                        Breakfast
                      </h1>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Breakfast
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Breakfast"
                          name="breakfast"
                          onChange={handlePropertyOnChange}
                        >
                          <MenuItem value={"allowed"}>Allow</MenuItem>
                          <MenuItem value={"Not Allowed"}>Not Allowed</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="mt-3">
                      <h1 htmlFor="" className="text-md font-bold mb-2">
                        sleep
                      </h1>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          sleep
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="sleep"
                          name="sleep"
                          onChange={handlePropertyOnChange}
                        >
                          <MenuItem value={1}>1</MenuItem>
                          <MenuItem value={2}>2</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="mt-3">
                      <h1 htmlFor="" className="text-md font-bold ">
                        Price Per Night(PPN)
                      </h1>
                      <input
                        type="text"
                        className="form-control mt-2 py-3 "
                        placeholder="PPN"
                        name="Per_Night"
                        onChange={handlePropertyOnChange}
                      />
                    </div>
                    <div className="mt-3">
                      <h1 htmlFor="" className="text-md font-bold ">
                        discount
                      </h1>
                      <input
                        type="text"
                        className="form-control mt-2 py-3"
                        placeholder="discount"
                        name="discount"
                        onChange={handlePropertyOnChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div>
                      <h1 className="text-md font-bold mb-2">Facilities</h1>
                      <div className="border p-3 rounded row">
                        {facilities?.map((items, index) => (
                          <div className="col-md-6">
                            <FormControlLabel
                              control={
                                <Checkbox
                                  name="Pricefacelity"
                                  value={items}
                                  onChange={handlePropertyOnChange2}
                                />
                              }
                              label={items}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-3">
                      <div>
                        <h1 className="text-md font-bold mb-2">
                          Schedule (optional)
                        </h1>
                        <div className="border p-3 rounded row">
                          {schedulePrice &&
                            scheduleDiscount &&
                            timeData?.length === 2 && (
                              <div className="mb-3">
                                <h1 className="text-md">
                                  Start:{" "}
                                  {moment(timeData[0]).format("MMM Do YY")}
                                </h1>
                                <h1 className="text-md">
                                  End: {moment(timeData[1]).format("MMM Do YY")}
                                </h1>
                                <h1 className="text-md">
                                  Price:{" "}
                                  <span className="font-bold">
                                    ${schedulePrice}
                                  </span>
                                </h1>
                                <h1 className="text-md">
                                  Discount:{" "}
                                  <span className="font-bold">
                                    {scheduleDiscount}%
                                  </span>
                                </h1>
                              </div>
                            )}
                          <button
                            className="text-center btn text-md text-primary font-bold"
                            onClick={() => {
                              setIsPriceCalander(true);
                            }}
                          >
                            Set price by Calander
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {isPriceCalander && (
            <div className="mt-3 row">
              <DateRange
                timeData={timeData}
                setTimeData={setTimeData}
                priceSchedule={schedulePrice}
                setPriceSchedule={setSchedulePrice}
                discountSchedule={scheduleDiscount}
                setScheduleDiscount={setScheduleDiscount}
              />
            </div>
          )}
          <div className="mt-2 d-flex justify-content-end">
            {!newPrice && !isPriceCalander && (
              <button className="btn btn-primary" onClick={handleClose}>
                Done
              </button>
            )}
            {!newPrice && isPriceCalander && (
              <button
                className="btn btn-primary"
                onClick={() => setIsPriceCalander(false)}
              >
                Done
              </button>
            )}
            {newPrice && !isPriceCalander && (
              <button className="btn btn-primary" onClick={handleSubmit}>
                Submit
              </button>
            )}
            {newPrice && isPriceCalander && (
              <button
                className="btn btn-primary"
                onClick={() => setIsPriceCalander(false)}
              >
                ok
              </button>
            )}
            {!isPriceCalander && (
              <button className="btn btn-secondary ml-2" onClick={handleClose}>
                Cancel
              </button>
            )}
            {isPriceCalander && (
              <button
                className="btn btn-secondary ml-2"
                onClick={() => setIsPriceCalander(false)}
              >
                Back
              </button>
            )}
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default RoomPrice;
