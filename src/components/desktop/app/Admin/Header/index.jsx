import Aos from "aos";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import backgroundImagesArray from "../../../core/lib/backgroundImages/landingImage";
import screenSize from "../../../core/lib/MediaQuery/ScreenSize";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const index = ({ handleOpen }) => {
  const resulation = screenSize("600px");
  const [show, setShow] = useState(false);
  const [scrollValue, setScrollValue] = useState(0);
  const [backgroundImage, setBacgroundImage] = useState(
    "https://himalayantrekking.com/wp-content/uploads/2017/07/dhampus-sarangkot-1-3.jpg"
  );

  // state controller start

  // useEffect Control Start

  useEffect(() => {
    Aos.init({
      // add your AOS configuration here
    });
  }, []);
  useEffect(() => {
    setShow(true);
  }, []);
  useEffect(() => {
    const randomNumber = Math.floor(
      Math.random() * backgroundImagesArray.length
    );
    setTimeout(() => {
      setBacgroundImage(backgroundImagesArray[randomNumber]);
    }, 5000);
  }, [backgroundImage]);
  return (
    <div className={`fade-in ${show ? "is-visible" : ""}`}>
      <div
        className="bg-sky-800"
        style={{
          backgroundImage: `linear-gradient(rgb(0 0 0 / 49%), rgb(0 0 0 / 69%)), url(${backgroundImage})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // height: screenSize("600px") ? "80vh" : "70vh",
        }}
      >
        <div className="container">
          <div className="row py-4">
            <div
              className="col-md-6 py-4 px-4 mt-5 rounded-4"
              style={{ background: "#0000007a" }}
            >
              <LeftContent />
            </div>
            <div className="col-md-6 ">
              <RightContent handleOpen={handleOpen} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
