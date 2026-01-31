import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // 1. Show loading spinner while firebase checks auth state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    );
  }

  // 2. If user is logged in, allow them to access the route
  if (user) {
    return children;
  }

  // 3. If not logged in, redirect to Login
  // We pass 'state={location.pathname}' so we know where they came from
  return <Navigate state={location.pathname} to="/login" replace></Navigate>;
};

export default PrivateRoute;