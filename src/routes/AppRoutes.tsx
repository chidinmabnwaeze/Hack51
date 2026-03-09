import { Routes, Route } from "react-router-dom";
import MainContent from "../layout/MainContent";
import Dashboard from "../pages/Dashboard";
import Requests from "../pages/Requests";
import Shortlist from "../pages/Shortlist";
import Challenge from "../pages/Challenge";
import NewRequest from "../pages/NewRequest";

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
        <Route path="shortlists" element={<Shortlist />} />
        <Route path="billing" element={<div>Billing</div>} />
        <Route path="challenge" element={<Challenge />} />
        <Route path="new-request" element={<NewRequest />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
