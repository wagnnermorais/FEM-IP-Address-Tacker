import useGetLocation from "../hooks/useGetLocation";

const Dialog = () => {
  const { ip, location, asn, isp } = useGetLocation();

  return (
    <div className="absolute top-[26%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid grid-cols-4 w-3/4 mx-auto py-12 bg-white rounded-xl shadow-md">
      <div className="border-r-2 p-4">
        <p className="mb-2 text-xs text-dark-gray font-semibold tracking-widest uppercase">
          Ip Address
        </p>
        <p className="text-2xl font-bold w-4/5">{ip}</p>
      </div>
      <div className="border-r-2 p-4">
        <p className="mb-2 text-xs text-dark-gray font-semibold tracking-widest uppercase">
          Location
        </p>
        <p className="text-2xl font-bold w-4/5">
          {location && `${location.region}, ${location.country} ${asn}`}
        </p>
      </div>
      <div className="border-r-2 p-4">
        <p className="mb-2 text-xs text-dark-gray font-semibold tracking-widest uppercase">
          Timezone
        </p>
        <p className="text-2xl font-bold w-4/5">
          {location && location.timezone}
        </p>
      </div>
      <div className="p-4">
        <p className="mb-2 text-xs text-dark-gray font-semibold tracking-widest uppercase">
          Isp
        </p>
        <p className="text-2xl font-bold w-4/5">{isp}</p>
      </div>
    </div>
  );
};

export default Dialog;
