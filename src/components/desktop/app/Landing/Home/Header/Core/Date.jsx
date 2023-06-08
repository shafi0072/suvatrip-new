import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateRangePicker } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import screenSize from "@/src/components/desktop/core/lib/MediaQuery/ScreenSize";
import moment from "moment";

const Dates = ({ value, setValue, handleDateChange }) => {
  return (
    <div
      className={`row px-2 my-1 w-full h-full pb-14 bookingTimeBackgroundd rounded-2 ${screenSize("600px") ? "d-flex text-sm text-center" : ""
        }`}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateRangePicker
          value={value}
          localeText={{ start: "Check-in", end: "Check-out" }}
          onChange={handleDateChange}
          className="mb-12"
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <FormControl>
                <TextField
                  {...startProps}
                  label="Check In Date"
                  id="check-in"
                  value={moment(value[0]?.$d).format("Do MMM YY")}
                  variant="standard"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CalendarTodayIcon style={{ color: "black", height: '16px', marginLeft: '-12px', marginBottom: '2px' }} />
                      </InputAdornment>
                    ),
                    disableUnderline: true,
                    classes: { root: "date-input" }, // Add custom class for styling
                  }}
                  InputLabelProps={{
                    shrink: !!value[0],
                    style: {
                      fontWeight: "bold",
                      fontSize: "16px",
                      textAlign: "left",
                      marginLeft: '16px',
                      marginRight: '0px'
                    },
                  }}
                />
              </FormControl>
              <Box sx={{ mr: 2 }}> | </Box>
              <FormControl>
                <TextField
                  {...endProps}
                  label="Check Out Date"
                  id="check-out"
                  value={moment(value[1]?.$d).format("Do MMM YY")}
                  variant="standard"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CalendarTodayIcon style={{ color: "black", marginLeft: '-12px', height: '16px', marginBottom: '2px' }} />
                      </InputAdornment>
                    ),
                    disableUnderline: true,
                    classes: { root: "date-input" }, // Add custom class for styling
                  }}
                  InputLabelProps={{
                    shrink: !!value[1],
                    style: {
                      fontWeight: "bold",
                      fontSize: "16px",
                      textAlign: "left",
                      marginLeft: '16px'
                    },
                  }}
                />
              </FormControl>
            </React.Fragment>
          )}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Dates;