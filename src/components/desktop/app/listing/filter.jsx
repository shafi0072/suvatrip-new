import { filter_data } from "@/src/constant/filterData/filter";
import { Switch } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}
const minDistance = 0;
const Filter = ({ setCheked }) => {
  const handleChange = (event) => {
    setCheked(event.target.checked);
  };
  const [value1, setValue1] = React.useState([0, 100]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  const [value2, setValue2] = React.useState([20, 37]);

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };
  return (
    <div className="">
      <div className="">
        <p className="d-flex align-items-center">
          Map View
          <Switch onChange={handleChange} />
        </p>



        {filter_data.map((items, index) => (
          <div className=" mt-3 border-b-2 pb-4">
            <h2 className="font-bold ">{items?.data?.title}</h2>
            <ul className="mt-3">
              {items?.data?.suggestedData?.map((items, index) => (
                <li className="d-flex mt-3 justify-content-between">
                  <div className="flex items-center mr-4">
                    <input
                      id={`inline-${items?.title}`}
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label
                      for={`inline-${items?.title}`}
                      className="ml-2 text-sm font-medium text-gray-600"
                    >
                      {items?.title}
                    </label>
                  </div>
                  <p className="text-gray-600 text-sm mr-5">
                    ({items?.data?.length})
                  </p>
                </li>
              ))}
            </ul>
            {items?.data?.custom && (
              <Box width={300}>

                <Slider
                  getAriaLabel={() => 'Minimum distance'}
                  value={value1}
                  color="primary"
                  sx={{width:'70%'}}
                  onChange={handleChange1}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  disableSwap
                />
              </Box>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
