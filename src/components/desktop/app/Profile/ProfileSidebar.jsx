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
const ProfileSidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`right-sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}>
        X
      </button>
      <ul>
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
    </div>
  );
};

export default ProfileSidebar;
