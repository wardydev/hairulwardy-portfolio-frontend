import React from "react";
import { NavLink, Link } from "react-router-dom";
import { ROUTES } from "../../routes";

const Navbar = ({ isLight = false }) => {
  return (
    <div
      className={`flex items-center justify-between py-6 lg:py-8 px-4 lg:px-32 mx-auto border-b-2 border-gray-700 lg:border-b-0 ${
        isLight && "bg-transparent lg:bg-cyan-900"
      }`}
    >
      <Link
        to="/"
        className="text-white hover:text-gray-400 font-bold text-xl lg:text-base"
      >
        HAIRULWARDI
      </Link>
      <div className="hidden lg:block">
        {ROUTES.map((route, index) => {
          return (
            <span className="relative" key={index}>
              <NavLink
                to={route.url}
                className={({ isActive }) =>
                  isActive
                    ? "menu-nav-active ml-3 text-white hover:text-white font-bold"
                    : "text-gray-400 ml-3 hover:text-white font-bold"
                }
              >
                {route.route}
              </NavLink>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
