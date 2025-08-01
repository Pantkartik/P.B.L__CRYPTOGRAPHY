import React, { useState, useEffect } from "react";
import "./Modal.css";

export default function LoginModal({ onClose }) {
  const [form, setForm] = useState({ email: "", password: "", remember: false });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const onEsc = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [onClose]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Email and password are required.");
      return;
    }
    setError("");
    onClose();
    alert(`Hello, ${form.email}! (Demo login)`);
  };

  return (
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal-card modal-animate" role="dialog" aria-modal="true" tabIndex={-1}>
        <button className="modal-close" onClick={onClose} aria-label="Close login">&times;</button>
        <div className="modal-logo-area">
          <img src="/whatsapp-logo.png" alt="" style={{width:32, height:32}}/>
          <span className="modal-wa-brand">WhatsApp</span>
        </div>
        <h2 className="modal-title">Login</h2>
        <form className="modal-form" onSubmit={handleSubmit} noValidate autoComplete="off">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            autoFocus
          />
          <label htmlFor="password">Password</label>
          <div className="password-wrap">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              required
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
            />
            <button
              type="button"
              className="show-hide"
              onClick={() => setShowPassword((v) => !v)}
              tabIndex={-1}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >{showPassword ? "Hide" : "Show"}</button>
          </div>
          <label className="remember-label">
            <input
              type="checkbox"
              name="remember"
              checked={form.remember}
              onChange={handleChange}
            />
            Remember me
          </label>
          {error && <div className="error-msg">{error}</div>}
          <button type="submit" className="submit-btn">Login</button>
        </form>
      </div>
    </>
  );
}
