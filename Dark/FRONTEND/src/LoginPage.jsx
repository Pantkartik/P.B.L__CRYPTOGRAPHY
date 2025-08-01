import React, { useState } from "react";
import "./LoginPage.css";

export default function LoginPage({ onSignIn }) {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSignIn) onSignIn(form);
  };

  return (
    <div className="login-bg">
      <div className="login-card">
        <div className="brand-circle">W</div>
        <h2 className="title">
          {mode === "login" ? "Welcome Back" : "Create Account"}
        </h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            value={form.email}
            onChange={handleChange}
          />
          <label>Password</label>
          <div className="password-wrap">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              required
              value={form.password}
              onChange={handleChange}
              autoComplete="current-password"
            />
            <button
              type="button"
              className="show-hide"
              onClick={() => setShowPassword((v) => !v)}
              tabIndex={-1}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <div className="options-row">
            <label className="remember">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot">
              Forgot password?
            </a>
          </div>
          <button className="submit-btn" type="submit">
            {mode === "login" ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <div className="toggle-row">
          {mode === "login"
            ? "Don't have an account?"
            : "Already have an account?"}
          <button
            type="button"
            className="toggle-btn"
            onClick={() =>
              setMode(mode === "login" ? "signup" : "login")
            }
          >
            {mode === "login" ? "Sign Up" : "Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
}
