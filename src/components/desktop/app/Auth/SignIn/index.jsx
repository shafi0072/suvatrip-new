import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { baseUrl } from "@/src/config/serverConfig";
import Swal from "sweetalert2";
import SocialMedia from "../SocialMedia";

const index = ({ hotelInfo, handleOnClose, redirect }) => {
  const router = useRouter();
  const [signUpClicked, setSignUpClicked] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const [signUpData, setSignUpData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });

  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });
  const handleOnChangeSignUp = (e) => {
    const newSignUpData = { ...signUpData };
    newSignUpData[e.target.name] = e.target.value;
    setSignUpData(newSignUpData);
  };

  const handleOnChangeSignIn = (e) => {
    const newSignUpData = { ...signInData };
    newSignUpData[e.target.name] = e.target.value;
    setSignInData(newSignUpData);
  };

  // console.log({ guser, gloading, gerror });

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetch(`${baseUrl}/auth/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.message === "added") {
          setMessage("signed-up success");
        } else {
          setIsLoading(false);
          setSignUpClicked(false);
        }
      })
      .catch((err) => setErr(err?.message));
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetch(`${baseUrl}/auth/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signInData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.accessToken) {
          localStorage.setItem("accessToken", data?.accessToken);
          setIsLoading(false);
          handleOnClose();
          Swal.fire(
            "Good job!",
            "You have successfully signed in",
            "success"
          ).then(() => {
            redirect === "reload"
              ? window.location.reload()
              : window.location.assign("/");
          });
        } else {
          handleOnClose();
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
      })
      .catch((err) => {
        handleOnClose();
        Swal.fire({
          title: "Error!",
          text: "Something went wrong",
          icon: "error",
          confirmButtonText: "Try again",
        });
      });
  };
  return (
    <div className="d-flex justify-content-center">
      {!signUpClicked && (
        <div className="w-full rounded-lg ">
          <div className="p-6 space-y-4 ">
            <h1 className="text-xl font-bold text-center mb-4 leading-tight tracking-tight text-gray-900">
              Sign in to your account
            </h1>
            <form className="space-y-4 " onSubmit={handleSignInSubmit}>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="name@company.com"
                  required
                  onChange={handleOnChangeSignIn}
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required
                  onChange={handleOnChangeSignIn}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label for="remember" className="text-gray-500 text-sm">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 underline hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <button
                className="w-full text-white py-3 custom_red_color hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                type="submit"
              >
                {isLoading && (
                  <>
                    {" "}
                    <svg
                      aria-hidden="true"
                      role="status"
                      class="inline w-4 h-4 mr-3 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                    Loading...
                  </>
                )}
                {!isLoading && "Sign in"}
              </button>
              <p className="text-sm font-light text-gray-700">
                Don’t have an account yet?{" "}
                <a
                  href="#"
                  className="font-medium text-blue-500 underline hover:underline"
                  onClick={() => setSignUpClicked(true)}
                >
                  Sign up
                </a>
              </p>
            </form>

            <SocialMedia />
          </div>
        </div>
      )}
      {signUpClicked && (
        <div className="w-full rounded-lg   md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-md font-bold leading-tight text-center tracking-tight text-gray-900 md:text-xl ">
              Create an account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSignupSubmit}
            >
              <div>
                <label
                  for="fullName"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="John Doe"
                  required
                  onChange={handleOnChangeSignUp}
                />
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="name@company.com"
                  required
                  onChange={handleOnChangeSignUp}
                />
              </div>
              <div>
                <label
                  for="phone"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="+8801234567"
                  required
                  onChange={handleOnChangeSignUp}
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                  onChange={handleOnChangeSignUp}
                />
              </div>

              <button
                type="submit"
                className="w-full text-white py-3 custom_red_color hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                {isLoading && (
                  <>
                    {" "}
                    <svg
                      aria-hidden="true"
                      role="status"
                      class="inline w-4 h-4 mr-3 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                    Loading...
                  </>
                )}
                {!isLoading && "Sign Up"}
              </button>
              <p className="text-sm font-light text-gray-700 ">
                Already have an account?{" "}
                <a
                  href="#"
                  className="font-medium text-blue-500 underline hover:underline"
                  onClick={() => setSignUpClicked(false)}
                >
                  Sign in
                </a>
              </p>
              {message && (
                <p className="text-center text-green-500">{message}</p>
              )}
              {err && <p className="text-center text-red-500">{err}</p>}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default index;
