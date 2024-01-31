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
    <div>
      <MapContainer center={position} zoom={13} className="min-h-70">
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
