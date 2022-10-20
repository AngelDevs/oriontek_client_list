type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex p-4 border-solid border-b border-b-white/50 w-full">
      <span className="text-xl text-gradient-primary italic font-bold">
        Client Manager
      </span>
    </header>
  );
};

export default Header;
