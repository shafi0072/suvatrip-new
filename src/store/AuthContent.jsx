import React, { createContext, useState } from "react";
import { createClient, groq } from "next-sanity";
import { useEffect } from "react";
export const UserContent = createContext();
const AuthContent = ({ setUserInfo, userInfo, children }) => {
  const [user, setUser] = useState({
    displayName: "",
    photoUrl: "",
  });
  const [navDatas, setNavData] = useState([]);
  const [rooomsData, setRoomsData] = useState(null);
  const value = {
    user,
    setUser,
    userInfo,
    setUserInfo,
    navDatas,
    rooomsData,
  };

  const projectId = "ge42e9kb"; // "pv8y60vp"
  const dataset = "production";
  const apiVersion = "2023-05-03";
  const client = createClient({
    projectId,
    dataset,
    apiVersion, // https://www.sanity.io/docs/api-versioning
    useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
  });

  useEffect(() => {
    client
      .fetch(
        groq`*[_type == "navbar"]{
    _id,
    name,
    href,
    current,
    dropdown,
    "dropdownData": dropdownData[]{
      title
    }
  }`
      )
      .then((data) => {
        setNavData(data);
        // Access the full array of navbar data here
      });
  }, []);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "rooms"]{
      _id,
      name[]{
        title
      },
      types[]{
        title
      },
      smocking[]{
        title
      },
      language[]{
        title
      }
    }`
      )
      .then((data) => {
        setRoomsData(data); // Assuming you want the name array of the first room
      });
  }, []);
  return <UserContent.Provider value={value}>{children}</UserContent.Provider>;
};

export default AuthContent;
