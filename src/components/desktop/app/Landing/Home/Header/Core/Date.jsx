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
      className={`row px-2 my-3 w-full py-2 bookingTimeBackgroundd rounded-2 ${
        screenSize("600px") ? "d-flex text-sm text-center" : ""
      }`}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateRangePicker
          value={value}
          localeText={{ start: "Check-in", end: "Check-out" }}
          onChange={handleDateChange}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <FormControl>
                <TextField
                  {...startProps}
                  label="Check-in"
                  id="check-in"
                  value={moment(value[0]?.$d).format("Do MMM YY")}
                  variant="standard"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CalendarTodayIcon />
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    shrink: !!value[0],
                    style: {
                      fontWeight: "bold",
                      fontSize: "16px",
                      marginLeft: "30px",
                    },
                  }}
                />
              </FormControl>
              <Box sx={{ mx: 4 }}> To </Box>
              <FormControl>
                <TextField
                  {...endProps}
                  label="Check-out"
                  id="check-out"
                  value={moment(value[1]?.$d).format("Do MMM YY")}
                  variant="standard"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CalendarTodayIcon />
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    shrink: !!value[1],
                    style: {
                      fontWeight: "bold",
                      fontSize: "16px",
                      marginLeft: "30px",
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
