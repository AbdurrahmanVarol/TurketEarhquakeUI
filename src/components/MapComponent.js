import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import { Icon } from "leaflet";


function MapComponent() {
  const location = useLocation(); 
  const [markers,setMarkers] = useState([])
  const [latitude,setLatitude] = useState(location.state?location.state.latitude:undefined)
  const [longitude,setLongitude] = useState(location.state?location.state.longitude:undefined)  
  
 const icon = new Icon({
  iconSize:[32,32],    
  iconUrl:require("../icons/location-pin.png")
})
  const getIconByMagnitude = (magnitude)=>{
    let iconPath = ""
    let convartedMagnitude = Number(magnitude)
    if(convartedMagnitude<3)
      iconPath = "safe"
    else if(convartedMagnitude>=3 && convartedMagnitude<=4)
      iconPath = "warning"
      else
      iconPath = "danger"
    let icon = new Icon({
      iconSize:[32,32],    
      iconUrl:require(`../icons/location-pin-${iconPath}.png`)
    })
    return icon
  }
  const loadMarkers = () =>{
    console.log("latitude: " + latitude)
    console.log(location)
    if(latitude){
      let markers = [{latitude,longitude}]
      setMarkers(markers)
    }
    else{
      setMarkers([])
      fetch(`https://localhost:44374/api/Earthquakes?SiteType=1`)
        .then((response) => response.json())
        .then((data) => {
          data.map(d=>{
            setMarkers((prev) =>[...prev,{latitude:d.latitude,longitude:d.longitude,magnitude:d.magnitude}])
        })          
        });        
    }

  }
  useEffect(()=>{
    loadMarkers()
    setLatitude(location.state?location.state.latitude:undefined)
    setLongitude(location.state?location.state.longitude:undefined)
  },
  [location])
  
  return (
    <div>
      <MapContainer style={{height:"75vh"}}
        center={latitude ? [latitude,longitude] : [39.0024, 36.1735]}
        zoom={latitude ? 10 : 6}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker,index) => (
          <Marker key={index} position={[marker.latitude,marker.longitude]} icon={getIconByMagnitude(marker.magnitude)}>
            <Popup>
            Magnitude: {` ${marker.magnitude}`}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapComponent;
