import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const MainContent = () => {
  return (
    <div className="min-h-screen flex">
      {/* left sidebar */}
      <Sidebar
        title="Dashboard"
        items={["Home", "Profile", "Settings", "Logout"]}
      />

      {/* main area including header and page content */}
      <div className="flex-1">
        <Header
          logo="/logo.png"
          firstname="John"
          lastname="Doe"
          usermode="Admin"
          avatar="/avatar.png"
        />
        <main className="ml-64 mt-16 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainContent;
