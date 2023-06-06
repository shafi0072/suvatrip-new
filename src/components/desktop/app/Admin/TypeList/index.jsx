import React from "react";
import { useRouter } from "next/router";
const index = () => {
  const router = useRouter()
  return (
    <div className="container my-5" style={{ height: "70vh" }}>
      <h1 className="text-md">
        List your property on Booking.com and start welcoming guests in no time!
      </h1>
      <p className="mt-2 text-md">
        To get started, choose the type of property you want to list on
        suvatrip.com
      </p>
      <div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg my-4 ">
          <div className="d-flex justify-content-center">
            <img
              style={{ width: "40%" }}
              src="https://png.pngtree.com/png-vector/20190521/ourmid/pngtree-hotel-icon-for-personal-and-commercial-use-png-image_1044892.jpg"
              alt="Sunset in the mountains"
            />
          </div>
          <div className="px-6 py-4 text-center">
            <div className="font-bold text-xl mb-2">Hotel</div>
            <p className="text-gray-700 text-base text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className="px-2 py-2">
            <button className="btn btn-outline-primary form-control" onClick={() => router.push('/admin/typeBooking/steps')}>
              List Your Property
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
