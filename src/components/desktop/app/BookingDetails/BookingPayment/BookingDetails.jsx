import React from "react";
import screenSize from "../../../core/lib/MediaQuery/ScreenSize";

const BookingDetails = () => {
  const resulation = screenSize("600px");
  return (
    <div class="relative group mb-3">
      <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div class="relative px-7 py-3 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none ">
        <h1 className=" text-md text-blue-500 font-bold ">
          Your Booking Details:
        </h1>
        <div>
          <div className="row my-3">
            <div
              className={`${
                resulation
                  ? "col-md-6 rounded-full"
                  : "col-md-6 border-r-2 rounded-full border-blue-500"
              }`}
            >
              <h1 className="text-md text-green-500 font-bold my-2">
                Check-in
              </h1>
              <h1 className="text-md  my-2">Monday 10 Oct 2022</h1>
              <h1 className="text-md  my-2">From 0:00</h1>
            </div>
            <div
              className={`${
                resulation
                  ? "col-md-6 mt-3 rounded-full"
                  : "col-md-6 px-5 border-l-2 rounded-full border-blue-500"
              }`}
            >
              <h1 className="text-md text-red-500 font-bold my-2">Check-out</h1>
              <h1 className="text-md  my-2">Monday 10 Oct 2022</h1>
              <h1 className="text-md  my-2">From 0:00</h1>
            </div>
          </div>
          <h1 className="text-md  my-2">Total lenght of stay:</h1>
          <h1 className="text-md text-green-500 font-bold">3 Nights</h1>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
