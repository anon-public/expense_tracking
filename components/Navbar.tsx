"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const Navbar = () =>{
  const { data: session } = useSession();

return(
<nav className="navbar">
    <a href="/" className="logo">
    <img src="/Expent_logo.png" alt = "Logo"/>
    </a>
    <h2 className="text 3xl">Expent</h2>

<ul className="nav-links">
    <li><a href ="#Home">Home</a></li>
    <li><a href ="#Features">Features</a></li>
    <li><a href ="#Feedback">Feedback</a></li>
</ul>
 <div>
        {!session ? (
          <button
            className="btn"
            onClick={() => signIn("github")}
          >
            Sign In
          </button>
        ) : (
          <button
            className="btn"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        )}
      </div>
</nav>
);};
export default Navbar;
