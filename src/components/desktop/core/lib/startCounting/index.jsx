import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
const StarCounting = ({ length, style }) => {
  return (
    <>
      {Array.from({ length: length }, (_, index) => (
        <StarRateIcon sx={style} />
      ))}
    </>
  );
};

export default StarCounting;
