import React from "react";

function Callout(props) {
  const { className, children, ...otherProps } = props;

  return (
    <div
      {...otherProps}
      className={`${className || ""} container mx-auto pl-6 pr-4 md:px-4`}
    >
      <aside class="flex flex-col bg-white md:flex-row shadow-[#006bc9_-10px_10px_0_-3px] border-4 border-jwilde-500 p-6 md:space-x-6 items-center">
        {children}
      </aside>
    </div>
  );
}

export default Callout;
