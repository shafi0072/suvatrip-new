import React, { useCallback, useEffect, useState } from "react";
import Box from "@mui/material/Box";

import Layout from "./core/layout";
import Step1 from "./app/steps/Step1";
import Step2 from "./app/steps/Step2";
import Step3 from "./app/steps/Step3";
import Step4 from "./app/steps/Step4";
import Step5 from "./app/steps/Step5";
import Step6 from "./app/steps/Step6";
import Steps7 from "./app/steps/Steps7";
import Step8 from "./app/steps/Step8";
import Steps9 from "./app/steps/Steps9";
import Steps10 from "./app/steps/Steps10";
import Steps11 from "./app/steps/Steps11";
import Steps12 from "./app/steps/Steps12";
import Steps13 from "./app/steps/Steps13";
import jwt from "jsonwebtoken";
import { useRouter } from "next/router";
import Steps14 from "./app/steps/Steps14";
import { baseUrl } from "@/src/config/serverConfig";
import { useContext } from "react";
import { UserContent } from "@/src/store/AuthContent";
import { parse } from "date-fns";

const parseJwt = (token) => {
  if (!token) {
    return null;
  }
  return JSON.parse(atob(token.split(".")[1]));
};

const index = ({ children }) => {
  const [enhanceData, setEnhanceData] = useState({
    NameOfProperty: "",
    category: "",
    contactName: "",
    phoneNumber: "",
    alternativePhoneNumber: "",
    StreetAddress: "",
    addressLine2: "",
    Country: "",
    City: "",
    postCode: "",
    Location: "",
    mapUrl: "",
    Stars: "",
    overView: "Test",
    Amenities: [],
    roomTypes: "",
    roomName: "",
    smockPolicy: "",
    numberOfRooms: "",
    roomSize: "",
    images: [],
    facelity: [],
    roomPriceTitle: "test",
    parking: "",
    breakfast: "",
    Languages: "",
    sleep: 0,
    Per_Night: "",
    cancelation: "",
    checkinTime: "",
    checkOutTime: "",
    protectAccidental: "",
    Children: "",
    pets: "",
  });
  const { userInfo, setUserInfo } = useContext(UserContent);
  const [progress1, setProgress1] = React.useState(0);
  const [progress2, setProgress2] = React.useState(0);
  const [progress3, setProgress3] = React.useState(0);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [selected, setSelected] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const Storage = localStorage.getItem("accessToken");
    let user = JSON.stringify(Storage);
    if (user) {
      const decodedJwt = parseJwt(localStorage.getItem("accessToken"));
      setUserInfo(decodedJwt);
      if (decodedJwt) {
        if (decodedJwt.exp * 1000 < Date.now()) {
          router.push("/admin");
          localStorage.removeItem("accessToken");
        }
      } else {
        router.push("/admin");
      }
    } else {
      router.push("/admin");
    }
  }, [userInfo]);
  const handleOnChange = (e) => {
    const newEnhanceProperty = { ...enhanceData };
    newEnhanceProperty[e.target.name] = e.target.value;
    setEnhanceData(newEnhanceProperty);
  };

  const handleOnChange2 = (e) => {
    const newEnhanceProperty = { ...enhanceData };
    newEnhanceProperty.facelity.push(e.target.name);

    setEnhanceData(newEnhanceProperty);
  };
  const handleOnChange3 = (e) => {
    const newEnhanceProperty = { ...enhanceData };
    newEnhanceProperty.Amenities.push(e.target.name);
    setEnhanceData(newEnhanceProperty);
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const formData = new FormData();
      uploadedFiles.forEach((file) => {
        formData.append("files", file);
      });

      fetch(`${baseUrl}/hotel/users/${userInfo.user_id}/isAdmin`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isAdmin: "Pending",
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          fetch(`${baseUrl}/image/upload`, {
            method: "POST",
            body: formData,
          })
            .then((res) => res.json())
            .then((data) => {
              if (data?.cdnUrls?.length > 0) {
                fetch(`${baseUrl}/hotel/users/${userInfo.user_id}/listed`, {
                  method: "put",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    NameOfProperty: enhanceData.NameOfProperty,
                    Location: enhanceData.Location,
                    mapUrl: {
                      lat: parseFloat(selected?.lat),
                      lng: parseFloat(selected?.lng),
                    },
                    category: enhanceData.category,
                    contactName: enhanceData.contactName,
                    phoneNumber: enhanceData.phoneNumber,
                    StreetAddress: enhanceData.StreetAddress,
                    Country: enhanceData.Country,
                    City: enhanceData.City,
                    postCode: enhanceData.postCode,
                    cancelation: enhanceData.cancelation.toString(),
                    checkinTime: enhanceData.checkinTime.toString(),
                    checkOutTime: enhanceData.checkOutTime.toString(),
                    Children: enhanceData.Children,
                    pets: enhanceData.pets,
                    Stars: enhanceData.Stars,
                    overView: enhanceData.overView,
                    Amenities: enhanceData.Amenities,
                    rooms: {
                      roomTitle: enhanceData.roomName,
                      sqft: enhanceData.roomSize,
                      images: [data?.cdnUrls[0]],
                      priceCategory: [
                        {
                          roomPriceTitle: enhanceData.roomPriceTitle,
                          facelity: enhanceData.facelity,
                          sleep: enhanceData.sleep,
                          Per_Night: enhanceData.Per_Night,
                        },
                      ],
                    },
                    facelity: enhanceData.facelity,
                    images: data?.cdnUrls,
                  }),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    if (data) {
                      window.location.assign("/");
                    }
                  })
                  .catch((err) => {});
              }
            });
        })
        .catch((err) => {});
    },
    [enhanceData]
  );

  return (
    <Layout
      progress1={progress1}
      setProgress1={setProgress1}
      progress2={progress2}
      enhanceData={enhanceData}
      setProgress2={setProgress2}
      progress3={progress3}
      setProgress3={setProgress3}
      handleSubmit={handleSubmit}
    >
      {progress2 < 20 && (
        <>
          {progress1 < 20 && <Step1 />}
          {progress1 === 20 && (
            <Step2
              enhanceData={enhanceData}
              setEnhanceData={setEnhanceData}
              handleOnChange={handleOnChange}
            />
          )}
          {progress1 === 40 && (
            <Step3
              enhanceData={enhanceData}
              setEnhanceData={setEnhanceData}
              handleOnChange={handleOnChange}
            />
          )}
          {progress1 === 60 && (
            <Step4
              enhanceData={enhanceData}
              setEnhanceData={setEnhanceData}
              handleOnChange={handleOnChange}
            />
          )}
          {progress1 === 80 && (
            <Step5
              selected={selected}
              setSelected={setSelected}
              enhanceData={enhanceData}
              setEnhanceData={setEnhanceData}
              handleOnChange={handleOnChange}
            />
          )}
          {progress1 === 100 && (
            <Step6 enhanceData={enhanceData} setEnhanceData={setEnhanceData} />
          )}
        </>
      )}
      {progress1 === 100 && progress3 < 20 && (
        <>
          {progress2 === 20 && (
            <Steps7
              enhanceData={enhanceData}
              setEnhanceData={setEnhanceData}
              handleOnChange={handleOnChange}
            />
          )}
          {progress2 === 40 && (
            <Step8
              enhanceData={enhanceData}
              setEnhanceData={setEnhanceData}
              handleOnChange={handleOnChange}
            />
          )}
          {progress2 === 60 && (
            <Steps9
              enhanceData={enhanceData}
              setEnhanceData={setEnhanceData}
              handleOnChange={handleOnChange}
            />
          )}
          {progress2 === 80 && (
            <Steps10
              enhanceData={enhanceData}
              setEnhanceData={setEnhanceData}
              handleOnChange2={handleOnChange2}
              handleOnChange3={handleOnChange3}
            />
          )}
          {progress2 === 100 && (
            <Steps11
              enhanceData={enhanceData}
              setEnhanceData={setEnhanceData}
            />
          )}
        </>
      )}
      {progress1 === 100 && progress2 === 100 && (
        <>
          {progress3 === 50 && (
            <Steps12
              uploadedFiles={uploadedFiles}
              setUploadedFiles={setUploadedFiles}
              enhanceData={enhanceData}
              setEnhanceData={setEnhanceData}
            />
          )}
          {progress3 === 100 && (
            <Steps13
              enhanceData={enhanceData}
              setEnhanceData={setEnhanceData}
              handleOnChange={handleOnChange}
            />
          )}
        </>
      )}
    </Layout>
  );
};

export default index;
