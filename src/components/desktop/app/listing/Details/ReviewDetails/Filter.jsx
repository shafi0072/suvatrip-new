import React from "react";
import AddIcon from "@mui/icons-material/Add";
const Filter = () => {
  return (
    <div className="mt-3 border-b pb-3 border-gray-400">
      <h1 className="text-3xl font-bold">Filters</h1>
      <div className="row mt-3">
        <div className="row">
          <div className="col-md-3">
            <button className="p-2 form-control bg-gray-800 text-light hover:text-gray-800">
              All reviews (440)
            </button>
          </div>

          <div className="col-md-3">
            <button className="p-2 form-control bg-gray-800 text-light hover:text-gray-800">
              All review scores (440)
            </button>
          </div>
          <div className="col-md-3">
            <button className="p-2 form-control bg-gray-800 text-light hover:text-gray-800">
              All Languages (440)
            </button>
          </div>

          <div className="col-md-3">
            <button className="p-2 form-control bg-gray-800 text-light hover:text-gray-800">
              Time of year
            </button>
          </div>
        </div>
      </div>
      <p className="text-md mt-3">Select a topic of search reviews</p>
      <div className="row mt-3">
        <div className="row">
          <div className="col-md-2">
            <button className="p-2 form-control bg-blue-700 text-light hover:text-gray-800">
              Room <AddIcon />
            </button>
          </div>

          <div className="col-md-2">
            <button className="p-2 form-control bg-blue-700 text-light hover:text-gray-800">
              Location <AddIcon />
            </button>
          </div>
          <div className="col-md-2">
            <button className="p-2 form-control bg-blue-700 text-light hover:text-gray-800">
              Breakfast <AddIcon />
            </button>
          </div>

          <div className="col-md-2">
            <button className="p-2 form-control bg-blue-700 text-light hover:text-gray-800">
              Pool <AddIcon />
            </button>
          </div>
          <div className="col-md-2">
            <button className="p-2 form-control bg-blue-700 text-light hover:text-gray-800">
              View <AddIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
