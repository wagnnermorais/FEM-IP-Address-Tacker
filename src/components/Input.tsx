const Input = () => {
  return (
    <div className="flex my-6 w-2/5 relative">
      <input
        type="text"
        placeholder="Search for any IP address or domain"
        className="w-full py-4 px-6 border rounded-xl outline-none duration-200 relative hover:bg-zinc-100"
      />
      <div className="absolute right-0 top-0 bottom-0 z-10">
        <img
          src="/icon-arrow.svg"
          alt="Arrow Icon"
          className="bg-zinc-950 py-5 px-6  rounded-e-xl cursor-pointer h-full w-auto"
        />
      </div>
    </div>
  );
};

export default Input;
