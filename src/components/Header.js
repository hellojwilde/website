import { Link } from "gatsby";
import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";

function Header(props) {
  return (
    <header className="py-6 md:py-12 px-6 md:px-12 container mx-auto flex justify-between">
      <Logo />
      <Nav>
        <li>
          <Link
            className="underline text-jwilde-500 py-2.5 hover:text-jwilde-700"
            to="/page/about/"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="rounded-lg border-2 border-jwilde-300 py-2.5 px-4 bg-jwilde-300 text-jwilde-800 hover:border-jwilde-500 hover:text-white hover:bg-jwilde-500"
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
