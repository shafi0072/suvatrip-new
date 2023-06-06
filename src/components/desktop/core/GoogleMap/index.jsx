import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

function GoogleMaps() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBi5Bq8YbATnUhPpwQdhtENLTQQROVV6N0",
    language: "en",
  });
  const [map, setMap] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const onLoadSuccess = React.useCallback(() => {
    setLoading(false);
  }, []);

  const onLoad = React.useCallback((map) => {
    setMap(map);
  }, []);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading maps</div>;

  return (
    <div style={{ position: "relative" }}>
      {loading && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "4px",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
          }}
        >
          Loading map...
        </div>
      )}
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
      >
        {/* Child components, such as markers, info windows, etc. */}
      </GoogleMap>
    </div>
  );
}

export default React.memo(GoogleMaps);
