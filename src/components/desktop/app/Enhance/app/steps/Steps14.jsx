import { Cards_data } from "@/src/constant/payments/cardTypes";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Steps14 = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <div className="container ">
      <div className="row d-flex justify-content-center">
        <div className={`fade-in mt-5 col-md-6 ${show ? "is-visible" : ""}`}>
          <div className="text-center">
            <p className="text-xl text-green-500">
              Cool You are almost in the way of done
            </p>
            <h1 className="text-md text-center font-bold my-3">
              what is the payment method for your clients?
            </h1>

            <div style={{ width: "100%" }} className="border rounded p-3">
              <FormControlLabel control={<Checkbox />} label="Online" />
              <FormControlLabel control={<Checkbox />} label="Cash" />
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className={`fade-in mt-5 col-md-6 ${show ? "is-visible" : ""}`}>
          <div className="text-center">
            <h1 className="text-md text-center font-bold my-3">
              What is the card type you guys are accept mostly?
            </h1>
            <div style={{ width: "100%" }} className="border rounded p-3">
              <div className="row">
                {Cards_data.map((items, index) => (
                  <div className="col-md-3">
                    <FormControlLabel
                      control={<Checkbox name={items.name} />}
                      label={
                        <img
                          src={items.img}
                          style={{ height: "30px", width: "100%" }}
                        />
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className={`fade-in mt-5 col-md-6 ${show ? "is-visible" : ""}`}>
          <div className="text-center">
            <h1 className="text-md text-center font-bold my-3">
              Languages spoken
            </h1>

            <div style={{ width: "100%" }} className="border rounded p-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps14;
