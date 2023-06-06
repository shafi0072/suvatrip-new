import { useState, useMemo } from "react";
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

const AutoLocation = ({ selected, setSelected, setAddress, py }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBi5Bq8YbATnUhPpwQdhtENLTQQROVV6N0",
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <Map
      selected={selected}
      setSelected={setSelected}
      py={py}
      setAddress={setAddress}
    />
  );
};

export default AutoLocation;

function Map({ selected, setSelected, setAddress, py }) {
  const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);

  return (
    <>
      <div className="places-container">
        <PlacesAutocomplete
          setSelected={setSelected}
          py={py}
          setAddress={setAddress}
        />
      </div>
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map-container"
      >
        {selected && <Marker position={selected} />}
      </GoogleMap>
    </>
  );
}

const PlacesAutocomplete = ({ setSelected, setAddress, py }) => {
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
    setAddress(address);
    const results = await getGeocode({ address });
    const { lat, lng } = getLatLng(results[0]);

    setSelected({ lat, lng });
  };

  return (
    <Combobox onSelect={handleSelect} className="d-flex align-items-center">
      <img
        src="/images/18-location-pin-outline (1).gif"
        alt=""
        className="w-10"
      />
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className={`combobox-input block ml-2 ${
          py ? py : "py-4"
        } text-sm text-gray-900  rounded-lg bg-gray-50 focus:none bookingTimeBackgroundd`}
        placeholder="Search an address"
        style={{
          width: "100%",
          background: "rgba(255, 255, 255, 0%)",
          marginRight: "-10px",
          padding: "25px",
          border: "none",
        }}
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <div
                className="d-flex align-items-center border-b w-full hover:bg-gray-300"
                key={place_id}
              >
                <img
                  src="/images/18-location-pin-outline (1).gif"
                  alt=""
                  className="w-10"
                />
                <ComboboxOption value={description} />
              </div>
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};
