import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { UserContent } from "@/src/store/AuthContent";
import Checkmark from "../../../core/lib/checkMark/Checkmark";
import LogIn from "./LogIn";
import { useRouter } from "next/router";
import { baseUrl } from "@/src/config/serverConfig";
import StarCounting from "@/src/components/desktop/core/lib/startCounting";
const RightContent = ({ handleOpen }) => {
  const router = useRouter();
  const [isStarted, setIsStarted] = useState(false);
  const { userInfo } = useContext(UserContent);
  const [hotelInfo, setHotelInfo] = useState({});

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      fetch(`${baseUrl}/hotel/users/${userInfo?.user_id}/listed`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => setHotelInfo(data))
        .catch((err) => {});
    }
  }, [userInfo, hotelInfo]);

  return (
    <div className="">
      <div
        className="py-4 mx-5 px-4 mt-5 rounded-4 "
        style={{ background: "#ffffffb0" }}
      >
        {!isStarted && !hotelInfo?.NameOfProperty && (
          <>
            <h1 className="text-xl font-bold">Create new listing</h1>
            <div className="border-b border-gray-300 ">
              <div className="my-2">
                <Checkmark
                  text="More than 6.4 million holiday rentals already listed"
                  color="green"
                  className="mx-2"
                />
              </div>
              <div className="my-2">
                <Checkmark
                  text="Over 1 billion holiday rental guest arrivals"
                  color="green"
                  className="mx-2"
                />
              </div>
              <div className="my-2">
                <Checkmark
                  text="More than 40% of the new holiday rental listings get their first booking within a week"
                  color="green"
                  className="mx-2"
                />
              </div>
            </div>
            <div className="my-3 border-b border-gray-300">
              <h1 className="text-md font-bold">
                Create a partner account to get started:
              </h1>
              <p className="text-sm my-2">
                By continuing, you agree to let Booking.com email you regarding
                your property registration.
              </p>
              <button
                className="btn custom_red_color text-light form-control py-3 my-3"
                onClick={() => {
                  userInfo?.username && !hotelInfo?.NameOfProperty
                    ? router.push("/admin/list_property")
                    : handleOpen();
                }}
              >
                GET STARTED
              </button>
            </div>

            <div className="my-3 ">
              <h1 className="text-md font-bold">
                Already started a registration?
              </h1>
              <p className="text-sm my-2 text-blue-700">
                Continue your registration
              </p>
            </div>
          </>
        )}
        {!isStarted && hotelInfo?.NameOfProperty && (
          <>
            <h1 className="text-xl font-bold">
              Manage Your Hotel Info by clicking on your hotel name
            </h1>
            <div
              className="border-b border-gray-300 my-4"
              onClick={() => router.push("/user")}
            >
              <a
                href="#"
                className="flex flex-col items-center  border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
              >
                <img
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                  src={hotelInfo?.images && hotelInfo?.images[0]}
                  alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal w-full">
                  <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900">
                    {hotelInfo?.NameOfProperty}
                  </h5>
                  <p className="mb-3  text-gray-700 " style={{ overflow: "" }}>
                    {hotelInfo?.overView}
                  </p>
                  <div>
                    <StarCounting length={3} style={{ color: "yellow" }} />
                  </div>
                </div>
              </a>
            </div>
          </>
        )}
        {isStarted && !hotelInfo?.NameOfProperty && (
          <div className="">
            <LogIn hotelInfo={hotelInfo} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RightContent;
