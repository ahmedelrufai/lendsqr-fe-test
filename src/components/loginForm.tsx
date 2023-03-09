import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as authService from "../services/authService";
import AutImgs from "./autImgs";
import { useAuth } from "../context/AuthContext";

export const LoginForm = () => {
  const navigate = useNavigate();
  const { userState, logged } = useAuth();
  const [user, setUser] = userState;
  const [isLoggedIn, setIsLoggedIn] = logged;

  const { login } = authService;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await login(email, password, navigate, setIsLoggedIn, setUser);
      // handle successful login
    } catch (error) {
      // handle login error
    }
  };

  return (
    <div className="auth__container">
      <AutImgs />
      <form onSubmit={handleSubmit}>
        <div className="text-group">
          <h2>Welcome!</h2>
          <h3>Enter detail to log in.</h3>
        </div>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />

        <input
          type="password"
          id="password"
          value={password}
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <a href="#">FORGOT PASSWORD?</a>
        <button type="submit">Log In</button>
        <Link to="signup">Dont have account?</Link>
      </form>
    </div>
  );
};
