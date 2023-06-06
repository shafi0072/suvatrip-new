import React, { useContext, useState } from "react";
import AdminLayout from "@/src/components/desktop/core/AdminLayout";
import Dashboard from "./Components/Dashboard";
import { UserContent } from "@/src/store/AuthContent";
import { useRouter } from "next/router";
import screenSize from "../../core/lib/MediaQuery/ScreenSize";
import { useEffect } from "react";
import { baseUrl } from "@/src/config/serverConfig";
import PersonalInfo from "@/src/components/desktop/app/Admin/RootAdmin/Components/PersonalInfo";
import Swal from "sweetalert2";
import Galary from "@/src/components/desktop/app/Admin/RootAdmin/Components/Galary";
import Facelities from "@/src/components/desktop/app/Admin/RootAdmin/Components/Dashboard/Facelities";
import Calendar from "@/src/components/desktop/app/Admin/RootAdmin/Components/Calender/Calendar";
import Rooms from "@/src/components/desktop/app/Admin/RootAdmin/Components/Rooms";
import Policy from "@/src/components/desktop/app/Admin/RootAdmin/Components/Policy";
import Settings from "../Admin/RootAdmin/Components/Settings/Settings";
import Nearby from "../Admin/RootAdmin/Components/Nearby/Nearby";
import Fetures from "../Admin/RootAdmin/Components/Fetures";
import Review from "../listing/Details/ReviewDetails/Review";
import Arival from "../Admin/ArivalInfo";
const parseJwt = (token) => {
  if (!token) {
    return null;
  }
  return JSON.parse(atob(token.split(".")[1]));
};

