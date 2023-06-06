import React from "react";
import screenSize from "../../../../core/lib/MediaQuery/ScreenSize";

const UpgradeDeals = () => {
  const resulation = screenSize("600px");
  return (
    <div class="relative group mb-3 ">
      <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div class="relative px-7 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none space-x-6 py-3">
        <div class="space-y-2">
          <div className="">
            <h1 className="text-md font-bold">Room upgrade deals</h1>
            <p className="text-sm">Discounted add-ons for your trip</p>
          </div>
          <div className="bg-gray-100 mt-2 px-3">
            <div
              className={`${
                resulation
                  ? "d-flex flex-col justify-content-between align-items-center py-3"
                  : "d-flex justify-content-between align-items-center"
              }`}
            >
              <div className="d-flex align-items-center">
                <img
                  src="/images/1486-food-as-resources-flat.gif"
                  className="w-20"
                  alt=""
                />
                <div>
                  <h className="text-md font-bold">Breakfast</h>
                  <p className="text-sm">
                    Breakfast is included in your room deal for no additional
                    charge.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center mt-3">
                <h1
                  className={`${
                    resulation
                      ? "text-sm text-green-500 mr-3"
                      : "text-xl text-green-500 mr-3"
                  }`}
                >
                  FREE
                </h1>
                <button className="btn custom_green_color hover:custom_green_color text-light">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradeDeals;
