import React, { useCallback, useState } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { useEffect } from "react";

const mapStyles = {
  width:'86%',
  height: "100%",
};

const Index = ({ google, stores }) => {
  const [activeMarker, setActiveMarker] = useState({});
  const [mapCenter, setMapCenter] = useState({
    lat: 37.7749,
    lng: -122.4194,
  });

  const [zoom, setZoom] = useState(13);

  const onMarkerClick = useCallback(
    (props, marker, e) => {
      setActiveMarker(marker);
      setMapCenter(marker.position);
      setZoom(16);
    },
    [activeMarker, zoom, mapCenter]
  );

  const onAddMarkerClick = useCallback(() => {
    const newMarkerPosition = { lat: 37.789478, lng: -122.407147 };
    // setStores([...stores, newMarkerPosition]);
  }, [stores]);

  useEffect(() => {
    // setStores([
    //   { lat: 37.785338, lng: -122.406417 },
    // ])
  }, []);

  return (
 
      <div style={{ width: "90%",  }}>
        <div className="mw-full">
          <Map
            google={google}
            zoom={zoom}
            style={mapStyles}
            initialCenter={mapCenter}
            center={stores[0] ? stores[0] : mapCenter}
            // onCenterChanged={}
          >
            {stores?.map((store, index) => (
              <Marker
                key={index}
                position={{
                  lat: store.lat,
                  lng: store.lng,
                }}
                onClick={onMarkerClick}
              />
            ))}
          </Map>
        </div>
      </div>
 
  );
};

export default React.memo(
  GoogleApiWrapper({
    apiKey: "AIzaSyBi5Bq8YbATnUhPpwQdhtENLTQQROVV6N0",
  })(Index)
);
