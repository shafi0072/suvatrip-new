import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
const DeleteAccount = () => {
  const [isDeleteCleaked, setIsDeleteCleaked] = useState(false);

  return (
    <div className="row">
      <div className="col-md-4">
        <h1 className="text-xl text-light">Delete Account</h1>
      </div>
      <div className="col-md-4">
        {!isDeleteCleaked && (
          <div>
            <h1 className="text-xl text-light">
              Permanently delete your Suvatrip.com account
            </h1>
          </div>
        )}
        {isDeleteCleaked && (
          <div>
            <h1 className="text-xl text-light">
              Why do you want to delete your account?
            </h1>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  className="text-light text-md"
                  control={
                    <Radio
                      sx={{
                        color: "white",
                        "&.Mui-checked": {
                          color: "white",
                        },
                      }}
                    />
                  }
                  label="I get to many emails from Suvatrip.com"
                />
                <FormControlLabel
                  value="male"
                  className="text-light text-md"
                  control={
                    <Radio
                      sx={{
                        color: "white",
                        "&.Mui-checked": {
                          color: "white",
                        },
                      }}
                    />
                  }
                  label="I want to use a different email address for my account"
                />
                <FormControlLabel
                  value="other"
                  className="text-light text-md"
                  control={
                    <Radio
                      sx={{
                        color: "white",
                        "&.Mui-checked": {
                          color: "white",
                        },
                      }}
                    />
                  }
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </div>
        )}
      </div>
      <div className="col-md-4">
        <div className="text-light text-xl d-flex justify-content-end">
          {!isDeleteCleaked && (
            <h1 onClick={() => setIsDeleteCleaked(true)}>
              <DeleteIcon /> Delete
            </h1>
          )}
          {isDeleteCleaked && (
            <div className="d-flex align-items-center">
              <button className="btn btn-primary mx-2">Delete Account</button>
              <button
                className=" py-2 px-4 rounded-2 bg-gray-300 text-gray-700 text-sm"
                onClick={(e) => setIsDeleteCleaked(false)}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
