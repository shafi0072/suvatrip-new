import CardSlider from "@/pages/user/save-travels/slider/CardSlider";
import { body_array, body_data } from "@/src/constant/body/body_data";
import React, { useEffect, useState } from "react";

const Explore = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <div className="mt-5">
      <h1
        className="text-3xl font-bold text-center"
        style={{ fontSize: "2em" }}
      >
        {body_data.heading3}
      </h1>
      <div className="mt-2 text-gray-500 text-center">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse
          iste, eligendi officiis nesciunt
        </p>
      </div>
      <div className="mt-3 row">
        <CardSlider />
      </div>
    </div>
  );
};

export default Explore;