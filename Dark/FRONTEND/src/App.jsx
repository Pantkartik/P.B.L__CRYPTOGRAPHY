import React, { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import LoginModal from "./LoginModal";
import "./App.css";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  const openLogin = () => setShowModal(true);
  const closeLogin = () => setShowModal(false);

  return (
    <>
      <Header onLogin={openLogin} />
      <Hero onLogin={openLogin} />
      <Footer />
      {showModal && <LoginModal onClose={closeLogin} />}
    </>
  );
}
