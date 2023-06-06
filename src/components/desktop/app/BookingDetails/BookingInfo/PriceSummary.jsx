import React from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
const PriceSummary = ({ myQuery, setTotalPrice, totalPrice }) => {
  const mainDiscount = parseInt(myQuery?.discount) | 0;
  const discount = mainDiscount / 100;
  const discountAmount = parseInt(myQuery?.perNight) * discount;
  const discountedPrice = parseInt(myQuery?.perNight) - discountAmount;

  const tax = parseInt(myQuery?.tax);
  const vat = parseInt(myQuery?.vat);
  const totalFees = tax + vat;
  const afterFess = (discountedPrice * totalFees) / 100;
  const totalPrices = (discountedPrice + afterFess).toFixed(2);
  setTotalPrice(totalPrices);
  return (
    <div class="relative group mb-3">
      <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div class="relative px-7 py-3  bg-white ring-1 ring-gray-900/5 rounded-lg leading-none ">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="text-md ">Price Summary </h1>
          <h1 className="text-md text-red-500">
            View Full Breakup <KeyboardArrowDownOutlinedIcon />{" "}
          </h1>
        </div>

        <div className="d-flex justify-content-between align-items-center my-3 border-b pb-2">
          <h1 className="text-md ">Room Charges (1 Room 1 Night) </h1>
          <h1 className="text-md ">${myQuery?.perNight} </h1>
        </div>

        {parseInt(myQuery?.discount) > 0 && (
          <div className="d-flex justify-content-between align-items-center my-3 border-b pb-2">
            <h1 className="text-md "> Discount </h1>
            <h1 className="text-md ">{parseInt(myQuery?.discount) | 0}% </h1>
          </div>
        )}
        <div className="d-flex justify-content-between align-items-center my-3 border-b pb-2">
          <h1 className="text-md ">Price After Discount </h1>
          <h1 className="text-md ">$ {discountedPrice} </h1>
        </div>

        <div className="d-flex justify-content-between align-items-center my-3 border-b pb-2">
          <h1 className="text-md ">Taxes & Fees </h1>
          <h1 className="text-md ">${afterFess} </h1>
        </div>
        <div className="d-flex justify-content-between align-items-center my-3 ">
          <h1 className="text-md text-green-500 font-bold">Payable Now </h1>
          <h1 className="text-md text-red-500 font-bold">
            ${(discountedPrice + afterFess).toFixed(2)}{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PriceSummary;
