import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import StarsOutlinedIcon from "@mui/icons-material/StarsOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Link from "next/link";
import { useContext } from "react";
import { UserContent } from "@/src/store/AuthContent";
import screenSize from "../../core/lib/MediaQuery/ScreenSize";
import ProfileSidebar from "./ProfileSidebar";
import { useState } from "react";
const ProfileBar = () => {
  const { user, setUser, userInfo } = useContext(UserContent);
  const resulation = screenSize("600px");
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="w-full bg-gray-800 rounded-2xl px-8 py-6 shadow-lg">
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

      <div className="mt-6 w-fit mx-auto">
        <img
          src={
            user?.photoUrl
              ? user?.photoUrl
              : "https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe"
          }
          className="rounded-full w-28 "
          alt="profile picture"
          srcset=""
        />
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-white font-bold text-md tracking-wide">
          {user?.displayName
            ? user?.displayName
            : userInfo?.username
            ? userInfo?.username
            : "Jonathan Smith"}
        </h2>
      </div>

      <div className="my-4">
        {!resulation ||
          (isOpen && (
            <ul className="text-light container">
              <li className="hover:bg-gray-300 hover:text-gray-800 px-3 py-2 rounded-full d-flex align-items-center">
                <LoginIcon />
                <a className="text-xl mx-2" href="">
                  Login Details
                </a>
              </li>
              <li className="hover:bg-gray-300 hover:text-gray-800 px-3 py-2 rounded-full d-flex align-items-center">
                <SupervisorAccountOutlinedIcon />
                <Link className="text-xl mx-2" href="/user/save-travels">
                  Save Travellers
                </Link>
              </li>
              <li className="hover:bg-gray-300 hover:text-gray-800 px-3 py-2 rounded-full d-flex align-items-center">
                <FavoriteBorderOutlinedIcon />
                <Link className="text-xl mx-2" href="/user/my-trip">
                  My Trips
                </Link>
              </li>
              <li className="hover:bg-gray-300 hover:text-gray-800 px-3 py-2 rounded-full d-flex align-items-center">
                <StarsOutlinedIcon />
                <a className="text-xl mx-2" href="">
                  Reviews
                </a>
              </li>
              <li className="hover:bg-gray-300 hover:text-gray-800 px-3 py-2 rounded-full d-flex align-items-center">
                <PaymentOutlinedIcon />
                <a className="text-xl mx-2" href="">
                  Payment
                </a>
              </li>
              <li className="hover:bg-gray-300 hover:text-gray-800 px-3 py-2 rounded-full d-flex align-items-center">
                <SecurityOutlinedIcon />
                <Link className="text-xl mx-2" href="/user/setting">
                  Security
                </Link>
              </li>
              <li className="hover:bg-gray-300 hover:text-gray-800 px-3 py-2 rounded-full d-flex align-items-center">
                <LogoutOutlinedIcon />
                <a className="text-xl mx-2" href="">
                  Sign Out
                </a>
              </li>
            </ul>
          ))}
        {!resulation && (
          <ul className="text-light container">
            <li className="hover:bg-gray-300 hover:text-gray-800 px-3 py-2 rounded-full d-flex align-items-center">
              <LoginIcon />
              <a className="text-xl mx-2" href="">
                Login Details
              </a>
            </li>
            <li className="hover:bg-gray-300 hover:text-gray-800 px-3 py-2 rounded-full d-flex align-items-center">
              <SupervisorAccountOutlinedIcon />
              <Link className="text-xl mx-2" href="/user/save-travels">
                Save Travellers
              </Link>
            </li>
            <li className="hover:bg-gray-300 hover:text-gray-800 px-3 py-2 rounded-full d-flex align-items-center">
              <FavoriteBorderOutlinedIcon />
              <Link className="text-xl mx-2" href="/user/my-trip">
                My Trips
              </Link>
            </li>
            <li className="hover:bg-gray-300 hover:text-gray-800 px-3 py-2 rounded-full d-flex align-items-center">
              <StarsOutlinedIcon />
              <a className="text-xl mx-2" href="">
                Reviews
              </a>
            </li>
            <li className="hover:bg-gray-300 hover:text-gray-800 px-3 py-2 rounded-full d-flex align-items-center">
              <PaymentOutlinedIcon />
              <a className="text-xl mx-2" href="">
                Payment
              </a>
            </li>
            <li className="hover:bg-gray-300 hover:text-gray-800 px-3 py-2 rounded-full d-flex align-items-center">
              <SecurityOutlinedIcon />
              <Link className="text-xl mx-2" href="/user/setting">
                Security
              </Link>
            </li>
            <li className="hover:bg-gray-300 hover:text-gray-800 px-3 py-2 rounded-full d-flex align-items-center">
              <LogoutOutlinedIcon />
              <a className="text-xl mx-2" href="">
                Sign Out
              </a>
            </li>
          </ul>
        )}
      </div>
    </section>
  );
};

export default ProfileBar;
