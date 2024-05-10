import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../contexts/Auth";

const Navigation = () => {
  const { handleLogOut } = useUser();

  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-2 bg-gray-100 text-gray-500 shadow-lg navbar navbar-expand-sm navbar-light">
        <div className="flex-grow items-center">
          <ul className="flex flex-row justify-between w-full pl-0 list-style-none mr-auto">
            <div className="ml-2 flex flex-row sm:flex-row">
              <li className="px-2 hover:text-gray-700 uppercase cursor-pointer relative">
                <Link
                  className="after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#FF9950] after:transition-all after:ease-in-out after:hover:scale-x-100"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="px-2 hover:text-gray-700 uppercase cursor-pointer relative">
                <Link
                  className="after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#FF9950] after:transition-all after:ease-in-out after:hover:scale-x-100"
                  to="/chores"
                >
                  Chores
                </Link>
              </li>
            </div>
            <div className="ml-2 mr-2 flex flex-row sm:flex-row">
              <li className="px-2 hover:text-gray-700 uppercase cursor-pointer relative">
                <Link
                  className="after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#FF9950] after:transition-all after:ease-in-out after:hover:scale-x-100"
                  to="/wishlist"
                >
                  Wishlist
                </Link>
              </li>
              <li className="px-2 hover:text-gray-700 cursor-pointer relative">
                <button
                  className="after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#FF9950] after:transition-all after:ease-in-out after:hover:scale-x-100"
                  onClick={handleLogOut}
                >
                  LOGOUT
                </button>
              </li>
            </div>
          </ul>
        </div>
      </nav>
  );
};

export default Navigation