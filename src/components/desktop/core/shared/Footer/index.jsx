import { footerData } from "@/src/constant/footer/Foother";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import TwitterIcon from "@mui/icons-material/Twitter";
import screenSize from "../../lib/MediaQuery/ScreenSize";
const Index = () => {
  const resulation = screenSize("600px");
  return (
    <div className="bg-gray-900 py-4 flex flex-row justify-between items-center">
      <div className="px-6 text-center">
        <h1 className="text-3xl font-bold text-secondary">SUVATRIP</h1>
      </div>
      <div className="px-6 text-center">
        <p className="text-secondary">Copyright &copy; Suvatrip.com 2023</p>
      </div>
      <div className="flex justify-center space-x-6">
        <FacebookSharpIcon className="text-gray-500 text-3xl mx-2" />
        <InstagramIcon className="text-gray-500 text-3xl mx-2" />
        <TwitterIcon className="text-gray-500 text-3xl mx-2" />
      </div>
    </div>
  );
};

export default Index;