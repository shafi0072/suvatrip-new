import React, { useContext } from "react";
import Progress1 from "./core/Progress/Progress1";
import { useState } from "react";
import Step1 from "./app/Step1";
import Step2 from "./app/step2";
import { useEffect } from "react";
import { UserContent } from "@/src/store/AuthContent";
import { useRouter } from "next/router";
import { baseUrl } from "@/src/config/serverConfig";

const parseJwt = (token) => {
  if (!token) {
    return null;
  }
  return JSON.parse(atob(token.split(".")[1]));
};

const index = () => {
  const router = useRouter();

  const [progress1, setProgress1] = useState(10);
  const [progress2, setProgress2] = useState(0);
  const [enhance, setEnhance] = useState({
    NameOfProperty: "",
    email: "",
    category: "Hotel",
    contactName: "",
    numbersOfRoom: "",
    phoneNumber: "",
    alternativePhoneNumber: "",
    StreetAddress: "",
    addressLine2: "",
    Country: "Nepal",
    City: "",
    postCode: "",
    Location: "",
    mapUrl: "",
    Stars: "",
    images: [],
    checkinTime: "",
    checkOutTime: "",
  });

  const [selected, setSelected2] = useState(null);
  const [address, setAddress] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { userInfo, setUserInfo } = useContext(UserContent);

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

  const handleApiOnSubmit = (e) => {
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
                  NameOfProperty: enhance.NameOfProperty,
                  Location: address,
                  mapUrl: {
                    lat: parseFloat(selected?.lat),
                    lng: parseFloat(selected?.lng),
                  },
                  email: enhance?.email,
                  category: enhance.category,
                  contactName: enhance.contactName,
                  phoneNumber: enhance.phoneNumber,
                  alternativePhoneNumber: enhance?.alternativePhoneNumber,
                  StreetAddress: enhance.StreetAddress,
                  addressLine2: enhance?.addressLine2,
                  Country: enhance.Country,
                  City: enhance.City,
                  postCode: enhance.postCode,
                  Stars: enhance.Stars,
                  images: data?.cdnUrls,
                }),
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log({ data });
                  debugger;
                  if (data) {
                    window.location.assign("/");
                  }
                })
                .catch((err) => {
                  console.log({ err });
                  debugger;
                });
            }
          });
      })
      .catch((err) => {});
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-6">
          <div>
            <Progress1 progress={progress1} />
          </div>
        </div>
        <div className="col-md-6">
          <div>
            <Progress1 progress={progress2} />
          </div>
        </div>
      </div>

      {progress1 !== 100 && (
        <Step1
          setSelected2={setSelected2}
          setProgress2={setProgress2}
          selected={selected}
          progress1={progress1}
          setProgress1={setProgress1}
          enhance={enhance}
          setEnhance={setEnhance}
          address={address}
          setAddress={setAddress}
        />
      )}
      {progress1 === 100 && progress2 < 100 && (
        <Step2
          handleApiOnSubmit={handleApiOnSubmit}
          user_id={userInfo?.user_id}
          setProgress2={setProgress2}
          progress2={progress2}
          enhance={enhance}
          uploadedFiles={uploadedFiles}
          setUploadedFiles={setUploadedFiles}
          setEnhance={setEnhance}
          address={address}
          setAddress={setAddress}
        />
      )}
    </div>
  );
};

export default index;
