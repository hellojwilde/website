import { Link } from "gatsby";
import React from "react";

function Logo() {
  return (
    <h1>
      <Link
        href="/"
        title="Real World Privacy"
        className="text-transparent bg-[url(/logo.svg)] hover:bg-[url(/logo-highlight.svg)] bg-contain bg-no-repeat bg-center w-[235px] h-[33px] block overflow-hidden hover:brightness-75"
      >
        Real World Privacy
      </Link>
    </h1>
  );
}

export default Logo;
