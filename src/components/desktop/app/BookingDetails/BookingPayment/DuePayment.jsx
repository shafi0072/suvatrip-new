import React from "react";

const DuePayment = () => {
  return (
    <div class="relative group mb-3">
      <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div class="relative px-7 py-3 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none ">
        <h1 className=" text-md text-red-500 font-bold ">You have to pay</h1>

        <h1 className=" text-md  mt-2">
          Free cancellation until 23:59 on 8 Oct
        </h1>
        <div className="my-2 d-flex justify-content-between">
          <h1 className=" text-md  mt-2">From 0:00 on 9 Oct</h1>
          <h1 className=" text-md text-red-500  mt-2">PKR: 23998/-</h1>
        </div>
      </div>
    </div>
  );
};

export default DuePayment;
