import React, {useState} from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import Scroll from "./Scroll";

const Layout = ({ points }) => {
  const [show, setShow] = useState(false);
  
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  }
  window.addEventListener("scroll", handleScroll);


  return (
    <>
      <Header points={points} />
      <Navigation />
      <Outlet />
      {show ? (
        <Scroll />
      ) : null}
      <Footer />
      <Toaster />
    </>
  );
}

export default Layout