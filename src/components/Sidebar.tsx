type SidebarProps = {
  title: string;
  items: string[];
};

const Sidebar = ({ title, items }: SidebarProps) => {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-gray-200 pt-16 z-10">
      <div className="text-2xl font-bold p-4 border-b">{title}</div>
      <nav className="flex flex-col gap-2 p-4">
        {items.map((item, index) => (
          <a
            key={index}
            href="#"
            className="block p-2 bg-white rounded shadow hover:bg-gray-100"
          >
            {item}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
