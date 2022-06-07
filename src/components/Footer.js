import React from "react";
import { Link } from "gatsby";

function Footer(props) {
  return (
    <footer class="footer">
      <div class="container">
        <p>
          Copyright &copy; 2003 - {new Date().getFullYear()} Jonathan Wilde. All
          rights reserved. <Link to="/pages/privacy/">Privacy Policy</Link>.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
