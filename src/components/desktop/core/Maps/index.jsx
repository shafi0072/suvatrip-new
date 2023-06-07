import React, { useCallback, useState } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import { useEffect } from "react";



const Index = ({ google, stores, centere, width, height }) => {
  // console.log({centere})
  const [activeMarker, setActiveMarker] = useState({});
  const [mapCenter, setMapCenter] = useState({
    lat:centere.lat,
    lng:centere.lng,
  });
  const mapStyles = {
    width: width,
    height: height,
  };
  const [zoom, setZoom] = useState(13);

  const onMarkerClick = useCallback(
    (props, marker, e) => {
      setActiveMarker(marker);
      setMapCenter(marker.position);
      setZoom(20);
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

    <div style={{ width: "90%", }}>
      <div className="mw-full">
        <Map
          google={google}
          zoom={zoom}
          style={mapStyles}
          initialCenter={mapCenter}
          center={mapCenter}
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
              icon={{
                url: 'https://www.iconarchive.com/download/i57835/icons-land/vista-map-markers/Map-Marker-Marker-Outside-Pink.256.png', // Replace with the path to your custom icon
                scaledSize: new window.google.maps.Size(40, 40), // Replace with the desired size of the icon
                // You can also customize other properties like anchor, origin, and labelOrigin if needed
              }}
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
