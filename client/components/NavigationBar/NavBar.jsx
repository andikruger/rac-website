import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { ToastContainer } from "react-toastify";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [shaddow, setShaddow] = useState("none");
  const [classes, setClasses] = useState(
    "fixed left-0 top-0 w-full z-20 ease-in duration-300 glass-nav"
  );

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setClasses(
          "fixed left-0 top-0 w-full z-20 ease-in duration-300 glass-nav"
        );
        setColor("transparent");
        setTextColor("#ffffff");
        setShaddow("0px 4px 4px rgba(0, 0, 0, 0.25)");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
        setShaddow("none");
      }
      if (window.scrollY >= 400) {
        setTextColor("#67162c");
      }
      if (window.scrollY < 90) {
        setClasses(
          "fixed left-0 top-0 w-full z-20 ease-in duration-300 glass-nav "
        );
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{
        backgroundColor: `${color}`,
        boxShadow: `${shaddow}`,
      }}
      className={classes}
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link className="branding-hover" href="/">
          <h1
            style={{ color: `${textColor}` }}
            className="font-bold text-4xl duration-300"
          >
            RAC
          </h1>
        </Link>
        <ToastContainer />
        <ul
          style={{ color: `${textColor}` }}
          className="hidden sm:flex duration-300"
        >
          <li className="p-4">
            <Link className="hover" href="/">
              Home
            </Link>
          </li>
          <li className="p-4">
            <Link className="hover" href="/about">
              About us
            </Link>
          </li>
          <li className="p-4">
            <Link className="hover" href="/#portfolio">
              Club Activities
            </Link>
          </li>
          <li className="p-4">
            <Link className="hover" href="/#portfolio">
              Membership
            </Link>
          </li>
          <li className="p-4">
            <Link className="hover" href="/#portfolio">
              Races
            </Link>
          </li>
          <li className="p-4">
            <Link className="hover" href="/contact">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `#67162c` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen  text-center ease-in duration-300 bg-white/90 backdrop-filter backdrop-blur-xl"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300  "
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500 rac-colour"
            >
              <Link className="hover" href="/">
                Home
              </Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500 rac-colour"
            >
              <Link className="hover" href="/#gallery">
                About us
              </Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500 rac-colour"
            >
              <Link className="hover" href="/#portfolio">
                Club Activities
              </Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500 rac-colour"
            >
              <Link className="hover" href="/#portfolio">
                Membership
              </Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500 rac-colour"
            >
              <Link className="hover" href="/#portfolio">
                Races
              </Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500 rac-colour"
            >
              <Link className="hover" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
