import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
const Categories = () => {
  return (
    <div className="mt-3 border-b pb-3 border-gray-400">
      <h1 className="text-3xl font-bold">Categories</h1>
      <div className="row">
        <div className="col-md-4">
          <div>
            <div className="mt-3">
              <div className="d-flex justify-content-between">
                <h1 className="text-xl">Cleanliness</h1>
                <h1 className="text-xl">8.9</h1>
              </div>
              <div className="w-full bg-gray-200  h-2.5">
                <div
                  className="bg-blue-600 h-2.5 "
                  style={{ width: "45%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <div className="mt-3">
              <div className="d-flex justify-content-between">
                <h1 className="text-xl">Comfort</h1>
                <h1 className="text-xl">8.9</h1>
              </div>
              <div className="w-full bg-gray-200  h-2.5">
                <div
                  className="bg-blue-600 h-2.5 "
                  style={{ width: "45%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <div className="mt-3">
              <div className="d-flex justify-content-between">
                <h1 className="text-xl">Staff</h1>
                <h1 className="text-xl">8.9</h1>
              </div>
              <div className="w-full bg-gray-200  h-2.5">
                <div
                  className="bg-blue-600 h-2.5 "
                  style={{ width: "45%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-4">
          <div>
            <div className="mt-3">
              <div className="d-flex justify-content-between">
                <h1 className="text-xl">
                  Location <ArrowUpwardIcon className="text-green-600" />
                </h1>
                <h1 className="text-xl">8.9</h1>
              </div>
              <div className="w-full bg-gray-200  h-2.5">
                <div
                  className="custom_green_color h-2.5 "
                  style={{ width: "57%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <div className="mt-3">
              <div className="d-flex justify-content-between">
                <h1 className="text-xl">
                  Facilities <ArrowUpwardIcon className="text-green-600" />
                </h1>
                <h1 className="text-xl">8.9</h1>
              </div>
              <div className="w-full bg-gray-200  h-2.5">
                <div
                  className="custom_green_color h-2.5 "
                  style={{ width: "89%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <div className="mt-3">
              <div className="d-flex justify-content-between">
                <h1 className="text-xl">
                  Value for money <ArrowUpwardIcon className="text-green-600" />
                </h1>
                <h1 className="text-xl">8.9</h1>
              </div>
              <div className="w-full bg-gray-200  h-2.5">
                <div
                  className="custom_green_color h-2.5 "
                  style={{ width: "30%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-4">
          <div>
            <div className="mt-3">
              <div className="d-flex justify-content-between">
                <h1 className="text-xl">
                  Location <ArrowDownwardIcon className="text-red-600" />
                </h1>
                <h1 className="text-xl">8.9</h1>
              </div>
              <div className="w-full bg-gray-200  h-2.5">
                <div
                  className="bg-red-600 h-2.5 "
                  style={{ width: "57%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
