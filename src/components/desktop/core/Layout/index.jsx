import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import SideBar from "../shared/Sidebar";
const index = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
      {/* <SideBar/> */}
    </div>
  );
};

export default index;
