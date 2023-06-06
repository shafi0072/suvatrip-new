import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import cities from "@/src/constant/Searchlist/searchLocation";
import screenSize from "../lib/MediaQuery/ScreenSize";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

const LocationSearch = ({ open, handleClose, setLocation, location }) => {
  const resulation = screenSize("600px");
  const [searchTerm, setSearchTerm] = React.useState(location);
  const itemsPerPage = 10;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBi5Bq8YbATnUhPpwQdhtENLTQQROVV6N0",
    libraries: ["places"],
  });
  const uniqueArr = [];
  for (let i = 0; i < cities.length; i++) {
    if (!uniqueArr.includes(cities[i])) {
      uniqueArr.push(cities[i]);
    }
  }

  const filteredCities = uniqueArr.filter((city) =>
    city.toLowerCase().includes(searchTerm?.toLowerCase())
  );

  const [show, setShow] = React.useState(false);

  const style = {
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: resulation ? "90%" : "30%",
    bgcolor: "#ffffff38",
    height: searchTerm ? "500px" : "130px",
    overflow: "scroll",
    boxShadow: 24,
    borderRadius: "20px",
    p: 4,
    "&::-webkit-scrollbar": {
      width: "0.0em",
    },
  };
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
  };

  React.useEffect(() => {
    setShow(true);
  }, []);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className="sticky">
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3  pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <Combobox onSelect={handleSelect}>
                <ComboboxInput
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  style={{ width: "97%" }}
                  disabled={!ready}
                  className="combobox-input block ml-2 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 "
                  placeholder="Search an address"
                />
                <ComboboxPopover>
                  <ComboboxList>
                    {status === "OK" &&
                      data.map(({ place_id, description }) => (
                        <ComboboxOption key={place_id} value={description} />
                      ))}
                  </ComboboxList>
                </ComboboxPopover>
              </Combobox>
            </div>
          </form>

          <div className="mt-5">
            <ul className="">
              {searchTerm &&
                filteredCities.map((city) => (
                  <li
                    key={city}
                    className={`fade-in my-2 ${
                      show && city ? "is-visible" : ""
                    }`}
                    onClick={() => {
                      setLocation(city);
                      handleClose();
                    }}
                  >
                    <a
                      href="#"
                      className="flex flex-col items-center bg-gray-700   rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-800"
                    >
                      <div className="d-flex align-items-center">
                        <div className=" text-light leading-normal mr-2 ml-2">
                          <LocationOnIcon />
                        </div>
                        <div className=" py-3 pr-3 leading-normal">
                          <h5 className=" text-md font-bold tracking-tight text-light">
                            {city}
                          </h5>
                          <p className=" font-normal text-sm text-gray-300">
                            Here are the biggest enterprise technology
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default LocationSearch;
