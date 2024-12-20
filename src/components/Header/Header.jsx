import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <header className="bg-black shadow-sm">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <span className="text-lg font-semibold text-gray-50">Drone Cast</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 relative z-50">
          <CustomLink to="/">HOME</CustomLink>
          <CustomLink to="/Realisation">NOS RÉALISATIONS</CustomLink>

          {/* Dropdown */}
          <div
            className="relative group"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <button className="text-sm font-medium text-gray-50 hover:text-royalBlue flex items-center relative ">
              NOS SERVICES
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
              {/* Underline Animation */}
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-royalBlue transition-all duration-300 group-hover:w-full "
              />
            </button>
            {dropdownOpen && (
              <DropdownContent />
            )}
          </div>
          <CustomLink to="/light-show">SPECTACLE DE LUMIÈRE</CustomLink>
          <CustomLink to="/Aboutus">A PROPOS</CustomLink>
          <CustomLink to="/contact">CONTACT</CustomLink>
        </nav>

        {/* Desktop Social Media Icons */}
        <div className="hidden lg:flex space-x-4">
          <a
            href="https://facebook.com"
            className="text-gray-50 hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f text-xl"></i>
          </a>
          <a
            href="https://instagram.com"
            className="text-gray-50 hover:text-pink-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a
            href="https://tiktok.com"
            className="text-gray-50 hover:text-red-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-tiktok text-xl"></i>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-gray-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link  className="text-gray-900 text-sm font-medium  hover:text-royalBlue relative group" to="/">HOME</Link>
            </li>
            <li>
            <Link  className="text-gray-900 text-sm font-medium  hover:text-royalBlue relative group" to="/Realisation">NOS RÉALISATIONS</Link>
            </li>
            <li>
              {/* Mobile Dropdown */}
              <div>
                <button
                  className="text-sm font-medium text-gray-900 hover:text-blue-600 flex items-center relative group"
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                >
                  NOS SERVICES
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                  {/* Underline Animation */}
                  <span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-royalBlue transition-all duration-300 group-hover:w-full"
                  />
                </button>
                {mobileDropdownOpen && (
                  <div className="mt-2 bg-white border border-gray-200 shadow-lg rounded-md ">
                    <DropdownContent />
                  </div>
                )}
              </div>
            </li>
            <li>
              <Link  className="text-gray-900 text-sm font-medium  hover:text-royalBlue relative group" to="/Aboutus">A PROPOS</Link>
            </li>
            <li>
              <Link  className="text-gray-900 text-sm font-medium  hover:text-royalBlue relative group" to="/light-show">SPECTACLE DE LUMIÈRE</Link>
            </li>
            <li>
            <Link  className="text-gray-900 text-sm font-medium  hover:text-royalBlue relative group" to="/contact">CONTACT</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

const CustomLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-sm font-medium text-gray-50 hover:text-royalBlue relative group"
  >
    {children}
    <span
      className="absolute bottom-0 left-0 w-0 h-0.5 bg-royalBlue transition-all duration-300 group-hover:w-full"
    />
  </Link>
);

const DropdownContent = () => (
  <div className="absolute  left-0 bg-white border border-gray-200 shadow-lg rounded-lg z-50 w-64">
    <ul>
      <li className="group">
        <Link to="/Agriculture" className="block p-3 rounded-md transition-colors hover:bg-blue-50">
          <h4 className="text-2xs text-gray-800 text-center">
            Agriculture de précision
          </h4>
        </Link>
      </li>
      <li className="group">
        <Link to="/Topographique" className="block p-3 rounded-md transition-colors hover:bg-blue-50">
          <h4 className="text-2xs text-gray-800  text-center">
            Levée Topographique par drone
          </h4>
        </Link>
      </li>
       <li className="group">
        <Link to="/Cartographie" className="block p-3 rounded-md transition-colors hover:bg-blue-50">
          <h4 className="text-2xs text-gray-800  text-center">
            Cartographie Aérienne par drone
          </h4>
        </Link>
      </li>
      <li className="group">
        <Link to="/Surveillance" className="block p-3 rounded-md transition-colors hover:bg-blue-50">
          <h4 className="text-2xs text-gray-800  text-center">
            Surveillance & Inspection industrielle
          </h4>
        </Link>
      </li>
      <li className="group">
        <Link to="/Thermographie" className="block p-3 rounded-md transition-colors hover:bg-blue-50">
          <h4 className="text-2xs text-gray-800  text-center">
            Thermographie par drone
          </h4>
        </Link>
      </li>
      <li className="group">
        <Link to="/Amenagement" className="block p-3 rounded-md transition-colors hover:bg-blue-50">
          <h4 className="text-2xs text-gray-800  text-center">
          Aménagement du territoire
          </h4>
        </Link>
      </li>
      <li className="group">
        <Link to="/Mines" className="block p-3 rounded-md transition-colors hover:bg-blue-50">
          <h4 className="text-2xs text-gray-800 text-center">
            Mines & Carrières
          </h4>
        </Link>
      </li>
      <li className="group">
        <Link to="/Nettoyage" className="block p-3 rounded-md transition-colors hover:bg-blue-50">
          <h4 className="text-2xs text-gray-800 text-center">
            Démoussage ou Nettoyage par drone
          </h4>
        </Link>
      </li>
    </ul>
  </div>
);



export default Header;
