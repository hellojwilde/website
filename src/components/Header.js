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
            to="/page/services/"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            className="hover:underline text-slate-600 py-2.5 hover:text-slate-700 active-text-slate-800 transition-colors"
            to="/blog/"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className="hover:underline text-slate-600 py-2.5 hover:text-slate-700 active-text-slate-800 transition-colors"
            to="/page/about/"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="text-xl text-white rounded-lg py-2.5 md:py-3.5 px-5 font-bold bg-gradient-to-br from-[#0E55BF] to-[#A1177B] text-center hover:brightness-75 active:brightness-50 transition-all"
            to="https://forms.realworldprivacy.com/t/tBWMvUPe8Bus"
          >
            Get in Touch →
          </Link>
        </li>
      </Nav>
    </header>
  );
}

export default Header;
