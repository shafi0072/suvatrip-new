import screenSize from "@/src/components/desktop/core/lib/MediaQuery/ScreenSize";
import { body_array, body_data } from "@/src/constant/body/body_data";
import React, { useEffect, useState } from "react";

const Offers = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <div className={`fade-in rounded-2 ${show ? "is-visible " : ""}`}>
      <h1
        className={`text-3xl font-bold text-center ${
          screenSize("2000px") ? "" : "mt-48"
        }`}
      >
        {body_data.heading}
      </h1>
      <p className="text-center text-gray-400">{body_data.subHeading}</p>
      <div className="mt-4 row">
        {body_array.map((items, index) => (
          <div
            className="col-md-3 overflow-hidden rounded-2 relative my-2"
            key={index}
          >
            <div
              style={{
                backgroundImage: `linear-gradient(rgb(0 0 0 / 49%), rgb(0 0 0 / 69%)), url(${items.image})`,

                height: "400px",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
              className={`fade-in rounded-2 hoverCard ${
                show ? "is-visible " : ""
              }`}
            ></div>
            <div className="absolute bottom-80 top-0">
              <h1 className="text-3xl font-bold text-light p-5">
                {items.title}
              </h1>
            </div>
            <button className=" btn btn-secondary mx-5 absolute bottom-6">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