const index = ({ hotelInfo }) => {
  const [menu, setMenu] = useState("dashboard");
  const { userInfo, setUserInfo } = useContext(UserContent);
  const [readyToDocSubmit, setReadyToDocSubmit] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const router = useRouter();

  const handleFileSelect = (event) => {
    const files = event.target.files;
    const updatedFiles = [...uploadedFiles];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      updatedFiles.push(file);
    }

    setUploadedFiles(updatedFiles);
  };

  useEffect(() => {
    const Storage = localStorage.getItem("accessToken");
    let user = JSON.stringify(Storage);
    if (user) {
      const decodedJwt = parseJwt(localStorage.getItem("accessToken"));
      setUserInfo(decodedJwt);
      if (decodedJwt) {
        if (decodedJwt.exp * 1000 < Date.now()) {
          router.push("/admin");
          localStorage.removeItem("accessToken");
        }
      } else {
        router.push("/admin");
      }
    } else {
      router.push("/admin");
    }
  }, [userInfo]);

  useEffect(() => {
    fetch(`${baseUrl}/hotel/hotelWithStatus/${userInfo?.user_id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setHotelInfo(data))
      .catch((err) => {});
  }, [hotelInfo]);

  const [routes, setRoutes] = useState("dashboard");

  const handleDocSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    uploadedFiles.forEach((file) => {
      formData.append("files", file);
    });

    fetch(`${baseUrl}/image/upload`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.cdnUrls?.length > 0) {
          fetch(
            `${baseUrl}/hotel/details/hotel/${hotelInfo?.listed[0]?._id}/documents`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                documents: data?.cdnUrls,
              }),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data?.modifiedCount === 1) {
                fetch(
                  `${baseUrl}/hotel/details/hotel/${hotelInfo?.listed[0]?._id}/isDocumentRequired`,
                  {
                    method: "PUT",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      isDocumentRequired: false,
                    }),
                  }
                )
                  .then((res) => res.json())
                  .then((data) => {
                    if (data?.modifiedCount === 1) {
                      Swal.fire("Congratulation", "Success", "success").then(
                        () => {}
                      );
                    }
                  });
              }
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  };

  const handleAccept = () => {
    fetch(`${baseUrl}/hotel/users/${hotelInfo?._id}/isAdmin`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isAdmin: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire("Congratulations", "You are onboarding now", "success");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {hotelInfo?.isAdmin === "Pending" &&
        hotelInfo?.listed[0]?.commission > 0 && (
          <div className="container mb-3 mt-3">
            <div
              class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
              role="alert"
            >
              <div class="flex">
                <div class="py-1">
                  <svg
                    class="fill-current h-6 w-6 text-teal-500 mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                  </svg>
                </div>
                <div>
                  <p class="font-bold">
                    Commission Agreement: Approval Required
                  </p>
                  <p class="text-sm">
                    Dear {hotelInfo?.listed[0]?.contactName},
                  </p>
                  <br />
                  <br />
                  <p class="text-sm">
                    I hope this message finds you well. As the Super Admin, I am
                    reaching out to discuss an important matter that requires
                    your attention regarding our hotel partnership.
                  </p>
                  <br />
                  <br />
                  <p class="text-sm">
                    After careful consideration, we have determined that a
                    commission percentage of {hotelInfo?.listed[0]?.commission}%
                    will be applied to our collaboration. This percentage will
                    play a crucial role in determining the financial arrangement
                    and mutual benefits for both parties involved.
                  </p>
                  <br />
                  <br />
                  <p class="text-sm">
                    Please be aware that, in order to proceed with the
                    partnership, we require your approval regarding the
                    agreed-upon commission percentage of [Commission
                    Percentage]. Should you decline the commission or fail to
                    provide your response, we regret to inform you that we will
                    be forced to disable the hotel and discontinue the
                    partnership.
                  </p>
                  <br />
                  <br />
                  <p class="text-sm">
                    However, we strongly believe that our collaboration holds
                    significant potential and will be mutually beneficial. By
                    approving the commission of [Commission Percentage], we can
                    move forward with the necessary steps to solidify our
                    partnership and work towards achieving our shared goals.
                  </p>
                  <br />
                  <br />
                  <p class="text-sm">
                    We kindly request you to review the proposed commission
                    percentage at your earliest convenience and provide us with
                    your decision. Your prompt response will be highly
                    appreciated.
                  </p>
                  <br />
                  <br />
                  <p class="text-sm">
                    Thank you for your attention to this matter. We look forward
                    to receiving your approval, and we are excited about the
                    opportunities that lie ahead for our partnership.
                  </p>
                  <br />
                  <br />
                  <p class="text-sm">Best regards,</p>
                  <br />
                  <br />
                  <p class="text-sm">Manoj</p>
                  <br />
                  <br />
                  <p class="text-sm">suvatrip.com</p>
                  <br />
                </div>
              </div>
              <button className="custom_red_color btn text-light mx-2">
                Decline
              </button>
              <button
                className="custom_green_color btn text-light"
                onClick={handleAccept}
              >
                Accept
              </button>
            </div>
          </div>
        )}
      {hotelInfo?.isAdmin === "Pending" &&
        !hotelInfo?.listed[0]?.isDocumentRequired &&
        !hotelInfo?.listed[0]?.commission && (
          <div className="container mt-3" style={{ height: "72vh" }}>
            <div
              class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
              role="alert"
            >
              <h4 class="mb-2 text-2xl font-medium leading-tight">
                {" "}
                Request is in Pending!
              </h4>
              <p class="mb-4">
                Dear User,
                <br />
                Thank you for using our application. We have received your
                request and it is currently pending approval. We understand the
                importance of your request and would like to inform you that the
                approval process may take between 24 to 72 hours.
                <br />
                <br />
                Please rest assured that our team is working diligently to
                review and process your request as quickly as possible. We
                appreciate your patience during this time and apologize for any
                inconvenience caused.
                <br />
                <br />
                If you have any urgent concerns or questions, please feel free
                to reach out to our support team at <b>mail.suvatrip.com</b> .
                We will do our best to assist you.
                <br />
                <br />
                Thank you for your understanding and cooperation.
                <br />
                <br />
                Best regards,
                <br />
                suvatrip.com
              </p>
            </div>
          </div>
        )}
      {hotelInfo?.isAdmin === "Pending" &&
        hotelInfo?.listed[0]?.isDocumentRequired && (
          <div className="container mt-3" style={{ height: "72vh" }}>
            <div
              class=" bg-blue-500 border-l-4 border-orange-500 text-white p-4"
              role="alert"
            >
              {!readyToDocSubmit && (
                <div>
                  <h4 class="mb-2 text-2xl font-medium leading-tight">
                    {" "}
                    Need Adition Documents!
                  </h4>
                  <p class="mb-4">
                    Dear {hotelInfo?.listed[0]?.NameOfProperty},
                    <br />
                    Thank you for submitting your application for approval. We
                    appreciate your interest in our services and the opportunity
                    to consider your request. In order to proceed with the
                    evaluation process, we kindly request that you provide us
                    with the following additional documents:
                    <br />
                    <br />
                    1. Commercial Registration: Please provide a copy of your
                    company's official commercial registration document. This
                    document verifies your legal status as a registered business
                    entity.
                    <br />
                    2. Tax Card: Kindly submit a copy of your valid tax card.
                    This document demonstrates your compliance with tax
                    regulations and obligations.
                    <br />
                    3. VAT Registration: We require a copy of your VAT (Value
                    Added Tax) registration certificate. This document ensures
                    your compliance with the applicable tax laws regarding
                    value-added taxes.
                    <br />
                    4. Hotel Registration: If your request is related to a hotel
                    establishment, please provide a copy of your hotel
                    registration document. This document confirms your hotel's
                    legal registration and compliance with relevant regulations.
                    <br />
                    <br />
                    The timely submission of these additional documents will
                    greatly expedite the processing of your application. Please
                    ensure that the provided copies are clear, legible, and up
                    to date.
                    <br />
                    <br />
                    You can submit the requested documents bu the{" "}
                    <b>Submit Button Click</b>
                    <br />
                    <br />
                    Should you have any questions or require further assistance,
                    please do not hesitate to reach out to our customer support
                    team at [contact number] or via email at [support email
                    address].
                    <br />
                    <br />
                    We appreciate your cooperation and look forward to reviewing
                    your complete application soon.
                    <br />
                    <br />
                    Best regards,
                    <br />
                    suvatrip.com
                  </p>
                </div>
              )}
              {readyToDocSubmit && (
                <form action="" onSubmit={handleDocSubmit}>
                  <label
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    for="file_input"
                  >
                    Commercial Registration
                  </label>
                  <input
                    onChange={handleFileSelect}
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="file_input"
                    type="file"
                  />
                  <label
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    for="file_input"
                  >
                    Tax Card
                  </label>
                  <input
                    onChange={handleFileSelect}
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="file_input"
                    type="file"
                  />
                  <label
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    for="file_input"
                  >
                    VAT Registration
                  </label>
                  <input
                    onChange={handleFileSelect}
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="file_input"
                    type="file"
                  />
                  <label
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    for="file_input"
                  >
                    Hotel Registration
                  </label>
                  <input
                    onChange={handleFileSelect}
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="file_input"
                    type="file"
                  />
                  <button
                    type="sumbit"
                    className="custom_green_color text-light btn mt-2"
                  >
                    Submit
                  </button>
                </form>
              )}
              {!readyToDocSubmit && (
                <button
                  className="btn custom_green_color text-light"
                  onClick={() => setReadyToDocSubmit(true)}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        )}
      {hotelInfo?.isAdmin === "Approved" && (
        <AdminLayout
          routes={routes}
          menu={menu}
          setMenu={setMenu}
          setRoutes={setRoutes}
        >
          {menu === "dashboard" && <Dashboard />}
          {menu === "Personal Infos" && (
            <PersonalInfo
              hotelInfo={hotelInfo?.listed[0]}
              setHotelInfo={hotelInfo}
            />
          )}
          {menu === "Galary" && (
            <Galary hotelInfo={hotelInfo?.listed[0]} setHotelInfo={hotelInfo} />
          )}
          {menu === "Facelities" && (
            <Facelities
              hotelInfo={hotelInfo?.listed[0]}
              setHotelInfo={hotelInfo}
            />
          )}
          {menu === "Calendar" && (
            <Calendar
              hotelInfo={hotelInfo?.listed[0]}
              setHotelInfo={hotelInfo}
            />
          )}
          {menu === "Review" && (
            <Review hotelInfo={hotelInfo?.listed[0]} setHotelInfo={hotelInfo} />
          )}
          {menu === "Arival Info" && (
            <Arival hotelInfo={hotelInfo?.listed[0]} setHotelInfo={hotelInfo} />
          )}

          {menu === "Rooms" && (
            <Rooms hotelInfo={hotelInfo?.listed[0]} setHotelInfo={hotelInfo} />
          )}
          {menu === "Nearby" && (
            <Nearby hotelInfo={hotelInfo?.listed[0]} setHotelInfo={hotelInfo} />
          )}
          {menu === "Fetures" && (
            <Fetures
              hotelInfo={hotelInfo?.listed[0]}
              setHotelInfo={hotelInfo}
            />
          )}
          {menu === "Policy" && (
            <Policy hotelInfo={hotelInfo?.listed[0]} setHotelInfo={hotelInfo} />
          )}
        </AdminLayout>
      )}
    </>
  );
};

export default index;
