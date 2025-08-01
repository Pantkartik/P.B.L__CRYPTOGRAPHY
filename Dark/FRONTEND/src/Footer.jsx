import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="main-footer">
      <p>© {new Date().getFullYear()} WhatsApp Clone. All rights reserved.</p>
    </footer>
  );
}
