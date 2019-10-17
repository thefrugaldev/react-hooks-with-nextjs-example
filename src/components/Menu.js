import React from "react";
import Link from "next/link";
import SignMeUp from "./SignMeUp";

export const Menu = () => {
  const signUpCallback = email => {
    return console.log(`sign up called with email ${email}`);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark mb-lg-4">
      <div className="container">
        <div className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/whiskeys">
                <a className="nav-link">Whiskeys</a>
              </Link>
            </li>
          </ul>
        </div>
        <SignMeUp signUpCallback={signUpCallback} />
      </div>
    </nav>
  );
};
