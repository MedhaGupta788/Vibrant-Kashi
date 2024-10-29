import "./Header.css";
import Navbar from "../Navbar/Navbar";
import Menubar from "../Menubar/Menubar";
import ResponsiveNavbar from "../ResponsiveNavbar/ResponsiveNavbar";

import { useState,useEffect } from "react";

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);


  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div>
      <div
        className={`header1 ${screenWidth > 1000 ? "visible" : "hidden"}`}
      >
        <Navbar />
        <Menubar/>
      </div>
      <div
        className={`component2 ${screenWidth <= 1000 ? "visible" : "hidden"}`}
      >
      <ResponsiveNavbar/>
      </div>
    </div>
  );
};

export default Header;
