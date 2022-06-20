import React from "react";
import { Link } from "gatsby";

function Footer(props) {
  return (
    <footer className="container mx-auto px-6 md:px-12 text-slate-500 text-lg py-12 md:flex md:justify-between">
      <p className="text-center md:text-left">
        &copy; 2003 - {new Date().getFullYear()} Jonathan Wilde.
      </p>
      <ul className="flex space-x-4 justify-center md:justify-end">
        <li>
          <Link to="/page/privacy-policy/" className="underline">
            Privacy
          </Link>
        </li>
        <li>
          <Link to="/page/terms-of-service/" className="underline">
            Terms
          </Link>
        </li>
        <li>
          <Link to="/page/disclaimer/" className="underline">
            Disclaimer
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
