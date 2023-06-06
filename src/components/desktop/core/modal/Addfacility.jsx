import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import { useRouter } from "next/router";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import screenSize from "../lib/MediaQuery/ScreenSize";
import { facilities } from "@/src/constant/admin/facality";

const Addfacility = ({ open, handleClose, handlePropertyOnChange2 }) => {
  const resulation = screenSize("600px");
  const style = {
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: resulation ? "90%" : "50%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "20px",
  };
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  const router = useRouter();

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="mt-3 row">
            <label htmlFor="" className="text-md font-bold text-center">
              Facility
            </label>
            <div className="border p-3 rounded mt-2">
              <div className="row">
                {facilities.map((items) => (
                  <div className="col-md-3">
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="facelity"
                          value={items}
                          onChange={handlePropertyOnChange2}
                        />
                      }
                      label={items}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Addfacility;
