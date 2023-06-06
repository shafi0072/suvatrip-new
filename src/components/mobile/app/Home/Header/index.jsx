import React from "react";
import SearchIcon from "@mui/icons-material/Search";
const Index = () => {
  return (
    <div className="mt-3 container">
      <div className="d-flex justify-content-between align-items-center">
        <div className="">
          <p>Current Location</p>
          <h1 className="text-1xl font-bold">Kathmandu, Nepal</h1>
        </div>
        <div className="">
          <img
            className="w-10 h-10 rounded-full"
            src="https://salondesmaires-gard.com/wp-content/uploads/2014/10/speaker-3.jpg"
            alt="Rounded avatar"
          />
        </div>
      </div>
      <form
        action=""
        className="mt-4 d-flex justify-content-between border-2 border-gray-100 p-2 bg-sky-600 rounded-3xl"
      >
        <SearchIcon sx={{ color: "white" }} />
        <input
          type="text"
          placeholder="Search your hotel"
          className="border-none bg-sky-600 text-light"
          style={{ width: "100%" }}
        />
      </form>
      <div className="mt-3">
        <div className="d-flex justify-content-around">
          <div>
            <img
              className="w-20 h-20 rounded-full"
              src="https://www.planetware.com/photos-large/NEP/nepal-everest-base-camp-trek.jpg"
              alt="Default avatar"
            />
            <h1 className="mt-1 font-bold text-center">TRIPS</h1>
          </div>
          <div>
            <img
              className="w-20 h-20 rounded-full"
              src="https://i0.wp.com/handluggageonly.co.uk/wp-content/uploads/2018/04/Hand-Luggage-Only-3-2.jpg?resize=1000%2C667&ssl=1"
              alt="Default avatar"
            />
            <h1 className="mt-1 font-bold text-center">SAVED</h1>
          </div>
          <div>
            <img
              className="w-20 h-20 rounded-full"
              src="https://assets.traveltriangle.com/blog/wp-content/uploads/2015/10/nagarkot-Beautiful-view-of-the-Himalayas-from-Nagarkot.jpg"
              alt="Default avatar"
            />
            <h1 className="mt-1 font-bold text-center">SAVED</h1>
          </div>
          <div>
            <img
              className="w-20 h-20 rounded-full"
              src="https://www.touropia.com/gfx/d/tourist-attractions-in-nepal/annapurna_sanctuary_trek.jpg"
              alt="Default avatar"
            />
            <h1 className="mt-1 font-bold text-center">SAVED</h1>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <h1 className="text-md font-bold text-center">Offers</h1>
        <div className="d-flex justify-content-center">
          <div
            style={{ width: "70px", height: "5px" }}
            className="bg-red-600"
          ></div>
        </div>
        <div className="d-flex justify-content-between mt-3">
          <div>
            <img
              className="w-20 h-20 rounded"
              src="https://www.planetware.com/photos-large/NEP/nepal-everest-base-camp-trek.jpg"
              alt="Default avatar"
            />
            <h1 className="mt-1 font-bold text-center">TRIPS</h1>
          </div>
          <div>
            <img
              className="w-20 h-20 rounded"
              src="https://www.planetware.com/photos-large/NEP/nepal-everest-base-camp-trek.jpg"
              alt="Default avatar"
            />
            <h1 className="mt-1 font-bold text-center">TRIPS</h1>
          </div>
          <div>
            <img
              className="w-20 h-20 rounded"
              src="https://www.planetware.com/photos-large/NEP/nepal-everest-base-camp-trek.jpg"
              alt="Default avatar"
            />
            <h1 className="mt-1 font-bold text-center">TRIPS</h1>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <h1 className="text-md font-bold text-center">
          Browse By Property Type
        </h1>

        <div className="d-flex justify-content-between mt-3">
          <div>
            <img
              className="w-20 h-20 rounded"
              src="https://www.planetware.com/photos-large/NEP/nepal-everest-base-camp-trek.jpg"
              alt="Default avatar"
            />
            <h1 className="mt-1 font-bold text-center">TRIPS</h1>
          </div>
          <div>
            <img
              className="w-20 h-20 rounded"
              src="https://www.planetware.com/photos-large/NEP/nepal-everest-base-camp-trek.jpg"
              alt="Default avatar"
            />
            <h1 className="mt-1 font-bold text-center">TRIPS</h1>
          </div>
          <div>
            <img
              className="w-20 h-20 rounded"
              src="https://www.planetware.com/photos-large/NEP/nepal-everest-base-camp-trek.jpg"
              alt="Default avatar"
            />
            <h1 className="mt-1 font-bold text-center">TRIPS</h1>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <h1 className="text-md font-bold text-center">Explore Nepal</h1>

        <div className="d-flex justify-content-between mt-3">
          <div>
            <img
              className="w-20 h-20 rounded"
              src="https://www.planetware.com/photos-large/NEP/nepal-everest-base-camp-trek.jpg"
              alt="Default avatar"
            />
            <h1 className="mt-1 font-bold text-center">TRIPS</h1>
          </div>
          <div>
            <img
              className="w-20 h-20 rounded"
              src="https://www.planetware.com/photos-large/NEP/nepal-everest-base-camp-trek.jpg"
              alt="Default avatar"
            />
            <h1 className="mt-1 font-bold text-center">TRIPS</h1>
          </div>
          <div>
            <img
              className="w-20 h-20 rounded"
              src="https://www.planetware.com/photos-large/NEP/nepal-everest-base-camp-trek.jpg"
              alt="Default avatar"
            />
            <h1 className="mt-1 font-bold text-center">TRIPS</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
