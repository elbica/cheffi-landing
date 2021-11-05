import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CheffiApk from "../images/Cheffi.apk";

function Header() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white blur shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-16">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/#" className="block" aria-label="Cruip">
              <img
                className="mx-auto"
                src={require("../images/logo.png").default}
                width="50"
                height="50"
                alt="Hero"
              />
            </Link>
          </div>
          <p className="text-xl text-gray-900 ">Cheffi</p>
          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <a
                  href={CheffiApk}
                  download="Cheffi.apk"
                  className="btn-sm text-gray-200 bg-gray-700 hover:bg-gray-600 ml-3"
                >
                  <span>Download APK</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
