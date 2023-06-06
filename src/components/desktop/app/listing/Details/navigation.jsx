import React from "react";
import Share from "../../../core/lib/Share";
const Navigation = ({ navigation, setNavigation }) => {
  return (
    <div className="w-full px-2 py-3 custom_red_color rounded-3 mb-3 d-flex justify-content-between">
      <ul className="list-none d-flex">
        <li
          className={
            navigation === "Overview"
              ? "text-light mx-3 cursor-pointer border-b"
              : "text-light mx-3 cursor-pointer hover:border-b"
          }
          onClick={(e) => setNavigation("Overview")}
        >
          <a href="#overView">Overview</a>
        </li>
        <li
          className={
            navigation === "Choose Your Room"
              ? "text-light mx-3 cursor-pointer border-b"
              : "text-light mx-3 cursor-pointer hover:border-b"
          }
          onClick={(e) => setNavigation("Choose Your Room")}
        >
          <a href="#rooms">Choose Your Room</a>
        </li>
        <li
          className={
            navigation === "Amenities"
              ? "text-light mx-3 cursor-pointer border-b"
              : "text-light mx-3 cursor-pointer hover:border-b"
          }
          onClick={(e) => setNavigation("Amenities")}
        >
          <a href="#Amenities">Amenities / facilities</a>
        </li>
        {/* <li className={
            navigation === "Rating & Reviews"
              ? "text-light mx-3 cursor-pointer border-b"
              : "text-light mx-3 cursor-pointer hover:border-b"
          }
          onClick={(e) => setNavigation("Rating & Reviews")}>
          Rating & Reviews
        </li> */}
        {/* <li  className={
            navigation === "Hotel Rules"
              ? "text-light mx-3 cursor-pointer border-b"
              : "text-light mx-3 cursor-pointer hover:border-b"
          }
          onClick={(e) => setNavigation("Hotel Rules")}>
          Hotel Rules
        </li> */}
        {/* <li className={
            navigation === "What’s Nearby"
              ? "text-light mx-3 cursor-pointer border-b"
              : "text-light mx-3 cursor-pointer hover:border-b"
          }
          onClick={(e) => setNavigation("What’s Nearby")}>
          What’s Nearby
        </li> */}
      </ul>
      <Share />
    </div>
  );
};

export default Navigation;
