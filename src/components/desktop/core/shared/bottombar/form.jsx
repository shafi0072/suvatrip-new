import React from "react";

const Form = () => {
  return (
    <form className="ml-2">
      <div className="flex">
        <label
          for="search-dropdown"
          className="mb-2 text-sm font-medium text-gray-900 sr-only white:text-white"
        >
          Your Email
        </label>
        <button
          id="dropdown-button"
          data-dropdown-toggle="dropdown"
          className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border-2 border-sky-800 darFk:border-gray-700 white:text-white rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 white:bg-gray-600 white:hover:bg-gray-700 white:focus:ring-gray-800"
          type="button"
        >
          +880{" "}
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          id="dropdown"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 white:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 white:text-gray-200"
            aria-labelledby="dropdown-button"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 white:hover:bg-gray-600 white:hover:text-white"
              >
                Nepal
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 white:hover:bg-gray-600 white:hover:text-white"
              >
                Bangladesh
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 white:hover:bg-gray-600 white:hover:text-white"
              >
                India
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 white:hover:bg-gray-600 white:hover:text-white"
              >
                Usa
              </a>
            </li>
          </ul>
        </div>

        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 border-l-gray-100 border-l-2 border-y-2 border-sky-800 focus:ring-blue-500 focus:border-blue-500 white:bg-gray-700 white:border-gray-600 white:placeholder-gray-400 white:text-white white:focus:border-blue-500"
            placeholder="123456789"
            required
          />
          <button
            type="submit"
            className="absolute top-0 btn-outline-primary  left-full  p-2.5 text-sm font-medium text-dark bg-gray-50 rounded-r-lg border-2 border-sky-800"
            style={{ width: "115px" }}
          >
            GET APP LINK
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
