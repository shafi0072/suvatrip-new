import {
  logo,
  logoBlack,
  navData,
  navigation,
} from "@/src/constant/navbar/navData";
import Link from "next/link";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import DragHandleOutlinedIcon from "@mui/icons-material/DragHandleOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { TocTwoTone } from "@mui/icons-material";
import { UserContent } from "@/src/store/AuthContent";
import BokingTimeTow from "../../../app/Landing/Home/Header/bookingTimeTwo";
import AOS from "aos";
import AuthModal from "../../modal/AuthModa";
import screenSize from "../../lib/MediaQuery/ScreenSize";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import NotificationTab from "./NotificationTab";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import { baseUrl } from "@/src/config/serverConfig";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Index = () => {
  const router = useRouter();
  const [isUser, setIsuser] = useState(false);
  const [dropingData, setDropingData] = useState("");
  const { user, setUser, userInfo } = useContext(UserContent);
  const [isScrolled, setIsScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [toggleSideBar, setToggleSidebar] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isNotification, setIsNotification] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [notification, setNotification] = useState([]);
  const querySize = screenSize("600px");
  const [hotelInfo, setHotelInfo] = useState({});
  const { navDatas } = useContext(UserContent);
  const handleClose = () => setModalOpen(false);

  useEffect(() => {
    fetch(`${baseUrl}/hotel/users/${userInfo?.user_id}/listed`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setHotelInfo(data))
      .catch((err) => {});
  }, [hotelInfo]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 526 && !querySize) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled, toggleSideBar]);

  useEffect(() => {
    AOS.init({
      // add your AOS configuration here
    });
  }, []);

  useEffect(() => {
    let intervalId;
    if (toggleSideBar) {
      intervalId = setInterval(() => {
        if (progress < 100) {
          setProgress((value) => value + 1);
        }
      }, 0);
    } else {
      intervalId = setInterval(() => {
        if (progress > 0) {
          setProgress((value) => value - 1);
        }
      }, 0);
    }

    return () => clearInterval(intervalId);
  }, [toggleSideBar, progress]);

  useEffect(() => {
    let value;

    value = localStorage.getItem("accessToken");
    setAccessToken(value);
  }, []);

  useEffect(() => {
    fetch(`${baseUrl}/notification/getnotificationread/${hotelInfo?._id}`)
      .then((res) => res.json())
      .then((data) => setNotification(data.reverse()))
      .catch((err) => console.log(err));
  }, [notification]);
  return (
    <div
      className={`${
        isScrolled && router.pathname === "/" && "navbarMain bg-gray-800"
      } ${router.pathname !== "/" && "navbarMain bg-light"} ${
        isScrolled ? "sticky" : ""
      }`}
    >
      {!isScrolled && (
        <Disclosure as="nav" className="">
          {({ open }) => (
            <div data-aos={!isScrolled ? "fade-down" : "fade-up"}>
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="">
                    <div className=" inset-y-0 left-0 flex items-center sm:hidden ">
                      {/* Mobile menu button*/}
                      <button
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:custom_green_color hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => {
                          setToggleSidebar(!toggleSideBar);
                        }}
                      >
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <ClearOutlinedIcon className="block h-6 w-6" />
                        ) : (
                          <DragHandleOutlinedIcon className="block h-6 w-6" />
                        )}
                      </button>
                    </div>
                  </div>
                  <Sidebar
                    toggleSideBar={toggleSideBar}
                    setToggleSidebar={setToggleSidebar}
                    progress={progress}
                  />
                  <div
                    className={`flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ${
                      screenSize("600px") ? "absolute right-4" : ""
                    } `}
                  >
                    {progress < 50 && (
                      <a className="flex flex-shrink-0 items-center" href="/">
                        <div className="d-flex align-items-center">
                          <img
                            src={
                              router.pathname === "/"
                                ? logo?.logo
                                : logoBlack?.logo
                            }
                            alt=""
                            className="absolute"
                            style={{
                              width: router.pathname === "/" ? "15%" : "15%",
                            }}
                          />
                        </div>
                      </a>
                    )}
                    <div className="ml-auto my-2">
                      <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                          {navDatas.map((item, index) =>
                            item.dropdown ? (
                              <Menu
                                as="div"
                                className="relative ml-3"
                                key={index}
                              >
                                <div>
                                  <Menu.Button className="flex  text-sm focus:ring-offset-2 ">
                                    {item.name !== "Sign In" && (
                                      <a
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                          item.current
                                            ? "custom_green_color text-white"
                                            : ` ${
                                                router.pathname !== "/"
                                                  ? ""
                                                  : "text-light"
                                              } hover:custom_green_color hover:text-red-500 hover:underline`,
                                          "px-3 py-2 rounded-md text-sm font-medium"
                                        )}
                                        aria-current={
                                          item.current ? "page" : undefined
                                        }
                                      >
                                        {dropingData ? dropingData : item.name}
                                        <ExpandMoreIcon />
                                      </a>
                                    )}
                                    {item.name === "Sign In" && (
                                      <div
                                        key={item.name}
                                        onClick={() => setModalOpen(true)}
                                        className={classNames(
                                          item.current
                                            ? "custom_green_color text-white"
                                            : ` ${
                                                router.pathname !== "/"
                                                  ? ""
                                                  : "text-light"
                                              } hover:custom_green_color hover:text-white`,
                                          "px-3 py-2 rounded-md text-sm font-medium"
                                        )}
                                      >
                                        {dropingData ? dropingData : item.name}
                                        <ExpandMoreIcon />
                                      </div>
                                    )}
                                  </Menu.Button>
                                </div>
                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-100"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                                >
                                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    {item.dropdown &&
                                      item.dropdownData.map((data, index) => (
                                        <Menu.Item
                                          key={index}
                                          onClick={() => {
                                            setDropingData(data.title);
                                          }}
                                        >
                                          {({ active }) => (
                                            <a
                                              href="#"
                                              className={classNames(
                                                active ? "bg-gray-100" : "",
                                                "block px-4 py-2 text-sm text-gray-700"
                                              )}
                                            >
                                              {data.title}
                                            </a>
                                          )}
                                        </Menu.Item>
                                      ))}
                                  </Menu.Items>
                                </Transition>
                              </Menu>
                            ) : (
                              <>
                                {item.name !== "Sign In" &&
                                  item.href !== "notification" && (
                                    <a
                                      key={item.name}
                                      href={item.href}
                                      className={classNames(
                                        item.current
                                          ? `${
                                              router.pathname !== "/"
                                                ? "custom_red_color"
                                                : "custom_green_color"
                                            } text-white`
                                          : ` ${
                                              router.pathname !== "/"
                                                ? ""
                                                : "text-light"
                                            } hover:custom_green_color hover:text-red-500 hover:underline`,
                                        "px-3 py-2 rounded-md text-sm font-medium"
                                      )}
                                      aria-current={
                                        item.current ? "page" : undefined
                                      }
                                    >
                                      {item.name}
                                    </a>
                                  )}
                                {item.name === "Sign In" &&
                                  !userInfo?.username && (
                                    <a
                                      key={item.name}
                                      onClick={() => setModalOpen(true)}
                                      className={classNames(
                                        item.current
                                          ? "custom_green_color text-white cursor-pointer"
                                          : ` ${
                                              router.pathname !== "/"
                                                ? ""
                                                : "text-light"
                                            } hover:custom_green_color hover:text-red-500 hover:underline`,
                                        "px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                                      )}
                                      aria-current={
                                        item.current ? "page" : undefined
                                      }
                                    >
                                      {item.name}
                                    </a>
                                  )}

                                {item.href === "notification" &&
                                  accessToken && (
                                    <>
                                      <div
                                        key={item.name}
                                        onClick={() =>
                                          setIsNotification(!isNotification)
                                        }
                                        className={classNames(
                                          item.current
                                            ? `${
                                                router.pathname !== "/"
                                                  ? "custom_red_color"
                                                  : "custom_green_color"
                                              } text-white`
                                            : ` ${
                                                router.pathname !== "/"
                                                  ? ""
                                                  : "text-light"
                                              } hover:bg-blue-500  hover:text-white cursor-pointer`,
                                          "px-3 py-2 rounded-md text-sm font-medium "
                                        )}
                                        aria-current={
                                          item.current ? "page" : undefined
                                        }
                                      >
                                        <div className="">
                                          {notification?.length !== 0 && (
                                            <div className="bg-blue-500 text-light px-2 rounded-full absolute top-2 ">
                                              {notification?.length}
                                            </div>
                                          )}
                                          <div className="text-xl">
                                            {" "}
                                            <NotificationsSharpIcon />
                                          </div>
                                        </div>
                                      </div>
                                      {isNotification && (
                                        <NotificationTab
                                          isNotification={isNotification}
                                          setIsNotification={setIsNotification}
                                        />
                                      )}
                                    </>
                                  )}
                              </>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    {/* Profile dropdown */}
                    {user?.displayName ||
                      (userInfo?.username && (
                        <Menu as="div" className="relative ml-3">
                          <div>
                            <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                              <span className="sr-only">Open user menu</span>
                              <img
                                className="h-8 w-8 rounded-full"
                                src={
                                  user.photoUrl
                                    ? user.photoUrl
                                    : "https://thumbs.dreamstime.com/b/vectorial-blank-face-avatar-7046081.jpg"
                                }
                                alt=""
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="/user"
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    {user?.displayName || userInfo?.username}
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    Settings
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                    onClick={() => {
                                      localStorage.removeItem("accessToken");
                                      Swal.fire(
                                        "Sign Out",
                                        "You have successfully signed in",
                                        "success"
                                      ).then(() => {
                                        window.location.assign("/");
                                      });
                                    }}
                                  >
                                    Sign out
                                  </a>
                                )}
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      ))}
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "custom_green_color text-white"
                          : " hover:custom_green_color hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      )}
      {isScrolled && !toggleSideBar && !querySize && (
        <div
          data-aos={isScrolled ? "fade-up" : !isScrolled ? "fade-down" : ""}
          className="container"
        >
          <BokingTimeTow noContainer={true} />
        </div>
      )}
      <AuthModal open={modalOpen} handleClose={handleClose} />
    </div>
  );
};

export default Index;
