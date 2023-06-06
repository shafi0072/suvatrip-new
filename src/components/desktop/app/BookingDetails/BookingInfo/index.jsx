import React, { useContext, useEffect } from "react";
import HotelInfo from "./HotelInfo";
import PriceSummary from "./PriceSummary";
import Reciption from "./Reciption";
import RoomInfo from "./RoomInfo";
import Form from "./InfoField";
import { UserContent } from "@/src/store/AuthContent";
import { useRouter } from "next/router";
import AuthModal from "../../../core/modal/AuthModa";
import { useState } from "react";

const parseJwt = (token) => {
  if (!token) {
    return null;
  }
  return JSON.parse(atob(token.split(".")[1]));
};

const index = ({
  myQuery,
  data,
  setData,
  localData,
  setMessage,
  message,
  setPaymentOption,
  userInfo,
  setTotalPrice,
  totalPrice,
}) => {
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-7">
          <Form
            data={data}
            setData={setData}
            setMessage={setMessage}
            message={message}
            setPaymentOption={setPaymentOption}
            userInfo={userInfo}
          />
        </div>
        <div className="col-md-5">
          <HotelInfo myQuery={myQuery} />
          <div className="my-2">
            <RoomInfo myQuery={myQuery} data={localData} />
          </div>
          <div className="my-2">
            <PriceSummary
              myQuery={myQuery}
              setTotalPrice={setTotalPrice}
              totalPrice={totalPrice}
            />
          </div>
          <div className="my-2">
            <Reciption />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
