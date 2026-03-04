import { Routes, Route } from "react-router-dom";
import MainContent from "../layout/MainContent";
import Dashboard from "../pages/Dashboard";
import Requests from "../pages/Requests";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainContent />}>
        <Route
          index
          element={
            <Dashboard
              title="Dashboard"
              description="Manage your hiring requests and review shortlist outcomes."
            />
          }
        />
        <Route path="requests" element={<Requests />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
