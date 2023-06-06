import React from "react";
import BookingDetails from "./BookingDetails";
import DuePayment from "./DuePayment";
import PaymentSchedule from "./PaymentSchedule";
import PriceSummary from "./PriceSummary";
import PaymentForm from "./PaymentForm";
const index = ({ setTotalPrice }) => {
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-5">
          <div className="my-2">
            <BookingDetails />
          </div>
          <div className="my-2">
            <PriceSummary setTotalPrice={setTotalPrice} />
          </div>
          <div className="my-2">
            <PaymentSchedule />
          </div>

          <div className="my-2">
            <DuePayment />
          </div>
        </div>
        <div className="col-md-7">
          <PaymentForm />
        </div>
      </div>
    </div>
  );
};

export default index;
