import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { NavHashLink as Link } from "react-router-hash-link";
import { Twirl as Hamburger } from "hamburger-react";

import "../style.scss";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 700 && window.innerWidth > 767) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -60;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <BrowserRouter>
      <header
        className={`fixed w-full top-0 z-50 drop-shadow-md flex justify-between items-center px-8 py-2 md:px-12 lg:px-16 mobile-bg ${colorChange ? "bg-white" : "bg-transparent"
          }`}
      >
        <Link to="#top" smooth>
          <img
            src={logo}
            alt="Logo"
            className={`h-10 md:h-12 lg:h-14 mobile-logo ${colorChange ? "" : "invert drop-shadow-lg"
              }`}
          />
        </Link>
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} distance="md" />
          <ul
            className={
              isOpen
                ? "absolute w-full h-max top-16 left-0 z-10 bg-white flex flex-col items-center"
                : "hidden"
            }
          >
            <li className="my-2 mt-4 text-gray-600 active:text-pink-700 text-lg font-bold">
              <Link to="#about" scroll={(el) => scrollWithOffset(el)} smooth>
                About
              </Link>
            </li>
            <li className="my-2 text-gray-600 active:text-pink-700 text-lg font-bold">
              <Link
                to="#portfolio"
                scroll={(el) => scrollWithOffset(el)}
                smooth
              >
                Portfolio
              </Link>
            </li>
            <li className="my-2 text-gray-600 active:text-pink-700 text-lg font-bold">
              <Link to="#contact" smooth>
                Contact Me
              </Link>
            </li>
            <li className="mt-4 mb-8">
              <a
                href="https://drive.google.com/file/d/16guPnlEd9Benvn8EUsigdKCXqAkIXarH/view?usp=sharing"
                className="px-8 py-3 bg-pink-700 active:bg-pink-400 focus:ring focus:ring-pink-500 text-white  rounded-2xl"
              >
                RESUME
              </a>
            </li>
          </ul>
        </div>
        <ul className="hidden md:flex space-x-8 items-center">
          <li
            className={`text-gray-600 relative group xl:text-lg font-bold ${colorChange ? "" : "text-white drop-shadow-lg"
              }`}
          >
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-700 transition-all group-hover:w-full"></span>
            <Link to="#about" end scroll={(el) => scrollWithOffset(el)} smooth>
              About Me
            </Link>
          </li>
          <li
            className={`text-gray-600 relative group xl:text-lg font-bold ${colorChange ? "" : "text-white drop-shadow-lg "
              }`}
          >
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-700 transition-all group-hover:w-full"></span>
            <Link to="#portfolio" scroll={(el) => scrollWithOffset(el)} smooth>
              Portfolio
            </Link>
          </li>
          <li
            className={`text-gray-600 relative group xl:text-lg font-bold ${colorChange ? "" : "text-white drop-shadow-lg "
              }`}
          >
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-700 transition-all group-hover:w-full"></span>
            <Link to="#contact" smooth>
              Contact Me
            </Link>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/16guPnlEd9Benvn8EUsigdKCXqAkIXarH/view?usp=sharing"
              className={`px-5 py-3 lg:px-6 lg-py-3 bg-pink-800 hover:bg-pink-700 focus:ring focus:ring-pink-600 cursor-pointer text-white rounded-2xl ${colorChange ? "" : "drop-shadow-lg"
                }`}
            >
              RESUME
            </a>
          </li>
        </ul>
      </header>
    </BrowserRouter>
  );
}

export default Navbar;
