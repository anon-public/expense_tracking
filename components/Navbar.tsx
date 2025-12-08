"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React from "react";
import {useState} from "react";

const Navbar = () => {
  const [IsSignedIn, setIsSignedIn] = useState(false);
  const [isMobopen, setisMobopen] = useState(false);
  const toggleMenu = () =>{
    setisMobopen(!isMobopen);
  }

  return (
    <nav className="navbar">
      <a href="/" className="logo">
        <img src="/Expent_logo.png" alt="Logo" />
      </a>
      <h2 className="text 3xl">Expent</h2>

      <ul className="desktop-menu">
        <li><a href="#Home" className="nav-links">Home</a></li>
        <li><a href="#Features" className="nav-links">Features</a></li>
        <li><a href="#Insights" className="nav-links">Insights</a></li>
      </ul>
      <div>
        <SignedOut>
          <a href="/sign-in" className="btn">Sign In</a>
          </SignedOut>
          <button className="mobile-toggle" onClick={toggleMenu}>
      {isMobopen ? 'X' : "☰"}
    </button>
      </div>
    {isMobopen && (
      <div className="mobile-drop-down">
        <a href="#Features" className="mobile-link" onClick={toggleMenu}>Features</a>
        <a href="#Insights" className="mobile-link" onClick={toggleMenu}>Insights</a>
        <a href="#Pricing" className="mobile-link" onClick={toggleMenu}>Pricing</a>
      <div className="mobile-auth">
        <SignedIn>
          <a href="/sign-in" className="mobile-btn" onClick={toggleMenu}>Sign In</a>
          </SignedIn>
      </div>
      </div>
    )}
    </nav>
  );
};
export default Navbar;
