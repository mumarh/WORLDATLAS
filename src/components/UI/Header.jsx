import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleLinkClick = () => {
    setShowMenu(false); 
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-gray-900 text-yellow-300 z-50 shadow-md">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <NavLink to="/" onClick={handleLinkClick}>
            <h1 className="text-2xl font-extrabold text-yellow-400">WorldAtlas</h1>
          </NavLink>

          <nav className="hidden md:flex space-x-8 font-semibold">
            <NavLink
              to="/"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 border-b-2 border-yellow-400"
                  : "hover:text-yellow-500"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 border-b-2 border-yellow-400"
                  : "hover:text-yellow-500"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/country"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 border-b-2 border-yellow-400"
                  : "hover:text-yellow-500"
              }
            >
              Country
            </NavLink>
            <NavLink
              to="/contact"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 border-b-2 border-yellow-400"
                  : "hover:text-yellow-500"
              }
            >
              Contact
            </NavLink>
          </nav>

          <button
            className="md:hidden text-3xl text-yellow-300 focus:outline-none"
            onClick={() => setShowMenu(!showMenu)}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </header>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-gray-900 flex flex-col items-center justify-center space-y-10 transition-transform duration-300 z-50 ${
          showMenu ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <NavLink
          to="/"
          onClick={handleLinkClick}
          className="text-3xl font-bold text-yellow-300 hover:text-yellow-400"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          onClick={handleLinkClick}
          className="text-3xl font-bold text-yellow-300 hover:text-yellow-400"
        >
          About
        </NavLink>
        <NavLink
          to="/country"
          onClick={handleLinkClick}
          className="text-3xl font-bold text-yellow-300 hover:text-yellow-400"
        >
          Country
        </NavLink>
        <NavLink
          to="/contact"
          onClick={handleLinkClick}
          className="text-3xl font-bold text-yellow-300 hover:text-yellow-400"
        >
          Contact
        </NavLink>
      </div>


      <div className="h-20 md:h-20"></div>
    </>
  );
};
