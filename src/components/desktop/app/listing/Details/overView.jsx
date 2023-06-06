import React, { useState } from "react";

const OverView = ({ hotelDetails }) => {
  const [more, setMore] = useState(false);
  const handleShowMore = () => {
    setMore(!more);
  };
  return (
    <div className="Overview" id="overView">
      <h1 className="text-md font-bold">Overview</h1>
      <p className="mt-2 text-sm text-gray-700">
        {hotelDetails?.overView?.slice(
          0,
          more ? hotelDetails?.overView?.length : 500
        )}{" "}
        {!more && <span>...</span>}{" "}
        <span
          onClick={handleShowMore}
          className="text-danger font-bold cursor-pointer underline"
        >
          see {more ? "less" : "more"}.
        </span>
      </p>
    </div>
  );
};

export default OverView;
