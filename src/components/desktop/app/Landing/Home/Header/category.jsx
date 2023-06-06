import React, { useEffect, useState } from "react";
import { header_data } from "@/src/constant/header/headerData";
import Link from "next/link";
import screenSize from "@/src/components/desktop/core/lib/MediaQuery/ScreenSize";
const Category = () => {
  const resulation = screenSize("600px");
  // state controller start
  const [indexing, setIndexing] = useState(0);
  const [show, setShow] = useState(false);
  // state controller end

  // useEffect Controller start
  useEffect(() => {
    setShow(true);
  }, []);

  // useEffect Controller start
  return (
    <div className={`fade-in ${show ? "is-visible" : ""}`}>
      <div
        className={`${
          resulation
            ? "d-flex justify-content-center relative top-2"
            : "mt-5 d-flex justify-content-center relative top-2"
        }`}
      >
        <div className="container ml-3 pt-2 text-center d-flex justify-content-center">
          {header_data?.map((items, index) => (
            <div
              className={
                indexing === index
                  ? "  col-md-4 text-center cursor-pointer text-light  categoryHover  shadow-lg py-2"
                  : "col-md-4 text-center cursor-pointer text-light py-2 categoryHover shadow-lg"
              }
              key={index}
              onClick={() => setIndexing(index)}
              style={{
                borderRadius: "10px",
                width: screenSize("600px") ? "30%" : "10%",
              }}
            >
              <Link href="">{items.icon}</Link>
              <h6 className="text-1xl font-bold">{items.title}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
