import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Maps from "@/src/components/desktop/core/Maps";
import AutoLocation from "../../../Landing/Home/Header/AutoLocation";
const Step5 = ({
  enhanceData,
  setEnhanceData,
  handleOnChange,
  setSelected,
  selected,
}) => {
  const [show, setShow] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [alternativeNumber, setAlternativeNumber] = useState("");

  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <div className="container " style={{ height: "80vh" }}>
      <div className="row d-flex justify-content-center">
        <div className={`fade-in mt-5 col-md-6 ${show ? "is-visible" : ""}`}>
          <div className="text-center">
            <h1 className="text-md text-center font-bold my-3">
              Locate Your Hotel In Google Map
            </h1>

            <div style={{ width: "100%" }} className="bg-gray-200 rounded">
              <AutoLocation selected={selected} setSelected={setSelected} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3" style={{ width: "100%" }}>
        <Maps stores={[{ lat: selected?.lat, lng: selected?.lng }]} />
      </div>
    </div>
  );
};

export default Step5;
