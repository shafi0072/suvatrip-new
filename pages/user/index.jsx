import React, { useEffect, useState } from "react";
import ProfileComponents from "@/src/components/desktop/app/Profile";
import { useContext } from "react";
import { UserContent } from "@/src/store/AuthContent";
import { baseUrl } from "@/src/config/serverConfig";
import Admin from '@/src/components/desktop/app/ManagePanel'
const index = () => {
  const { userInfo } = useContext(UserContent);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    fetch(`${baseUrl}/hotel/hotelWithStatus/${userInfo?.user_id}`)
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch(error=> console.log(error))
  }, [userData]);
  return (
    <div>
      {userData?.isAdmin === "No" ?  <ProfileComponents user = {userData}/> : <Admin hotelInfo = {userData}/>}
    </div>
  );
};

export default index;
