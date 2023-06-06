import React from "react";

const RightContent1 = () => {
  return (
    <>
      <div className="bg-light py-5 px-3 ">
        <img
          style={{ width: "60px", height: "60px", marginTop: "20px" }}
          src="https://cdn-icons-png.flaticon.com/512/724/724839.png"
          alt=""
        />
        <h1 className="text-xl font-bold my-2">Easily import details</h1>
        <p className="text-sm py-2">
          To save you time, many of the details from your existing listings can
          be imported.
        </p>

        <img
          style={{ width: "80px", height: "80px", marginTop: "60px" }}
          src="https://cdn2.iconfinder.com/data/icons/solid-black-labels/128/Discount_copy-512.png"
          alt=""
        />
        <h1 className="text-xl font-bold my-2">Unique discounts</h1>
        <p className="text-sm py-2">
          Discounts on products and services that save time and improve the
          guest experience.
        </p>

        <img
          style={{ width: "80px", height: "80px", marginTop: "60px" }}
          src="https://site.surveysparrow.com/wp-content/uploads/2021/04/How-to-write-overall-performance-review-comments.png"
          alt=""
        />
        <h1 className="text-xl font-bold my-2">Review Score</h1>
        <p className="text-sm py-2">
          Your review score on third-party travel websites may be converted and
          then reflected on your Booking.com listing page.
        </p>
      </div>
    </>
  );
};

export default RightContent1;
