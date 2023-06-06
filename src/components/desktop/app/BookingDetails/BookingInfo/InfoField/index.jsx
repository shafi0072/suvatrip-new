import React from "react";
import Foram from "./Foram";
import Notification from "./Notification";
import PaymentType from "./PaymentType";
import ContactDetails from "./ContactDetails";
import UpgradeDeals from "./UpgradeDeals";
import AdditionalReq from "./AdditionalReq";

const index = ({data, setData, setMessage, message, setPaymentOption, userInfo}) => {
  return (
    <>
      <Notification />
      <PaymentType data={data} setData={setData} setPaymentOption={setPaymentOption}/>
      <ContactDetails data={data} setData={setData} userInfo={userInfo}/>
      <UpgradeDeals />
      <AdditionalReq setMessage={setMessage} message={message}/>
    </>
  );
};

export default index;
