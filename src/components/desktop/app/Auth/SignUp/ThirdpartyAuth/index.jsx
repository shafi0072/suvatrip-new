import { signUp_icons } from "@/src/constant/signup/Base64";
import React, { useContext } from "react";

import { UserContent } from "@/src/store/AuthContent";
import { useRouter } from "next/router";

const ThirdpartyAuthComponent = ({handleClose}) => {
  const router = useRouter();
  const {user, setUser} = useContext(UserContent);
 
  return (
    <div className="d-flex justify-content-around align-items-center mb-3">
      {signUp_icons.map((items, index) => (
        <div
          onClick={() => {items?.handler(setUser, router, handleClose);}}
          className="rounded-full bg-gray-200 w-70 p-2 shadow-md d-flex justify-content-center"
        >
          <img src={items.imageString} alt="" />
        </div>
      ))}
    </div>
  );
};

export default ThirdpartyAuthComponent;
