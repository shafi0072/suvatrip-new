import { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import FlagIcon from "@mui/icons-material/Flag";
import ReactFlagsSelect from "react-flags-select";
// import 'react-flags-select/css/react-flags-select.css';

const PhoneInputField = () => {
  const [selectedCountry, setSelectedCountry] = useState("PK");

  const handleCountryChange = (countryCode) => {
    setSelectedCountry(countryCode);
  };

  return (
    <div className="my-3">
      <div className="">
        <ReactFlagsSelect
          selected={selectedCountry}
          onSelect={handleCountryChange}
          className="phone-input-flag bg-light h-full rounded-full"
          fullWidth={true}
        />
      </div>
      <div className="mt-3">
        <input
          type="text"
          placeholder="+880"
          className="form-control rounded-full py-2"
        />
      </div>
    </div>
  );
};

export default PhoneInputField;
