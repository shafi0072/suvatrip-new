import React, { useContext, useEffect, useRef, useState } from "react";
import Avatar from "@mui/material/Avatar";
import { baseUrl } from "@/src/config/serverConfig";
import { CleaningServices } from "@mui/icons-material";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import moment from "moment";
import { useRouter } from "next/router";
import { UserContent } from "@/src/store/AuthContent";

const NotificationTab = ({ setIsNotification, isNotification }) => {
  const [notification, setNotification] = useState([]);
  const { userInfo, setUserInfo } = useContext(UserContent);
  const [hotelInfo, setHotelInfo] = useState({});
  const menuRef = useRef(null);
  const router = useRouter();

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
    fetch(`${baseUrl}/notification/getnotification/${hotelInfo?._id}`)
      .then((res) => res.json())
      .then((data) => setNotification(data.reverse()))
      .catch((err) => console.log(err));
  }, [notification]);

  const startDate = moment(notification?.date).format("DD-MMMM-YYYY");
  const endDate = moment(Date.now());
  const day = endDate.diff(startDate, "days");

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsNotification(false);
      }
    }
    document.addEventListener("click", handleClickOutside, { capture: true });
    return () => {
      document.removeEventListener("click", handleClickOutside, {
        capture: true,
      });
    };
  }, [menuRef, isNotification]);

  const handleMarkAsRead = (id) => {
    fetch(`${baseUrl}/notification/mark_as_read/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "read",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          router.push("/admin/RootAdmin");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div
        style={{
          width: "30%",
          height: "450px",
          background: "white",
          position: "absolute",
          top: "55px",
          right: "83px",
          border: "1px solid grey",
          borderRadius: "10px",
          overflowY: "scroll",
          // Hide scrollbar
          scrollbarWidth: "none", // Firefox
          "::-webkit-scrollbar": {
            display: "none", // Chrome, Safari, Edge, Opera
          },
        }}
        className="notification mt-4 container"
        ref={menuRef}
      >
        <div className="text-sm font-bold mt-2 ml-2">Notifications</div>
        <hr className="mt-2" />
        <div>
          {notification?.length === 0 && (
            <h1 className="text-md text-red-500 text-center font-bold mt-48">
              Empty Notification
            </h1>
          )}
          <ul>
            {notification.map((items, index) => (
              <li
                className={`d-flex align-items-center px-1 py-3 ${
                  items?.mark_as !== "read" && "bg-gray-200"
                } border-b notificationList hover:bg-sky-500 hover:text-light cursor-pointer `}
                onClick={(e) => handleMarkAsRead(items?._id)}
              >
                <Avatar
                  alt="Remy Sharp"
                  src={
                    items?.images
                      ? items?.images
                      : "/static/images/avatar/1.jpg"
                  }
                />
                <div className="text-xs ml-2">
                  {" "}
                  <p className="text-md font-bold"> {items.headline} </p>
                  <p className="mt-1"> {items.body} </p>
                  <p className="mt-2">{startDate} </p>
                </div>

                <div className="ml-5">
                  {" "}
                  {items?.mark_as === "read" ? (
                    <DraftsOutlinedIcon />
                  ) : (
                    <MarkunreadOutlinedIcon />
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NotificationTab;
