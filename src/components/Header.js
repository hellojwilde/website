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
        </ul>
      </nav>
    </header>
  );
}

export default Header;
