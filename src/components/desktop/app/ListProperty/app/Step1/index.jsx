import React from "react";
import Welcome from "./Welcome";
import BasicInfo from "./BasicInfo";
import Location from "./Location";

const index = ({
  progress1,
  setProgress1,
  enhance,
  setEnhance,
  setProgress2,
  selected,
  setSelected2,
  address,
  setAddress,
}) => {
  return (
    <div>
      {progress1 <= 10 && (
        <Welcome progress1={progress1} setProgress1={setProgress1} />
      )}
      {progress1 >= 20 && (
        <BasicInfo
          setProgress2={setProgress2}
          progress1={progress1}
          setProgress1={setProgress1}
          selected={selected}
          setSelected={setSelected2}
          address={address}
          setAddress={setAddress}
          enhance={enhance}
          setEnhance={setEnhance}
        />
      )}
    </div>
  );
};

export default index;
