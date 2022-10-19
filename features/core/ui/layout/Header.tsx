type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex p-4 border-solid border-b border-b-white/50 w-full">
      <span className=" italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Client Manager
      </span>
    </header>
  );
};

export default Header;
