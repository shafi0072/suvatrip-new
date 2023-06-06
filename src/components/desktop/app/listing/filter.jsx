import { filter_data } from "@/src/constant/filterData/filter";
import { Switch } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";

const Filter = ({ setCheked }) => {
  const handleChange = (event) => {
    setCheked(event.target.checked);
  };

  return (
    <div className="">
      <div className="">
        <p className="d-flex align-items-center">
          Map View
          <Switch onChange={handleChange} />
        </p>

        <h1 className="text-dark text-xl font-bold">Select Filters</h1>

        {filter_data.map((items, index) => (
          <div className=" mt-5 border-b-2 pb-4">
            <h2 className="font-bold ">{items?.data?.title}</h2>
            <ul className="mt-3">
              {items?.data?.suggestedData?.map((items, index) => (
                <li className="d-flex mt-3 justify-content-between">
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label
                      for="inline-checkbox"
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
              <div className="d-flex justify-content-between mt-3">
                <div className="">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Min"
                  />
                </div>
                <div className="mt-2 mx-2">
                  <p>To</p>
                </div>
                <div className="">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Max"
                  />
                </div>
                <div className="mx-2">
                  <input
                    type="submit"
                    className="btn btn-outline-primary"
                    value=">"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
