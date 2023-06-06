import { categoryData } from "@/src/constant/Enhance/CategoryData";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Step2 = ({ enhanceData, setEnhanceData, handleOnChange }) => {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    setShow(true);
  }, []);
  useEffect(() => {
    const newEnhanceProperty = { ...enhanceData };
    newEnhanceProperty["category"] = categoryName;
    setEnhanceData(newEnhanceProperty);
  }, [categoryName]);

  return (
    <div className="container ">
      <div className="row d-flex justify-content-center">
        <div className={`fade-in mt-5 col-md-6 ${show ? "is-visible" : ""}`}>
          <div className="text-center">
            <h1 className="text-md text-center font-bold my-3">
              What is the name of your property?
            </h1>

            <div style={{ width: "100%" }} className="border rounded p-3">
              <input
                type="text"
                id="large-input"
                name="NameOfProperty"
                required
                onChange={(e) => handleOnChange(e)}
                className="block w-100 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="write your property name Here"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex align-items-center mt-5">
        <div
          className={`fade-in col-md-12 d-flex justify-content-center mt-5 ${
            show ? "is-visible" : ""
          }`}
        >
          <div className="text-center ml-5">
            <h1 className="text-md font-bold my-3">
              What is the property Category?
            </h1>
            <div className="mb-6">
              <div className=" border rounded-5 p-3">
                <div className="row">
                  {categoryData.map((items, index) => (
                    <div
                      className={`fade-in my-3 col-md-4 ${
                        show ? "is-visible" : ""
                      }`}
                    >
                      <div
                        className={`${
                          categoryName === items?.title
                            ? "border-4 border-sky-600"
                            : "border"
                        } rounded p-3 d-flex justify-content-center`}
                        onClick={() => setCategoryName(items?.title)}
                      >
                        <div>
                          <img
                            src={items?.image}
                            style={{ width: "150px", height: "150px" }}
                            alt=""
                          />
                          <h1 className="text-xl font-bold text-center uppercase">
                            {items?.title}
                          </h1>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
