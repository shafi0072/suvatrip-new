import React from "react";

import { countries } from "country-list-json";
import CountryList from "@/src/constant/Country.json";
import { useState } from "react";
import { useEffect } from "react";
const ContactDetails = ({ data, setData, userInfo }) => {
  const [isGuest, setIsGuest] = useState(false);

  const handleOnChange = (e) => {
    let newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };

  return (
    <div class="relative group mb-3 ">
      <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div class="relative px-7 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none space-x-6 py-3">
        <div class="space-y-2">
          <div className="d-flex align-items-center">
            <img src="/images/21-avatar-flat.gif" className="w-12" alt="" />
            <h1 className="text-md font-bold">Contact Details</h1>
          </div>
          <form>
            <div class="form-group mt-3">
              <label for="exampleInputPassword1 ">
                Full name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={userInfo?.username}
                class="form-control mt-3"
                id="exampleInputPassword1"
                placeholder="Full name"
                onChange={handleOnChange}
              />
            </div>
            <div class="form-group mt-3">
              <label for="exampleInputEmail1 mb-3">
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                class="form-control mt-3"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                onChange={handleOnChange}
                value={userInfo?.email}
                placeholder="Enter email"
              />
            </div>
            <div className="row">
              <div className="col-md-6">
                <div class="form-group mt-3">
                  <label for="exampleInputPassword1 ">
                    Phone number <span className="text-red-500">*</span>{" "}
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={userInfo?.phone}
                    class="form-control mt-3"
                    id="exampleInputPassword1"
                    placeholder="Phone number"
                    onChange={handleOnChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div class="form-group mt-3">
                  <label for="exampleInputPassword1 ">
                    Country/region of residence{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="countries"
                    class="bg-gray-50 mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                    name="country"
                    onChange={handleOnChange}
                  >
                    {CountryList?.map((items) => (
                      <option
                        value={items?.code}
                        selected={items?.name === "Nepal"}
                      >
                        {items?.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div class="form-check mt-3 d-flex align-items-center pb-4">
              <input
                type="checkbox"
                onChange={(e) => setIsGuest(!isGuest)}
                class="form-check-input mr-2"
                id="exampleCheck1"
              />
              <label class="form-check-label text-sky-500" for="exampleCheck1">
                Make this booking for someone else
              </label>
            </div>

            {isGuest && (
              <div className="bg-gray-100 py-4 px-3 ">
                <h1 className="text-md font-bold">Guest information</h1>
                <div class="form-group mt-3">
                  <label for="exampleInputPassword1 ">Full Name</label>
                  <input
                    type="text"
                    class="form-control mt-3"
                    id="exampleInputPassword1"
                    placeholder="John Doe"
                  />
                </div>

                <div className="mt-3">
                  <label
                    for="countries"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Country/region of residence *
                  </label>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  >
                    {CountryList?.map((items) => (
                      <option
                        value={items?.code}
                        selected={items?.name === "Nepal"}
                      >
                        {items?.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
