import React from "react";

const index = ({ setNavigation, navigation }) => {
  return (
    <div className="w-full  rounded-3 mb-3 bg-gray-300">
      <ul className="list-none d-flex justify-content-around">
        <li
          className={
            navigation === "Overview"
              ? "text-dark mx-3 cursor-pointer border-b-2 border-gray-800 bg-gray-300 py-3 px-3"
              : "text-dark mx-3 cursor-pointer  bg-gray-300 py-3 px-3"
          }
          onClick={(e) => setNavigation("Overview")}
        >
          Basic info
        </li>
        <li
          className={
            navigation === "Choose Your Room"
              ? "text-dark mx-3 cursor-pointer border-b-2 border-gray-800 bg-gray-300 py-3 px-3"
              : "text-dark mx-3 cursor-pointer  bg-gray-300 py-3 px-3"
          }
          onClick={(e) => setNavigation("Choose Your Room")}
        >
          Layout and pricing
        </li>
        <li
          className={
            navigation === "Amenities"
              ? "text-dark mx-3 cursor-pointer border-b-2 border-gray-800 bg-gray-300 py-3 px-3"
              : "text-dark mx-3 cursor-pointer  bg-gray-300 py-3 px-3"
          }
          onClick={(e) => setNavigation("Amenities")}
        >
          Facilities & services
        </li>
        <li
          className={
            navigation === "Rating & Reviews"
              ? "text-dark mx-3 cursor-pointer border-b-2 border-gray-800 bg-gray-300 py-3 px-3"
              : "text-dark mx-3 cursor-pointer  bg-gray-300 py-3 px-3"
          }
          onClick={(e) => setNavigation("Rating & Reviews")}
        >
          Amenities
        </li>
        <li
          className={
            navigation === "Hotel Rules"
              ? "text-dark mx-3 cursor-pointer border-b-2 border-gray-800 bg-gray-300 py-3 px-3"
              : "text-dark mx-3 cursor-pointer  bg-gray-300 py-3 px-3"
          }
          onClick={(e) => setNavigation("Hotel Rules")}
        >
          Photos
        </li>
        <li
          className={
            navigation === "What’s Nearby"
              ? "text-dark mx-3 cursor-pointer border-b-2 border-gray-800 bg-gray-300 py-3 px-3"
              : "text-dark mx-3 cursor-pointer  bg-gray-300 py-3 px-3"
          }
          onClick={(e) => setNavigation("What’s Nearby")}
        >
          Policies
        </li>
        <li
          className={
            navigation === "Payments"
              ? "text-dark mx-3 cursor-pointer border-b-2 border-gray-800 bg-gray-300 py-3 px-3"
              : "text-dark mx-3 cursor-pointer  bg-gray-300 py-3 px-3"
          }
          onClick={(e) => setNavigation("Payments")}
        >
          Payments
        </li>
      </ul>
    </div>
  );
};

export default index;
