import React from "react";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import BeenhereIcon from "@mui/icons-material/Beenhere";
const Category = ({ category, setCategory }) => {
  return (
    <div className="bg-gray-800 px-3 py-3 rounded-4">
      <ul>
        <li
          className="d-flex align-items-start "
          onClick={(e) => setCategory("upcoming")}
        >
          <UpcomingIcon className="text-light mx-2" />
          <a
            type="button"
            className={`text-md text-light ${
              category === "upcoming" ? "border-b-4" : "hover:border-b-4"
            }  border-sky-600`}
          >
            {" "}
            UPCOMING
          </a>
        </li>
        <li
          className="d-flex align-items-start my-4"
          onClick={(e) => setCategory("cancel")}
        >
          <CancelPresentationIcon className="text-light mx-2" />
          <a
            type="button"
            className={`text-md text-light ${
              category === "cancel" ? "border-b-4" : "hover:border-b-4"
            }  border-sky-600`}
          >
            {" "}
            CANCELLED
          </a>
        </li>
        <li
          className="d-flex align-items-start my-4"
          onClick={(e) => setCategory("complete")}
        >
          <BeenhereIcon className="text-light mx-2" />
          <a
            type="button"
            className={`text-md text-light ${
              category === "complete" ? "border-b-4" : "hover:border-b-4"
            }  border-sky-600`}
          >
            {" "}
            COMPLETED
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Category;
