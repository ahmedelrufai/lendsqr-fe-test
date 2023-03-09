import { Navigate, RouteProps } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }: RouteProps) => {
  const { logged } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = logged;
  return <>{!isLoggedIn ? <Navigate to="/" replace /> : children}</>;
};

export default PrivateRoute;
