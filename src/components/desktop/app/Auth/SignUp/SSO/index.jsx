import React from "react";

const index = () => {
  return (
    <form action="">
      <input
        type="text"
        className="block border border-grey-light w-full p-3 rounded mb-4"
        name="fullname"
        placeholder="Full Name"
      />

      <input
        type="text"
        className="block border border-grey-light w-full p-3 rounded mb-4"
        name="email"
        placeholder="Email"
      />
      <input
        type="text"
        className="block border border-grey-light w-full p-3 rounded mb-4"
        name="Address"
        placeholder="Address"
      />

      <input
        type="text"
        className="block border border-grey-light w-full p-3 rounded mb-4"
        name="PhoneNumber"
        placeholder="Phone Number"
      />
      <button
        type="submit"
        className="w-full text-center py-3 rounded bg-sky-800 text-white hover:custom_green_color focus:outline-none my-1"
      >
        Create Account
      </button>
      <div className="text-center text-sm text-grey-dark mt-4">
        By signing up, you agree to the{" "}
        <a
          className="underline border-b border-grey-dark text-grey-dark"
          href="#"
        >
          Terms of Service
        </a>{" "}
        and{" "}
        <a
          className="underline border-b border-grey-dark text-grey-dark"
          href="#"
        >
          Privacy Policy
        </a>
      </div>
    </form>
  );
};

export default index;
