import React from "react";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import Link from "next/link";
import { useContext } from "react";
import { UserContent } from "@/src/store/AuthContent";
import { useState } from "react";
import screenSize from "../../../core/lib/MediaQuery/ScreenSize";
import { profile_navigation } from "@/src/constant/admin/ProfileNavigation";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import EditIcon from "@mui/icons-material/Edit";
import { baseUrl } from "@/src/config/serverConfig";

const ProfileBar = ({ menu, setMenu, hotelInfo }) => {
  const { user, setUser, userInfo } = useContext(UserContent);
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("");
  const resulation = screenSize("600px");
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };
  const handleUpdateName = (e) => {
    e.preventDefault();
    if (name) {
      fetch(`${baseUrl}/hotel/details/hotel/${hotelInfo?._id}/NameOfProperty`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          NameOfProperty: name,
        }),
        redirect: "follow",
      })
        .then((response) => response.json())
        .then((result) => {
          if (result) {
            setEdit(false);
          }
        })
        .catch((err) => {});
    }
  };
  return (
    <section
      className="w-full bg-gray-800 rounded-2xl px-8 py-6 shadow-lg"
      style={{ height: "100%" }}
    >
      <div className="flex items-center justify-between">
        <span className="text-gray-400 text-sm">2d ago</span>
        <span className="text-emerald-400" onClick={handleButtonClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </span>
      </div>

      <div className="mt-6 w-fit mx-auto relative">
        <img
          src={hotelInfo?.images && hotelInfo?.images[0]}
          className="rounded-full  "
          style={{ width: "150px", height: "150px" }}
          alt="profile picture"
          srcset=""
        />
        {/* <div className="">
        <div className="absolute bottom-10 left-16 "><CameraAltOutlinedIcon/></div>
        </div> */}
      </div>

      <div className="mt-8 text-center text-white ">
        <div className="d-flex justify-content-center align-items-center">
          {!edit && (
            <h2 className="text-white font-bold text-md tracking-wide">
              {hotelInfo?.NameOfProperty}
            </h2>
          )}
          {edit && (
            <div>
              <input
                type="text"
                className="form-control"
                defaultValue={hotelInfo?.NameOfProperty}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <button className="btn btn-primary" onClick={handleUpdateName}>
                Update
              </button>
              <button
                className="btn btn-secondary ml-2"
                onClick={() => setEdit(false)}
              >
                cancel
              </button>
            </div>
          )}
          {!edit && (
            <div className="ml-3">
              <EditIcon
                sx={{ fontSize: "20px" }}
                className="text-green-400 cursor-pointer"
                onClick={() => setEdit(true)}
              />
            </div>
          )}
        </div>
      </div>

      <div className="my-4">
        {!resulation ||
          (isOpen && (
            <ul className="text-light container">
              {profile_navigation.map((items, index) => (
                <li className="hover:bg-gray-300 hover:text-gray-800 px-3 py-2 rounded-full d-flex align-items-center">
                  <SupervisorAccountOutlinedIcon />
                  <Link className="text-xl mx-2">Save Travellers</Link>
                </li>
              ))}
            </ul>
          ))}
        {!resulation && (
          <ul className="text-light container">
            {profile_navigation.map((items, index) => (
              <li
                className={`hover:bg-gray-300 ${
                  menu === items?.title ? "bg-gray-300 text-gray-800" : ""
                } hover:text-gray-800 px-3 py-2 rounded-full d-flex align-items-center`}
                onClick={() => setMenu(items?.title)}
              >
                {items?.logo}
                <span className="text-xl mx-2 cursor-pointer">
                  {items?.title}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default ProfileBar;
