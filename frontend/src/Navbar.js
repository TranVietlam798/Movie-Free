import "./Navbar.css";
import React, { useEffect, useState } from "react";

function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img src="logo.png" alt="" className="nav__logo" />
      <img
        src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
        alt=""
        className="nav__avatar"
      />
    </div>
  );
}

export default Navbar;
