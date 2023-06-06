import React from "react";
import Header from "./Header";
import Priority from "./Priority";
import Describe from "./Describe";
import Description from "./Description";
import AuthModal from "../../core/modal/AuthModa";
import { useState } from "react";
const index = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Header handleOpen={handleOpen} />
      <Priority />
      <Describe />
      <Description />
      <AuthModal open={open} handleClose={handleClose} redirect={"/admin"} />
    </div>
  );
};

export default index;
