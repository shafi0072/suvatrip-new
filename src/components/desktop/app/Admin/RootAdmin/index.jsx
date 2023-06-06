import { UserContent } from "@/src/store/AuthContent";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import screenSize from "../../../core/lib/MediaQuery/ScreenSize";
import Dashboard from "./Components/Dashboard";
import PersonalInfo from "./Components/PersonalInfo";
import ProfileBar from "./profileBar";
import Rooms from "./Components/Rooms";
import { useRouter } from "next/router";
import { baseUrl } from "@/src/config/serverConfig";
import Galary from "./Components/Galary";

const parseJwt = (token) => {
  if (!token) {
    return null;
  }
  return JSON.parse(atob(token.split(".")[1]));
};

const index = () => {
  const resulation = screenSize("600px");
  const [menu, setMenu] = useState("Rooms");
  const { userInfo, setUserInfo } = useContext(UserContent);
  const [hotelInfo, setHotelInfo] = useState({});
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

  useEffect(() => {
    fetch(`${baseUrl}/hotel/users/${userInfo?.user_id}/listed`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setHotelInfo(data))
      .catch((err) => {});
  }, [hotelInfo]);

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-3">
          <ProfileBar
            menu={menu}
            setMenu={setMenu}
            hotelInfo={hotelInfo}
            setHotelInfo={setHotelInfo}
          />
        </div>
        <div className="col-md-9">
          {menu === "Dashboard" && <Dashboard />}
          {menu === "Personal info" && (
            <PersonalInfo hotelInfo={hotelInfo} setHotelInfo={hotelInfo} />
          )}
          {menu === "Rooms" && (
            <Rooms hotelInfo={hotelInfo} setHotelInfo={hotelInfo} />
          )}
          {menu === "Photos Galary" && <Galary hotelInfo={hotelInfo} />}
        </div>
      </div>
    </div>
  );
};

export default index;
