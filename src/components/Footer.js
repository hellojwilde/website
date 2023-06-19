import React from "react";
import { Link } from "gatsby";

function Footer(props) {
  return (
    <footer className="container mx-auto px-6 mt-8 md:mt-12">
      <div className="border-t-2 text-sm text-slate-500 py-8 md:py-12 md:flex md:justify-between">
        <p className="text-center md:text-left">
          &copy; 2008 - {new Date().getFullYear()} Real World Privacy LLC
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
      </div>
    </footer>
  );
}

export default Footer;
