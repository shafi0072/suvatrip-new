import React from "react";
import Form from "./SSO";
import ThirdpartyAuthComponent from "./ThirdpartyAuth";

const Index = ({ handleClose }) => {
  return (
    <div className=" max-w-sm mx-auto flex-1 flex flex-col items-center justify-center ">
      <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        <h1 className="mb-8 text-3xl text-center">Sign up</h1>
        <ThirdpartyAuthComponent handleClose={handleClose} />
        <div className="d-flex justify-content-center my-3 mt-4">
          <div
            style={{ width: "30%", height: "2px" }}
            className="bg-gray-400 mr-3"
          ></div>
          <h1 className="text-center relative bottom-3">or</h1>
          <div
            style={{ width: "30%", height: "2px" }}
            className="bg-gray-400 ml-3"
          ></div>
        </div>
        <Form />

        <div className="text-grey-dark mt-6 text-center">
          Already have an account?
          <a
            className="underline border-b border-blue text-blue-800"
            href="../login/"
          >
            Log in
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default Index;
