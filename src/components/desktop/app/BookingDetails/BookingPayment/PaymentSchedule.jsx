import React from "react";

const PaymentSchedule = () => {
  return (
    <div class="relative group mb-3">
      <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div class="relative px-7 py-3 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none ">
        <h1 className=" text-md text-blue-500 font-bold ">
          Your Payment Schedule
        </h1>
        <h1 className=" text-md  mt-2">
          No payment today you will pay when you stay
        </h1>
      </div>
    </div>
  );
};

export default PaymentSchedule;
