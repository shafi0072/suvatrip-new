import { useState } from "react";
import ReactMapGL, { GeolocateControl, Marker } from "react-map-gl";
import Geocode from "react-geocode";

const MapBox = ({ accessToken }) => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "400px",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async () => {
    try {
      const response = await Geocode.fromAddress(searchValue);
      const { lat, lng } = response.results[0].geometry.location;
      setViewport({ ...viewport, latitude: lat, longitude: lng, zoom: 12 });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ReactMapGL
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapboxApiAccessToken={
          "pk.eyJ1IjoiY29tbW9kaXR5dmVjdG9ycyIsImEiOiJjamR3eWFvd3owcTUwMzRzNmg1eXJjYWlzIn0.QESIireyCutiiFOTlI4y5w"
        }
      >
        {/* Add markers here */}
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
      </ReactMapGL>
      <div>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default MapBox;
