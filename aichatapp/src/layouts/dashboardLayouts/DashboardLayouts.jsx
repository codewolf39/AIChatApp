import { Outlet, useNavigate } from "react-router-dom";
import "./dashboardLayouts.css";
import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";

const DashboardLayouts = () => {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded, userId, navigate]);

  if (!isLoaded) return "Loading...";

  return (
    <div className="dashboardlayouts">
      <div className="menu">Menu</div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayouts;
