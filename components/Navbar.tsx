"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="logo">
        <img src="/Expent_logo.png" alt="Logo" />
      </a>
      <h2 className="text 3xl">Expent</h2>

      <ul className="nav-links">
        <li><a href="#Home">Home</a></li>
        <li><a href="#Features">Features</a></li>
        <li><a href="#Insights">Insights</a></li>
      </ul>
      <div>
        <SignedOut>
          <a href="/sign-in" className="btn">Sign In</a>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};
export default Navbar;
