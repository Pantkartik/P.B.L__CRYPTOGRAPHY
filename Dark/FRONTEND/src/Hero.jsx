import React from "react";
import "./Hero.css";

export default function Hero({ onLogin }) {
  return (
    <div className="hero-bg">
      {/* Left Content */}
      <div className="hero-card">
        <h1 className="hero-title">
          Message<br />privately
        </h1>
        <p className="hero-desc">
          Simple, reliable, private messaging and calling for free*, available all over the world.
        </p>
        <div className="hero-btns">
          <button className="download-btn">Download</button>
          <button className="login-btn" onClick={onLogin}>Log in</button>
        </div>
      </div>

      {/* Overlay Demo Chat Area */}
      <div className="hero-chat-overlays">
        <img src="/morning-chat.png" alt="" className="chat-bubble" draggable="false" />
        <img src="/voice-note.png" alt="" className="voice-note" draggable="false" />
        <img src="/sticker.png" alt="" className="sticker" draggable="false" />
      </div>
    </div>
  );
}
