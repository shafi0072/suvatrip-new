import React from "react";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
const Checkmark = ({ text, color, size, className }) => {
  return (
    <div className="d-flex align-items-center">
      <CheckCircleOutlineOutlinedIcon sx={{ color: color, fontSize: size }} />
      <p className={className}>{text}</p>
    </div>
  );
};

export default Checkmark;
