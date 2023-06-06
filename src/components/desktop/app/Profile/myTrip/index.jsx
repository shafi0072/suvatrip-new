import React from "react";
import { useState } from "react";
import screenSize from "../../../core/lib/MediaQuery/ScreenSize";
import Category from "./category";
import MyHistory from "./MyHistory";

const index = () => {
  const [category, setCategory] = useState("upcoming");
  const resulation = screenSize("600px");
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-md-4">
          <Category category={category} setCategory={setCategory} />
        </div>
        <div className={resulation ? "col-md-8 my-3" : "col-md-8"}>
          <MyHistory />
        </div>
      </div>
    </div>
  );
};

export default index;
