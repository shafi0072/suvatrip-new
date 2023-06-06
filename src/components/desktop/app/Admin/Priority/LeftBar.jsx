import React from "react";
import Checkmark from "../../../core/lib/checkMark/Checkmark";
const LeftBar = () => {
  return (
    <div>
      <div>
        <Checkmark
          color="green"
          text={
            <span>
              Request <span className="font-bold">damage deposits</span> for
              extra security
            </span>
          }
          className="text-xl ml-2"
        />
      </div>

      <div className="mt-3">
        <Checkmark
          color="green"
          text={
            <span>
              Set <span className="font-bold">Hotel rules</span> guest must
              agree to before they stay
            </span>
          }
          className="text-xl ml-2"
        />
      </div>

      <div className="mt-3">
        <Checkmark
          color="green"
          text={
            <span>
              <span className="font-bold">Report guest misconduct</span> if
              something goes wrong
            </span>
          }
          className="text-xl ml-2"
        />
      </div>
      <div className="mt-3">
        <Checkmark
          color="green"
          text={
            <span>
              Access <span className="font-bold">24/7 support</span> in 43+
              languages
            </span>
          }
          className="text-xl ml-2"
        />
      </div>
      <div className="mt-3">
        <Checkmark
          color="green"
          text={
            <span>
              Protection against liability claims from guests and <br />{" "}
              neighbours up to £1,000,000 for every reservation
            </span>
          }
          className="text-xl ml-2"
        />
      </div>
      <div className="mt-4">
        <button className="btn btn-outline-primary">Learn more</button>
      </div>
    </div>
  );
};

export default LeftBar;
