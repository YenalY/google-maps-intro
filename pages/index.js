import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Link from "next/link";

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

/*const beaches = [
  ["Bondi Beach", 25, 55, 4],
  ["Coogee Beach", 24.5, 55.1, 5],
  ["Cronulla Beach", 24.8, 55, 3],
  ["Manly Beach", 24.9, 55.2, 2],
  ["Maroubra Beach", 42.6, 55, 1],
];*/

function Map() {
  const center = useMemo(() => ({ lat: 25.2048, lng: 55.2708 }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} onClick={handleClick}/>
      <Marker 
      position={{ lat: 25.1, lng: 55.15  }} onClick={handleClick} >
      </Marker>  
    </GoogleMap>
  );
}


function handleClick(event) {
  event.preventDefault;
  const newWindow = window.open('https://yenaly.github.io/panorama/', '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
}



// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.

/*function setMarkers(map) {

  for (let i = 0; i < beaches.length; i++) {
    const beach = beaches[i];

    new google.maps.Marker({
      position: { lat: beach[1], lng: beach[2] },
      map,
      title: beach[0],
      zIndex: beach[3],
    });
  }
} */
