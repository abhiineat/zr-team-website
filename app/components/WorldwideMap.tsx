"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { redIcon } from "@/lib/leafletIcons";


const locations = [
    {
        name: "ZR Tean Hope Mills",
        lat: 34.995928,
        lng: -78.966436,
      },
      {
        name: "King Slayer BJJ LLC",
        lat: 35.413868,
        lng: -78.806689,
      },
];

export default function WorldwideMap() {
  return (
    <div style={{ height: "420px", width: "100%", borderRadius: "12px", overflow: "hidden" }}>
      <MapContainer
        center={[35.4, -78.7]} // midpoint between locations
        zoom={7}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locations.map((loc, index) => (
          <Marker
          key={`${loc.lat}-${loc.lng}`}
          position={[loc.lat, loc.lng]}
          icon={redIcon}
        >
          <Popup>{loc.name}</Popup>
        </Marker>
        
        ))}
      </MapContainer>
    </div>
  );
}
