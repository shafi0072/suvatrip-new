import React from "react";
import Report from "../../../Admin/RootAdmin/Components/Dashboard/Report";
import DeliveryType from "../../../Admin/RootAdmin/Components/Dashboard/DeliveryType";
import Cancelation from "../../../Admin/RootAdmin/Components/Dashboard/Cancelation";
import UserCountry from "../../../Admin/RootAdmin/Components/Dashboard/UserCountry";
import SellVolume from "../../../Admin/RootAdmin/Components/Dashboard/SellVolume";
import NewBook from "../../../Admin/RootAdmin/Components/Dashboard/NewBook";
import NewArrived from "../../../Admin/RootAdmin/Components/Dashboard/NewArrived";

const index = () => {
  return (
    <div>
      <div class=" ">
        <div class="  rounded-lg dark:border-gray-700">
          <div class="grid grid-cols-3 gap-4 mb-4">
            <div class="flex items-center justify-center  rounded ">
              <Report />
            </div>
            <div class="rounded bg-gray-50 ">
              <DeliveryType />
            </div>
            <div class="rounded ">
              <Cancelation />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-1 mb-4">
            <div class="rounded">
              <SellVolume />
            </div>
            <div class=" rounded bg-gray-50 ">
              <SellVolume />
            </div>
          </div>
          <div class="  mb-4 rounded bg-gray-50 custom-red-color">
            <NewBook />
          </div>
          <div class="  mb-4 rounded bg-gray-50 custom-red-color">
            <NewArrived />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
