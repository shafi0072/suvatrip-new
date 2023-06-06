import React from "react";

const Foram = () => {
  return (
    <form className="w-full max-w-lg">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs text-light font-bold mb-2"
            for="grid-first-name"
          >
            First Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
          <p className="text-red-500 text-xs italic">
            Please fill out this field.
          </p>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase text-light tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Last Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase text-light tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-password"
          >
            Email Address
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="email"
            placeholder="mail@mail.com"
          />
          <p className="text-gray-600 text-xs italic text-light">
            Confirmation email goes to this address
          </p>
        </div>
        <div className="w-full px-3 my-4">
          <label
            className="block uppercase text-light tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-password"
          >
            Confirm Email
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="email"
            placeholder="mail@mail.com"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs text-light font-bold mb-2"
            for="grid-first-name"
          >
            Phone Number
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="+98123485..."
          />
          <p className="text-red-500 text-xs italic">
            Please fill out this field.
          </p>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase text-light tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Country / Region of residence
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Asia"
          />
        </div>
      </div>
      <div className="bg-gray-400 rounded p-4">
        <h1 className="text-md mb-3">Guest Information</h1>
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-city"
        >
          Full Name
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-city"
          type="text"
          placeholder="Albuquerque"
        />

        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mt-3"
          for="grid-city"
        >
          Country / Reigion of residence
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-city"
          type="text"
          placeholder="Albuquerque"
        />
      </div>
      <h1 className="text-md mt-4 text-light">Let us know what you need</h1>
      <p className="text-sm text-gray-400">
        Requests are fullfilled on a first come. First served basis. We will
        send you right after you book.
      </p>
      <div className="bg-gray-400 rounded p-4 my-4">
        <h1 className="text-md mb-3">Do you have a smoking preference?</h1>

        <div className="flex items-center mb-4">
          <input
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
          />
          <label
            for="default-radio-1"
            className="ml-2 text-sm font-medium text-gray-900"
          >
            Non-Smoking
          </label>
        </div>
        <div className="flex items-center">
          <input
            checked
            id="default-radio-2"
            type="radio"
            value=""
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
          />
          <label
            for="default-radio-2"
            className="ml-2 text-sm font-medium text-gray-900"
          >
            Smoking
          </label>
        </div>

        <h1 className="text-md mb-3 mt-4">
          What bed configuration do you prefer?
        </h1>

        <div className="flex items-center mb-4">
          <input
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
          />
          <label
            for="default-radio-1"
            className="ml-2 text-sm font-medium text-gray-900"
          >
            I’do like a large bed
          </label>
        </div>
        <div className="flex items-center">
          <input
            checked
            id="default-radio-2"
            type="radio"
            value=""
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
          />
          <label
            for="default-radio-2"
            className="ml-2 text-sm font-medium text-gray-900"
          >
            I’do like a twin bed
          </label>
        </div>
      </div>
    </form>
  );
};

export default Foram;
