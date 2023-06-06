import React from "react";
import { DateRangePicker } from "react-date-range";
import { Box, Button } from "@mui/material";
import Modal from "@mui/material/Modal";
// import SignUp from '../../app/Auth/SignUp'
import SignUp from "../../app/Auth/SignIn";
const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "white",
  width: "30%",
};
const AuthModal = ({ open, handleClose, redirect }) => {
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        contentLabel="Example Modal"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="rounded-4">
          <SignUp
            handleClose={handleClose}
            handleOnClose={handleClose}
            redirect={redirect}
          />
        </Box>
      </Modal>
    </>
  );
};

export default AuthModal;
