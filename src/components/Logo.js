import { Link } from "gatsby";
import React from "react";

function Logo() {
  return (
    <h1>
      <Link
        href="/"
        title="Real World Privacy"
        className="text-transparent bg-[url(/logo-highlight.svg)] w-[235px] h-[33px] block overflow-hidden hover:brightness-75 active:brightness-50 transition-all"
      >
        Real World Privacy
      </Link>
    </h1>
  );
}

export default Logo;
