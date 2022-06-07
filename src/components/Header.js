import { Link } from "gatsby";
import React from "react";

function Header(props) {
  return (
    <header class="header">
      <div class="container">
        <h1 class="header-logo">
          <Link href="/" title="Jonathan Wilde" class="header-logo-link">
            Jonathan Wilde
          </Link>
        </h1>

        <nav class="header-nav">
          <ul class="header-nav-list">
            <li class="header-nav-list-item">
              <Link to="/">Writing</Link>
            </li>
            <li class="header-nav-list-item">
              <Link to="/about.html">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
