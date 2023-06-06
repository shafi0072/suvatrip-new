import { facilities } from "@/src/constant/admin/facality";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React, { useEffect, useState } from "react";

const Steps10 = ({
  enhanceData,
  setEnhanceData,
  handleOnChange2,
  handleOnChange3,
}) => {
  const [show, setShow] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [alternativeNumber, setAlternativeNumber] = useState("");

  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <div className="container " style={{ height: "60vh" }}>
      <div className="row ">
        <div className={`fade-in mt-5 col-md-6 ${show ? "is-visible" : ""}`}>
          <div className="">
            <h1 className="text-md text-center font-bold my-3">
              Facilities that are popular with guests
            </h1>

            <div style={{ width: "100%" }} className="border rounded p-3">
              <div className="row">
                {facilities.map((items, index) => (
                  <div className="col-md-4">
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={(e) => handleOnChange2(e)}
                            name={items}
                          />
                        }
                        label={items}
                      />
                    </FormGroup>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={`fade-in mt-5 col-md-6 ${show ? "is-visible" : ""}`}>
          <div className="">
            <h1 className="text-md text-center font-bold my-3">
              Amenities that are popular with guests
            </h1>

            <div style={{ width: "100%" }} className="border rounded p-3">
              <div className="row">
                {facilities.map((items, index) => (
                  <div className="col-md-4">
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name={items}
                            onChange={(e) => handleOnChange3(e)}
                          />
                        }
                        label={items}
                      />
                    </FormGroup>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps10;
