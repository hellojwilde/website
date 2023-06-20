import React from "react";

function Callout(props) {
  const { className, innerClassName, children, ...otherProps } = props;

  return (
    <section
      {...otherProps}
      className={`${className || ""} container mx-auto pl-6 pr-4 md:px-4 `}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4B8CEF] to-[#F86FD1] transform translate-y-2 -translate-x-2"></div>
        <aside
          className={`${
            innerClassName || ""
          } border-4 border-slate-600 bg-white relative z-10`}
        >
          {children}
        </aside>
      </div>
    </section>
  );
}

export default Callout;
