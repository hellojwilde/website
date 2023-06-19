import React from "react";

function Callout(props) {
  const { className, innerClassName, children, ...otherProps } = props;

  return (
    <div
      {...otherProps}
      className={`${className || ""} container mx-auto pl-6 pr-4 md:px-4 `}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-purple-400 transform translate-y-2 -translate-x-2"></div>
        <aside
          className={`${
            innerClassName || ""
          } border-4 border-slate-600 bg-white relative z-10`}
        >
          {children}
        </aside>
      </div>
    </div>
  );
}

export default Callout;
