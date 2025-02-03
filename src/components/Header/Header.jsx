import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target)) {
        setMobileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-black shadow-sm">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={logo} 
            alt="Drone Cast Logo"
            className="w-12 h-12 object-contain" 
          />
          <span className="text-md font-semibold text-gray-50">Drone Cast</span> 
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 relative z-50">
          <CustomLink to="/">ACCUEIL</CustomLink>
          <CustomLink to="/Realisation">NOS RÉALISATIONS</CustomLink>

          {/* Dropdown */}
          <div
            className="relative group"
            ref={dropdownRef}
            onMouseEnter={() => setDropdownOpen(true)} 
            onMouseLeave={() => setDropdownOpen(true)}
          >
            <button className="text-sm font-medium text-gray-50 hover:text-redOne flex items-center relative">
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
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-redOne transition-all duration-300 group-hover:w-full" />
            </button>
            {dropdownOpen && <DropdownContent />}
          </div>
          <CustomLink to="/light-show">SPECTACLE DE LUMIÈRE</CustomLink>
          <CustomLink to="/Aboutus">A PROPOS</CustomLink>
          <CustomLink to="/contact">CONTACT</CustomLink>
        </nav>

        {/* Desktop Social Media Icons */}
        <div className="hidden lg:flex space-x-4">
          <a
            href="https://web.facebook.com/dronecastcompany"
            className="text-gray-50 hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f text-xl"></i>
          </a>
          <a
            href="https://www.instagram.com/dronecastcompany"
            className="text-gray-50 hover:text-pink-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a
            href="https://www.tiktok.com/@drone.cast.compan"
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
              <Link className="text-gray-900 text-sm font-medium hover:text-redOne relative group" to="/">HOME</Link>
            </li>
            <li>
              <Link className="text-gray-900 text-sm font-medium hover:text-redOne relative group" to="/Realisation">NOS RÉALISATIONS</Link>
            </li>
            <li>
              {/* Mobile Dropdown */}
              <div ref={mobileDropdownRef}>
                <button
                  className="text-sm font-medium text-gray-900 hover:text-redOne flex items-center relative group"
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
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-redOne transition-all duration-300 group-hover:w-full" />
                </button>
                {mobileDropdownOpen && (
                  <div className="mt-2 bg-white border border-gray-200 shadow-lg rounded-md">
                    <DropdownContent />
                  </div>
                )}
              </div>
            </li>
            <li>
              <Link className="text-gray-900 text-sm font-medium hover:text-redOne relative group" to="/Aboutus">A PROPOS</Link>
            </li>
            <li>
              <Link className="text-gray-900 text-sm font-medium hover:text-redOne relative group" to="/light-show">SPECTACLE DE LUMIÈRE</Link>
            </li>
            <li>
              <Link className="text-gray-900 text-sm font-medium hover:text-redOne relative group" to="/contact">CONTACT</Link>
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
    className="text-sm font-medium text-white hover:text-redOne relative group"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-redOne transition-all duration-300 group-hover:w-full" />
  </Link>
);

const DropdownContent = () => (
  <div className="absolute left-0 bg-white border border-gray-300 shadow-lg rounded-lg z-50 w-[300px] mt-2 overflow-hidden">
    <ul className="space-y-1">
      <li className="group">
        <Link
          to="/Agriculture"
          className="block px-4 py-2 text-sm font-medium text-gray-800 rounded-md transition-colors duration-200 ease-in-out hover:bg-redOne hover:text-white"
        >
          Agriculture de précision
        </Link>
      </li>
      <li className="group">
        <Link
          to="/Topographique"
          className="block px-4 py-2 text-sm font-medium text-gray-800 rounded-md transition-colors duration-200 ease-in-out hover:bg-redOne hover:text-white"
        >
          Levée Topographique par drone
        </Link>
      </li>
      <li className="group">
        <Link
          to="/Cartographie"
          className="block px-4 py-2 text-sm font-medium text-gray-800 rounded-md transition-colors duration-200 ease-in-out hover:bg-redOne hover:text-white"
        >
          Cartographie Aérienne par drone
        </Link>
      </li>
      <li className="group">
        <Link
          to="/Surveillance"
          className="block px-4 py-2 text-sm font-medium text-gray-800 rounded-md transition-colors duration-200 ease-in-out hover:bg-redOne hover:text-white"
        >
          Surveillance & Inspection industrielle
        </Link>
      </li>
      <li className="group">
        <Link
          to="/Thermographie"
          className="block px-4 py-2 text-sm font-medium text-gray-800 rounded-md transition-colors duration-200 ease-in-out hover:bg-redOne hover:text-white"
        >
          Thermographie par drone
        </Link>
      </li>
      <li className="group">
        <Link
          to="/Amenagement"
          className="block px-4 py-2 text-sm font-medium text-gray-800 rounded-md transition-colors duration-200 ease-in-out hover:bg-redOne hover:text-white"
        >
          Aménagement du territoire
        </Link>
      </li>
      <li className="group">
        <Link
          to="/Mines"
          className="block px-4 py-2 text-sm font-medium text-gray-800 rounded-md transition-colors duration-200 ease-in-out hover:bg-redOne hover:text-white"
        >
          Mines & Carrières
        </Link>
      </li>
      <li className="group">
        <Link
          to="/Nettoyage"
          className="block px-4 py-2 text-sm font-medium text-gray-800 rounded-md transition-colors duration-200 ease-in-out hover:bg-redOne hover:text-white"
        >
          Démoussage ou Nettoyage par drone
        </Link>
      </li>
    </ul>
  </div>
);

export default Header;