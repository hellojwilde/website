import React from "react";
import { Link } from "gatsby";

function Footer(props) {
  return (
    <footer className="container mx-auto px-6 md:px-12 text-slate-500 text-lg my-12">
      <p>
        Copyright &copy; 2003 - {new Date().getFullYear()} Jonathan Wilde. All
        rights reserved.{" "}
        <Link to="/page/privacy-policy/" className="underline">
          Privacy Policy
        </Link>
        .
      </p>
    </footer>
  );
}

export default Footer;
