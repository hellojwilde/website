import { Link } from "gatsby";
import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";

function Header(props) {
  return (
    <header className="py-8 md:py-12 px-6 container mx-auto flex justify-between">
      <Logo />
      <Nav>
        <li>
          <Link
            className="hover:underline text-slate-600 py-2.5 hover:text-slate-700 active-text-slate-800 transition-colors"
            to="/page/about/"
          >
            About
          </Link>
        </li>
      </Nav>
    </header>
  );
}

export default Header;
