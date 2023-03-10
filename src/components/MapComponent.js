import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import { Icon } from "leaflet";


function MapComponent() {
  const location = useLocation();
  const { latitude, longitude } = location.state;
  const position = [latitude,longitude];
  const icon = new Icon({
    iconSize:[32,32],
    iconUrl:"https://cdn-icons-png.flaticon.com/512/2776/2776067.png"
  })
  
  return (
    <div>
      <MapContainer center={position} zoom={10} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={icon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapComponent;
