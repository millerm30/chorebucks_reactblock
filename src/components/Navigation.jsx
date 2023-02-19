import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Squash as Hamburger } from 'hamburger-react';
import { useUser } from "../contexts/Auth";

const Navigation = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  const { handleLogOut } = useUser();

  const style = {
    navigationBar: `navbarContent relative w-full flex flex-wrap items-center justify-between py-2 bg-gray-100 text-gray-500 shadow-lg navbar navbar-expand-sm navbar-light`,
    dividerOne: `container-fluid w-full flex flex-wrap items-center justify-start hamburger ml-2`,
    hamburgerButton: `navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline pr-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline`,
    dividerTwo: `collapse navbar-collapse flex-grow items-center`,
    unorderedList: `navbar-nav flex flex-col justify-between w-full pl-0 list-style-none mr-auto`,
    dividerThree: `leftNavi ml-2 flex flex-col sm:flex-row`,
    listItem: `nav-item px-2 hover:text-gray-700 uppercase cursor-pointer`,
    dividerFour: `rightNavi ml-2 mr-2 flex flex-col sm:flex-row`,
  };

  return (
    <nav className="navbarContainer">
      <nav className={style.navigationBar}>
        <div className={style.dividerOne}>
          <button
            onClick={handleNav}
            className={style.hamburgerButton}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          > 
            <Hamburger size={30} rounded duration={0.3} easing="ease-in" toggled={nav} toggle={setNav} /> 
          </button>
        </div>
        <div className={style.dividerTwo} id="navbarSupportedContent">
          <ul className={style.unorderedList}>
            <div className={style.dividerThree}>
              <li className={style.listItem}>
                <Link to="/">Home</Link>
              </li>
              <li className={style.listItem}>
                <Link to="/chores">Chores</Link>
              </li>
            </div>
            <div className={style.dividerFour}>
              <li className={style.listItem}>
                <Link to="/wishlist">Wishlist</Link>
              </li>
              <li className={style.listItem}>
                <p onClick={handleLogOut}>Logout</p>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </nav>
  );
}

export default Navigation