import Input from "./Input";

const Header = () => {
  return (
    <header className="flex flex-col items-center min-h-[20vh] bg-[url('/pattern-bg-desktop.png')] bg-cover bg-no-repeat z-0">
      <h1 className="mt-6 text-4xl font-bold text-white">IP Address Tracker</h1>
      <Input />
    </header>
  );
};

export default Header;
