import React from 'react';
import img from '../../assets/header.png';
import { Link } from 'react-router-dom';

const ParticleSphere = () => {
  return (
    <header id="home" className="bg-black flex items-center mt-16 md:mt-0" style={{ height: 'calc(100vh - 3rem)' }}>
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-medium text-white">
          EXPÉRIENCE AÉRIENNE<br />
            <span className="text-2xl">Des drones, précision et performance</span>
          </h1>
          <p className="mt-4 text-white">
          Solutions professionnelles par drone pour tous les secteurs
          Que ce soit pour l’agriculture, l’industrie, l’audiovisuel ou la surveillance, nos drones offrent des solutions précises et efficaces adaptées à vos besoins.
          </p>
          {/* Flex container to align button with text */}
          <div className="flex items-center mt-5">
            <button className="bg-redOne relative px-6 py-3 rounded-full group focus:outline-none focus:ring-4 transition-all">
              <span className="text-white pr-5">
                <Link to='/contact'>Contact-nous</Link>
              </span>
              <span
                className="absolute text-white inset-y-0 right-4 flex items-center transition-transform duration-300 translate-x-0 group-hover:translate-x-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div className="animate-float">
          <img src={img} alt="header" className="w-full" />
        </div>
      </div>
    </header>
  );
};

export default ParticleSphere;
