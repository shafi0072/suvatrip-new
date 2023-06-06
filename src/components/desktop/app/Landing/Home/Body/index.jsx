import { body_array, body_data } from "@/src/constant/body/body_data";
import React from "react";
import BrowseByPropertyType from "./BrowseByPropertyType";
import Explore from "./explore";
import Offers from "./offers";

const index = () => {
  return (
    <div className="mt-3 mb-5 container">
      <Offers/>
      <BrowseByPropertyType/>
      <Explore/>
    </div>
  );
};

export default index;
