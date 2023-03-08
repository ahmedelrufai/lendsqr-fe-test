import { useState } from "react";
import * as authService from "../services/authService";
import AutImgs from "./autImgs";
import { Link, useNavigate } from "react-router-dom";
export const SignUpForm = () => {
  const Navigate = useNavigate();
  const { signup } = authService;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      if (confirmPassword !== password) return alert("passwords not correct");
      await signup(email, password, Navigate);
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
          <h3>Enter detail to sign up.</h3>
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

        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          placeholder="Confirm Password"
          onChange={(event) => setConfirmPassword(event.target.value)}
        />

        <button type="submit">Sign Up</button>
        <Link to="/">Already have account?</Link>
      </form>
    </div>
  );
};
