import { Navigate, RouteProps } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }: RouteProps) => {
  const { isLoggedIn } = useAuth();
  return <>{!isLoggedIn ? <Navigate to="/" replace /> : children}</>;
};

export default PrivateRoute;
