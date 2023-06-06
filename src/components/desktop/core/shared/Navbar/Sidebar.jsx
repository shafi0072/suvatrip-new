import React, { useContext } from "react";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import BokingTimeTow from "../../../app/Landing/Home/Header/bookingTimeTwo";
import { logo } from "@/src/constant/navbar/navData";
import { UserContent } from "@/src/store/AuthContent";
const Sidebar = ({ toggleSideBar, setToggleSidebar, progress }) => {
  const { navDatas } = useContext(UserContent);
  return (
    <div className="d-flex">
      <aside
        id="separator-sidebar"
        className="fixed top-0 left-0 z-40  h-full transition-transform sm:translate-x-0"
        aria-label="Sidebar"
        style={{
          width: `${progress}%`,
          display: progress !== 0 ? "block" : "none",
        }}
      >
        <div className="h-full px-3 py-4 overflow-y-auto  bg-gray-900">
          <div className="d-flex justify-content-between mb-4 border-b pb-2">
            <a className="flex flex-shrink-0 items-center" href="/">
              <div className="d-flex align-items-center">
                <img src={logo?.logo} alt="" className="w-12" />
              </div>
              <h1 className="text-3xl font-bold text-light">{logo.title}</h1>
            </a>
            <button className="mb-3" onClick={(e) => setToggleSidebar(false)}>
              <ClearOutlinedIcon className="text-light" />
            </button>
          </div>
          <ul className="space-y-2">
            {navDatas.map((navdata) => (
              <li>
                <a
                  href={navdata.href}
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  text-white hover:bg-gray-100  hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 text-gray-500 transition duration-75  text-gray-400 group-hover:text-gray-900  group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span className="ml-3">{navdata.name}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="border-t py-3">
            {progress > 70 && <BokingTimeTow noContainer={true} />}
          </div>
        </div>
      </aside>
      <div
        onClick={() => setToggleSidebar(false)}
        style={{ width: "100%" }}
      ></div>
    </div>
  );
};

export default Sidebar;
