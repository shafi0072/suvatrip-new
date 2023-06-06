import React, { useState } from "react";
import StepperLayout from "./Layout";
import Step1 from "./Step1";
import Step2 from "./step2";
import Step3 from "./Step3";
import Step4 from "./step4";
import Step5 from "./Step5";
const index = () => {
  const [navigation, setNavigation] = useState("Overview");
  const [stepsData, setStepsData] = useState({
    propertyName: "",
    Star: "",
    ContactName: "",
    street: "",
    addressLine2: "",
    country: "",
    city: "",
    postCode: "",
    PhoneNumber: "",
    AlternativePhoneNumber: "",
    roomType: "",
    RoomName: "",
    CustomName: "",
    SmokingPolicy: "",
    NumberOfRooms: "",
    RoomSize: "",
    RoomSizeType: "",
    perNight: "",
    parking: "",
    language: "",
    breakfast: "",
  });
  return (
    <div className="container">
      <StepperLayout navigation={navigation} setNavigation={setNavigation} />
      <div className="my-4">
        {navigation === "Overview" && (
          <Step1
            setNavigation={setNavigation}
            setStepsData={setStepsData}
            stepsData={stepsData}
          />
        )}
        {navigation === "Choose Your Room" && (
          <Step2
            setNavigation={setNavigation}
            stepsData={stepsData}
            setStepsData={setStepsData}
          />
        )}
        {navigation === "Amenities" && (
          <Step3
            setNavigation={setNavigation}
            stepsData={stepsData}
            setStepsData={setStepsData}
          />
        )}
        {navigation === "Hotel Rules" && (
          <Step4 setNavigation={setNavigation} />
        )}
        {navigation === "What’s Nearby" && (
          <Step5 setNavigation={setNavigation} />
        )}
      </div>
    </div>
  );
};

export default index;
