import React, { useState } from "react";
import Header from "./Header";
import Body from "./Body";
import BottomBar from "../../../core/shared/bottombar";
import AppBar from "../../../core/shared/bottombar";
import { useContext } from "react";
import { UserContent } from "@/src/store/AuthContent";
import Footer from '@/src/components/desktop/core/shared/Footer'
const index = () => {
  const [appBar, setAppBar] = useState(true);
  
  
  return (
    <div>
      <Header />
      <Body />
      <BottomBar />
      <div className={appBar ? "appbar" : "appbarHide"}>
        <AppBar popup={true} setAppBar={setAppBar} />
      </div>
      <Footer/>
    </div>
  );
};

export default index;
