import { Routes, Route } from "react-router-dom";
import MainContent from "../layout/MainContent";
import Dashboard from "../pages/Dashboard";

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
      </Route>
    </Routes>
  );
};

export default AppRoutes;
