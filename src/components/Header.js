import { Link } from "gatsby";
import React from "react";

function Header(props) {
  return (
    <header className="py-12 px-6 md:px-12 container mx-auto flex justify-between">
      <h1>
        <Link
          href="/"
          title="Jonathan Wilde"
          className="text-transparent bg-[url(/jwilde.svg)] bg-contain bg-no-repeat bg-center w-[100px] h-[36px] block overflow-hidden hover:brightness-75"
        >
          Jonathan Wilde
        </Link>
      </h1>

      <nav>
        <ul className="flex text-xl space-x-4">
          <li>
            <Link
              className="underline text-jwilde-500 hover:text-jwilde-700"
              to="/"
            >
              Writing
            </Link>
          </li>
          <li>
            <Link
              className="underline text-jwilde-500 hover:text-jwilde-700"
              to="/page/about/"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
