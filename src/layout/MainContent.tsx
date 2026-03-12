import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import logo from "../assets/logo/image 42.png";

const MainContent = () => {
  return (
    <div className="min-h-screen flex">
      {/* left sidebar */}
      <Sidebar
        title=""
        items={
          [
            { name: "Dashboard", icon: "/icons/dashboard.svg", path: "/" },
            { name: "Requests", icon: "/icons/requests.svg", path: "/requests" },
            { name: "Shortlists", icon: "/icons/shortlists.svg", path: "/shortlists" },
            { name: "Billing", icon: "/icons/billing.svg", path: "/billing" },
            // { name: "Challenge", icon: "/icons/settings.svg", path: "/challenge" }
          ]}

      />

      {/* main area including header and page content */}
      <div className="flex-1">
        <Header
          logo={logo}
          firstname="John"
          lastname="Doe"
          usermode="Admin"
          avatar="/avatar.png"
        />
        <main className="ml-64 mt-24 p-6 bg-gray-50 min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainContent;
