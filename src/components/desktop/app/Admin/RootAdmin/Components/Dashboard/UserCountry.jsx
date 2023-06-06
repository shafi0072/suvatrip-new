import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import Brightness1Icon from "@mui/icons-material/Brightness1";
const data = [
  { name: "Bangladesh", value: 400 },
  { name: "Nepal", value: 300 },
  { name: "Pakistan", value: 300 },
  { name: "India", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const UserCountry = () => {
  return (
   <> <div className=" text-dark shadow-md  bg-gray-900 rounded-4 p-3">
   <div className="d-flex justify-content-between align-items-center text-light">
     <div>
       <h1 className="text-xl font-bold">Country</h1>
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

   <div className="d-flex align-items-center">
     <div>
       <PieChart width={300} height={180}>
         <Pie
           data={data}
           innerRadius={50}
           outerRadius={80}
           fill="#8884d8"
           paddingAngle={5}
           dataKey="value"
         >
           {data.map((entry, index) => (
             <Cell
               key={`cell-${index}`}
               fill={COLORS[index % COLORS.length]}
             />
           ))}
         </Pie>
       </PieChart>
     </div>
     <>
       <ul>
         {data.map((items, index) => (
           <li>
             <Brightness1Icon sx={{ color: COLORS[index] }} />{" "}
             <span className="text-light">
               {items.name}: {items.value}%
             </span>
           </li>
         ))}
       </ul>
     </>
   </div>
 </div></>
  );
};

export default UserCountry;
