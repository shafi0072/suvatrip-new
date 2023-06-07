import React from "react";
import country from "../../../../../../constant/Country.json";
import AutoLocation from "../../../Landing/Home/Header/AutoLocation";
import Switch from "@mui/material/Switch";
const BasicInfo = ({
  enhance,
  setEnhance,
  progress1,
  setProgress1,
  selected,
  setSelected,
  setAddress,
  setProgress2,
}) => {
  const [checked, setChecked] = React.useState(false);
  const handleOnChange = (e) => {
    const newData = { ...enhance };
    newData[e.target.name] = e.target.value;
    setEnhance(newData);
  };

  const handleChangeSwitch = (event) => {
    setChecked(event.target.checked);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setProgress1(100);
    setProgress2(10);
  };

  return (
    <div className="mt-3 mb-3" style={{ height: "69vh" }}>
      <form action="" onSubmit={handleOnSubmit}>
        <h1 className="text-xl font-bold text-center mb-3">
          Property Informations:
        </h1>
        <div className="row">
          <div className="col-md-4">
            <label
              htmlFor="contactName"
              className="text-md font-bold text-center"
            >
              Please tell us your name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="contactName"
              name="contactName"
              required
              onChange={handleOnChange}
              className="block w-100 py-2 px-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your_Name"
            />
          </div>
          <div className="col-md-4">
            <label
              htmlFor="NameOfProperty"
              className="text-md font-bold text-center"
            >
              Please tell us your Property name{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="NameOfProperty"
              name="NameOfProperty"
              required
              onChange={handleOnChange}
              className="block w-100 py-2 px-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:ring-blue-500 focus:border-blue-500"
              placeholder=" your property name "
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="category" className="text-md font-bold text-center">
              Please tell us your Property Type{" "}
              <span className="text-red-500">*</span>
            </label>
            <select
              type="text"
              id="category"
              name="category"
              required
              onChange={handleOnChange}
              className="block w-100 py-2 px-2 text-gray-900 border border-gray-100 rounded-lg bg-gray-100 sm:text-md focus:ring-blue-500 focus:border-blue-500"
              placeholder=" your property name "
            >
              <option value="Hotel">Hotel</option>
              <option value="Farm house">Farm house</option>
              <option value="Guest house">Guest house</option>
              <option value="Resort">Resort</option>
              <option value="Tent">Tent</option>
              <option value="Apartment">Apartment</option>
            </select>
          </div>
          <div className="col-md-4 mt-2">
            <label
              htmlFor="numbersOfRoom"
              className="text-md font-bold text-center"
            >
              How many Rooms Do you Have?{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="numbersOfRoom"
              name="numbersOfRoom"
              required
              onChange={handleOnChange}
              className="block w-100 py-2 px-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:ring-blue-500 focus:border-blue-500"
              placeholder=" How many Rooms Do you Have "
            />
          </div>
          <div className="col-md-4 mt-2">
            <label htmlFor="Stars" className="text-md font-bold text-center">
              Stars ? <span className="text-red-500">*</span>
            </label>
            <select
              type="text"
              id="Stars"
              name="Stars"
              required
              onChange={handleOnChange}
              className="block w-100 py-2 px-2 text-gray-900 border border-gray-100 rounded-lg bg-gray-100 sm:text-md focus:ring-blue-500 focus:border-blue-500"
              placeholder=" your property name"
            >
              <option value={3}>3 stars</option>
              <option value={4}>4 stars</option>
              <option value={5}>5 stars</option>
            </select>
          </div>
          <div className="col-md-4 mt-2">
            <label
              htmlFor="phoneNumber"
              className="text-md font-bold text-center"
            >
              Your Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              required
              onChange={handleOnChange}
              className="block w-100 py-2 px-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:ring-blue-500 focus:border-blue-500"
              placeholder=" Your Phone Number "
            />
          </div>
          <div className="col-md-4 mt-2">
            <label
              htmlFor="alternativePhoneNumber"
              className="text-md font-bold text-center"
            >
              {" "}
              Additional Phone Number{" "}
            </label>
            <input
              type="text"
              id="alternativePhoneNumber"
              name="alternativePhoneNumber"
              onChange={handleOnChange}
              className="block w-100 py-2 px-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:ring-blue-500 focus:border-blue-500"
              placeholder=" Additional Phone Number "
            />
          </div>
          <div className="col-md-4 mt-2">
            <label htmlFor="email" className="text-md font-bold text-center">
              email <span className="text-red-500">*</span>{" "}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleOnChange}
              className="block w-100 py-2 px-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:ring-blue-500 focus:border-blue-500"
              placeholder=" enter your email "
            />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-4">
            <label
              htmlFor="StreetAddress"
              className="text-md font-bold text-center"
            >
              Street Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="StreetAddress"
              name="StreetAddress"
              required
              onChange={handleOnChange}
              className="block w-100 py-2 px-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your street address"
            />
          </div>
          <div className="col-md-4">
            <label
              htmlFor="addressLine2"
              className="text-md font-bold text-center"
            >
              Address line 2{" "}
            </label>
            <input
              type="text"
              id="addressLine2"
              name="addressLine2"
              onChange={handleOnChange}
              className="block w-100 py-2 px-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:ring-blue-500 focus:border-blue-500"
              placeholder=" address line 2 "
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="Country" className="text-md font-bold text-center">
              Country <span className="text-red-500">*</span>
            </label>
            <select
              type="text"
              id="Country"
              name="Country"
              required
              onChange={handleOnChange}
              className="block w-100 py-2 px-2 text-gray-900 border border-gray-100 rounded-lg bg-gray-100 sm:text-md focus:ring-blue-500 focus:border-blue-500"
              placeholder=" your country name "
            >
              {country?.map((item) => (
                <option value={item?.name}>{item?.name}</option>
              ))}
            </select>
          </div>
          <div className="col-md-4 mt-2">
            <label htmlFor="City" className="text-md font-bold text-center">
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="City"
              name="City"
              required
              onChange={handleOnChange}
              className="block w-100 py-2 px-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:ring-blue-500 focus:border-blue-500"
              placeholder=" your city name "
            />
          </div>

          <div className="col-md-4 mt-2">
            <label htmlFor="postCode" className="text-md font-bold text-center">
              Post/Zip Code <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="postCode"
              name="postCode"
              onChange={handleOnChange}
              className="block w-100 py-2 px-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:ring-blue-500 focus:border-blue-500"
              placeholder=" post/zip code "
            />
          </div>

          <div className="col-md-4 mt-2 ">
            <label htmlFor="postCode" className="text-md font-bold text-center">
              Address in google map <span className="text-red-500">*</span>
            </label>
            <div className="bg-gray-100 border rounded">
              <AutoLocation
                selected={selected}
                setSelected={setSelected}
                setAddress={setAddress}
                py={"Py-2 m"}
              />
            </div>
          </div>
          <div className="col-md-4 mt-2">
            <label htmlFor="postCode" className="text-md font-bold text-center">
              Pick Up Available ?{" "}
            </label>
            <Switch
              checked={checked}
              onChange={handleChangeSwitch}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
        </div>
        <div className="d-flex justify-content-between mb-2 mt-10">
          <button type="reset" className="btn custom_red_color px-5 text-light">
            Back
          </button>
          <button
            disabled={selected ? false : true}
            type="submit"
            className="btn custom_green_color px-5 text-light"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default BasicInfo;
