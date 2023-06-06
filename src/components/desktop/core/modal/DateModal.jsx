import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  DateRangePicker,
  StaticDateRangePicker,
} from "@mui/x-date-pickers-pro";
import TextField from "@mui/material/TextField";

import moment from "moment";
import { Box, Button } from "@mui/material";
import Modal from "@mui/material/Modal";

import screenSize from "../lib/MediaQuery/ScreenSize";
import DateRange from "./DateRange";

const DateModal = ({ open, handleClose, setValue, value, setSelected }) => {
  const resulation = screenSize("600px");

  const style = {
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: resulation ? "90%" : "50%",
    bgcolor: "background.paper",
    height: resulation ? "70%" : "470px",
    borderRadius: "20px",
    boxShadow: 24,
    p: 4,
  };

  const handleDateChange = (e) => {
    setValue(e);
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        contentLabel="Example Modal"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <DateRangePicker
            showMonthArrow={true}
            ranges={[selectedRange]}
            onChange={(range) => {
              setSelectedRange(range.selection);
              setSelected(true);
            }}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            direction="horizontal"
            preventSnapRefocus={false}
            className="w-100"
          /> */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateRangePicker
              value={value}
              localeText={{ start: "Check-in", end: "Check-out" }}
              onChange={handleDateChange}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField
                    {...startProps}
                    value={moment(value[0]?.$d).format("MMM Do YY")}
                  />
                  <Box sx={{ mx: 4 }}> to </Box>
                  <TextField
                    {...endProps}
                    value={moment(value[1]?.$d).format("MMM Do YY")}
                  />
                </React.Fragment>
              )}
            />
          </LocalizationProvider>
          <div className="d-flex justify-content-end">
            <button
              className="btn bg-sky-700 hover:bg-sky-500 text-light mx-2"
              onClick={() => {
                handleClose();
                setSelected(true);
              }}
            >
              Yes
            </button>
            <button
              className="btn bg-sky-700 hover:bg-sky-500 text-light"
              onClick={() => {
                handleClose();
                setSelected(false);
                setValue = [null, null];
              }}
            >
              No
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default DateModal;
