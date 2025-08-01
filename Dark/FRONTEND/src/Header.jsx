import React from "react";
import "./Header.css";

export default function Header({ onLogin }) {
  return (
    <header className="main-header">
      <div className="logo-area">
        <img src="/whatsapp-logo.png" alt="WhatsApp logo" className="wa-logo" />
        <span className="wa-brand">WhatsApp</span>
      </div>
      <nav className="nav-links">
        <a href="#">Features</a>
        <a href="#">Privacy</a>
        <a href="#">Help Center</a>
        <a href="#">Blog</a>
        <a href="#">For Business</a>
        <a href="#">Apps</a>
        <button className="login-btn" onClick={onLogin}>Log in</button>
        <button className="download-btn">Download</button>
      </nav>
    </header>
  );
}
