import React, { useState, cloneElement } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Nav({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const childrenWithProps = React.Children.map(children, (child) =>
    cloneElement(child, {
      onClick: () => setIsOpen(false),
      className: "flex flex-col",
    })
  );

  return (
    <nav>
      <div className="flex justify-between items-center">
        <button className="md:hidden block" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <XMarkIcon className="h-8 w-8" />
          ) : (
            <Bars3Icon className="h-8 w-8" />
          )}
        </button>

        <ul
          className={`absolute z-20 shadow-lg left-0 right-0 top-20 px-6 pb-6 bg-white flex flex-col space-y-1 ${
            isOpen ? "block" : "hidden"
          } md:hidden`}
        >
          {childrenWithProps}
        </ul>

        <ul className="hidden md:flex text-xl space-x-6">{children}</ul>
      </div>
    </nav>
  );
}

export default Nav;
