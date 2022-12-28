import React from "react";

const Header = ({ title }) => {
  return (
    <div className="mb-10 mx-auto h-80 bg-cyan-900 lg:flex items-center justify-center hidden">
      <h1 className="text-4xl">{title}</h1>
    </div>
  );
};

export default Header;
