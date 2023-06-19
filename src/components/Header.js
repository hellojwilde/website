import { Link } from "gatsby";
import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";

function Header(props) {
  return (
    <header className="py-6 md:py-12 px-6 container mx-auto flex justify-between">
      <Logo />
      <Nav>
        <li>
          <Link
            className="text-xl underline text-slate-600 py-2.5 hover:text-slate-700 active-text-slate-800 transition-colors"
            to="/page/about/"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="text-xl text-slate-800 rounded-lg py-2.5 md:py-3.5 px-5 font-bold bg-gradient-to-br from-sky-400 to-violet-400 text-center hover:brightness-75 active:brightness-50 transition-all"
            to="/subscribe/"
          >
            Subscribe
          </Link>
        </li>
      </Nav>
    </header>
  );
}

export default Header;
