type SidebarProps = {
  title: string;
  items: { name: string; icon: string; path: string }[];
};

const Sidebar = ({ title, items }: SidebarProps) => {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 pt-16 z-10">
      <div className="text-2xl font-bold p-4 ">{title}</div>
      <nav className="flex flex-col gap-2 p-4">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.path}
            className="block p-2 bg-white font-semibold rounded-lg hover:bg-gray-100 active:bg-[#FF0046] text-gray-800 hover:text-gray-900"
          >
            {item.icon && (<img src={item.icon} alt={`${item.name} icon`} className="inline-block w-5 h-5 mr-2" />)}
            {item.name}
          </a>
        ))}
      </nav>

{/* logout */}
      <div className="absolute bottom-0 left-0 w-full p-4">
        <a href="/logout" className="block p-2 text-red-500 text-bold bg-white hover:bg-red-600">
        <img src="/icons/logout.svg" alt="Logout icon" className="inline-block w-5 h-5 mr-2" />
          Logout
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
