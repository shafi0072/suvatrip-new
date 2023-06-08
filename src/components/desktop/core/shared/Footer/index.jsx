import { footerData } from "@/src/constant/footer/Foother";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import TwitterIcon from "@mui/icons-material/Twitter";
import screenSize from "../../lib/MediaQuery/ScreenSize";
const Index = () => {
  const resulation = screenSize("600px");
  return (
    <div className="bg-gray-900 py-4 mt-52">
      <div className="container">
        <div className="row pt-2 pb-2">
          {!resulation && (
            <div
              className="col-md-4 bg-gray-500 mt-3"
              style={{ width: "30%", height: "2px", borderRadius: "10px" }}
            ></div>
          )}
          <div className="col-md-4 text-center">
            <FacebookSharpIcon
              sx={{ fontSize: "30px", color: "gray", marginLeft: "20px" }}
            />
            <InstagramIcon
              sx={{ fontSize: "30px", color: "gray", marginLeft: "20px" }}
            />
            <TwitterIcon
              sx={{ fontSize: "30px", color: "gray", marginLeft: "20px" }}
            />
          </div>
          {!resulation && (
            <div
              className="col-md-4 bg-gray-500 mt-3 ml-3"
              style={{ width: "35%", height: "2px", borderRadius: "10px" }}
            ></div>
          )}
        </div>
        <div className="row pb-3">
          <div className="col-md-12 text-center">
            <h1 className="text-3xl font-bold text-secondary">SUVATRIP</h1>
            <p className="text-secondary">Copyright &copy; Suvatrip.com 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
