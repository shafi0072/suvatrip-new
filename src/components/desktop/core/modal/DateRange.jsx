import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  DateRangePicker,
  StaticDateRangePicker,
} from "@mui/x-date-pickers-pro";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import moment from "moment";
import { useEffect } from "react";

const DateRange = ({
  timeData,
  setTimeData,
  priceSchedule,
  setPriceSchedule,
  discountSchedule,
  setScheduleDiscount,
}) => {
  const [value, setValue] = React.useState([null, null]); // Define the value variable using useState
  const handleDateChange = (e) => {
    setValue(e);
  };

  function TimeChecker(time) {
    const dateStr = time;
    const unixTimestamp = Date.parse(dateStr); // divide by 1000 to convert to seconds
    return unixTimestamp;
  }

  useEffect(() => {
    if (value) {
      const value1 = TimeChecker(value[0]?.$d);
      const value2 = TimeChecker(value[1]?.$d);
      setTimeData([value1, value2]);
    }
  }, [value, timeData]);

  return (
    <div>
      <div className="p-3 border rounded-4 ">
        <h1 className="text-xl font-bold text-center mb-2">
          Select the timeline
        </h1>
        <div className="d-flex justify-content-center mb-2">
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
        </div>
      </div>

      <div className="mt-3">
        <div className="row">
          <div className="col-md-6">
            <label
              for="helper-text"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Price
            </label>
            <input
              type="email"
              id="helper-text"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="12"
              onChange={(e) => setPriceSchedule(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label
              for="helper-text"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Discount
            </label>
            <input
              type="email"
              id="helper-text"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="12"
              onChange={(e) => setScheduleDiscount(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateRange;
