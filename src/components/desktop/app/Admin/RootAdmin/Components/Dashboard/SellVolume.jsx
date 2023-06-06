import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import RemoveIcon from "@mui/icons-material/Remove";
const data = [
  {
    name: "Jan",
    This_year: 4000,
    Last_year: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    This_year: 3000,
    Last_year: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    This_year: 2000,
    Last_year: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    This_year: 2780,
    Last_year: 3908,
    amt: 2000,
  },
  {
    name: "May",
    This_year: 1890,
    Last_year: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    This_year: 2390,
    Last_year: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    This_year: 3490,
    Last_year: 4300,
    amt: 2100,
  },
];
const SellVolume = () => {
  return (
    <div className=" text-dark shadow-md border-2 border-gray-300 bg-gray-900 rounded-4 p-3">
      <div className="d-flex justify-content-between text-light align-items-center">
        <div>
          <h1 className="text-xl font-bold">Sell Volume</h1>
          <p className="text-md">Displays weekly</p>
        </div>
        <div>
          <FormControl className=" rounded-2 bg-light" style={{ width: "100px" }}>
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
      <div className="my-3">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart width={500} height={300} data={data}>
            {/* <CartesianGrid strokeDasharray="1  1" /> */}
            <XAxis dataKey="name" tickMargin={0} tick={{ fill: 'white' }}/>
            <YAxis tick={{ fill: 'white' }}/>
            <Tooltip />

            <Line
              type="monotone"
              dataKey="Last_year"
              stroke="#FF8042"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="This_year" stroke="#0088FE" />
          </LineChart>
        </ResponsiveContainer>
        <div className="d-flex my-2">
          <h1 className="mx-2 text-light">
            <RemoveIcon sx={{ color: "#FF8042" }} /> <span>Last Year</span>
          </h1>
          <h1 className="mx-2 text-light">
            <RemoveIcon sx={{ color: "#0088FE" }} /> <span>This Year</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SellVolume;
