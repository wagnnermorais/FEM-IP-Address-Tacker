import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import useGetLocation from "../hooks/useGetLocation";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const { location } = useGetLocation();

  if (!location) {
    return <p>Loading...</p>;
  }

  const position: LatLngTuple = [location.lat, location.lng];

  return (
    <div className="relative z-0 min-h-70">
      <MapContainer center={position} zoom={20} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} />
      </MapContainer>
    </div>
  );
};

export default Map;
