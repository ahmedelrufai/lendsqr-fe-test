import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as authService from "../services/authService";
import AutImgs from "./autImgs";

export const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = authService;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await login(email, password, navigate);
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
