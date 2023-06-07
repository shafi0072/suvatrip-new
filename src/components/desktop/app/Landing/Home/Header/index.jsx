import React, { useEffect, useState } from "react";
import Category from "./category";
import BookingTimeTwo from "./bookingTimeTwo";
import Aos from "aos";
import backgroundImagesArray from "@/src/components/desktop/core/lib/backgroundImages/landingImage";
import { useMediaQuery } from "@mui/material";
import screenSize from "@/src/components/desktop/core/lib/MediaQuery/ScreenSize";
import BookingTimeThree from "./BookingTimeThree";
import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('@/src/components/desktop/core/shared/Navbar'));
import BookingTimeThreeMobile from "./BookingTimeThreeMobile";


const index = () => {
  // query Dependesis start

  // query Dependesis end

  // state controller start
  const [show, setShow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollValue, setScrollValue] = useState(0);
  const [backgroundImage, setBacgroundImage] = useState(
    "https://www.jeetbrothers.com/uploaded-files/category-banner/Family-Tour-Packages119.jpg"
  );
  const resulation = screenSize('600px')
  // state controller start

  // useEffect Control Start
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 427) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled, scrollValue]);

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

  // useEffect Controll end



  return (
    <div className={`fade-in mb-5 ${show ? "is-visible" : ""}`}>
      <div
        style={{
          backgroundImage: `linear-gradient(rgb(251 32 32 / 39%), rgb(0 0 0 / 55%)), url(https://www.jeetbrothers.com/uploaded-files/category-banner/Family-Tour-Packages119.jpg)`,
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // height: screenSize("600px") ? "80vh" : "70vh",
        }}>

        <Navbar />
        <div
          className=" d-flex align-items-center">
          <div className="container pb-5 mt-4">
            <div className="mb-3">
              <div className="col-md-12 text-center">
                <h1
                  className={`${screenSize("600px") ? "text-md mt-4" : "text-4xl mt-5"
                    } font-bold text-light`}
                >
                  Traveling Made Easier
                </h1>
              </div>
            </div>


            <div data-aos={isScrolled ? "zoom-out" : "fade-down"}>
              {resulation ? <BookingTimeThreeMobile /> : <BookingTimeThree />}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default index;