import { useEffect, useState } from "react";
import { Location } from "../types/Location";
import axios from "axios";

const useGetLocation = () => {
  const [ip, setIp] = useState<string | null>(null);
  const [location, setLocation] = useState<Location | null>(null);
  const [asn, setAsn] = useState<number | null>(null);
  const [isp, setIsp] = useState<string | null>(null);

  const url =
    "https://geo.ipify.org/api/v2/country,city?apiKey=at_qORP384ovQPB9koSveBafAo0m4UJS&ipAddress=69.63.176.13";

  const getLocation = async () => {
    try {
      const response = await axios.get(url);
      console.log(response.data);
      setIp(response.data.ip);
      setLocation(response.data.location);
      setAsn(response.data.as.asn);
      setIsp(response.data.isp);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return { ip, location, asn, timezone: location?.timezone || "", isp };
};

export default useGetLocation;
