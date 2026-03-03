type HeaderProps = {
  logo: string;
  firstname: string;
  lastname: string;
  usermode: string;
  avatar: string;
};

const Header = ({
  logo,
  firstname,
  lastname,
  usermode,
  avatar,
}: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-20 flex justify-between items-center px-6 py-3">
      {/* logo */}
      <div>
        <img src={logo} alt="Logo" className="h-8" />
      </div>

      {/* user info */}
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="font-semibold">
            {firstname} {lastname}
          </p>
          <p className="text-sm text-gray-500">{usermode}</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-gray-100 border flex items-center justify-center overflow-hidden">
          <img
            src={avatar}
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
