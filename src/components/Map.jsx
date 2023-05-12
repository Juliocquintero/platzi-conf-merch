import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "../styles/components/Map.css";
import useMapLocation from "../hooks/useMapLocation";

const MapLeaflet = ({ address }) => {
  const { location } = useMapLocation(address.address_line_1);

  return (
    <div className="leaflet-container">
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
        crossOrigin=""
      />
      {location && (
        <MapContainer center={location} zoom={16} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={location}>
            <i className="fa-solid fa-location-dot"></i>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};
export default MapLeaflet;
